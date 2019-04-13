import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoNgromeComponent } from './logo-ngrome/logo-ngrome.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { ConductComponent } from './conduct/conduct.component';
import { SpeakerListComponent } from './speakers-list/speakers-list.component';
import { SpeakerBioComponent } from './speakers-list/speaker-bio/speaker-bio.component';
import { HomeSpeakersPipe } from './pipes/home-speakers.pipe';

@NgModule({
  declarations: [
    LogoNgromeComponent,
    FooterComponent,
    TermsComponent,
    ModalComponent,
    HeaderComponent,
    ConductComponent,
    SpeakerListComponent,
    SpeakerBioComponent,
    HomeSpeakersPipe
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LogoNgromeComponent,
    FooterComponent,
    TermsComponent,
    ModalComponent,
    HeaderComponent,
    ConductComponent,
    SpeakerListComponent,
    SpeakerBioComponent
  ],
})
export class SharedModule {}
