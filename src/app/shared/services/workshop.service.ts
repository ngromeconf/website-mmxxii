import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Workshop {
  image: string;
  name: string;
  description: string;
  fullDescription: string;
  visible: boolean;
  location: string;
  start_time: string;
  end_time: string;
}

@Injectable({
  providedIn: 'root',
})
export class WorkshopService {
  workshop: Workshop[] = [
    {
      image: 'https://angularconnect.com/perch/resources/nggirls.png',
      name: 'Ng Girls Workshop',
      description: 'A short description',
      fullDescription: 'A full description with <h1 class="ticket__title">H1 Title</h1> section.',
      visible: true,
      location: 'We are hosted at...',
      start_time: '9:00',
      end_time: '18:00',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fdan-john.png?alt=media&token=1c969c7b-5bb8-40ca-9811-1a15bc81f0e4',
      name: 'Angular Architecture',
      description: 'A short description',
      fullDescription: 'A full description with <h1 class="ticket__title">H1 Title</h1> section.',
      visible: true,
      location: 'We are hosted at...',
      start_time: '9:00',
      end_time: '18:00',
    },
  ];

  getWorkshops(filter?):Workshop[]{
      let workshops = this.workshop;
      console.log(filter);
      if (filter){
        workshops = this.workshop.filter( (e) => {
          return (e.name === filter.name);
        });
      }
      return workshops;
  }
}
