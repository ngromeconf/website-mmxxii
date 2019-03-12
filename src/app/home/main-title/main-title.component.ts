import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'src/app/shared/services/ng-animate-scroll.service';


@Component({
  selector: 'ngrome-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.scss']
})
export class MainTitleComponent implements OnInit {

  constructor(private animateScrollService: NgAnimateScrollService) { }

  ngOnInit() {
  }

  scrollTo(el:string, duration?:number) {
    this.animateScrollService.scrollToElement(el, duration);
  }

}
