import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  transition,
  state,
  useAnimation,
  style,
} from '@angular/animations';
import { Title } from '@angular/platform-browser';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { fadeIn, fadeOut } from 'ng-animate';

import { SideBarService } from './shared/services/sidebar.service';
import { PWAService } from './shared/services/pwa.service';

@Component({
  selector: 'app-root',
  template: `
    <ngrome-header></ngrome-header>
    <!-- ngrome-logo (animationToggled)='showContainer()'></ngrome-logo -->
    <main
      class="site-content"
      role="main"
      [@animateContainer]="containerStatus"
    >
      <router-outlet></router-outlet>
    </main>
    <ngrome-footer></ngrome-footer>
    <div class="site-menu--close--full" #siteMenuClose></div>
  `,
  animations: [
    trigger('animateContainer', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition(
        'visible => hidden',
        useAnimation(fadeOut, {
          params: { timing: 0.1, delay: 0.1 },
        })
      ),
      transition(
        'hidden => visible',
        useAnimation(fadeIn, {
          params: { timing: 2, delay: 0.1 },
        })
      ),
    ]),
  ],
})
export class AppComponent {
  title = 'ng-rome-MMXIX';
  containerStatus = 'hidden';
  private logoAlreadyAnimated = false;
  private _active: boolean = false;

  public get isActive(): boolean {
    return this._active;
  }

  @ViewChild('siteMenuClose', { static: true })
  siteMenuClose: ElementRef;

  constructor(
    private sidebarService: SideBarService,
    private router: Router,
    private pwaService: PWAService,
    private titleService: Title
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.hideContainer();
        window.scroll(0, 0);
      }
      if (event instanceof NavigationEnd) {
        if (this.logoAlreadyAnimated === true) {
          this.showContainer();
        }
        this.logoAlreadyAnimated = true;
        //close the sidebar if is open after the navigation is complete
        if (this.sidebarService.getSidebarStatus() === 'visible') {
          this.sidebarService.toggleSidebarStatus(true);
        }
      }
      if (event instanceof NavigationEnd) {
        if (
          router.routerState.root.snapshot &&
          router.routerState.root.snapshot.data &&
          router.routerState.root.snapshot.data.title
        ) {
          titleService.setTitle(router.routerState.root.snapshot.data.title);
        }
      }
    });
  }

  ngOnInit() {
    //check if is available a new version
    this.pwaService.checkUpdateAvailable();
    this.siteMenuClose.nativeElement.addEventListener('click', () => {
      this.sidebarService.toggleSidebarStatus();
    });
    this.showContainer();
  }

  showContainer() {
    if (this.containerStatus !== 'visible') {
      setTimeout(() => {
        this.containerStatus = 'visible';
      });
    }
  }

  hideContainer() {
    this.containerStatus = 'hidden';
  }

  ngOnDestroy() {
    console.log('destroy app.component');
  }

  openCloseSidebar() {
    this.sidebarService.toggleSidebarStatus();
  }
}
