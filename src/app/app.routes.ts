import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'programacao',
    loadComponent: () => import('./pages/programacao/programacao.page').then( m => m.ProgramacaoPage)
  },
  {
    path: 'curiosidades',
    loadComponent: () => import('./pages/curiosidades/curiosidades.page').then( m => m.CuriosidadesPage)
  },
];


