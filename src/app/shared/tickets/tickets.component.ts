import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'ngrome-tickets',
  template: `
    <section #tickets class="site-content__section">
      <div class="site-content__wrap">
        <h1 class="tickets_title">TICKETS</h1>
        <div class="ticket_card_list">
          <article class="ticket_card">
            <a href="https://ti.to/ngrome-conf/NGRome-Conf-MMXX-Online/with/ujp-ev2-cqs" title="Ticket">
              <div class="ticket_card_header">
                <h2 class="ticket_card_title">Online Conference Ticket</h2>
                <span class="ticket_card_price">Free</span>
              </div>
              <p class="ticket_card_info">
                This ticket gives access to whole online conference on October 20th.
              </p>
              <button class="ticket_card_button button button--green button--fill-green" title="Get tickets">
                <span>
                  Get tickets
                  <img class="ticket_card_icon" src="./assets/icons/ticket-icon.svg" />
                </span>
              </button>
            </a>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class TicketsComponent implements OnInit {
  constructor(private messagingService: MessagingService) {}

  ngOnInit() {}
}
