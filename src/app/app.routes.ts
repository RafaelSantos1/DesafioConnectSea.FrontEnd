import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: 'escalas',
    loadComponent: () => import('./components/escala/escala-list/escala-list')
                          .then(m => m.EscalaList)
   },
   {
    path: 'manifestos',
    loadComponent: () => import('./components/manifesto/manifesto-list/manifesto-list')
                          .then(m => m.ManifestoList)
   },
    { path: '', redirectTo: '/manifestos', pathMatch: 'full' }
];
