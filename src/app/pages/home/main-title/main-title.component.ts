import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';
import { IntersectionObserverService } from '../../../shared/services/intersection-observer.service';

@Component({
  selector: 'ngrome-main-title',
  template: `
    <section class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__intro">
          <header class="site-content__intro__head">
            <h2 class="site-content__intro__title">
              The largest online
              <b>Italian Angular Conference</b>
              is taking place at <span class="assistive">NG Rome MMXXI</span>
            </h2>
            <img src="assets/logo/logo-mmxxi-red.svg" />
            <div class="site-content__intro__description">
              <div>
                <span>where</span>
                <strong>Online</strong>
              </div>
              <div>
                <span>when</span>
                <strong>July 9th 2021</strong>
              </div>
              <a
                class="button button--green button--fill-green"
                rel="noopener"
                routerLink="/live-streaming"
                target="_blank"
                title="Watch now!"
                #registerButton
                >Watch now!
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
export class MainTitleComponent implements AfterViewInit, OnDestroy {
  @ViewChild('registerButton')
  registerButton: ElementRef;

  actualPage: string;

  constructor(
    private animateScrollService: NgAnimateScrollService,
    private router: Router,
    private intersectionObserverService: IntersectionObserverService
  ) {
    const urlTree = this.router.parseUrl(this.router.url);
    this.actualPage = urlTree.root.children['primary'].segments.map((it) => it.path).join('/');
  }

  ngAfterViewInit() {
    this.intersectionObserverService.setObservedElement(this.registerButton.nativeElement);
    this.intersectionObserverService.hideElementWhenObservedIsInView();
  }

  ngOnDestroy() {
    this.intersectionObserverService.disconnectObserver();
  }

  scrollTo(el: string, duration?: number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
