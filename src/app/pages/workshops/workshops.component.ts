import { Component, OnInit } from '@angular/core';
import { WorkshopsService } from 'src/app/shared/services/workshops.service';

@Component({
  template: `
  <section id="intro" class="site-content__section">
    <div class="site-content__wrap">
      <div class="site-content__intro">
        <header class="site-content__intro__head__inner">
          <h1 class="site-content__intro__title">Workshops</h1>
        </header>
        <div class="site-content__intro__info__inner">
          <p>October 6th. 1 day workshops, sold each separately.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="site-content__section workshop--list">
    <div class="site-content__wrap">
      <h1 class="site-content__section__title">Workshops</h1>
      <div class="speakers__list">
        <div class="speaker" *ngFor="let workshopElement of workshopService.getWorkshops()">
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
            <a class="read__more" href="javascript:void(0);">Read More</a>
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
  `],
})
export class WorkshopsComponent implements OnInit {

  constructor(
    public workshopService: WorkshopsService,
  ) {}

  ngOnInit() {
  }
}
