import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'ngrome-speaker-suggestion',
  templateUrl: './speaker-suggestion.component.html',
  styleUrls: ['./speaker-suggestion.component.scss']
})
export class SpeakerSuggestionComponent implements OnInit {

  @Input()
  previous

  @Input()
  next;

  nextSpeaker$: Observable<any[]>;
  previousSpeaker$: Observable<any[]>;

  public emptyPrevious = false;
  public emptyNext = false;

  constructor(
    private afs: AngularFirestore
  ) {
    if (this.previous === 0){
      this.emptyPrevious = true;
    }
  }

  ngOnInit() {
    console.log('suggestion:',this.previous, this.next);

    if (this.previous != 0){
      this.previousSpeaker$ =
      this.afs.collection('speakers',
          ref => {
            let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
            query = query.where('position', '==', this.previous);
            return query;
          }).valueChanges();
    }


    if (this.next <= 16){
      this.nextSpeaker$ =
        this.afs.collection('speakers',
            ref => {
              let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
              query = query.where('position', '==', this.next);
              return query;
            }).valueChanges();
    }

  }

}
