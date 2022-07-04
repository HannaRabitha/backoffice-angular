import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'admin',
  loadChildren:()=> import('./admin/admin.module').then(mod=>mod.AdminModule) //??????
  },
  {
    path: 'public',
  loadChildren:()=> import('./public/public.module').then(mod=>mod.PublicModule) //??????
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
