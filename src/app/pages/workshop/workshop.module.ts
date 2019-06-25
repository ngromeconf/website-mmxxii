import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkshopComponent } from './workshop.component';
import { WorkshopDetailComponent } from './workshop-detail/workshop-detail.component';

@NgModule({
  declarations: [WorkshopComponent, WorkshopDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WorkshopComponent, pathMatch: 'full' },
      { path: 'workshop-detail', component: WorkshopDetailComponent },
    ]),
    SharedModule,
  ],
})
export class WorkshopModule {}
