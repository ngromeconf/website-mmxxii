import { Component, OnInit } from '@angular/core';
import { SponsorService } from 'src/app/shared/services/sponsor.service';

@Component({
  selector: 'ngrome-diversity',
  template: `
    <section id="intro" class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__intro">
          <header class="site-content__intro__head__inner">
            <h1 class="site-content__intro__title">Diversity</h1>
          </header>
          <div class="site-content__intro__info__inner">
          <p>We are running our <b>Diversity Program</b>, 
          which provides individuals from underrepresented groups with 
          support to attend NGRome MMXIX.</p>
          <p>We are very grateful and would like to say a big 
          Thank You to the companies and individuals who donate 
          to our Diversity Program. We are going to give over <b>80 tickets</b> 
          at discounted price or even free.</p>
          <p><b>Students</b> and <b>Women</b> in Tech are invited to 
          buy a diversity ticket and join us to an incredible conference on Oct 7th in Rome.</p>
          </div>
        </div>
      </div>
      <div class="site-content__wrap"></div>
    </section>
    <section class="site-content__section">
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
    <!-- section class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__description">
          <h1>The Team</h1>
        </div>
      </div>
    </section -->
    <ngrome-tickets class="site-content__section" id="tickets"></ngrome-tickets>
  `,
  styles: []
})
export class DiversityComponent implements OnInit {
  constructor(public sponsorService: SponsorService) { }
  ngOnInit() {}
}
