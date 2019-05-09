import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //use this boolean if we want to filter the speaker for homepage
  public speakerFilter = true;

  constructor() { }

  ngOnInit() {

  }

}
