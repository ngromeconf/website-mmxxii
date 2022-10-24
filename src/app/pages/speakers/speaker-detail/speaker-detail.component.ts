import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { tap, map } from 'rxjs/operators';
import { CollectionReference, Query } from 'firebase/firestore';

@Component({
  selector: 'ngrome-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakerDetailComponent implements OnInit {
  private _paramSpeakerName;
  // private _routerSubscribe: Subscription;
  // private _speakerSubscribe: Subscription;

  // public previous = 0;
  // public next = 0;

  speaker$: Observable<any>;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private afs: AngularFirestore,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnChanges() {
    console.log('something changes');
  }

  ngOnInit() {
    this._Activatedroute.params.subscribe((speaker: { name: string }) =>
      this.getSpeakerDetail(speaker),
    );

    /*this._paramSpeakerName = this._Activatedroute.snapshot.params['name'];
    this.getSpeakerDetail();

    this._routerSubscribe = this._router.events.subscribe( (event:Event) => {

      if (event instanceof NavigationEnd) {
        this._paramSpeakerName = this._Activatedroute.snapshot.params['name'];
        this.getSpeakerDetail();
      }
    });*/
  }

  getSpeakerDetail({ name }) {
    console.log(name);
    this.speaker$ = this.afs
      .collection('speakers2022', query => query.where('name','==',name))
      .valueChanges()
      .pipe(
        map(data => {
          console.log('map: ',data);
          return data.reduce((acc, curr) => {
            return curr;
          }, {});
        }),
        tap(y => console.log(y)),
      );

    /*this._speakerSubscribe = this.speaker$.subscribe(result => {
      this.previous = result[0].position - 1;
      this.next = result[0].position + 1;
      console.log('detail: ', this.previous, this.next);
    });*/
  }

}
