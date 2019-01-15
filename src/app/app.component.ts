import {AfterViewInit, Component} from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import {SideBarService} from './shared/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
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
  containerStatus = 'hidden';

  constructor(
    public sidebarService: SideBarService
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
