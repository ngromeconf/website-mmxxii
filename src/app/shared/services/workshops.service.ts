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
      image: 'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fmmxxii%2Fmike-brian-agenda.png?alt=media&token=d3a553b4-84a6-411c-af2e-e12a356d9c4f',
      targetUrl: 'https://ti.to/ngrome-conf/ngrome-conf-mmxxii-dec-2022',
      name: 'Mike Ryan & Brian Love - Advanced RxJS Workshop: Level up your RxJS skills',
      description: 'Dec 01 - <b>Duration</b>: 7h\n',
      fullDescription: ``,

      visible: true,
      location: 'We are hosted at...',
      start_time: '09:00',
      end_time: '17:00',
      twitter: ['brian_love', 'MikeRyanDev'],
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/partner%2Fnggirls.png?alt=media&token=4f300cae-9b96-402f-bf12-17d37adf63d3',
      targetUrl: 'https://workshops.ng-girls.org/ngRome-2021/',
      name: 'ngGirls @ ngRome',
      description: 'Dec 01 - Duration 7h',
      fullDescription: ``,
      visible: true,
      location: 'We are hosted at...',
      start_time: '9:00',
      end_time: '17:00',
      twitter: ['AngularGirls'],
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
