import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'ngrome-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  agendaList$: Observable<any[]>;

  constructor(private afs: AngularFirestore) {

    this.agendaList$ = afs.collection('agenda',
          ref => {
            let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
            query = query.where('visible', '==', true);
            query = query.orderBy('startTime', 'asc');
            return query;
          }).valueChanges();

  }

  ngOnInit() {
  }

  isTalk(type) {
    return type === 'Talk';
  }

  isActivity(type) {
    return type === 'Activity';
  }

  getDuration(sT,eT){
    let startTime: any = new Date(sT.seconds*1000);
    let endTime: any = new Date(eT.seconds*1000);
    var diff =(startTime.getTime() - endTime.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }

}
