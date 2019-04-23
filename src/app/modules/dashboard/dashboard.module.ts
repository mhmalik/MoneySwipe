import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, DashboardRoutingModule } from './dashboard-routing';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { CoreModule } from '../core';
import { SharedModule } from '../shared/shared.module';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CoreModule,
        SharedModule,
        NgxLoadingModule.forRoot({}),
        NgxMaskModule.forRoot({})
    ],
    providers: [],
    declarations: [routedComponents]
})

export class DashboardModule { }
