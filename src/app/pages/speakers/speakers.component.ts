import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'ngrome-speakers',
  template: `
    <section id="intro" class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__intro">
          <header class="site-content__intro__head__inner">
            <h1 class="site-content__intro__title">Speaker</h1>
          </header>
          <div class="site-content__intro__info__inner">
            <p>One track, one day, filled with talks of the <strong>Angular</strong> engineers who build the most <strong>performant</strong> apps and web experiences.</p>
          </div>
        </div>
      </div>
    </section>

    <ngrome-speakers-list class="site-content__section"
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
  // use this boolean if we want to filter the speaker for homepage
  public speakerFilter = false;

  constructor(
    private animateScrollService: NgAnimateScrollService,
    private messagingService: MessagingService
  ) {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
  }

  scrollTo(el: string, duration?: number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
