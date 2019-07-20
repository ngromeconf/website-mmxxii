import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgendaComponent } from './agenda.component';
import { ActivityComponent } from './activity/activity.component';
import { TalkComponent } from './talk/talk.component';

@NgModule({
  declarations: [AgendaComponent, ActivityComponent, TalkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AgendaComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ]
})
export class AgendaModule { }
