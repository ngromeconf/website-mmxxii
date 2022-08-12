import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    data: { title: 'NG Rome MMXIX - The Italian Angular Conference' },
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then((m) => m.InfoModule),
    data: { title: 'NG Rome MMXIX - Info' },
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule),
    data: { title: 'NG Rome MMXIX - About' },
  },
  {
    path: 'sponsors',
    loadChildren: () => import('./pages/sponsors/sponsors.module').then((m) => m.SponsorsModule),
    data: { title: 'NG Rome MMXIX - Sponsors' },
  },
  {
    path: 'speakers',
    loadChildren: () => import('./pages/speakers/speakers.module').then((m) => m.SpeakersModule),
    data: { title: 'NG Rome MMXIX - Speakers' },
  },
  {
    path: 'workshops',
    loadChildren: () => import('./pages/workshops/workshops.module').then((m) => m.WorkshopsModule),
    data: { title: 'NG Rome MMXIX - Workshops' },
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then((m) => m.AgendaModule),
    data: { title: 'NG Rome MMXIX - Agenda' },
  },
  {
    path: 'diversity',
    loadChildren: () => import('./pages/diversity/diversity.module').then((m) => m.DiversityModule),
    data: { title: 'NG Rome MMXIX - Diversity' },
  },
  {
    path: 'live-streaming',
    loadChildren: () =>
      import('./pages/live-streaming/live-streaming.module').then((m) => m.LiveStreamingModule),
    data: { title: 'NG Rome MMXIX - Live Streaming' },
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
    data: { title: 'NG Rome MMXIX - Admin Page' },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: { title: 'NG Rome MMXIX - The Italian Angular Conference' },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
