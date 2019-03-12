import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import { SideBarService} from './shared/services/sidebar.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SwUpdate } from "@angular/service-worker"
import { MessagingService } from './shared/services/messaging.service';

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
        params: { timing: 2, delay: 2 }
      })),
      transition('hidden => visible', useAnimation(fadeIn, {
        params: { timing: 2, delay: 2 }
      })),
    ]),
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'ng-rome-MMXIX';
  containerStatus = 'hidden';
  private el;
  private logoAlreadyAnimated = false;
  private message;

  constructor(
    private swUpdate: SwUpdate,
    public sidebarService: SideBarService,
    private router: Router,
    private elementRef: ElementRef,
    private messagingService: MessagingService

  ) {
      router.events.subscribe( (event: Event) => {

        if (event instanceof NavigationStart) {
          // Show loading indicator
          console.log('start');
          if (this.logoAlreadyAnimated === true){
            this.resetAnimationLogo();
            this.logoAlreadyAnimated = false;
          }
          //this.animateLogo();
          this.sidebarService.toggleSidebarStatus(true);
        }

        if (event instanceof NavigationEnd) {
          console.log('end');
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

    this.startMessagingService();

    this.checkUpdateAvailable();

  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('show container');
      this.containerStatus = 'visible';
    }, 800);
  }

  openCloseSidebar() {
    this.sidebarService.toggleSidebarStatus();
  }

  animateLogo(){
    console.log('animate logo');
    this.el = this.elementRef.nativeElement;
    TweenMax.defaultEase = Linear.easeNone;
    let logoElement = this.el.querySelector('#logo-ng-rome');
    var bounds = logoElement.getBBox();
    var blast = this.el.querySelector('#blast');

    var center = {
      x: bounds.x + bounds.width /2,
      y: bounds.y + bounds.height,
    };

    var stagger = 5;
    var radius = getDistance(center, bounds);

    //TweenMax.set(blast, { attr: { r: radius, cx: center.x, cy: center.y }});
    TweenMax.set(blast, { transformOrigin: "center", scale: 0 });

    var tl = new TimelineMax()
      //.to(blast, stagger, { scale: 1 }, 0);
      .to(blast, stagger, { scale: 2, autoAlpha: 0 }, stagger);

    let logoElementsToAnimate = Array.prototype.slice.call( logoElement.children )
    console.log('');
    logoElementsToAnimate.forEach( (element,i) => {

      var bbox = element.getBBox();
      var scale = 1;
      var toBlur = false;
      if (i%2==0 && element.className.baseVal === 'toBlur'){
        scale = Math.random() * (3 - 1) +1;
        if (scale > 1.7){
          toBlur = true;
        }
      }

      if (element.className.baseVal === 'long'){
        scale = 0;
      }
      var dist = getDistance(bbox, center);
      var delay = 1;
      var scalar = radius / dist;
      var itemRotation = Math.floor(Math.random() * 2360);
      var rotation = itemRotation+"_short";

      tl.to(element, 2, {
        autoAlpha: 1,
        x: (bbox.x - center.x) * scalar,
        y: (bbox.y - center.y) * scalar,
        directionalRotation:rotation,
        scale: scale
      }, delay);

      if(toBlur){
        //console.log('to blur',element);
        tl.to(element, 2, {
          paused: true,
          attr: {
            "stdDeviation": 10
          }
        });
      }
    });


    TweenMax.to(tl, 8, {
      progress: 2,
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

  startMessagingService(){
    const userId = 'user001';
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }

  checkUpdateAvailable(){
    if (this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe( () => {
        if (confirm("New version available, Load a new version?")){
          window.location.reload();
        }
      });
    }
  }

}
