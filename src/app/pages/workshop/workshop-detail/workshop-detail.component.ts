import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Workshop } from 'src/app/shared/services/workshop.service';

@Component({
  templateUrl: './workshop-detail.component.html',
})
export class WorkshopDetailComponent implements OnInit {
  state$: Observable<object>;
  workshop: Workshop;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
    this.state$.subscribe(state => {
      if (!state.hasOwnProperty('workshop')) {
        console.log('refresh');
        this.router.navigate(['workshop']);
      } else {
        console.log('get state workshop');
        this.workshop = state['workshop'];
      }
    });
  }
}
