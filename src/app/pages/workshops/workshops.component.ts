import { Component, OnInit } from '@angular/core';
import { WorkshopsService } from 'src/app/shared/services/workshops.service';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  template: `
  <section id="intro" class="site-content__section">
    <div class="site-content__wrap">
      <div class="site-content__intro">
        <header class="site-content__intro__head__inner">
          <h1 class="site-content__intro__title">Workshops</h1>
        </header>
        <div class="site-content__intro__info__inner">
          <p>
          October 6th. 1 day workshops, sold each separately.<br>
          Location: <a href="https://talentgarden.org/it/campus/italia/roma-ostiense/"
              rel="noopener"
              target="_blank">Talent Garden Ostiense, Via Ostiense, 92 - 00154 Roma RM</a></p>
        </div>
      </div>
    </div>
  </section>
  <section class="site-content__section workshop--list">
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Workshops</h1>
      <div class="speakers__list">
        <div class="speaker speaker--start"
        *ngFor="let workshopElement of workshopService.getWorkshops()">
          <a class="speaker__face"
            [href]="workshopElement.targetUrl"
            rel="noopener"
            target="_blank">
            <img [src]="workshopElement.image" alt="{{ workshopElement.name }}" />
          </a>
          <div class="speaker__info">
            <span class="workshop__time"> H {{ workshopElement.start_time }} -> {{ workshopElement.end_time }} </span>
            <a
              [href]="workshopElement.targetUrl"
              rel="noopener"
              target="_blank">
              <h2 class="speaker__name">{{workshopElement.name}}</h2>
            </a>
            <p class="speaker__desc" [innerHTML]="workshopElement.fullDescription"></p>
            <a class="speaker__twitter" *ngFor="let twitter of workshopElement.twitter"
            href="https://twitter.com/{{ twitter }}"
            target="_blank"
            rel="noopener">
              <svg width="21" height="17">
                <path
                  fill="#0086FF"
                  fill-rule="evenodd"
                  d="M20.4 2.013a8.175 8.175 0 0 1-2.403.675 4.282 4.282 0 0 0 1.84-2.374 8.243 8.243 0 0 1-2.66 1.04A4.127 4.127 0 0 0 14.124 0C11.813 0 9.94 1.922 9.94 4.291c0 .337.035.664.107.978C6.57 5.089 3.486 3.383 1.42.783a4.37 4.37 0 0 0-.566 2.16 4.32 4.32 0 0 0 1.862 3.572A4.11 4.11 0 0 1 .819 5.98v.053c0 2.08 1.443 3.815 3.359 4.208-.351.1-.721.15-1.103.15-.27 0-.533-.025-.788-.076.533 1.705 2.078 2.946 3.91 2.98A8.264 8.264 0 0 1 0 15.072 11.653 11.653 0 0 0 6.416 17c7.699 0 11.908-6.538 11.908-12.21 0-.187-.004-.373-.011-.556A8.59 8.59 0 0 0 20.4 2.013"
                />
              </svg>
              <span>@{{ twitter }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ngrome-workshop-tickets></ngrome-workshop-tickets>
  `,
  styles: [`
    .workshop--list{
      padding-bottom: 80px;
    }
    .speaker--start {
      align-items: start;
    }
    .speaker__info {
      flex-basis: 60%;
      max-width: 60%;
    }
    .speaker__face {
      flex-basis: 40%;
      max-width: 40%;
      padding-left: 0!important;
      padding-right: 0;
    }
  `],
})
export class WorkshopsComponent implements OnInit {

  constructor(
    public workshopService: WorkshopsService,
    private seoService: SeoService
  ) {}

  ngOnInit() {

    this.seoService.generateTags({
      title: 'NG-Rome October 17th 2020 - Workshops',
      image: 'https://angularconnect.com/perch/resources/nggirls.png',
      description: 'We\'re hosting two full-day workshops to for even more in-depth learning. Angular Architecture by John Papa and Dan Wahlin + ngGirls Workshop'
    });

  }
}
