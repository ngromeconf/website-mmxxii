import { Component, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/shared/services/partners.service';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';
import { Sponsor, SponsorService } from 'src/app/shared/services/sponsor.service';

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
              We want to say thank you to our Sponsors and Community Partners! They help make
              <strong>NG Rome Conference</strong> possible.
            </p>
            <p>Come and say "Ciao" the day of the conference.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- sponsor here -->
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

    <!-- <ngrome-tickets class="site-content__section" id="tickets"></ngrome-tickets> -->
  `,
})
export class SponsorsComponent implements OnInit {
  public mainPartners: Array<Sponsor>;
  public goldSponsor: Array<Sponsor>;
  public platinumSponsor: Array<Sponsor>;

  constructor(
    public partnerService: PartnersService,
    public sponsorService: SponsorService,
    private animateScrollService: NgAnimateScrollService
  ) {
    sponsorService.getSponsors().subscribe((sponsors: Array<Sponsor>) => {
      this.mainPartners = sponsors.filter((s) => s.type === 'main-partner');
      this.goldSponsor = sponsors.filter((s) => s.type === 'gold');
      this.mainPartners = sponsors.filter((s) => s.type === 'platinum');
    });
  }

  ngOnInit() {}

  scrollTo(el: string, duration?: number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
