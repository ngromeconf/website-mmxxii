import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Workshop {
  image: string;
  targetUrl: string;
  name: string;
  description: string;
  fullDescription: string;
  visible: boolean;
  location: string;
  start_time: string;
  end_time: string;
  twitter: string[];
}

@Injectable({
  providedIn: 'root',
})
export class WorkshopsService {
  workshop: Workshop[] = [
    {
      image: 'https://pbs.twimg.com/profile_images/1281665915994746880/aqhVyys1_400x400.jpg',
      targetUrl: 'https://ti.to/ngrome-conf/ngrome-conf-mmxxi-online-9th-july-2021#schedule',
      name: ' Stepan Suvorov - Angular Performance Tuning',
      description: '<b>Duration</b>: 2h\n',
      fullDescription: ``,
      visible: true,
      location: 'We are hosted at...',
      start_time: '14:00',
      end_time: '16:00',
      twitter: ['stevermeister'],
    },
    {
      image: 'https://pbs.twimg.com/profile_images/1364683651238273038/C-m4fT-Z_400x400.jpg',
      targetUrl: 'https://ti.to/ngrome-conf/ngrome-conf-mmxxi-online-9th-july-2021#schedule',
      name: 'Gerard Sans - Fullstack GraphQL using Angular v12',
      description: 'Duration 2h',
      fullDescription: ``,
      visible: true,
      location: 'We are hosted at...',
      start_time: '9:00',
      end_time: '17:00',
      twitter: ['John_Papa'],
    },
  ];

  getWorkshops(filter?): Workshop[] {
    let workshops = this.workshop;
    //console.log(filter);
    if (filter) {
      workshops = this.workshop.filter((e) => {
        return e.name === filter.name;
      });
    }
    return workshops;
  }
}
