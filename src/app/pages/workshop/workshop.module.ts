import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkshopComponent } from './workshop.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [WorkshopComponent, TicketsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WorkshopComponent, pathMatch: 'full' },
    ]),
    SharedModule,
  ],
})
export class WorkshopModule {}
