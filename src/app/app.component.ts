import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import { SideBarService} from './shared/services/sidebar.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { PWAService } from './shared/services/pwa.service';

declare var TweenMax: any;
declare var Linear: any;
declare var TimelineMax: any;
declare var Expo: any;
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

  constructor(
    public sidebarService: SideBarService,
    private router: Router,
    private elementRef: ElementRef,
    private pwaService: PWAService
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
    this.showContainer();
  }

  showContainer(){
    setTimeout(() => {
      console.log('show container');
      this.containerStatus = 'visible';
    }, 1000);
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

  animateLogo(){
    //console.log('animate logo');
    this.el = this.elementRef.nativeElement;
    TweenMax.defaultEase = Linear.easeNone;
    let logoElement = this.el.querySelector('#logo-ng-rome');
    var bounds = logoElement.getBBox();
    var blast = this.el.querySelector('#blast');

    //check the window height
    let centerY = window.innerHeight / 2;
    let centerX = bounds.x + bounds.width /2;
    //console.log('window centerX,Y: ', centerX, centerY);
    //console.log('bounds X,Y: ', bounds);

    //define center of the explosion
    var center = {
      x: centerX,
      y: centerY,
    };

    var stagger = 5;
    var radius = getDistance(center, bounds);

    //TweenMax.set(blast, { attr: { r: radius, cx: center.x, cy: center.y }});
    TweenMax.set(blast, { transformOrigin: "center", scale: 0 });

    var tl = new TimelineMax()
      //.to(blast, stagger, { scale: 1 }, 0);
      .to(blast, stagger, { scale: 0, autoAlpha: 1 }, stagger);

    let logoElementsToAnimate = Array.prototype.slice.call( logoElement.children )
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
      var dist = getDistance(bbox, center);
      var delay = 0.5;

      var scalar = radius / dist;

      //console.log('6-scalar ', scalar);
      var itemRotation = Math.floor(Math.random() * (365 - 90) + 90);
      //console.log('7-rotate this element ', itemRotation);
      var rotation = itemRotation+"_short";

      tl.to(element, 0.5, {
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
        }, 1500);

      }
    });

    //console.log('2-define the animation ');
    TweenMax.to(tl, 8, {
      progress: 10,
      ease: Expo.easeInOut,
      repeat: 0,
    });

    function getDistance(p1, p2) {
      var dx = p2.x - p1.x;
      var dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

  }

  resetAnimationLogo(){
    let logoElement = this.el.querySelector('#logo-ng-rome');
    let logoElementsToAnimate = Array.prototype.slice.call( logoElement.children )
    logoElementsToAnimate.forEach( (element,i) => {
      //or clear those properties altogether:
      TweenMax.set(element, {clearProps:"x"});
    });

  }



}
