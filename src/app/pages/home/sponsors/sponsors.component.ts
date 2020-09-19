import { Component, OnInit } from '@angular/core';
import { Sponsor, SponsorService } from 'src/app/shared/services/sponsor.service';

@Component({
  selector: 'ngrome-sponsors',
  template: `
    <section class="site-content__section">
      <ngrome-sponsors-section
        [title]="'main partners'"
        [sponsors]="'main-partner'"
        headerColor="sponsor-title__main-partners"
      ></ngrome-sponsors-section>
      <ngrome-sponsors-section
        [title]="'platinum sponsors'"
        [sponsors]="platinum"
        headerColor="sponsor-title__platinum"
      ></ngrome-sponsors-section>
      <ngrome-sponsors-section
        [title]="'gold sponsors'"
        [sponsors]="gold"
        headerColor="sponsor-title__gold"
      ></ngrome-sponsors-section>
      <ngrome-sponsors-section
        [title]="'event partners'"
        [sponsors]="'event-partner'"
        headerColor="sponsor-title__main-partners"
      ></ngrome-sponsors-section>
    </section>
  `,
  styles: [
    `
      section {
        margin-top: 40px;
      }
    `,
  ],
})
export class SponsorsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
