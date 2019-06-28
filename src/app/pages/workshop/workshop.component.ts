import { Component, OnInit } from '@angular/core';
import { WorkshopService } from 'src/app/shared/services/workshop.service';

@Component({
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss'],
})
export class WorkshopComponent implements OnInit {

  constructor(
    public workshopService: WorkshopService) {}

  ngOnInit() {
  }

}
