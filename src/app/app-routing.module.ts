import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: "../app/modules/menu/menu.module#MenuModule"
  },
  {
    path: "register",
    loadChildren: "../app/modules/registration/register.module#RegisterModule"
  },
  {
    path: "login",
    loadChildren: "../app/modules/login/login.module#LoginModule"
  },
  {
    path: "dashboard",
    loadChildren: "../app/modules/dashboard/dashboard.module#DashboardModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
