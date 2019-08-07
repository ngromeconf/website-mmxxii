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
      image: './assets/images/sponsor_resized/logo_ng.svg',
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
      image: './assets/images/sponsor_resized/logo_skaffolder.svg',
      name: 'Skaffolder',
      description: '',
      visible: true,
      websiteUrl: 'https://www.skaffolder.com/',
      type: 'main'
    },
    {
      image: './assets/images/sponsor_resized/logo_blexin.svg',
      name: 'Blexin',
      description: '',
      visible: true,
      websiteUrl: 'https://www.blexin.com/en-US/Home',
      type: 'gold'
    },
    ,
    {
      image: './assets/images/sponsor_resized/logo_tag.svg',
      name: 'Talent Garden',
      description: '',
      visible: true,
      websiteUrl: 'https://talentgarden.org/en-it/',
      type: 'gold'
    },
    {
      image: './assets/images/sponsor_resized/logo_kp-mod.svg',
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
      image: './assets/images/sponsor_resized/logo_stickermule.svg',
      name: 'Sticker Mule',
      description: 'Thousands of people trust us to make kick ass stickers, labels, magnets & more. Get free proofs, free shipping, 4 day turnaround & 24/7 customer support.',
      visible: true,
      websiteUrl: 'http://stickermule.com/supports/ngrome19-sponsorship',
      type: 'other'
    },
    {
      image: './assets/images/sponsor_resized/logo_hotels.svg',
      name: 'Hotels.com',
      description: 'Hotels.com - Deals & Discounts for Hotel Reservations from Luxury Hotels to Budget Accommodations',
      visible: true,
      websiteUrl: 'https://it.hotels.com/de1750353/hotel-in-zona-piazza-bologna-roma-italia/',
      type: 'other'
    },
    {
      image: './assets/images/sponsor_resized/logo_jetbrains.svg',
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
