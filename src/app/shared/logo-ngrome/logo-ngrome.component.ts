import { Component, OnInit, Input, NgZone } from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { bounceOutUp } from 'ng-animate';
import TweenMax from "gsap/TweenMax";

@Component({
  selector: 'ngrome-logo',
  templateUrl: './logo-ngrome.component.html',
  styleUrls: ['./logo-ngrome.component.scss'],
})
export class LogoNgromeComponent implements OnInit {

  logoStatus = 'visible';

  constructor(private route: ActivatedRoute,
    private zone: NgZone) { }

  ngOnInit() {

  }

  ngOnchanges(){

  }

  ngAfterViewInit(){
    console.log('hide logo');
    setTimeout(() => {
      this.logoStatus = 'hidden';
    }, 0);

  }

}
