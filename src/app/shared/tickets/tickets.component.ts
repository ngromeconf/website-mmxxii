import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'ngrome-tickets',
  template: `
    <section #tickets class="site-content__section">
      <div class="site-content__wrap">
        <h1 class="tickets_title">TICKETS</h1>
        <div class="ticket_card_list">
          <article class="ticket_card" *ngFor="let item of ticketCard">
            <a
              [href]="item.url"
              title="Ticket"
              target="_blank"
            >
              <div class="ticket_card_header">
                <h2 class="ticket_card_title">{{item.title}}</h2>
                <span class="ticket_card_price">{{item.price}}</span>
              </div>
              <p class="ticket_card_info">
                {{item.description}}
                <br><b>{{item.details}}</b>
              </p>
              <button class="ticket_card_button button button--green button--fill-green" title="Get tickets">
                <span>
                  Get ticket!
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

  public ticketCard = [
    {
      title: 'NgRome MMXXII - STUDENT Ticket',
      price: '35€',
      description: 'We offer a special discounted ticket for students enrolled in university, secondary school, high school, or boot camp within the last year. ',
      details: 'Proof of enrolment will need to be presented upon admission.',
      url: 'https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022'
    },
    {
      title: 'NgRome MMXXII - Early Bird Ticket',
      price: 'SOLD OUT',
      description: 'This ticket give you full access the day of the conference.',
      details: 'Available starting from October',
      url: 'https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022'
    },
    {
      title: 'NgRome MMXXII - Regular Ticket',
      price: '95€',
      description: 'This ticket give you full access the day of the conference.',
      details: 'Regular tickets will be available till Nov 18th.',
      url: 'https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022'
    },
    {
      title: 'NgRome MMXXII - VIP Ticket ',
      price: '345€',
      description: 'Access to Advanced RxJS Workshop, Access to the speaker dinner, Reserved area near the stage, Skip line for check-in',
      details: 'Special edition T-Shirt included!',
      url: 'https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022'
    },
    {
      title: 'NgRome MMXXII - Advanced RxJS Workshop Ticket',
      price: '185€',
      description: 'Advanced RxJS Workshop (by Brian Love and Mike Ryan)',
      details: 'Level up your RxJS skills.',
      url: 'https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022'
    },
    {
      title: 'NgRome MMXXII - Early Combo Ticket (Workshop & Conference) ',
      price: '235€',
      description: 'Conference + Advanced RxJS Workshop (by Brian Love and Mike Ryan), Level up your RxJS skills!',
      details: 'This ticket give you full access the day of the conference.',
      url: 'https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022'
    },


  ]

  constructor(private messagingService: MessagingService) {}

  ngOnInit() {

  }
}
