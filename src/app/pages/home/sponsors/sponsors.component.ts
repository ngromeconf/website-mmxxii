import { Component, OnInit } from '@angular/core';
import { Sponsor, SponsorService } from 'src/app/shared/services/sponsor.service';

@Component({
  selector: 'ngrome-sponsors',
  template: `
    <section class="site-content__section">
      <ngrome-sponsors-section
        [title]="'main partners'"
        [sponsors]="mainPartners"
        headerColor="sponsor-title__main-partners"
      ></ngrome-sponsors-section>
      <ngrome-sponsors-section
        [title]="'gold sponsors'"
        [sponsors]="goldSponsor"
        headerColor="sponsor-title__gold"
      ></ngrome-sponsors-section>
      <ngrome-sponsors-section
        [title]="'platinum sponsors'"
        [sponsors]="platinumSponsor"
        headerColor="sponsor-title__platinum"
      ></ngrome-sponsors-section>
      <div class="site-content__wrap">
        <h1 class="site-content__section__title">Diversity Sponsors</h1>
        <ul class="sponsors__list sponsors__list--full">
          <li *ngFor="let sponsor of diversitySponsor" class="main">
            <a rel="noopener" href="{{ sponsor.websiteUrl }}" target="_blank" title="{{ sponsor.name }}">
              <img src="{{ sponsor.image }}" alt="{{ sponsor.name }}" />
            </a>
          </li>
        </ul>
      </div>
      <div class="site-content__wrap">
        <h1 class="site-content__section__title">Event Partners</h1>
        <ul class="sponsors__list">
          <li *ngFor="let sponsor of othersSponsor" class="main">
            <a rel="noopener" href="{{ sponsor.websiteUrl }}" target="_blank" title="{{ sponsor.name }}">
              <img src="{{ sponsor.image }}" alt="{{ sponsor.name }}" />
            </a>
          </li>
        </ul>
        <ul class="sponsors__list sponsors__list--full">
          <li>
            <a class="button" href="mailto:angularroma@gmail.com" title="Became a Sponsor">
              <span>Become a Sponsor</span>
              <svg width="11" height="12">
                <path
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#0086FF"
                  stroke-width="2"
                  d="M1 1l7.358 5L1 11"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
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
  public mainPartners: Array<Sponsor>;
  public goldSponsor: Array<Sponsor>;
  public platinumSponsor: Array<Sponsor>;
  public diversitySponsor: Array<Sponsor>;
  public othersSponsor: Array<Sponsor>;

  constructor(private sponsorService: SponsorService) {
    this.sponsorService.getSponsors().subscribe((sponsors: Array<Sponsor>) => {
      this.mainPartners = sponsors.filter((s) => s.type === 'main-partner');
      this.goldSponsor = sponsors.filter((s) => s.type === 'gold');
      this.platinumSponsor = sponsors.filter((s) => s.type === 'platinum');
      this.diversitySponsor = sponsors.filter((s) => s.type === 'diversity');
      this.othersSponsor = sponsors.filter((s) => s.type === 'others');
    });
  }

  ngOnInit() {}
}
