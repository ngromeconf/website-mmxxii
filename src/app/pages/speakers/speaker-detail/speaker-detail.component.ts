import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'ngrome-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss']
})
export class SpeakerDetailComponent implements OnInit {

  private _paramSpeakerName;

  public previous = 0;
  public next = 0;

  speaker$: Observable<any[]>;

  constructor(
    private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private afs: AngularFirestore) {

  }

  ngOnInit() {

    this._paramSpeakerName=this._Activatedroute.snapshot.params['name'];
    console.log(this._paramSpeakerName);

    this.speaker$ =
      this.afs.collection('speakers',
          ref => {
            let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
            query = query.where('name', '==', this._paramSpeakerName);
            query = query.orderBy('position', 'asc');
            console.log(query);
            return query;
          }).valueChanges();

    this.speaker$.subscribe((result) =>{
      this.previous = result[0].position - 1;
      this.next = result[0].position + 1;
      console.log('detail: ',this.previous, this.next)
    });

  }

}
