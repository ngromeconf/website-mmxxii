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
            <a
              href="https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022"
              title="Ticket"
            >
              <div class="ticket_card_header">
                <h2 class="ticket_card_title">NgRome MMXXII - STUDENT Ticket</h2>
                <span class="ticket_card_price">35 €</span>
              </div>
              <p class="ticket_card_info">
                We offer a special discounted ticket for students enrolled in university, secondary school, high school, or boot camp within the last year. Proof of enrolment will need to be presented upon admission.
              </p>
              <button class="ticket_card_button button button--green button--fill-green" title="Get tickets">
                <span>
                  Get ticket!
                  <img class="ticket_card_icon" src="./assets/icons/ticket-icon.svg" />
                </span>
              </button>
            </a>
          </article>
          <article class="ticket_card">
            <a
              href="https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022"
              title="Ticket"
            >
              <div class="ticket_card_header">
                <h2 class="ticket_card_title">NgRome MMXXII - Blind Ticket</h2>
                <span title="Buy Now" class="ticket_card_price">
                  <span>50 €</span>
                </span>
              </div>
              <p class="ticket_card_info">
              This ticket give you full access the day of the conference.
              <br><b>Available until the ends of September</b>
              </p>
              <button class="ticket_card_button button button--green button--fill-green" title="Get tickets">
                <span>
                  GET TICKET!
                  <img class="ticket_card_icon" src="./assets/icons/ticket-icon.svg" />
                </span>
              </button>
            </a>
          </article>

          <article class="ticket_card">
            <a
              href="https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022"
              title="Ticket"
            >
              <div class="ticket_card_header">
                <h2 class="ticket_card_title">NgRome MMXXII - Early Bird Ticket</h2>
                <span title="Buy Now" class="ticket_card_price">
                  <span>70€</span>
                </span>
              </div>
              <p class="ticket_card_info">
              This ticket give you full access the day of the conference.
              <br><b>Available starting from October</b>
              </p>
              <button class="ticket_card_button button button--green button--fill-green" title="Get tickets">
                <span>
                GET TICKET!
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
