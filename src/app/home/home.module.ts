import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title/main-title.component';
import { SpeakerComponent } from './speakers/speakers.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { BioComponent } from './speakers/speaker-bio/speaker-bio.component';

@NgModule({
  declarations: [MainTitleComponent, SpeakerComponent, SponsorsComponent, BioComponent],
  imports: [
    CommonModule
  ],
  exports: [MainTitleComponent, SpeakerComponent]
})
export class HomeModule { }
