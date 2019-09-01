import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-workshop-tickets',
  template: `
  <section #tickets class="site-content__section">
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Buy Ticket</h1>
      <div class="tickets__list">
        <article class="ticket ticket--ready">
          <a href="https://www.eventbrite.it/e/ng-rome-mmxix-angular-conference-tickets-54968197358"
            title="Ticket">
            <h2 class="ticket__title">Regular ticket + ngGirls Workshop</h2>
            <span class="ticket__price">€ 32,00</span>
            <p class="ticket__info">
              Only Women tickets<br>Sales ends on Sep 20th
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
            <h2 class="ticket__title">Workshop - Angular Architecture</h2>
            <span class="ticket__price">€ 280,00</span>
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
        <article class="ticket ticket--ready">
          <a href="https://www.eventbrite.it/e/ng-rome-mmxix-angular-conference-tickets-54968197358"
            title="Ticket">
            <h2 class="ticket__title">[Workshop Combo] Angular Architecture + Conference</h2>
            <span class="ticket__price">€ 358,00</span>
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
        </article>
      </div>
    </div>
  </section>
  `,
  styles: []
})
export class TicketsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
