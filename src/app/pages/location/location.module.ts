import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LocationComponent, pathMatch: 'full' }]),
    SharedModule,
  ],
})
export class LocationModule {}
