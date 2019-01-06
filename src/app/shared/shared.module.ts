import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoNgromeComponent } from './logo-ngrome/logo-ngrome.component';

@NgModule({
  declarations: [LogoNgromeComponent],
  imports: [
    CommonModule
  ],
  exports: [LogoNgromeComponent]
})
export class SharedModule { }
