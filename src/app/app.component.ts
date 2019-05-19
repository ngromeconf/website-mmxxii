import { AfterViewInit, Component, ElementRef, NgZone } from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import { SideBarService} from './shared/services/sidebar.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { PWAService } from './shared/services/pwa.service';
import { Expo, Linear, TimelineLite, TweenLite } from "gsap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animateContainer', [
      state('visible', style({ 'opacity': 1})),
      state('hidden', style({ 'opacity': 0})),
      transition('visible => hidden', useAnimation(fadeOut, {
        params: { timing: 0.1, delay: 0.1 }
      })),
      transition('hidden => visible', useAnimation(fadeIn, {
        params: { timing: 5, delay: 2 }
      })),
    ]),
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'ng-rome-MMXIX';
  containerStatus = 'hidden';
  private el;
  private logoAlreadyAnimated = false;
  private _animating: boolean;
  private _tl = new TimelineLite();
  private _active: boolean = false;

  public get isActive(): boolean {
		return this._active;
  }

  constructor(
    public sidebarService: SideBarService,
    private router: Router,
    private elementRef: ElementRef,
    private pwaService: PWAService,
    private ngZone: NgZone
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
            this.showContainer();
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

  ngAfterViewInit() {
    this.showContainer();
  }

  showContainer(){

    console.log('show container');
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




  // resetAnimationLogo(){
  //   let logoElement = this.el.querySelector('#logo-ng-rome');
  //   let logoElementsToAnimate = Array.prototype.slice.call( logoElement.children )
  //   logoElementsToAnimate.forEach( (element,i) => {
  //     //or clear those properties altogether:
  //     TweenMax.set(element, {clearProps:"x"});
  //   });

  // }



}
