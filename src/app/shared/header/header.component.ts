import { Component, OnInit, Renderer2, ViewChild, ElementRef, Input } from '@angular/core';
import { SideBarService } from '../services/sidebar.service';

@Component({
  selector: 'ngrome-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    public sidebarService: SideBarService) { }


  @ViewChild('sitemenu')
  sitemenu: ElementRef;


  ngOnInit() {
    this.sidebarService.sidebarStatus$.subscribe((e) => {
      //console.log('sidebarStatus$: ',e);
      if (e === 'visible'){
        this.openSidebar();
      }
      else {
        this.closeSidebar();
      }
    });
  }

  /**
   *
   *
   * @memberof HeaderComponent
   */
  private openSidebar() {
    this.renderer.addClass(document.body, 'site-menu--show');
    this.renderer.addClass(this.sitemenu.nativeElement, 'site-menu--show');
  }

  /**
   *
   *
   * @memberof HeaderComponent
   */
  private closeSidebar() {
    this.renderer.removeClass(document.body, 'site-menu--show');
    this.renderer.removeClass(this.sitemenu.nativeElement, 'site-menu--show');
  }
}
