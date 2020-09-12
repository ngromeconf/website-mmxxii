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
          <a href="https://ti.to/ngrome-conf/NGRome-Conf-MMXX-Online/with/ujp-ev2-cqs"
            title="Ticket">
            <h2 class="ticket__title">Online Conference Ticket</h2>
            <span class="ticket__price">free</span>
            <p class="ticket__info">
                This ticket gives access to whole online conference on October 20th.
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
