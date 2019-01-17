import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorComponent } from './sponsor.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SponsorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SponsorComponent, pathMatch: 'full'}
    ]),
  ]
})
export class SponsorModule { }
