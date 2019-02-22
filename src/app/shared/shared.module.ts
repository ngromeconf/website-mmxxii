import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoNgromeComponent } from './logo-ngrome/logo-ngrome.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { ModalComponent } from './modal/modal.component';
import { TicketModalComponent } from './ticket-modal/ticket-modal.component';

@NgModule({
  declarations: [
    LogoNgromeComponent,
    FooterComponent,
    TermsComponent,
    ModalComponent,
    TicketModalComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LogoNgromeComponent,
    FooterComponent,
    TermsComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
