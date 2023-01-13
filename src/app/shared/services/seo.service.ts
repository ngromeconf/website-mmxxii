import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { EventDateType, EVENT_DATE } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  eventInfo: EventDateType;


  constructor(private meta: Meta, private titleService: Title) {
    this.eventInfo = EVENT_DATE;
  }

  generateTags(tags){

    tags = {
      card: '',
      description: `For the first time ever, the biggest Italian Angular Conference is taking place at NG Rome MMXIX, this year on ${this.eventInfo.when} at the Teatro Italia in Rome, Italy`,
      title: `NG-Rome July ${this.eventInfo.when} - The Italian Angular Conference`,
      site: '@ngromeconf',
      slug: '',
      creator: '@ngromeconf',
      image: 'https://firebasestorage.googleapis.com/v0/b/ngrome-79ce3.appspot.com/o/assets%2Fsocial-home-image-min.jpg?alt=media&token=4754f650-726a-4ff9-86c9-be1bc2191381',
      ...tags
    }

    // Set a title
    this.titleService.setTitle(tags.title);

    // Set meta tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:site', content: '@ngromeconf' });
    this.meta.updateTag({ name: 'twitter:title', content: tags.title });
    this.meta.updateTag({ name: 'twitter:description', content: tags.description });
    this.meta.updateTag({ name: 'twitter:image', content: tags.image });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'ngrome.io' });
    this.meta.updateTag({ property: 'og:title', content: tags.title });
    this.meta.updateTag({ property: 'og:description', content: tags.description });
    this.meta.updateTag({ property: 'og:image', content: tags.image });
    this.meta.updateTag({ property: 'og:url', content: `https://ngrome.io/${tags.slug}` });

  }

}
