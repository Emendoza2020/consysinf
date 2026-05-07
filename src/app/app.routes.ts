import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home')
      .then(m => m.Home)
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios')
      .then(m => m.Servicios)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contactos/contactos')
      .then(m => m.Contactos)
  },
  {
    path: '**', redirectTo: ''
  }
];


