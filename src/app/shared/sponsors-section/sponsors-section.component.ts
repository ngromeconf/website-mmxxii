import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

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
            *ngFor="let sponsor of sponsors$ | async as sponsors"
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
  @Input() sponsorType: string;

  sponsors$: Observable<any>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {
    this.getSponsors();
  }

  private getSponsors() {
    this.sponsors$ = this.afs
      .collection('sponsor2020', (ref) => {
        let query:
          | firebase.firestore.CollectionReference
          | firebase.firestore.Query = ref;
        query = query.where('type', '==', this.sponsorType);
        console.log(query);
        return query;
      })
      .valueChanges();
  }
}
