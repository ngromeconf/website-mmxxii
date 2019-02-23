import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoNgromeComponent } from './logo-ngrome/logo-ngrome.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { ConductComponent } from './conduct/conduct.component';

@NgModule({
  declarations: [
    LogoNgromeComponent,
    FooterComponent,
    TermsComponent,
    ModalComponent,
    HeaderComponent,
    ConductComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LogoNgromeComponent,
    FooterComponent,
    TermsComponent,
    ModalComponent,
    HeaderComponent,
    ConductComponent
  ],
})
export class SharedModule {}
