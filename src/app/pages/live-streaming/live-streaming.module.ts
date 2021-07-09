import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LiveStreamingComponent } from './live-streaming.component';
import { YouTubePlayerModule as AngularYouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [LiveStreamingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LiveStreamingComponent, pathMatch: 'full' }]),
    SharedModule,
    AngularYouTubePlayerModule,
  ],
})
export class LiveStreamingModule {}
