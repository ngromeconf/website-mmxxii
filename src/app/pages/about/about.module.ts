import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AboutComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ]
})
export class AboutModule { }
