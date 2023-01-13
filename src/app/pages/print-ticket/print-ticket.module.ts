import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintTicketComponent } from './print-ticket.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PrintTicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'detail/:firstname/:lastname', component: PrintTicketComponent, pathMatch: 'full'},
      {path: '', redirectTo: '/home'}
    ]),
  ]
})
export class PrintTicketModule { }
