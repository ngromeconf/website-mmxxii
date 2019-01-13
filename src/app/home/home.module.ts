import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title/main-title.component';
import { SpeakerComponent } from './speakers/speakers.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { BioComponent } from './speakers/speaker-bio/speaker-bio.component';
import { CallForPaperComponent } from './call-for-paper/call-for-paper.component';

@NgModule({
  declarations: [
    MainTitleComponent,
    SpeakerComponent,
    SponsorsComponent,
    BioComponent,
    CallForPaperComponent,
  ],
  imports: [CommonModule],
  exports: [
    MainTitleComponent,
    SpeakerComponent,
    CallForPaperComponent,
    SponsorsComponent,
  ],
})
export class HomeModule {}
