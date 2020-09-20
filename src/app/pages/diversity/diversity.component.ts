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
          support to attend NGRome editions.</p>
          <p>We are very grateful and would like to say a big
          "Thank You" to the companies and individuals who donate
          to our Diversity Program.</p>

          <p>In the last edition, NGRome MMXIX, we gave over <b>80 tickets</b>
          at discounted price or even free.
          <b>Students</b> and <b>Women</b> in Tech were invited to buy a diversity ticket and joined us on Oct 7th 2019 in Rome.</p>
          
          <p>Even though <b>NGRome MMXX</b> is a virtual edition, we are still committed to our Diversity Program,
          and are willing to offer our support.<br />
          Moreover, we will be running the program also for the next edition which we hope will be held in Rome.</p>
          </div>
        </div>
      </div>
      <div class="site-content__wrap"></div>
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
  styles: ['p {text-align: justify;}']
})
export class DiversityComponent implements OnInit {
  constructor(public sponsorService: SponsorService) { }
  ngOnInit() {}
}
