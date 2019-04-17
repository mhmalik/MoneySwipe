import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: "../app/modules/login/login.module#LoginModule"
  },
  {
    path: "register",
    loadChildren: "../app/modules/registration/register.module#RegisterModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
