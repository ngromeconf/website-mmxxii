import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkshopComponent } from './workshop.component';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [WorkshopComponent, WorkshopDetailComponent, TicketsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WorkshopComponent, pathMatch: 'full' },
      { path: 'workshop-detail/:name', component: WorkshopDetailComponent },
    ]),
    SharedModule,
  ],
})
export class WorkshopModule {}
