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
      image: 'https://i.ytimg.com/vi/1awD6ADnEWo/hqdefault.jpg',
      name: 'Angular Architecture',
      description: 'A short description',
      fullDescription: 'A full description with <h1 class="ticket__title">H1 Title</h1> section.',
      visible: true,
      location: 'We are hosted at...',
      start_time: '9:00',
      end_time: '18:00',
    },
  ];

  getWorkshops():Workshop[] {
    console.log(this.workshop);
    return this.workshop;

  }
}
