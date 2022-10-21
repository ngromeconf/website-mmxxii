import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Sponsor } from '../interfaces';


@Component({
  selector: 'ngrome-sponsors-section',
  template: `
    <section class="sponsor-container" *ngIf="sponsors$ | async as sponsors">
      <div class="site-content__wrap">
        <div class="sponsors-section__header" [ngClass]="headerColor">
          <h1 class="sponsors-section__title">{{ title }}</h1>
        </div>

        <div class="sponsors-section__list">
          <div
            *ngFor="let sponsor of sponsors"
            class="sponsors-section__item {{sponsorType}}"
            [ngClass]="{ 'two-items-row': sponsors.length === 2 }"
          >
            <a rel="noopener" href="{{ sponsor.websiteUrl }}" target="_blank" title="{{ sponsor.name }}">
              <img src="{{ sponsor.image }}" alt="{{ sponsor.name }}" />
              <!--<span>{{ sponsor.name }}</span>-->
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
  @Input() sponsorType: string;

  sponsors$: Observable<Sponsor[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.getSponsors();
  }

  private getSponsors() {
    this.sponsors$ = this.afs
      .collection<Sponsor>(
        'sponsor2020',
        ref => ref
          .where('type', '==', this.sponsorType)
          .where('visible', '==', true))
      .valueChanges();
  }
}
