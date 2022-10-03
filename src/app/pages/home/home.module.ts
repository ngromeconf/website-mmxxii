import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title/main-title.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CallForPaperComponent } from './call-for-paper/call-for-paper.component';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { PastEditionVideoComponent } from './past-edition-video/past-edition-video.component';
import { VenueComponent } from './venue/venue.component';

@NgModule({
  declarations: [
    MainTitleComponent,
    SponsorsComponent,
    CallForPaperComponent,
    HomeComponent,
    VenueComponent,
    PastEditionVideoComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: HomeComponent, pathMatch: 'full'}
        ]),
        SharedModule,
    ],
  exports: [],
})
export class HomeModule {}
