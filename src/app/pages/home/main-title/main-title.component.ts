import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';
import { IntersectionObserverService } from '../../../shared/services/intersection-observer.service';
import { EventDateType, EVENT_DATE, TICKET, TicketType } from 'src/app/constants';
import { from, fromEvent, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
@Component({
  selector: 'ngrome-main-title',
  template: `
    <section class="site-content__section">
      <div class="site-content__wrap">
        <video *ngIf="isDesktop$ | async" playsinline autoplay [muted]="'muted'" loop id="bgvid">
          <source
            src="https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/assets%2Fngrrome-noaudio-compressed.mp4?alt=media&token=d67794df-b03c-4735-b4e0-42487212619c"
            type="video/mp4"
          />
        </video>

        <div class="site-content__intro">
          <header class="site-content__intro__head">
            <h2 class="site-content__intro__title">
              The largest<br>
              <b>Italian Angular Conference</b><br>
              is taking place at <span class="assistive">NG Rome MMXXI</span>
            </h2>
            <img src="assets/logo/logo-mmxxii-red.svg" />
            <div class="site-content__intro__description">
              <div>
                <span>where</span>
                <strong>{{ eventInfo.where }}</strong>
              </div>
              <div>
                <span>when</span>
                <strong>{{ eventInfo.when }}</strong>
              </div>
              <a
                *ngIf="ticketData.showButton"
                class="button button--green button--fill-green"
                rel="noopener"
                target="_blank"
                title="Get your ticket!"
                [href]="ticketData.url"
                #registerButton
              >
                GET YOUR TICKET!
              </a>
            </div>
            <!-- <span class="site-content__intro__scroller"></span> -->
          </header>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      video {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
      }
    `,
  ],
})
export class MainTitleComponent implements AfterViewInit, OnDestroy {
  @ViewChild('registerButton') registerButton: ElementRef;

  public isDesktop$: Observable<boolean> = fromEvent(window, 'resize').pipe(
    startWith(()=>(null)),
    map(() => window.innerWidth > 768)
  );

  actualPage: string;
  eventInfo: EventDateType;
  ticketData: TicketType;

  constructor(
    private animateScrollService: NgAnimateScrollService,
    private router: Router,
    private intersectionObserverService: IntersectionObserverService
  ) {
    const urlTree = this.router.parseUrl(this.router.url);
    this.eventInfo = EVENT_DATE;
    this.ticketData = TICKET;
    this.actualPage = urlTree.root.children['primary'].segments.map((it) => it.path).join('/');
  }

  ngAfterViewInit() {
    if (this.ticketData.showButton) {
      this.intersectionObserverService.setObservedElement(this.registerButton.nativeElement);
      this.intersectionObserverService.hideElementWhenObservedIsInView();
    }
  }

  ngOnDestroy() {
    if (this.ticketData.showButton) {
      this.intersectionObserverService.disconnectObserver();
    }
  }

  scrollTo(el: string, duration?: number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
