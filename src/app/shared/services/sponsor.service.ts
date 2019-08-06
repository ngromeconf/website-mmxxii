import { Injectable } from '@angular/core';

export interface Sponsor{
  image: string;
  name: string;
  description: string;
  visible: boolean;
  websiteUrl: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  sponsorList: Sponsor[] = [
    {
      image: './assets/images/ng-rome.png',
      name: 'Angular Roma',
      description: '',
      visible: true,
      websiteUrl: 'https://twitter.com/angularroma',
      type: 'main'
    },
    {
      image: './assets/images/ng-sf.png',
      name: 'Angular San Francisco',
      description: '',
      visible: true,
      websiteUrl: 'https://twitter.com/angularsf',
      type: 'main'
    },
    {
      image: './assets/images/skaffolder_logo-nero.svg',
      name: 'Skaffolder',
      description: '',
      visible: true,
      websiteUrl: 'https://www.skaffolder.com/',
      type: 'main'
    },
    {
      image: './assets/images/blexin_cropped.svg',
      name: 'Blexin',
      description: '',
      visible: true,
      websiteUrl: 'https://www.blexin.com/en-US/Home',
      type: 'gold'
    },
    {
      image: './assets/images/keypartner.svg',
      name: 'KEYPARTNER',
      description: '',
      visible: true,
      websiteUrl: 'https://www.keypartner.com',
      type: 'silver'
    },
    {
      image: './assets/images/briebug.png',
      name: 'Briebug',
      description: 'Angular Consulting | Training | Architectural Reviews',
      visible: true,
      websiteUrl: 'https://www.briebug.com/',
      type: 'diversity'
    },
    {
      image: './assets/images/02-sticker-mule.svg',
      name: 'Sticker Mule',
      description: 'Thousands of people trust us to make kick ass stickers, labels, magnets & more. Get free proofs, free shipping, 4 day turnaround & 24/7 customer support.',
      visible: true,
      websiteUrl: 'http://stickermule.com/supports/ngrome19-sponsorship',
      type: 'other'
    },
    {
      image: './assets/images/hotels.com.png',
      name: 'Hotels.com',
      description: 'Hotels.com - Deals & Discounts for Hotel Reservations from Luxury Hotels to Budget Accommodations',
      visible: true,
      websiteUrl: 'https://it.hotels.com/de1750353/hotel-in-zona-piazza-bologna-roma-italia/',
      type: 'other'
    },
    {
      image: './assets/images/jetbrains.svg',
      name: 'JetBrains',
      description: 'JetBrains: Developer Tools for Professionals and Teams',
      visible: true,
      websiteUrl: 'https://www.jetbrains.com',
      type: 'other'
    }
  ];

  getSponsors(type?:string): Sponsor[] {
    let sponsors = this.sponsorList;
    if (type){
      sponsors = this.sponsorList.filter( (e) => {
        return (e.type === type);
      });
    }
    return sponsors;
  }

}
