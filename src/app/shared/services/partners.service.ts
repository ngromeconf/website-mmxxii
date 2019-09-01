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
      websiteUrl: 'https://www.codemotion.com/',
      name: 'Codemotion',
      description: '',
      visible: true,
      image: './assets/images/codemotion.png'
    },
    {
      websiteUrl: 'https://twitter.com/AngularVienna',
      name: 'Angular Vienna',
      description: '',
      visible: true,
      image: './assets/images/ng-vienna.png'
    },
    {
      websiteUrl: 'http://ng-girls.org/',
      name: 'ngGirls',
      description: '',
      visible: true,
      image: './assets/images/ng-girls.png'
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
      websiteUrl: 'https://twitter.com/swissangular',
      name: 'Swiss Angular',
      description: '',
      visible: true,
      image: './assets/images/swiss-angular.png'
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
      websiteUrl: 'https://djangogirls.org/',
      name: 'Django Girls',
      description: '',
      visible: true,
      image: './assets/images/django-girls-italy.png'
    },
    {
      websiteUrl: 'https://www.meetup.com/it-IT/gdgbologna/',
      name: 'GDG Bologna',
      description: '',
      visible: true,
      image: './assets/images/gdg-bologna.png'
    },
    {
      websiteUrl: 'https://www.meetup.com/GDG-Pescara/',
      name: 'GDG Pescara',
      description: '',
      visible: true,
      image: './assets/images/gdg-pescara.png'
    },
    {
      websiteUrl: 'https://www.meetup.com/it-IT/GDGCampania/',
      name: 'GDG Campania',
      description: '',
      visible: true,
      image: './assets/images/gdg-campania.jpg'
    },
    {
      websiteUrl: 'http://romajs.org/',
      name: 'Roma JS',
      description: '',
      visible: true,
      image: './assets/images/roma-js.png'
    },
    {
      websiteUrl: 'https://www.meetup.com/GDG-Toulouse/',
      name: 'GDG Toulouse',
      description: '',
      visible: true,
      image: './assets/images/gdg-toulouse.png'
    },
    {
      websiteUrl: 'http://www.gdgreggioemilia.it/',
      name: 'GDG Reggio Emilia',
      description: '',
      visible: true,
      image: './assets/images/gdg-reggio-emilia.png'
    },
    {
      websiteUrl: 'https://www.meetup.com/it-IT/Agile_Talks/',
      name: 'Swiss Angular',
      description: '',
      visible: true,
      image: './assets/images/agile-talks.png'
    },
    {
      websiteUrl: 'https://www.meetup.com/it-IT/DotNetCode/',
      name: 'DotNetCode',
      description: '',
      visible: true,
      image: './assets/images/DotNetCode.png'
    },
    {
      websiteUrl: 'https://gdgtorino.it/',
      name: 'GDG Torino',
      description: '',
      visible: true,
      image: './assets/images/gdg-torino.png'
    },
    {
      websiteUrl: 'https://www.meetup.com/it-IT/GDG-Venezia/',
      name: 'GDG Venezia',
      description: '',
      visible: true,
      image: './assets/images/gdg-venezia.png'
    },
    {
      websiteUrl: 'https://gdgtrento.it/',
      name: 'GDG Trento',
      description: '',
      visible: true,
      image: './assets/images/gdg-trento.png'
    },
    {
      websiteUrl: 'https://gdgpisa.it/',
      name: 'GDG Pisa',
      description: '',
      visible: true,
      image: './assets/images/gdg-pisa.png'
    },
    {
      websiteUrl: 'https://www.facebook.com/womentechmakersit/',
      name: 'Women Tech Maker - Italia',
      description: '',
      visible: true,
      image: './assets/images/wtm-italia.png'
    },
    {
      websiteUrl: 'https://www.gdgcatania.org/',
      name: 'GDG Catania',
      description: '',
      visible: true,
      image: './assets/images/gdg-catania.jpg'
    },
    {
      websiteUrl: 'http://www.gdgnebrodi.info/',
      name: 'GDG Nebrodi',
      description: '',
      visible: true,
      image: './assets/images/gdg-nebrodi.png'
    },
  ];

  getPartner(){
    return this.partners;
  }


}
