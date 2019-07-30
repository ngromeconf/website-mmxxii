import { Component, OnInit } from '@angular/core';
import { SponsorService } from 'src/app/shared/services/sponsor.service';

@Component({
  selector: 'ngrome-sponsors',
  template: `
  <section class="site-content__section">
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Main Partner</h1>
      <ul class="sponsors__list sponsors__list--full">
        <li *ngFor="let sponsor of sponsorService.getSponsors('main'); let isOdd = odd">
          <a rel="noopener" href="{{sponsor.websiteUrl}}" target="_blank" title="{{sponsor.name}}">
            <img src="{{sponsor.image}}" alt="{{sponsor.name}}">
          </a>
        </li>
      </ul>
    </div>
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Gold Sponsors</h1>
      <ul class="sponsors__list sponsors__list--full">
        <li *ngFor="let sponsor of sponsorService.getSponsors('gold'); let isOdd = odd">
          <a rel="noopener" href="{{sponsor.websiteUrl}}" target="_blank" title="{{sponsor.name}}">
            <img src="{{sponsor.image}}" alt="{{sponsor.name}}">
          </a>
        </li>
      </ul>
    </div>
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Silver Sponsors</h1>
      <ul class="sponsors__list">
        <li *ngFor="let sponsor of sponsorService.getSponsors('silver')" class="main">
          <a rel="noopener" href="{{sponsor.websiteUrl}}" target="_blank" title="{{sponsor.name}}">
            <img src="{{sponsor.image}}" alt="{{sponsor.name}}">
          </a>
        </li>
      </ul>
    </div>
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Diversity Sponsors</h1>
      <ul class="sponsors__list sponsors__list--full">
        <li *ngFor="let sponsor of sponsorService.getSponsors('diversity')" class="main">
          <a rel="noopener"
          href="{{ sponsor.websiteUrl }}"
          target="_blank"
          title="{{ sponsor.name }}">
            <img src="{{ sponsor.image }}" alt="{{ sponsor.name }}" />
          </a>
        </li>
      </ul>
    </div>
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Event Partners</h1>
      <ul class="sponsors__list">
        <li *ngFor="let sponsor of sponsorService.getSponsors('other')" class="main">
          <a rel="noopener"
          href="{{ sponsor.websiteUrl }}"
          target="_blank"
          title="{{ sponsor.name }}">
            <img src="{{ sponsor.image }}" alt="{{ sponsor.name }}" />
          </a>
        </li>
      </ul>
      <ul class="sponsors__list sponsors__list--full">
        <li>
          <a class="button" href="mailto:angularroma@gmail.com" title="Became a Sponsor">
            <span>Become a Sponsor</span>
            <svg width="11" height="12">
              <path fill="none" fill-rule="evenodd" stroke="#0086FF" stroke-width="2" d="M1 1l7.358 5L1 11"/>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </section>
  `,
  styles: [`
    section{
      margin-top: 40px;
    }
  `]
})
export class SponsorsComponent implements OnInit {

  constructor(public sponsorService: SponsorService) { }

  ngOnInit() {
  }

}
