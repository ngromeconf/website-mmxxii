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
          <a href="https://www.eventbrite.it/e/ng-rome-mmxix-angular-conference-tickets-54968197358"
            title="Ticket">
            <h2 class="ticket__title">Diversity Tickets</h2>
            <span class="ticket__price">€ 32,00</span>
            <p class="ticket__info">
              <span>20/50 sold</span>
              Student or Women tickets<br>Sales ends on Sep 20th
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
            <h2 class="ticket__title">Regular Tickets</h2>
            <span class="ticket__price">€ 112,00</span>
            <p class="ticket__info">
              <span>45/80 sold</span>
              Sales ends on Jul 31
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
            <h2 class="ticket__title">Late Bird</h2>
            <span class="ticket__price">€ 128,00</span>
            <p class="ticket__info">
              Sales ends on Sep 30th
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
