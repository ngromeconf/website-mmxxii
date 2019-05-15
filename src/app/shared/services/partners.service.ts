import { Injectable } from '@angular/core';

export interface Partner{
  image: string;
  name: string;
  description: string;
  visible: boolean;
  websiteUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  partners: Partner[]  = [
    {
      websiteUrl: 'https://twitter.com/angularrome',
      name: 'Angular Roma',
      description: '',
      visible: true,
      image: './assets/images/ng-rome.png'
    },
    {
      websiteUrl: 'https://twitter.com/angularsf',
      name: 'Angular San Francisco',
      description: '',
      visible: true,
      image: './assets/images/ng-sf.png'
    },
    {
      websiteUrl: 'https://twitter.com/AngularVienna',
      name: 'Angular Vienna',
      description: '',
      visible: true,
      image: './assets/images/ng-vienna.png'
    },
    {
      websiteUrl: 'https://twitter.com/swissangular',
      name: 'Swiss Angular',
      description: '',
      visible: true,
      image: './assets/images/swiss-angular.png'
    },
    {
      websiteUrl: 'https://ngvikings.org',
      name: 'ngVikings',
      description: '',
      visible: true,
      image: './assets/images/ng-vikings.png'
    },
    {
      websiteUrl: 'https://ng-atl.org/',
      name: 'ngAtlanta',
      description: '',
      visible: true,
      image: './assets/images/ng-atlanta.png'
    },
    {
      websiteUrl: 'https://www.meetup.com/AngularJS-Bucharest/',
      name: 'ngBucharest',
      description: '',
      visible: true,
      image: './assets/images/ng-bucharest.png'
    },    
    {
      image: './assets/images/gdg-roma.png',
      name: 'GDG Roma',
      description: '',
      visible: true,
      websiteUrl: 'https://www.meetup.com/it-IT/GDG-Roma/'
    },
    {
      image: './assets/images/gdg-vda.png',
      name: 'GDG Valle d\'Aosta',
      description: '',
      visible: true,
      websiteUrl: 'https://www.gdgvda.it/'
    },
    {
      websiteUrl: 'https://www.meetup.com/GDG-Bari/',
      name: 'GDG Bari',
      description: '',
      visible: true,
      image: './assets/images/gdg-bari.png'
    },
    {
      websiteUrl: 'https://www.meetup.com/it-IT/gdgbologna/',
      name: 'GDG Bologna',
      description: '',
      visible: true,
      image: './assets/images/gdg-bologna.png'
    },
    {
      websiteUrl: 'http://romajs.org/',
      name: 'Roma JS',
      description: '',
      visible: true,
      image: './assets/images/roma-js.png'
    },
    {
      websiteUrl: 'https://www.meetup.com/it-IT/Agile_Talks/',
      name: 'Swiss Angular',
      description: '',
      visible: true,
      image: './assets/images/agile-talks.png'
    },
  ];

  getPartner(){
    return this.partners;
  }


}
