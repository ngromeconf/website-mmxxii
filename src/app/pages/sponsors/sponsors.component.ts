import { Component, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/shared/services/partners.service';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';
import { SponsorService } from 'src/app/shared/services/sponsor.service';

@Component({
  selector: 'ngrome-pages-sponsors',
  template: `
  <section id="intro" class="site-content__section">
    <div class="site-content__wrap">
      <div class="site-content__intro">
        <header class="site-content__intro__head__inner">
          <h1 class="site-content__intro__title">Sponsors</h1>
        </header>
        <div class="site-content__intro__info__inner">
          <p>
            We want to say thank you to our Sponsors and Community Partners! 
            They help make <strong>NG Rome Conference</strong> possible.
          </p>
          <p>Come and say "Ciao" the day of the conference.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- sponsor here -->

  <section>
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Main Partners</h1>
      <ul class="sponsors__list sponsors__list--full">
        <li *ngFor="let sponsor of sponsorService.getSponsors('main')" class="main">
          <a rel="noopener"
          href="{{ sponsor.websiteUrl }}"
          target="_blank"
          title="{{ sponsor.name }}">
            <img src="{{ sponsor.image }}" alt="{{ sponsor.name }}" />
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section>
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Gold Sponsors</h1>
      <ul class="sponsors__list sponsors__list--full">
        <li *ngFor="let sponsor of sponsorService.getSponsors('gold')" class="main">
          <a rel="noopener"
          href="{{ sponsor.websiteUrl }}"
          target="_blank"
          title="{{ sponsor.name }}">
            <img src="{{ sponsor.image }}" alt="{{ sponsor.name }}" />
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section>
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Silver Sponsors</h1>
      <ul class="sponsors__list">
        <li *ngFor="let sponsor of sponsorService.getSponsors('silver')" class="main">
          <a rel="noopener"
            href="{{ sponsor.websiteUrl }}"
            target="_blank"
            title="{{ sponsor.name }}">
            <img src="{{ sponsor.image }}" alt="{{ sponsor.name }}" />
          </a>
        </li>
      </ul>
    </div>
  </section>

  <section>
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
  </section>

  <section>
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Community Partners</h1>
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

  <!-- end sponsor -->

  <ngrome-tickets class="site-content__section" id="tickets"></ngrome-tickets>
  `
})
export class SponsorsComponent implements OnInit {

  constructor(
    public partnerService: PartnersService,
    public sponsorService: SponsorService,
    private animateScrollService: NgAnimateScrollService
  ) { }

  ngOnInit() {}

  scrollTo(el:string, duration?:number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
