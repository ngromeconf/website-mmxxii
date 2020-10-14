import { Component, OnInit, Renderer2, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { SideBarService } from '../services/sidebar.service';
import { IntersectionObserverService } from '../services/intersection-observer.service';

@Component({
  selector: 'ngrome-header',
  template: ` <header class="site-header" role="banner">
    <div class="site-logo">
      <div class="logo">
        <a routerLink="/"><img src="assets/logo/logo-horizontal.svg" /></a>
      </div>
      <div class="cta">
        <a
          class="button button--green button--fill-green"
          rel="noopener"
          target="_blank"
          href="https://ti.to/ngrome-conf/NGRome-Conf-MMXX-Online"
          title="Go to Tickets Page"
          #getTickets
          >Get tickets
          <img class="ticket-img" src="./assets/icons/ticket-icon.svg" />
        </a>
      </div>
      <div class="site-menu-button">
        <button
          (click)="sidebarService.toggleSidebarStatus()"
          alt="Toggle NGRome Menu"
          class="site-menu--open"
          type="button"
          name="button"
        >
          <img src="assets/icons/site-icons/hamburger.svg" />
        </button>
      </div>
    </div>

    <nav class="site-menu" role="navigation" #sitemenu>
      <ngrome-menu (toggleSidebar)="sidebarService.toggleSidebarStatus()"></ngrome-menu>
    </nav>
  </header>`,
  styles: [
    `
      ngrome-menu {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
      }

      .cta .button .ticket-img {
        margin-left: 5px;
        vertical-align: middle;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('getTickets')
  getTickets: ElementRef;

  constructor(
    private renderer: Renderer2,
    public sidebarService: SideBarService,
    private intersectionObserverService: IntersectionObserverService
  ) {}

  @ViewChild('sitemenu', { static: true })
  sitemenu: ElementRef;

  ngOnInit() {
    this.sidebarService.sidebarStatus$.subscribe((e) => {
      if (e === 'visible') {
        this.openSidebar();
      } else {
        this.closeSidebar();
      }
    });
  }
  ngAfterViewInit() {
    this.intersectionObserverService.setElementToHide(this.getTickets.nativeElement);
  }

  private openSidebar() {
    this.renderer.addClass(document.body, 'site-menu--show');
    this.renderer.addClass(this.sitemenu.nativeElement, 'site-menu--show');
  }

  private closeSidebar() {
    this.renderer.removeClass(document.body, 'site-menu--show');
    this.renderer.removeClass(this.sitemenu.nativeElement, 'site-menu--show');
  }
}
