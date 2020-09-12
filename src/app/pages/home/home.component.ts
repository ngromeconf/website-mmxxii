import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngrome-home',
  template: `
    <ngrome-main-title class="site-content__section"></ngrome-main-title>
    <ngrome-past-edition-video
      class="site-content__section"
    ></ngrome-past-edition-video>
    <ngrome-speakers-list
      class="site-content__section"
      *ngIf="actualPage === 'speakers'"
      [speakerFilter]="speakerFilter"
    >
    </ngrome-speakers-list>

    <!--<ngrome-call-for-paper
      id="cfp"
      class="site-content__section"
    ></ngrome-call-for-paper>-->
    <ngrome-tickets class="site-content__section" id="tickets">
    </ngrome-tickets>

    <!-- <ngrome-sponsors class="site-content__section"></ngrome-sponsors> -->
    <!-- ngrome-partners class="site-content__section"></ngrome-partners -->
  `,
})
export class HomeComponent implements OnInit {
  // Use this boolean if we want to filter the speaker for homepage
  public speakerFilter = true;
  actualPage: string;

  constructor(private router: Router) {
    const urlTree = this.router.parseUrl(this.router.url);
    this.actualPage = urlTree.root.children['primary'].segments
      .map((it) => it.path)
      .join('/');
  }

  ngOnInit() {}
}
