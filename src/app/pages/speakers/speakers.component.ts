import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';


@Component({
  selector: 'ngrome-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {

  //use this boolean if we want to filter the speaker for homepage
  public speakerFilter = false;


  constructor(
    private animateScrollService: NgAnimateScrollService) {

  }

  scrollTo(el:string, duration?:number) {
    this.animateScrollService.scrollToElement(el, duration);
  }



}
