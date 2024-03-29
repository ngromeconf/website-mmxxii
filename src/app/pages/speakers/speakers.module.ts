//core
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//page
import { SpeakersComponent } from './speakers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpeakerDetailComponent } from './speaker-detail/speaker-detail.component';
import { SpeakerSuggestionComponent } from './speaker-suggestion/speaker-suggestion.component';

@NgModule({
  declarations: [
    SpeakersComponent,
    SpeakerDetailComponent,
    SpeakerSuggestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SpeakersComponent, pathMatch: 'full'},
      {path: 'speaker-detail/:name', component: SpeakerDetailComponent, pathMatch: 'full'},
    ]),
    SharedModule
  ]
})
export class SpeakersModule { }
