import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'ngrome-venue',
  template: `
    <section class="site-content__section site-content__wrap">
      <div class="site-content__intro">
        <header class="site-content__intro__head__inner-sub">
          <h1 class="site-content__intro__title-sub">Venue</h1>
        </header>

        <div class="site-content__intro__info__inner">
          <p>
            NG-Rome MMXXII will take place at <b>Spazio Novecento</b> in the heart of EUR, an historical
            neighborhood two steps away from the city center of Rome. <br />
          </p>
        </div>
        <p>📍 Piazza Guglielmo Marconi, 26b, 00144 Roma RM</p>
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
          <p>
          Welcome and checkin will take be at ground floor where you will have at your disposal a wardrobe. <br>
          A marble stair will bring you to the conference area where you will find the catering area,
          the sponsor longe and the presentation stage. <br>
          You will also have access to an external porch for relaxing, socializing and enjoying the lunch break.
          </p>
        </div>

        <img
          class="site-location__location-image"
          src="/assets/images/location/piantina.jpg"
          alt="NG-Rome location Spazio Novecento floor plan"
        />

        <div class="site-location__main">
          <label class="site-location__main__title">Conference areas</label>
          <p>
          The conference are will accommodate over 400 attendees and is side to side with the sponsor lounge and coffee area. <br>
          The participants will enjoy free-time and connect in a monumental location with best-in-class speakers and sponsors.
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
export class VenueComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  public ngOnInit(): void {
    this.seoService.generateTags({
      title:
        'Venue page: NG-Rome MMXXII will take place at Spazio Novecento in the heart of EUR, a historical neighborhood two steps away from the city center of Rome.',
    });
  }
}
