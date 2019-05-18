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
        params: { timing: 2, delay: 0.5 }
      })),
      transition('hidden => visible', useAnimation(fadeIn, {
        params: { timing: 0.5, delay: 0.1 }
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
    this.animateLogo();
  }

  ngAfterViewInit() {

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

  //define center of the logo explosion
  getCenter(bounds){
    let centerY = window.innerHeight / 2;
    let centerX = bounds.x + bounds.width /2;

    return {x: centerX, y: centerY};
  }


  animateLogo(){
    console.log('animate logo');
    this._animating = true;

    const stagger = 5;

    this.el = this.elementRef.nativeElement;
    TweenLite.defaultEase = Linear.easeNone;
    let logoElement = this.el.querySelector('#logo-ng-rome');
    let bounds = logoElement.getBBox();
    let blast = this.el.querySelector('#blast');
    let center = this.getCenter(bounds);
    //check the window height

    var radius = this.getDistance(center, bounds);

    //TweenMax.set(blast, { attr: { r: radius, cx: center.x, cy: center.y }});
    TweenLite.set(blast, { transformOrigin: "center", scale: 0 });


    //tl.to(blast, stagger, { scale: 1 }, 0);
    this._tl.to(blast, stagger, { scale: 0, autoAlpha: 1 }, stagger);

    let logoElementsToAnimate = Array.prototype.slice.call( logoElement.children );
    //console.log('1-get element to animate ');
    logoElementsToAnimate.forEach( (element,i) => {
      //console.log('3-forEach element ',i);
      var bbox = element.getBBox();
      var scale = 1;
      var toBlur = false;

      //define the element to blur
      if (i%2==0 && element.className.baseVal === 'toBlur'){
        scale = Math.random() * 2 + 1;
        if (scale > 1.7){
          toBlur = true;
          //console.log('4-blur this element ',element);
        }
      }

      //this item should be not visible
      if (element.className.baseVal === 'long'){
        scale = 0;
      }
      var dist = this.getDistance(bbox, center);
      var delay = 0.1;

      var scalar = radius / dist;

      //console.log('6-scalar ', scalar);
      var itemRotation = Math.floor(Math.random() * (365 - 90) + 90);
      //console.log('7-rotate this element ', itemRotation);
      var rotation = itemRotation+"_short";

      this._tl.to(element, 3, {
        autoAlpha: 1,
        x: (bbox.x - center.x) * scalar,
        y: (bbox.y - center.y) * scalar,
        directionalRotation:rotation,
        scale: scale
      }, delay);

      if(toBlur){

        setTimeout(() => {
          //console.log('show container');
          element.classList.add('blur');
        }, 2000);

      }
    });

    let animation = this.isActive ? this.inactivate() : this.activate();
    this._active = !this.isActive;

    //return new TimelineLite().add(animation);
    this.showContainer();

  }

  getDistance(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  activate(){
    console.log('activate');
    return TweenLite.to(this._tl, 5, {
      progress: 10,
      ease: Expo.easeInOut,
      repeat: 0,
    },{ className: "" }, { className: "active" });
  }

  inactivate(){
    console.log('inactivate');
    return TweenLite.to(this._tl, 8, {
      progress: 10,
      ease: Expo.easeInOut,
      repeat: 0,
    },{ className: "active" }, { className: "" });
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
