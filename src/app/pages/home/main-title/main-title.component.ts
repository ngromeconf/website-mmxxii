import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';


@Component({
  selector: 'ngrome-main-title',
  template: `
    <section id="intro" class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__intro">
          <header class="site-content__intro__head">
            <h1 class="site-content__intro__title">
              The largest <strong> Italian Angular Conference</strong>
              is taking place at <strong>NG Rome MMXX</strong>
              in <strong>October 24th 2020</strong> &nbsp; Rome, Italy.
            </h1>
            <!-- <div class="site-content__intro__description">
              <a class="button" id="go-to-tickets" (click)="scrollTo('tickets', 300)"
              title="Get Ticket Now">
                <span id="go-to-tickets-text">Get Ticket Now</span>
                <svg width="11" height="12" id="go-to-tickets-svg">
                  <path fill="none" fill-rule="evenodd" stroke="#0086FF"
                  stroke-width="2" d="M1 1l7.358 5L1 11"/>
                </svg>
              </a>
            </div> -->
            <span class="site-content__intro__scroller"></span>
          </header>
          <div class="site-content__intro__info">
            <p>Whether you are a beginner, intermediate, or an expert, this will be the best opportunity
              to learn about the <b>last trends</b> in the Angular world and Web Technologies.

              A full day of news and tips about <b>Angular</b>
              and the possibility to share ideas and meet top <b>Italian and International developers</b>.
            </p>

          </div>
          <!-- <div class="site-content__intro__description">
              <a class="button"
              routerLink="/speakers"
              routerLinkActive="router-link-active"
              title="NGRome Speakers">
                <span id="go-to-tickets-text">Speakers</span>
                <svg width="11" height="12" id="go-to-tickets-svg">
                  <path fill="none" fill-rule="evenodd" stroke="#0086FF"
                  stroke-width="2" d="M1 1l7.358 5L1 11"/>
                </svg>
              </a>
            </div> -->
        </div>
      </div>
    </section>
  `,
  styles: [`
    .site-content__intro__description {
      display: flex;
    }
    .site-content__intro__description a {
      margin-right: 30px;
    }
    .site-content__intro__info b {
      font-weight: bolder;
    }
  `]
})
export class MainTitleComponent {
  actualPage: string;

  constructor(
    private animateScrollService: NgAnimateScrollService,
    private router: Router,
  ) {
    const urlTree = this.router.parseUrl(this.router.url);
    this.actualPage = urlTree.root.children['primary']
      .segments.map(it => it.path)
      .join('/');
  }

  scrollTo(el:string, duration?:number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
