import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorComponent } from './sponsor.component';
import { RouterModule } from '@angular/router';
import { SponsorDetailListComponent } from './sponsor-detail-list/sponsor-detail-list.component';

@NgModule({
  declarations: [SponsorComponent, SponsorDetailListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SponsorComponent, pathMatch: 'full'}
    ]),
  ]
})
export class SponsorModule { }
