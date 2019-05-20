import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'ngrome-speakers',
  template: `
    <section id="intro" class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__intro">
          <header class="site-content__intro__head">
            <h1 class="site-content__intro__title">Speaker</h1>
            <div class="site-content__intro__description">
              <a class="button"
              href="/home"
              routerLinkActive="router-link-active"
              title="NGRome Home">
                <span id="go-to-tickets-text">Home</span>
                <svg width="11" height="12" id="go-to-tickets-svg">
                  <path fill="none" fill-rule="evenodd" stroke="#0086FF"
                  stroke-width="2" d="M1 1l7.358 5L1 11"/>
                </svg>
              </a>
              <a class="button" id="go-to-tickets" (click)="scrollTo('tickets', 300)" title="Get Ticket Now">
                <span id="go-to-tickets-text">Get Ticket Now</span>
                <svg width="11" height="12" id="go-to-tickets-svg">
                  <path fill="none" fill-rule="evenodd" stroke="#0086FF" stroke-width="2" d="M1 1l7.358 5L1 11"/>
                </svg>
              </a>
            </div>
            <span class="site-content__intro__scroller"></span>
          </header>
          <div class="site-content__intro__info">
            <p>One track, one day, filled with talks of the <strong>Angular</strong> engineers who build the most <strong>performant</strong> apps and web experiences.</p>
          </div>
        </div>
      </div>
    </section>
    <ngrome-speakers-list
    class="site-content__section"
    [speakerFilter]="speakerFilter">
    </ngrome-speakers-list>
    <ngrome-tickets class="site-content__section" id="tickets"></ngrome-tickets>
  `,
  styles: [`
    .site-content__intro__description {
      display: flex;
    }
    .site-content__intro__description a {
      margin-right: 30px;
    }
  `]
})
export class SpeakersComponent {
  //use this boolean if we want to filter the speaker for homepage
  public speakerFilter = false;

  constructor(
    private animateScrollService: NgAnimateScrollService,
    private messagingService: MessagingService
  ) {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
  }

  scrollTo(el:string, duration?:number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
