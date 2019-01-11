import { Component } from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { fadeIn, fadeOut, bounceInRight, bounceOutRight } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animateSidebar', [
      state('visible', style({ "opacity": 1})),
      state('hidden', style({ "opacity": 0})),
      transition('visible => hidden', useAnimation(bounceOutRight)),
      transition('hidden => visible', useAnimation(bounceInRight, {
        // Set the duration to 5seconds and delay to 2seconds
        params: {
          timing: 2,
          a: '5000px',
          b: '100px',
          c: '-50px',
          d: '0px',
        }
      })),
    ]),
    trigger('animateContainer', [
      state('visible', style({ "opacity": 1})),
      state('hidden', style({ "opacity": 0})),
      transition('visible => hidden', useAnimation(fadeOut)),
      transition('hidden => visible', useAnimation(fadeIn)),
    ]),
  ]
})
export class AppComponent {
  title = 'ng-rome-MMXIX';
  sidebarStatus= 'hidden';
  containerStatus= 'hidden';
  ngAfterViewInit(){
    setTimeout(() => {
      console.log('show container');
      this.containerStatus = 'visible';
    }, 800);
  }

  openCloseSidebar(){
    this.sidebarStatus = (this.sidebarStatus === 'hidden') ? 'visible' : 'hidden';
    console.log(this.sidebarStatus);
  }
}
