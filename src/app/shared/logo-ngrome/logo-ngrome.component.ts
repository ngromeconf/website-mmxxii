import { Component, OnInit, Input, NgZone } from '@angular/core';
import { trigger, transition, state, useAnimation, style } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { bounceOutUp } from 'ng-animate';

@Component({
  selector: 'ngrome-logo',
  templateUrl: './logo-ngrome.component.html',
  styleUrls: ['./logo-ngrome.component.scss'],
  animations: [
    trigger('bounceOutUp', [
      state('visible', style({ "display": "block"})),
      state('hidden', style({ "display": "none"})),
      transition('visible => hidden', useAnimation(bounceOutUp)),
    ]),
  ]
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
