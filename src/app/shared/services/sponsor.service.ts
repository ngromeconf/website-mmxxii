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
