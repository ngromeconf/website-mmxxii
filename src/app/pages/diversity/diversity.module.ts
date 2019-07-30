import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiversityComponent } from './diversity.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DiversityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: DiversityComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ]
})
export class DiversityModule { }
