import { Component, OnInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ngrome-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  @ViewChild('sitemenu')
  sitemenu: ElementRef;

  ngOnInit() {

  }

  openSidebar(){
    this.renderer.addClass(document.body, 'site-menu--show');
    this.renderer.addClass(this.sitemenu.nativeElement, 'site-menu--show');
  }

  closeSidebar(){
    this.renderer.removeClass(document.body, 'site-menu--show');
    this.renderer.removeClass(this.sitemenu.nativeElement, 'site-menu--show');
  }

}
