import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    declarations: [routedComponents]
})

export class LoginModule { }
