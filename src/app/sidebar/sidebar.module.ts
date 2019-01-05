import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarComponent, MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent, MenuComponent
  ]
})
export class SidebarModule { }
