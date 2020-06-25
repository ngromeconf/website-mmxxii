import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngrome-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggleSidebarStatus($event) {
    this.toggleSidebar.emit($event);
  }
}
