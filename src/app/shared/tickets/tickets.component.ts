import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'ngrome-tickets',
  template: `
  <section #tickets class="site-content__section">
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Buy Ticket</h1>
      <div class="tickets__list">
        <article class="ticket ticket--ready">
          <a href="https://ti.to/ngrome-conf/mmxx"
            title="Ticket">
            <h2 class="ticket__title">Conference ticket - Students</h2>
            <span class="ticket__price">€ 34,00</span>
            <p class="ticket__info">
              Only for university, high school students or coding bootcamp. At the entrance of the conference, it is mandatory to show a document that certifies your enrolment status in the current academic year.
            </p>
            <span class="button" title="Buy Now">
              <span>Buy Now</span>
              <svg width="11" height="12">
                <path fill="none" fill-rule="evenodd" stroke="#0086FF" stroke-width="2" d="M1 1l7.358 5L1 11"/>
              </svg>
            </span>
          </a>
        </article>
        <article class="ticket ticket--ready">
          <a href="https://www.eventbrite.it/e/ng-rome-mmxix-angular-conference-tickets-54968197358"
            title="Ticket">
            <h2 class="ticket__title">Conference ticket - Blind Early Bird</h2>
            <span class="ticket__price">€ 68,00</span>
            <p class="ticket__info">
              Up to 30 tickets available
            </p>
            <span class="button" title="Buy Now">
              <span>Buy Now</span>
              <svg width="11" height="12">
                <path fill="none" fill-rule="evenodd" stroke="#0086FF" stroke-width="2" d="M1 1l7.358 5L1 11"/>
              </svg>
            </span>
          </a>
        </article>
        <!-- <article class="ticket ticket--ready">
          <a href="https://www.eventbrite.it/e/ng-rome-mmxix-angular-conference-tickets-54968197358"
            title="Ticket">
            <h2 class="ticket__title">Conference ticket - Regular</h2>
            <span class="ticket__price">€ 114,00</span>
            <p class="ticket__info">
              Sales ends on Sep 26th
            </p>
            <span class="button" title="Buy Now">
              <span>Buy Now</span>
              <svg width="11" height="12">
                <path fill="none" fill-rule="evenodd" stroke="#0086FF" stroke-width="2" d="M1 1l7.358 5L1 11"/>
              </svg>
            </span>
          </a>
        </article> -->
        <article class="ticket ticket--ready">
          <a href="https://www.eventbrite.it/e/ng-rome-mmxix-angular-conference-tickets-54968197358"
            title="Ticket">
            <h2 class="ticket__title">ONLY WOMEN: Regular ticket + ngGirls Workshop</h2>
            <span class="ticket__price">€ 42,00</span>
            <p class="ticket__info">
            Are you a woman interested in learning how to build web applications with Angular? Join the ngGirls Workshop on Oct 16th and get a discounted ticket for NGRome Conference on Oct 17th. UP TO 40 TICKETS AVAILABLE
            </p>
            <span class="button" title="Buy Now">
              <span>Buy Now</span>
              <svg width="11" height="12">
                <path fill="none" fill-rule="evenodd" stroke="#0086FF" stroke-width="2" d="M1 1l7.358 5L1 11"/>
              </svg>
            </span>
          </a>
        </article>
      </div>
    </div>
  </section>
  `
})
export class TicketsComponent implements OnInit {

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
  }
}
