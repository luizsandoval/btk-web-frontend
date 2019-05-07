import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    // canActivate: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not Found'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
