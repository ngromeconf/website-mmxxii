import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

export interface Sponsor {
  image: string;
  name: string;
  description: string;
  visible: boolean;
  websiteUrl: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class SponsorService {
  constructor(private afs: AngularFirestore) {}

  getSponsors(): Observable<Array<any>> {
    return this.afs
      .collection('sponsor2020', (ref) => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('visible', '==', true);
        return query;
      })
      .valueChanges();
  }
}
