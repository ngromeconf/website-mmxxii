import { Component, OnInit } from '@angular/core';
import { Workshop, WorkshopService } from 'src/app/shared/services/workshop.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  templateUrl: './workshop.component.html',
})
export class WorkshopComponent implements OnInit {
  workshop$: Observable<Workshop[]>;

  constructor(private router: Router, private workshopService: WorkshopService) {}

  ngOnInit() {
    this.workshop$ = this.workshopService.getWorkshop();
  }

  navigateToWorkshopDetail(workshop: Workshop) {
    this.router.navigateByUrl(`/workshop/${workshop.name}`, { state: { workshop } });
  }
}
