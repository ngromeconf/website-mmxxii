import { Component, OnInit } from '@angular/core';
import { Workshop, WorkshopService } from 'src/app/shared/services/workshop.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
