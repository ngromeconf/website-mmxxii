import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-workshop-tickets',
  template: `
    <section #tickets class="site-content__section">
      <div class="site-content__wrap">
        <h1 class="site-content__section__title">Buy Ticket</h1>
        <div class="tickets__list">
          <article class="ticket ticket--ready">
            <a href="https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022" title="Ticket">
              <h2 class="ticket__title">Workshop - Advanced RxJS Workshop</h2>
              <span class="ticket__price">€ 185,00</span>
              <p class="ticket__info">Advanced RxJS Workshop Ticket (by Mike Ryan & Brian Love)<br />Sales ends on 30th november</p>
              <span class="button" title="Buy Now">
                <span>Buy Now!</span>
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
            <a href="https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022" title="Ticket">
              <h2 class="ticket__title">NgRome MMXXII - Early Combo Ticket (Workshop & Conference)</h2>
              <span class="ticket__price">€ 235,00</span>
              <p class="ticket__info">Advanced RxJS Workshop Ticket (by Mike Ryan & Brian Love) + Conference Ticket<br />Sales ends on November 30th </p>
              <span class="button" title="Buy Now">
                <span>Buy Now!</span>
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
            <a href="https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022" title="Ticket">
              <h2 class="ticket__title">NgRome MMXXII - Combo Ticket ngGirls (Only Woman)</h2>
              <span class="ticket__price">€ 35,00</span>
              <p class="ticket__info">ngGirls Workshop Ticket + Conference Ticket<br />. Sales ends on November 30th </p>
              <span class="button" title="Buy Now">
                <span>Buy Now!</span>
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
