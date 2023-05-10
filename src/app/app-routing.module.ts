import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:"",component:LoginPageComponent},
  {path:"user",loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
