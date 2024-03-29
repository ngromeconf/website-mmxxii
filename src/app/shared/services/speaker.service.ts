import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


export interface Speaker {
  company: string;
  description: string;
  fullDescription: string;
  homepage: boolean;
  image: string;
  name: string;
  job: string;
  position: number;
  twitter: string;
  visible: boolean;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  private speakerListCollection: AngularFirestoreCollection<Speaker>;
  speakerList: Observable<Speaker[]>;
  constructor(private afs: AngularFirestore) {
    this.speakerListCollection = afs.collection<Speaker>('speakers2022');
  }

  getSpeakers(ishome: false): Observable<Speaker[]> {

    return this.speakerListCollection.valueChanges();

  }
}
