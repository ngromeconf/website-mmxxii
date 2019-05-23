import { AfterViewInit, Component, NgZone } from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import { SideBarService} from './shared/services/sidebar.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { PWAService } from './shared/services/pwa.service';
import { Expo, Linear, TimelineLite } from "gsap";

@Component({
  selector: 'app-root',
  template: `
  <ngrome-header></ngrome-header>
    <ngrome-logo (animationToggled)='showContainer($event)'></ngrome-logo>
    <main
      class="site-content"
      role="main"
      [@animateContainer]="containerStatus"
      >
      <router-outlet></router-outlet>
    </main>
    <ngrome-footer></ngrome-footer>
  <div class="site-menu--close--full"></div>
  `,
  animations: [
    trigger('animateContainer', [
      state('visible', style({ 'opacity': 1})),
      state('hidden', style({ 'opacity': 0})),
      transition('visible => hidden', useAnimation(fadeOut, {
        params: { timing: 0.1, delay: 0.1 }
      })),
      transition('hidden => visible', useAnimation(fadeIn, {
        params: { timing: 2, delay: 0.1 }
      })),
    ]),
  ]
})
export class AppComponent {
  title = 'ng-rome-MMXIX';
  containerStatus = 'hidden';
  private logoAlreadyAnimated = false;
  private _active: boolean = false;

  public get isActive(): boolean {
		return this._active;
  }

  constructor(
    public sidebarService: SideBarService,
    private router: Router,
    private pwaService: PWAService,
  ) {
      router.events.subscribe( (event: Event) => {

        if (event instanceof NavigationStart) {
          // Show loading indicator
          console.log('NavigationStart');
          this.hideContainer();
          window.scroll(0,0);
          this.sidebarService.toggleSidebarStatus(true);
        }

        if (event instanceof NavigationEnd) {
          console.log('NavigationEnd');
          if (this.logoAlreadyAnimated === true){
            //this.showContainer();
          }
          this.logoAlreadyAnimated = true;
        }

        if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
        }
    });
  }

  ngOnInit(){
    //check if is available a new version
    this.pwaService.checkUpdateAvailable();
  }

  showContainer(event){

    console.log('show container:', event);
    if (this.containerStatus !== 'visible'){
      setTimeout(() => {
        //console.log('show container');
        this.containerStatus = 'visible';
      });

    }

  }

  hideContainer(){

    console.log('hide container');
    this.containerStatus = 'hidden';

  }

  ngOnDestroy() {
    console.log('destroy app.component');
  }

  openCloseSidebar() {
    this.sidebarService.toggleSidebarStatus();
  }


}
