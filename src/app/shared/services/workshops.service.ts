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
}

@Injectable({
  providedIn: 'root',
})
export class WorkshopsService {
  workshop: Workshop[] = [
    {
      image: 'https://angularconnect.com/perch/resources/nggirls.png',
      targetUrl: 'http://ng-girls.org/ngRome-2019/',
      name: 'Ng Girls Workshop',
      description: 'A short description',
      fullDescription: `
       We believe that the IT industry will greatly benefit from bringing more women into technology. \n
       We want to give you an opportunity to learn how to program and become a programmer. 
       Our plan is to offer a workshop in Rome. <br /><br />
       <b>Who is it for?</b>
       <br /><br />
       Are you a woman interested in learning how to build web applications with the latest technologies? 
       We have good news for you: We are holding a one-day workshop for beginners! 
       It will take place on Sunday, October 6th, at the Teatro Italia in Rome, Italy. 
       We believe that the IT industry will greatly benefit from bringing more women into technology. 
       We want to give you an opportunity to learn how to program and become a programmer.
      `,
      visible: true,
      location: 'We are hosted at...',
      start_time: '9:00',
      end_time: '17:00',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/speaker%2Fdan-john.png?alt=media&token=1c969c7b-5bb8-40ca-9811-1a15bc81f0e4',
      targetUrl: 'https://www.eventbrite.it/e/ng-rome-mmxix-angular-conference-tickets-54968197358',
      name: 'Angular Architecture by John Papa and Dan Wahlin',
      description: 'A short description',
      fullDescription: 'Are you building Angular apps today? Are you following established best practices? How easy will it be to maintain and refactor the application in the future? If you’re starting a new application from scratch, what application architecture should be used? These types of questions are common when building any type of application especially when you’re focused on meeting a deadline. While there’s a lot of information out there about the core concepts of Angular, very little focuses on architectural concepts, best practices, and how to solve some of the more challenging tasks that come up. That’s the purpose of this workshop.',
      visible: true,
      location: 'We are hosted at...',
      start_time: '9:00',
      end_time: '17:00',
    },
  ];

  getWorkshops(filter?): Workshop[]{
      let workshops = this.workshop;
      //console.log(filter);
      if (filter){
        workshops = this.workshop.filter( (e) => {
          return (e.name === filter.name);
        });
      }
      return workshops;
  }
}
