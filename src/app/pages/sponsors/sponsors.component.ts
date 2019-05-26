import { Component, OnInit } from '@angular/core';
import { PartnersService } from 'src/app/shared/services/partners.service';

@Component({
  selector: 'ngrome-sponsors',
  templateUrl: './sponsors.component.html',
  styles: [`
    section {
      margin-top: 40px;
    }
    img {
      max-width: 106px;
    }
  `]
})
export class SponsorsComponent implements OnInit {

  constructor(public partnerService: PartnersService) { }

  ngOnInit() {
  }

}
