import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SponsorsComponent } from './sponsors.component';


@NgModule({
  declarations: [SponsorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SponsorsComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ]
})
export class SponsorsModule { }
