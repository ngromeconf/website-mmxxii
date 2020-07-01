import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';

@Component({
  selector: 'ngrome-main-title',
  template: `
    <section class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__intro">
          <header class="site-content__intro__head">
            <h1 class="site-content__intro__title">
              The largest online
              <b>Italian Angular Conference</b>
              is taking place at
            </h1>
            <img src="assets/logo/logo-mmxx-red.svg" />
            <div class="site-content__intro__description">
              <div>
                <span>where</span>
                <strong>Rome, Italy</strong>
              </div>
              <div>
                <span>when</span>
                <strong>October 20th 2020</strong>
              </div>
              <a
                class="button button--green button--fill-green"
                rel="noopener"
                target="_blank"
                (click)="scrollTo('cfp', 300)"
                title="Call for paper"
                >Call for paper
              </a>
            </div>
            <!-- <span class="site-content__intro__scroller"></span> -->
          </header>
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
    this.actualPage = urlTree.root.children['primary'].segments
      .map((it) => it.path)
      .join('/');
  }

  scrollTo(el: string, duration?: number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
