import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { SideBarService } from './shared/services/sidebar.service';
import { PWAService } from './shared/services/pwa.service';

@Component({
  selector: 'app-root',
  template: `
    <ngrome-header></ngrome-header>
    <!-- ngrome-logo (animationToggled)='showContainer()'></ngrome-logo -->
    <main class="site-content" id="intro" role="main">
      <router-outlet></router-outlet>
    </main>
    <ngrome-footer></ngrome-footer>
    <div class="site-menu--close--full" #siteMenuClose></div>
  `,
})
export class AppComponent implements OnInit {
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
    this.unregister();

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        window.scroll(0, 0);
      }
      if (event instanceof NavigationEnd) {
        this.logoAlreadyAnimated = true;
        // close the sidebar if is open after the navigation is complete
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
    // check if is available a new version
    // this.pwaService.checkUpdateAvailable();
    this.siteMenuClose.nativeElement.addEventListener('click', () => {
      this.sidebarService.toggleSidebarStatus();
    });
  }


  openCloseSidebar() {
    this.sidebarService.toggleSidebarStatus();
  }

  /**
   * unregister method for the old website error
   */
  unregister() {
    // Old browser might not support serviceWorker or serviceWorker.ready
    if (!navigator.serviceWorker || !navigator.serviceWorker.ready) {
      return;
    }
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister().then(() => {
        console.log('you should reboot your browser', registration);
      });
    });
  }
}
