import { Injectable } from '@angular/core';

export interface Sponsor {
  image: string;
  name: string;
  description: string;
  visible: boolean;
  websiteUrl: string;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class SponsorService {
  sponsorList: Sponsor[] = [
    {
      image: './assets/images/sponsor_resized/logo_ng.svg',
      name: 'Angular Roma',
      description: '',
      visible: true,
      websiteUrl: 'https://twitter.com/angularroma',
      type: 'main',
    },
    {
      image: './assets/images/communities/ng-sf.png',
      name: 'Angular San Francisco',
      description: '',
      visible: true,
      websiteUrl: 'https://twitter.com/angularsf',
      type: 'main',
    },
  ];

  getSponsors(type?: string): Sponsor[] {
    let sponsors = this.sponsorList;
    if (type) {
      sponsors = this.sponsorList.filter((e) => {
        return e.type === type;
      });
    }
    return sponsors;
  }
}
