import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkshopsComponent } from './workshops.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [WorkshopsComponent, TicketsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WorkshopsComponent, pathMatch: 'full' },
    ]),
    SharedModule,
  ],
})
export class WorkshopsModule {}
