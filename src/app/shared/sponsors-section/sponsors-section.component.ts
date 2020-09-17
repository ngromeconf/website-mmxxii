import { Component, Input, OnInit } from '@angular/core';
import { Sponsor } from '../services/sponsor.service';

@Component({
  selector: 'ngrome-sponsors-section',
  template: `
    <section>
      <div class="site-content__wrap">
        <div class="sponsors-section__header" [ngClass]="headerColor">
          <h1 class="sponsors-section__title">{{ title }}</h1>
        </div>

        <div class="sponsors-section__list">
          <div
            *ngFor="let sponsor of sponsors"
            class="sponsors-section__item"
            [ngClass]="{ 'two-items-row': sponsors.length === 2 }"
          >
            <a
              rel="noopener"
              href="{{ sponsor.websiteUrl }}"
              target="_blank"
              title="{{ sponsor.name }}"
            >
              <img src="{{ sponsor.image }}" alt="{{ sponsor.name }}" />
              <span>{{ sponsor.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./sponsors-section.component.scss'],
})
export class SponsorsSectionComponent implements OnInit {
  @Input() title: string;
  @Input() headerColor: string;
  @Input() sponsors: Array<Sponsor>;
  constructor() {}

  ngOnInit(): void {}
}
