import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { OneTimePasswordComponent } from './components/one-time-password/one-time-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
    {
        path: '', children: [
            {
                path: '', component: RegisterComponent
            },
            {
                path: 'OTP', component: OneTimePasswordComponent
            },
            {
                path: 'sign', component: SignInComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }

export const routedComponents = [RegisterComponent];