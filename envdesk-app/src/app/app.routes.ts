import { Routes } from '@angular/router';
import { Template } from '../pages/template/template';

export const routes: Routes = [
  {
    path: '',
    component: Template,
    children: [
      {
        path: '',
        loadComponent: () => import('../pages/home/home').then((m) => m.Home),
      },
    ],
  },
];
