import {AfterViewInit, Component} from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { fadeIn, fadeOut, bounceInRight, bounceOutRight } from 'ng-animate';
import {SideBarService} from './shared/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animateSidebar', [
      state('visible', style({ 'opacity': 1})),
      state('hidden', style({ 'opacity': 0})),
      transition('visible => hidden', useAnimation(bounceOutRight)),
      transition('hidden => visible', useAnimation(bounceInRight, {
        // Set the duration to 5seconds and delay to 2seconds
        params: {
          timing: 2,
          a: '2000px',
          b: '100px',
          c: '-50px',
          d: '100%',
        }
      })),
    ]),
    trigger('animateContainer', [
      state('visible', style({ 'opacity': 1})),
      state('hidden', style({ 'opacity': 0})),
      transition('visible => hidden', useAnimation(fadeOut)),
      transition('hidden => visible', useAnimation(fadeIn)),
    ]),
  ]
})
export class AppComponent implements AfterViewInit {
  title = 'ng-rome-MMXIX';
  sidebarStatus = 'hidden';
  containerStatus = 'hidden';

  constructor(
    private sidebarService: SideBarService
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('show container');
      this.containerStatus = 'visible';
    }, 800);
  }

  openCloseSidebar() {
    this.sidebarService.toggleSidebarStatus();
  }
}
