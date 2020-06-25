import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title/main-title.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CallForPaperComponent } from './call-for-paper/call-for-paper.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { PartnersComponent } from './partners/partners.component';
import { SharedModule } from '../../shared/shared.module';
import {YoutubePlayerModule} from '../../shared/youtube-player/youtube-player.module';
import { PastEditionVideoComponent } from './past-edition-video/past-edition-video.component';

@NgModule({
  declarations: [
    MainTitleComponent,
    SponsorsComponent,
    CallForPaperComponent,
    HomeComponent,
    PartnersComponent,
    PastEditionVideoComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: HomeComponent, pathMatch: 'full'}
        ]),
        SharedModule,
        YoutubePlayerModule
    ],
  exports: [],
})
export class HomeModule {}
