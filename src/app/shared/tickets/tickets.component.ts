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
              href="https://ti.to/ngrome-conf/ngrome-conf-mmxxi-online-9th-july-2021/#tito-ticket-header"
              title="Ticket"
            >
              <div class="ticket_card_header">
                <h2 class="ticket_card_title">Online Conference Ticket</h2>
                <span class="ticket_card_price">Free</span>
              </div>
              <p class="ticket_card_info">This ticket gives access to whole online conference on July 9th.</p>
              <button class="ticket_card_button button button--green button--fill-green" title="Get tickets">
                <span>
                  Get tickets!
                  <img class="ticket_card_icon" src="./assets/icons/ticket-icon.svg" />
                </span>
              </button>
            </a>
          </article>
          <article class="ticket_card">
            <a
              href="https://ti.to/ngrome-conf/ngrome-conf-mmxxi-online-9th-july-2021/#schedule"
              title="Ticket"
            >
              <div class="ticket_card_header">
                <h2 class="ticket_card_title">Workshop: Publish Your Angular App with Scale and Security!</h2>
                <span title="Buy Now" class="ticket_card_price">
                  <span>Free</span>
                </span>
              </div>
              <p class="ticket_card_info">
                by <b>John Papa</b> and <b>Craig Shoemaker</b>.<br />
                This ticket gives access to the workshop on July 06 and whole online conference on July 9th.
              </p>
              <button class="ticket_card_button button button--green button--fill-green" title="Get tickets">
                <span>
                  Get tickets
                  <img class="ticket_card_icon" src="./assets/icons/ticket-icon.svg" />
                </span>
              </button>
            </a>
          </article>
          <article class="ticket_card">
            <a href="https://workshops.ng-girls.org/ngRome-2021/" title="Ticket">
              <div class="ticket_card_header">
                <h2 class="ticket_card_title">Workshop: NG-Girls FULL DAY</h2>
                <span title="Buy Now" class="ticket_card_price">
                  <span>Free</span>
                </span>
              </div>
              <p class="ticket_card_info">
                by <b>NG-GIRLS</b>.<br />
                This ticket gives access to the workshop on July 08 and whole online conference on July 9th.
              </p>
              <button class="ticket_card_button button button--green button--fill-green" title="Get tickets">
                <span>
                  Get tickets
                  <img class="ticket_card_icon" src="./assets/icons/ticket-icon.svg" />
                </span>
              </button>
            </a>
          </article>

          <article class="ticket_card">
            <a
              href="https://ti.to/ngrome-conf/ngrome-conf-mmxxi-online-9th-july-2021/#schedule"
              title="Ticket"
            >
              <div class="ticket_card_header">
                <h2 class="ticket_card_title">Workshop: Angular Performance Tuning</h2>
                <span class="ticket_card_price">28,00€</span>
              </div>
              <p class="ticket_card_info">
                by <b>Stepan Suvorov</b><br />This ticket gives access to the workshop on September 15 and
                whole online conference on July 9th.
              </p>
              <button class="ticket_card_button button button--green button--fill-green" title="Get tickets">
                <span title="Buy Now">
                  Buy Now!
                  <img class="ticket_card_icon" src="./assets/icons/ticket-icon.svg" />
                </span>
              </button>
            </a>
          </article>

          <article class="ticket_card">
            <a
              href="https://ti.to/ngrome-conf/ngrome-conf-mmxxi-online-9th-july-2021/#schedule"
              title="Ticket"
            >
              <div class="ticket_card_header">
                <h2 class="ticket_card_title">Workshop: Fullstack GraphQL using Angular v12</h2>
                <span class="ticket_card_price">28,00€</span>
              </div>
              <p class="ticket_card_info">
                By <b>Gerard Sans</b><br />This ticket gives access to the workshop on September 16 and whole
                online conference on July 9th.
              </p>
              <button class="ticket_card_button button button--green button--fill-green" title="Get tickets">
                <span title="Buy Now">
                  Buy Now!
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
