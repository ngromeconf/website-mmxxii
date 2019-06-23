import { Component, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/shared/services/partners.service';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';
import { SponsorService } from 'src/app/shared/services/sponsor.service';

@Component({
  selector: 'ngrome-pages-sponsors',
  templateUrl: './sponsors.component.html'
})
export class SponsorsComponent implements OnInit {

  constructor(
    public partnerService: PartnersService,
    public sponsorService: SponsorService,
    private animateScrollService: NgAnimateScrollService) { }

  ngOnInit() {
  }

  scrollTo(el:string, duration?:number) {
    this.animateScrollService.scrollToElement(el, duration);
  }

}
