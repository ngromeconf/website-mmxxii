import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title/main-title.component';
import { SpeakerComponent } from './speakers/speakers.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { BioComponent } from './speakers/speaker-bio/speaker-bio.component';
import { CallForPaperComponent } from './call-for-paper/call-for-paper.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainTitleComponent,
    SpeakerComponent,
    SponsorsComponent,
    BioComponent,
    CallForPaperComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent, pathMatch: 'full'}
    ]),
  ],
  exports: [],
})
export class HomeModule {}
