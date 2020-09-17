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
          <header class="site-content__intro__head__inner-sub">
            <h1 class="site-content__intro__title-sub">Sponsors</h1>
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
    <ngrome-sponsors-section
      [title]="'main partners'"
      [sponsors]="sponsorService.getSponsors('main')"
      headerColor="sponsor-title__main-partners"
    ></ngrome-sponsors-section>
    <ngrome-sponsors-section
      [title]="'gold sponsors'"
      [sponsors]="sponsorService.getSponsors('main')"
      headerColor="sponsor-title__gold"
    ></ngrome-sponsors-section>
    <ngrome-sponsors-section
      [title]="'platinum sponsors'"
      [sponsors]="sponsorService.getSponsors('main')"
      headerColor="sponsor-title__platinum"
    ></ngrome-sponsors-section>

    <!-- <ngrome-tickets class="site-content__section" id="tickets"></ngrome-tickets> -->
  `,
})
export class SponsorsComponent implements OnInit {
  constructor(
    public partnerService: PartnersService,
    public sponsorService: SponsorService,
    private animateScrollService: NgAnimateScrollService
  ) {}

  ngOnInit() {}

  scrollTo(el: string, duration?: number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
