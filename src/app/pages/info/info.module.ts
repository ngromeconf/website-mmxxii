import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: InfoComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ]
})
export class InfoModule { }
