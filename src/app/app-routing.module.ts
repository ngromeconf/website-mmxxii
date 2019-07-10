import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgPerfume, PerfumeModule, PerfumeAfterViewInit } from 'perfume.js/angular';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    data: { title: 'NG Rome October 7th - The Italian Angular Conference' }
  },
  {
    path: 'info',
    loadChildren: './pages/info/info.module#InfoModule',
    data: { title: 'NG Rome October 7th - Info'}
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule',
    data: { title: 'NG Rome October 7th - About'}
  },
  {
    path: 'sponsors',
    loadChildren: './pages/sponsors/sponsors.module#SponsorsModule',
    data: { title: 'NG Rome October 7th - Sponsors'}
  },
  {
    path: 'speakers',
    loadChildren: './pages/speakers/speakers.module#SpeakersModule',
    data: { title: 'NG Rome October 7th - Speakers'}
  },
  {
    path: 'workshops',
    loadChildren: './pages/workshops/workshops.module#WorkshopsModule',
    data: { title: 'NG Rome October 7th - Workshops'}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { title: 'NG Rome October 7th - The Italian Angular Conference' }
  },
];

// Perfume.js config, supports AOT and DI
export const PerfumeConfig = {
  firstContentfulPaint: true,
  firstInputDelay: true,
};

@NgModule({
  imports: [PerfumeModule.forRoot(PerfumeConfig), RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
