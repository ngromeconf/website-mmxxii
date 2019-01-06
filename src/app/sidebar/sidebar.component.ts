import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarStatus = "hidden";

  constructor() { }

  ngOnInit() {
  }

}
