import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueComponent } from './venue.component';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VenueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: VenueComponent, pathMatch: 'full' }]),
    SharedModule,
  ],
})
export class LocationModule {}
