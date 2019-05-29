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
      websiteUrl: 'https://www.blexin.com/',
      type: 'gold'
    }
  ];

  getSponsors(type=null): Sponsor[] {
    let sponsors = this.sponsorList;

    if (type === 'gold'){
      sponsors = this.sponsorList.filter( (e) => {
        return (e.type === type);
      });
    }
    if (type === 'main'){
      sponsors = this.sponsorList.filter( (e) => {
        return (e.type === type);
      });
    }

    return sponsors;
  }
}
