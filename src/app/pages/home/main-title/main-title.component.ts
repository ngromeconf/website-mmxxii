import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgAnimateScrollService } from "src/app/shared/services/ng-animate-scroll.service";

@Component({
  selector: "ngrome-main-title",
  template: `
    <section id="intro" class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__intro">
          <header class="site-content__intro__head">
            <h1 class="site-content__intro__title">
              The largest online Italian<br />
              Angular Conference is taking place at
            </h1>
            <img src="assets/logo/logo-mmxx-red.svg" />
            <div class="site-content__intro__description">
              <div>
                <span>where</span>
                <strong>Rome, Italy</strong>
              </div>
              <div>
                <span>when</span>
                <strong>October 24th 2020</strong>
              </div>
              <a
                class="button button--green button--fill-green"
                rel="noopener"
                target="_blank"
                (click)="scrollTo('tickets', 300)"
                title="Get ticket now"
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
            <!-- <span class="site-content__intro__scroller"></span> -->
          </header>
          <!-- <div class="site-content__intro__info">
            <p>
              Whether you are a beginner, intermediate, or an expert, this will
              be the best opportunity to learn about the <b>last trends</b> in
              the Angular world and Web Technologies. A full day of news and
              tips about <b>Angular</b> and the possibility to share ideas and
              meet top <b>Italian and International developers</b>.
            </p>
          </div> -->
          <!-- <div class="site-content__intro__description">
            <a
              class="button"
              routerLink="/speakers"
              routerLinkActive="router-link-active"
              title="NGRome Speakers"
            >
              <span id="go-to-tickets-text">Speakers</span>
              <svg width="11" height="12" id="go-to-tickets-svg">
                <path
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#0086FF"
                  stroke-width="2"
                  d="M1 1l7.358 5L1 11"
                />
              </svg>
            </a>
          </div> -->
        </div>
      </div>
    </section>
  `,
  styles: [``],
})
export class MainTitleComponent {
  actualPage: string;

  constructor(
    private animateScrollService: NgAnimateScrollService,
    private router: Router
  ) {
    const urlTree = this.router.parseUrl(this.router.url);
    this.actualPage = urlTree.root.children["primary"].segments
      .map((it) => it.path)
      .join("/");
  }

  scrollTo(el: string, duration?: number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
