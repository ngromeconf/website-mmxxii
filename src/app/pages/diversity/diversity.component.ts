import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-diversity',
  template: `
    <section class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__intro">
          <header class="site-content__intro__head__inner-sub">
            <h1 class="site-content__intro__title-sub">Diversity</h1>
          </header>
          <div class="site-content__intro__info__inner">
            <p>
              NG-Rome is a <b>non-profit community</b> conference run by a team
              of volunteers. <br />We are all active members of the tech
              community, and run or contribute to various free local meetups,
              workshops, and education initiatives.
            </p>
            <p>
              We are running our <b>Diversity Program</b>, which provides
              individuals from underrepresented groups with support to attend
              NGRome MMXIX.
            </p>
            <p>
              We are very grateful and would like to say a big Thank You to the
              companies and individuals who donate to our Diversity Program. We
              are going to give over <b>80 tickets</b> at discounted price or
              even free.
            </p>
            <p>
              <b>Students</b> and <b>Women</b> in Tech are invited to buy a
              diversity ticket and join us to an incredible conference on Oct
              7th in Rome.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="site-content__section">
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
    </section> -->
    <!-- section class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__description">
          <h1>The Team</h1>
        </div>
      </div>
    </section -->
    <!-- <ngrome-tickets class="site-content__section" id="tickets"></ngrome-tickets> -->
  `,
  styles: [],
})
export class DiversityComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
