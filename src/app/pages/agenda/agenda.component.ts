import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Timestamp } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { EventDateType, EVENT_DATE, TICKET, TicketType } from 'src/app/constants';
import { Agenda } from 'src/app/shared/interfaces';

@Component({
  selector: 'ngrome-agenda',
  template: `<section class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__intro">
          <header class="site-content__intro__head__inner-sub">
            <h1 class="site-content__intro__title-sub">Agenda</h1>
          </header>
          <div class="site-content__intro__info__inner">
            <p>
              One track, one day, filled with talks of the <strong>Angular</strong>
              engineers who build the most <strong>performant</strong> apps and web experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="site-content__wrap">
      <h1 class="site-content__section__title">{{eventInfo.when}}</h1>
      <!-- <ul class="speakers__list"><li class="agenda__item"><p>Available at the end of the Call for papers!</p></li></ul> -->
      <ul class="speakers__list">
        <li class="agenda__item" *ngFor="let agenda of agendaList$ | async">
          <div
            [ngClass]="{
              agenda__talk: isTalk(agenda.type),
              agenda__activity: isActivity(agenda.type)
            }"
          >
            <div class="agenda__time">
              {{ agenda.startTime.seconds * 1000 | date: 'shortTime' }}<br />
              <span class="agenda__time-end">→{{ agenda.endTime.seconds * 1000 | date: 'hh:mm' }}</span>
            </div>
            <div class="agenda__image">
              <img [src]="agenda.image" alt="{{ agenda.speakerName }}" />
            </div>
            <div class="agenda__detail">
              <span class="agenda_speaker__name"> {{ agenda.speakerName }}<br />- {{ agenda.company }} </span>
              <h1>{{ agenda.title }}</h1>
              <a class="read__more" title="Read more about the talk">Read more</a>
              <div class="agenda__talk__detail"></div>
            </div>
            <div class="agenda__duration">{{ getDuration(agenda.startTime, agenda.endTime) }}''</div>
          </div>
        </li>
      </ul>
    </div>`,
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  agendaList$: Observable<Agenda[]>;
  eventInfo: EventDateType;
  ticketData: TicketType;

  constructor(private firestore: AngularFirestore) {
    this.eventInfo = EVENT_DATE;
    this.ticketData = TICKET;

    // const agenda = [
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 8:00:00 UTC+1',
    //     endTime: '12 02 2022 9:00:00 UTC+1',
    //     title: 'Registration & Coffee',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 9:00:00 UTC+1',
    //     endTime: '12 02 2022 9:10:00 UTC+1',
    //     title: 'Opening Remarks',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 9:10:00 UTC+1',
    //     endTime: '12 02 2022 9:50:00 UTC+1',
    //     title: 'Opening Keynote',
    //     description: '',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 9:50:00 UTC+1',
    //     endTime: '12 02 2022 10:15:00 UTC+1',
    //     title: 'Talk 1',
    //     description: '',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 10:15:00 UTC+1',
    //     endTime: '12 02 2022 10:25:00 UTC+1',
    //     title: 'Lightning Talk 1',
    //     description: '',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: 'Almaviva Digital Tech',
    //     company: '',
    //     startTime: '12 02 2022 10:25:00 UTC+1',
    //     endTime: '12 02 2022 10:30:00 UTC+1',
    //     title: 'Sponsor Talk',
    //     description: '',
    //     image:'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/sponsor%2FAlmavivADigitalte.png?alt=media&token=f51927de-b1cd-4def-8675-d9c66031b9c4',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 10:30:00 UTC+1',
    //     endTime: '12 02 2022 10:50:00 UTC+1',
    //     title: 'Speaker Panel',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 10:50:00 UTC+1',
    //     endTime: '12 02 2022 11:15:00 UTC+1',
    //     title: 'Coffee Break',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    //   {
    //     speakerName: 'Soumaya Erradi',
    //     company: '',
    //     startTime: '12 02 2022 11:15:00 UTC+1',
    //     endTime: '12 02 2022 11:40:00 UTC+1',
    //     title: 'Web3 and Angular, how to get out alive',
    //     description: '',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 11:15:00 UTC+1',
    //     endTime: '12 02 2022 11:40:00 UTC+1',
    //     title: 'Lightning Talks 2',
    //     description: '',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 11:50:00 UTC+1',
    //     endTime: '12 02 2022 12:15:00 UTC+1',
    //     title: 'Talks 3',
    //     description: '',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 12:15:00 UTC+1',
    //     endTime: '12 02 2022 12:20:00 UTC+1',
    //     title: 'Sponsor Talk Platinum',
    //     description: '',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 12:20:00 UTC+1',
    //     endTime: '12 02 2022 12:40:00 UTC+1',
    //     title: 'Speaker Panel',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 12:40:00 UTC+1',
    //     endTime: '12 02 2022 13:40:00 UTC+1',
    //     title: 'Lunch',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 13:40:00 UTC+1',
    //     endTime: '12 02 2022 14:05:00 UTC+1',
    //     title: 'Talk 4',
    //     description: '',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 14:05:00 UTC+1',
    //     endTime: '12 02 2022 14:15:00 UTC+1',
    //     title: 'Lightning Talks 3',
    //     description: '',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 14:15:00 UTC+1',
    //     endTime: '12 02 2022 14:40:00 UTC+1',
    //     title: 'Talk 5',
    //     description: '',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 14:40:00 UTC+1',
    //     endTime: '12 02 2022 15:00:00 UTC+1',
    //     title: 'Speaker Panel',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 15:00:00 UTC+1',
    //     endTime: '12 02 2022 15:25:00 UTC+1',
    //     title: 'Coffee Break',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    //   {
    //     speakerName: 'Mike Ryan & Brian Love',
    //     company: '',
    //     startTime: '12 02 2022 15:50:00 UTC+1',
    //     endTime: '12 02 2022 16:30:00 UTC+1',
    //     title: 'Closing Keynote',
    //     description: 'A Fistful of Angulars',
    //     image:'',
    //     type: 'Talk',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 16:30:00 UTC+1',
    //     endTime: '12 02 2022 16:50:00 UTC+1',
    //     title: 'Final Panel',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 16:50:00 UTC+1',
    //     endTime: '12 02 2022 17:00:00 UTC+1',
    //     title: 'Closing Remarks',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    //   {
    //     speakerName: '',
    //     company: '',
    //     startTime: '12 02 2022 17:00:00 UTC+1',
    //     endTime: '12 02 2022 18:00:00 UTC+1',
    //     title: 'After Party',
    //     description: '',
    //     image: '',
    //     type: 'Activity',
    //     visible: true,
    //   },
    // ];

    // agenda.forEach(function (obj) {
    //   console.log('Prepare the item to write to db: ', obj);

    //   let startTime = new Date(obj.startTime);
    //   let endTime = new Date(obj.endTime);

    //   const doc: Agenda = {
    //     title: obj.title,
    //     speakerName: obj.speakerName,
    //     company: obj.company,
    //     description: obj.description,
    //     image: obj.image,
    //     type: obj.type,
    //     startTime: Timestamp.fromDate(startTime),
    //     endTime: Timestamp.fromDate(endTime),
    //     visible: obj.visible
    //   };


    //   // Add a new document in collection "cities" with ID 'LA'
    //   firestore.collection('agenda2022').add(doc);
    //   // [END firestore_data_set_from_map]

    // });


    this.agendaList$ = firestore
      .collection<Agenda>('agenda2022', (ref) => ref.where('visible', '==', true).orderBy('startTime','asc'))
      .valueChanges();
  }

  ngOnInit() {}

  isTalk(type) {
    return type === 'Talk';
  }

  isActivity(type) {
    return type === 'Activity';
  }

  getDuration(sT, eT) {
    let startTime: any = new Date(sT.seconds * 1000);
    let endTime: any = new Date(eT.seconds * 1000);
    var diff = (startTime.getTime() - endTime.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }
}
