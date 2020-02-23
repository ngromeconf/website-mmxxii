import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubePlayerWithCoversComponent } from './youtube-player-with-covers/youtube-player-with-covers.component';
import {YouTubePlayerModule as AngularYouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [YoutubePlayerWithCoversComponent],
  exports: [YoutubePlayerWithCoversComponent],
  imports: [
    CommonModule,
    AngularYouTubePlayerModule
  ]
})
export class YoutubePlayerModule { }
