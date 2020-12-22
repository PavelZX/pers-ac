import { Routes } from '@angular/router';
import { AppLayoutComponent } from '@mt/pers-ac/ui';
import { AuthGuard, LoginComponent } from '@mt/pers-ac/auth';

const defaultRoute = '/admin/pers-ac';

export const children: Routes = [
  {
    path: 'pers-ac',
    loadChildren: '@mt/pers-ac/contacts#PersAcContactsModule'
  }
];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: defaultRoute
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: AppLayoutComponent,
        canActivate: [AuthGuard],
        children: children
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
