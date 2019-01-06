import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title/main-title.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

@NgModule({
  declarations: [MainTitleComponent, SpeakerComponent, SponsorsComponent],
  imports: [
    CommonModule
  ],
  exports: [MainTitleComponent, SpeakerComponent]
})
export class HomeModule { }
