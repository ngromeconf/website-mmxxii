import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintjsProAngularService } from '@fingerprintjs/fingerprintjs-pro-angular';

@Component({
  selector: 'ngrome-home',
  template: `
    <ngrome-main-title class="site-content__section"></ngrome-main-title>
    <ngrome-past-edition-video class="site-content__section"></ngrome-past-edition-video>

    <ngrome-venue class="site-content__section"></ngrome-venue>

    <ngrome-speakers-list
      class="site-content__section"
      *ngIf="actualPage === 'speakers'"
      [speakerFilter]="speakerFilter"
    >
    </ngrome-speakers-list>

    <!-- <ngrome-call-for-paper id="cfp" class="site-content__section"></ngrome-call-for-paper> -->
    <ngrome-tickets class="site-content__section" id="tickets"> </ngrome-tickets>

    <ngrome-sponsors-section
      [title]="'platinum sponsors'"
      [sponsorType]="'platinum'"
      headerColor="sponsor-title__platinum"
    ></ngrome-sponsors-section>
    <ngrome-sponsors-section
      [title]="'gold sponsors'"
      [sponsorType]="'gold'"
      headerColor="sponsor-title__gold"
    ></ngrome-sponsors-section>

    <!-- <ngrome-sponsors class="site-content__section"></ngrome-sponsors> -->

  `,
})
export class HomeComponent implements OnInit {
  // Use this boolean if we want to filter the speaker for homepage
  public speakerFilter = true;
  actualPage: string;

  constructor(private router: Router, private fingerprintjsProAngularService: FingerprintjsProAngularService) {
    const urlTree = this.router.parseUrl(this.router.url);
    this.actualPage = urlTree.root.children['primary'].segments.map((it) => it.path).join('/');
    this.onIdentifyButtonClick();
  }
  visitorId = 'Press "Identify" button to get visitorId';

  async onIdentifyButtonClick() : Promise<void> {
    // Get the visitor identifier when you need it.
    await this.fingerprintjsProAngularService.getVisitorData();
    // this.visitorId = data.visitorId;
    // console.log('VisitorId: ', this.visitorId);

  }

  ngOnInit() {}
}
