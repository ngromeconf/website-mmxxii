import { Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Speaker } from '../services/speaker.service';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngrome-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakerListComponent {

  @Input('speakerFilter') speakerFilter;

  public actualPage;
  public speakerList$: Observable<any[]>;

  constructor(
    public el: ElementRef,
    private router: Router,
    private afs: AngularFirestore) {
    const urlTree = this.router.parseUrl(this.router.url);
    this.actualPage = urlTree.root.children['primary']
      .segments.map(it => it.path)
      .join('/');

    // this.speakerListCollection = afs.collection<Speaker>('speakers',
    //   ref => ref.where('homepage', '==', true).orderBy('position'));
    // this.speakerList = this.speakerListCollection.valueChanges();

    const homepage$ = new BehaviorSubject(null);
    const visible$ = new BehaviorSubject(null);

    this.speakerList$ = combineLatest(
      homepage$,
      visible$
    ).pipe(
      switchMap(([homepage, visible]) =>
        afs.collection('speakers',
          ref => {
            let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
            if (homepage) { query = query.where('homepage', '==', true) };
            if (visible) { query = query.where('visible', '==', true)};
            query = query.orderBy('position', 'asc');
            //console.log(query);
            return query;
          }).valueChanges()
      )
    );

    //console.log(this.actualPage);
    if (this.actualPage === 'home') {
      // trigger the query
      homepage$.next(true);
    }

    visible$.next(true);


  }


}
