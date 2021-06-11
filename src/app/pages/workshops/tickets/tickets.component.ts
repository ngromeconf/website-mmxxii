import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-workshop-tickets',
  template: `
    <section #tickets class="site-content__section">
      <div class="site-content__wrap">
        <h1 class="site-content__section__title">Buy Ticket</h1>
        <div class="tickets__list">
          <article class="ticket ticket--ready">
            <a href="https://ti.to/ngrome-conf/ngrome-conf-mmxxi-online-9th-july-2021" title="Ticket">
              <h2 class="ticket__title">Workshop - Gerard Sans - Fullstack GraphQL using Angular v12</h2>
              <span class="ticket__price">€ 35,00</span>
              <p class="ticket__info">Regular ticket<br />Sales ends on July 07th</p>
              <span class="button" title="Buy Now">
                <span>Buy Now</span>
                <svg width="11" height="12">
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#0086FF"
                    stroke-width="2"
                    d="M1 1l7.358 5L1 11"
                  />
                </svg>
              </span>
            </a>
          </article>
          <article class="ticket ticket--ready">
            <a href="https://ti.to/ngrome-conf/ngrome-conf-mmxxi-online-9th-july-2021" title="Ticket">
              <h2 class="ticket__title">Workshop - Stepan Suvorov - Angular Performance Tuning</h2>
              <span class="ticket__price">€ 35,00</span>
              <p class="ticket__info">Regular ticket<br />Sales ends on July 06th</p>
              <span class="button" title="Buy Now">
                <span>Buy Now</span>
                <svg width="11" height="12">
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#0086FF"
                    stroke-width="2"
                    d="M1 1l7.358 5L1 11"
                  />
                </svg>
              </span>
            </a>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class TicketsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
