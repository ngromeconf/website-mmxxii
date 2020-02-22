import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { ConductComponent } from './conduct/conduct.component';
import { SpeakerListComponent } from './speakers-list/speakers-list.component';
import { SpeakerBioComponent } from './speakers-list/speaker-bio/speaker-bio.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    FooterComponent,
    TermsComponent,
    ModalComponent,
    HeaderComponent,
    ConductComponent,
    SpeakerListComponent,
    SpeakerBioComponent,
    TicketsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    TermsComponent,
    ModalComponent,
    HeaderComponent,
    ConductComponent,
    SpeakerListComponent,
    SpeakerBioComponent,
    TicketsComponent,
  ],
})
export class SharedModule {}
