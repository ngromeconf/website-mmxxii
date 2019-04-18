import { Component, OnInit } from '@angular/core';
import { SponsorService } from 'src/app/shared/services/sponsor.service';

@Component({
  selector: 'ngrome-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  constructor(public sponsorService: SponsorService) { }

  ngOnInit() {
  }

}
