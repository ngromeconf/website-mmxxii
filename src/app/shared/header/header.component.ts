import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { SideBarService } from '../services/sidebar.service';

@Component({
  selector: 'ngrome-header',
  template: ` <header class="site-header" role="banner">
    <div class="site-logo">
      <div class="logo">
        <img src="assets/logo/logo-horizontal.svg" />
      </div>
      <div class="cta">
        <a
          class="button button--green button--fill-green"
          rel="noopener"
          target="_blank"
          href="https://ti.to/ngrome-conf/mmxx"
          title="Go to Tickets Page"
          >Get tickets
          <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5362 2.75626C10.9485 3.5487 9.85762 3.8427 8.91969 3.40535C7.98021 2.96728 7.50422 1.94268 7.735 0.983813L6.11255 0.22728L0.272911 12.7509L1.85519 13.4887C2.34835 12.4311 3.61668 11.9783 4.6875 12.4776C5.75832 12.9769 6.22678 14.2395 5.73362 15.2972L7.3159 16.035L13.1555 3.51136L11.5362 2.75626ZM7.18465 11.3381L3.95674 9.83297L6.24534 4.92486L9.47325 6.43L7.18465 11.3381Z"
              fill="#F9F9F9"
            />
          </svg>
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
      <ngrome-menu
        (toggleSidebar)="sidebarService.toggleSidebarStatus()"
      ></ngrome-menu>
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
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    public sidebarService: SideBarService
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

  private openSidebar() {
    this.renderer.addClass(document.body, 'site-menu--show');
    this.renderer.addClass(this.sitemenu.nativeElement, 'site-menu--show');
  }

  private closeSidebar() {
    this.renderer.removeClass(document.body, 'site-menu--show');
    this.renderer.removeClass(this.sitemenu.nativeElement, 'site-menu--show');
  }
}
