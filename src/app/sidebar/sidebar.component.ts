import { Component, OnInit, HostListener } from '@angular/core';
import { SideBarService } from '../shared/services/sidebar.service';

@Component({
  selector: 'ngrome-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarStatus = "hidden";

  constructor(public sidebarService: SideBarService) { }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.sidebarService.toggleSidebarStatus(true);
  }

  ngOnInit() {
  }

  openCloseSidebar() {
    this.sidebarService.toggleSidebarStatus();
  }

}
