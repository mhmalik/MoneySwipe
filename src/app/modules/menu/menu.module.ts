import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, MenuRoutingModule } from './menu-routing.module';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        MenuRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    declarations: [routedComponents]
})

export class MenuModule { }
