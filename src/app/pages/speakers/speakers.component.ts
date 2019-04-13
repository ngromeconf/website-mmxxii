import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  //use this boolean if we want to filter the speaker for homepage
  public speakerFilter = false;


  constructor() { }

  ngOnInit() {
  }

}
