import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeOfConductComponent } from './code-of-conduct.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CodeOfConductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CodeOfConductComponent, pathMatch: 'full'}
    ]),
  ]
})
export class CodeOfConductModule { }
