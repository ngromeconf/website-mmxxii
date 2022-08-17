import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'ngrome-location',
  template: `
    <section class="site-content__section site-content__wrap">
      <div class="site-content__intro">
        <header class="site-content__intro__head__inner-sub">
          <h1 class="site-content__intro__title-sub">Location</h1>
        </header>

        <div class="site-content__intro__info__inner">
          <p>
            NG-Rome MMXXII will take place at <b>Spazio Novecento</b> in the heart of EUR, an historical
            neighborhood two steps away from the city center of Rome. <br />
          </p>
        </div>
      </div>
    </section>

    <div class="site-location">
      <div>
        <img
          class="site-location__location-image"
          src="/assets/images/location/esterno.jpg"
          alt="NG-Rome location Spazio Novecento photo of the location from outside"
        />

        <div class="site-location__main">
          <label class="site-location__main__title">The Venue</label>
          <p>We will have a flexible space to that separates the <b>two presentation areas and lounge</b>.</p>
        </div>

        <img
          class="site-location__location-image"
          src="/assets/images/location/piantina.jpg"
          alt="NG-Rome location Spazio Novecento floor plan"
        />

        <div class="site-location__main">
          <label class="site-location__main__title">Conference areas</label>
          <p>
            We also have a dedicated Sponsor area and a lounge for free-time, collaboration, and getting in
            touch our close-knit community with over <b>400 attendees</b>.
          </p>
        </div>

        <img
          class="site-location__location-image"
          src="/assets/images/location/interno.jpg"
          alt="NG-Rome location Spazio Novecento photo of the internals"
        />
      </div>
    </div>
  `,
})
export class LocationComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  public ngOnInit(): void {
    this.seoService.generateTags({
      title:
        'Location page: NG-Rome MMXXII will take place at Spazio Novecento in the heart of EUR, a historical neighborhood two steps away from the city center of Rome.',
    });
  }
}
