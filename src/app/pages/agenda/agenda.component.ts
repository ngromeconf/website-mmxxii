import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
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
              One track, one day, filled with talks of the
              <strong>Angular</strong> engineers who build the most <strong>performant</strong> apps and web
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="site-content__wrap">
      <h1 class="site-content__section__title">July 9th 2021</h1>
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

  constructor(private firestore: AngularFirestore) {
    this.agendaList$ = firestore
      .collection<Agenda>('agenda2021', (ref) => ref.where('visible', '==', true).orderBy('startTime','asc'))
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
