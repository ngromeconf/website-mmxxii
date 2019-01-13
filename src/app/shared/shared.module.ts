import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoNgromeComponent } from './logo-ngrome/logo-ngrome.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LogoNgromeComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [LogoNgromeComponent, FooterComponent]
})
export class SharedModule { }
