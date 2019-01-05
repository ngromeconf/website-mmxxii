import { Component } from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { fadeIn, fadeInRight, fadeOutRight, fadeOut } from 'ng-animate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animateSidebar', [
      state('visible', style({ "opacity": 1})),
      state('hidden', style({ "opacity": 0})),
      transition('visible => hidden', useAnimation(fadeOutRight)),
      transition('hidden => visible', useAnimation(fadeInRight)),
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
      console.log('show sidebar');
      this.sidebarStatus = 'visible';
    }, 100);
    setTimeout(() => {
      console.log('show container');
      this.containerStatus = 'visible';
    }, 800);
  }
}
