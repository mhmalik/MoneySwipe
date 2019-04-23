import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, RegisterRoutingModule } from './register-routing.module';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { OneTimePasswordComponent } from './components/one-time-password/one-time-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CoreModule } from '../core';
import { NgxMaskModule } from 'ngx-mask';
import { NgxLoadingModule } from 'ngx-loading';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        CoreModule,
        NgxMaskModule.forRoot()
    ],
    providers: [],
    declarations: [routedComponents, OneTimePasswordComponent, SignInComponent]
})

export class RegisterModule { }
