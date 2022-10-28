import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/compat/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'ngrome-speakers-list',
  template: `
    <section class="site-content__section">
      <div class="site-content__wrap">
        <h1 class="site-content__section__title">Featured Speakers</h1>
        <div class="speakers__list">
          <ngrome-speaker-bio
            class="speaker"
            *ngFor="let speaker of speakerList$ | async"
            [speaker]="speaker"
          >
          </ngrome-speaker-bio>
        </div>
        <aside class="speakers__list__more" role="complementary"></aside>
      </div>
    </section>
  `,
  styles: [``],
})
export class SpeakerListComponent {
  @Input('speakerFilter') speakerFilter;
  actualPage: string;
  speakerList$: Observable<any[]>;

  constructor(private router: Router, private afs: AngularFirestore) {
    const urlTree = this.router.parseUrl(this.router.url);
    this.actualPage = urlTree.root.children['primary'].segments.map((it) => it.path).join('/');

    // this.speakerListCollection = afs.collection<Speaker>('speakers',
    //   ref => ref.where('homepage', '==', true).orderBy('position'));
    // this.speakerList = this.speakerListCollection.valueChanges();

    const homepage$ = new BehaviorSubject(null);
    const visible$ = new BehaviorSubject(null);

    this.speakerList$ = combineLatest([homepage$, visible$]).pipe(
      switchMap(([homepage, visible]) =>
        afs
          .collection('speakers2022', (ref) => {
            //let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
            let query : CollectionReference | Query  = ref;
            if (homepage) {
              query.where('homepage', '==', true);
            }
            if (visible) {
              query.where('visible', '==', true);
            }
            query.orderBy('position', 'asc');
            return query;
          })
          .valueChanges()
      )
    );

    // console.log(this.actualPage);
    if (this.actualPage === 'home') {
      // trigger the query
      homepage$.next(true);
    }

    visible$.next(true);
  }
}
