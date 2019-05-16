import { Component, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/shared/services/partners.service';

@Component({
  selector: 'ngrome-partners',
  template: `
    <section>
      <div class="site-content__wrap">
        <h1 class="site-content__section__title">Partners</h1>
        <ul class="sponsors__list">
          <li *ngFor="let partner of partnerService.getPartner(); let isOdd = odd">
            <a rel="noopener"
            href="{{ partner.websiteUrl }}"
            target="_blank"
            title="{{ partner.name }}">
              <img src="{{ partner.image }}" alt="{{ partner.name }}" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  `,
  styles: [`
    section {
      margin-top: 40px;
    }
    img {
      max-width: 106px;
    }
  `]
})
export class PartnersComponent implements OnInit {
  constructor(public partnerService: PartnersService) { }
  ngOnInit() {
  }
}
