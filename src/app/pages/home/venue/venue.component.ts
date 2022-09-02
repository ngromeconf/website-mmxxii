import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-venue',
  template: `
    <section #tickets class="site-content__section">
      <div class="site-content__wrap">
        <h1 class="tickets_title">VENUE</h1>
        <div class="ticket_card_list">
          <p>NG-Rome MMXXII will take place at Spazio Novecento in the heart of EUR, an historical neighborhood two steps away from the city center of Rome.</p>
        </div>
        <div class="site-venue"></div>
      </div>
      <!-- <div class="site-content__wrap">
        <h1 class="tickets_title">Agenda</h1>
        <div class="ticket_card_list">
          <p>One track, one day, filled with talks of the Angular engineers who build the most performant apps and web experiences.</p>
        </div>
      </div> -->
    </section>
  `,
  styles: [
    `

      section {
        margin-top: 40px;
      }
      img {
        max-width: 106px;
      }

    `,
  ],
})
export class VenueComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
