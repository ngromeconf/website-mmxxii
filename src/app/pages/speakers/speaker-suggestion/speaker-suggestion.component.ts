import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'ngrome-speaker-suggestion',
  templateUrl: './speaker-suggestion.component.html',
  styleUrls: ['./speaker-suggestion.component.scss'],
})
export class SpeakerSuggestionComponent implements OnInit {
  @Input() current: number;

  nextSpeaker$: Observable<any[]>;
  previousSpeaker$: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    console.log('suggestion:', this.current);

    if ((this.current-1) !== 0) {
      this.previousSpeaker$ = this.afs
        .collection(
          'speakers',
          ref => ref.where('position', '==', this.current - 1))
        .valueChanges();
    }

    if ((this.current+1) <= 16) {
      this.nextSpeaker$ = this.afs
        .collection(
          'speakers',
          ref => ref.where('position', '==', this.current + 1))
        .valueChanges();
    }
  }
}
