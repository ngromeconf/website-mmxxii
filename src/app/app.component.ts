import {AfterViewInit, Component} from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import {SideBarService} from './shared/services/sidebar.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

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
    public sidebarService: SideBarService,
    private router: Router
  ) {
      router.events.subscribe( (event: Event) => {

        if (event instanceof NavigationStart) {
          // Show loading indicator
          console.log('start');
          this.sidebarService.toggleSidebarStatus(true);
        }

        if (event instanceof NavigationEnd) {
          console.log('end');
        }

        if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
        }
    });
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

}
