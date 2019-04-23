import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CoreModule } from "../core";
import { LoaderComponent } from './components/loader/loader.component';
import { NgxLoadingModule } from 'ngx-loading';
import { PinDialogComponent } from './components/pin-dialog/pin-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { DigitOnlyDirective } from './digit-only.directive';

const sharedComponents = [
    LoaderComponent,
    PinDialogComponent,
    DigitOnlyDirective
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        ReactiveFormsModule,
        FormsModule,
        NgxLoadingModule.forRoot({}),
        NgxMaskModule.forRoot({})
    ],
    declarations: sharedComponents,
    exports: sharedComponents,
    entryComponents: [PinDialogComponent],
    providers: []
})
export class SharedModule { }