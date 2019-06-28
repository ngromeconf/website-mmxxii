import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopService, Workshop } from 'src/app/shared/services/workshop.service';

@Component({
  templateUrl: './workshop-detail.component.html',
})
export class WorkshopDetailComponent implements OnInit {
  state$: Observable<object>;
  public workshop: Workshop[];

  constructor(
    private router: Router,
    private _Activatedroute: ActivatedRoute,
    private workshopService: WorkshopService) {}

  ngOnInit() {
    let results = [];
    this._Activatedroute.params.subscribe((name: { name: string }) =>
      results = this.workshopService.getWorkshops(name),
    );

    if (results.length === 1){
      this.workshop = results[0];
    }
  }
}
