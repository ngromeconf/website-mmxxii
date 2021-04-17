import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private titleService: Title) { }

  generateTags(tags){

    tags = {
      card: '',
      description: 'For the first time ever, the biggest Italian Angular Conference is taking place at NG Rome MMXIX, this year on October 7th at the Teatro Italia in Rome, Italy',
      title: 'NG-Rome July 9th 2021 - The Italian Angular Conference',
      site: '@ngromeconf',
      slug: '',
      creator: '@ngromeconf',
      image: 'https://ngrome.io/assets/icons/ngrome-red.png',
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
