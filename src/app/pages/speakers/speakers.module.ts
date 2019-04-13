//core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//page
import { SpeakersComponent } from './speakers.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SpeakersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SpeakersComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ]
})
export class SpeakersModule { }
