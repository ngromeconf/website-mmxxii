import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';


@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce, {
      // Set the duration to 5seconds and delay to 2seconds
      params: { timing: 2, delay: 0 }
    }))])
  ],
})
export class SpeakerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
