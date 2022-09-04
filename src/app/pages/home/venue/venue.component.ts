import { Component, OnInit } from '@angular/core';

interface SCHEDULE {
  time: string;
  event: string;
}
@Component({
  selector: 'ngrome-venue',
  template: `
    <section #tickets class="site-content__section">
      <div class="site-content__wrap">
        <h1 class="tickets_title">VENUE</h1>

        <div class="site-content__intro">
          <div class="site-content__intro__info">
          <p class="">NG-Rome MMXXII will take place at <a [routerLink]="['/info']">Spazio Novecento</a> in the heart of EUR, an historical neighborhood two steps away from the city center of Rome.</p>
          </div>
          <div class="site-venue"></div>
        </div>
      </div>
      <div class="site-content__wrap">
        <h1 class="tickets_title">Agenda</h1>
        <div class="site-content__intro_info">
          <p>One track, one day, filled with talks of the Angular engineers who build the most performant apps and web experiences.</p>

          <div class="timeline--container">
            <div class="list">
              <ul class="timeline">
                <li class="event" *ngFor="let item of schedule" [attr.data-date]="item.time">
                  <h3>{{item.event}}</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./venue.component.scss'],
})
export class VenueComponent implements OnInit {
  schedule: SCHEDULE[] = [
    {'time': '8:00am',	'event': 'Registration & Coffee'},
    {'time': '9:00am',	'event': 'Opening Remarks'},
    {'time': '9:10am',	'event': 'Opening Keynote'},
    {'time': '9:50am',	'event': 'Talk 1'},
    {'time': '10:15am',	'event': 'Lightning Talk 1'},
    {'time': '10:25am',	'event': 'Sponsor Talk Platinum'},
    {'time': '10:30am',	'event': 'Panel 1'},
    {'time': '10:50am',	'event': 'Coffee Break'},
    {'time': '11:15am',	'event': 'Talk 2'},
    {'time': '11:40am',	'event': 'Lightning Talks 2'},
    {'time': '11:50am',	'event': 'Talk 3'},
    {'time': '12:15pm',	'event': 'Sponsor Talk Platinum'},
    {'time': '12:20pm',	'event': 'Panel 2'},
    {'time': '12:40pm',	'event': 'Lunch'},
    {'time': '1:40pm',	'event': 'Talk 4'},
    {'time': '2:05pm',	'event': 'Lightning Talks 3'},
    {'time': '2:15pm',	'event': 'Talk 5'},
    {'time': '2:40pm',	'event': 'Panel 3'},
    {'time': '3:00pm',	'event': 'Coffee Break'},
    {'time': '3:25pm',	'event': 'Talk 6'},
    {'time': '3:50pm',	'event': 'Closing Keynote'},
    {'time': '4:30pm',	'event': 'Final Panel'},
    {'time': '4:50pm',	'event': 'Closing Remarks'},
    {'time': '5:00pm',	'event': 'After Party'},
  ];
  constructor() {}
  ngOnInit() {}
}
