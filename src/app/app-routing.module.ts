import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
  },
  {
    path: 'info',
    loadChildren: './pages/info/info.module#InfoModule',
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule',
  },
  {
    path: 'sponsors',
    loadChildren: './pages/sponsors/sponsors.module#SponsorsModule',
  },
  {
    path: 'speakers',
    loadChildren: './pages/speakers/speakers.module#SpeakersModule',
  },
  {
    path: 'workshop',
    loadChildren: './pages/workshop/workshop.module#WorkshopModule',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
