import { NgModule } from "@angular/core";
import { ApiService, InterceptService } from "./services";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
    MatFormFieldModule, MatIconModule, MatDialogModule,
    MatInputModule, MatSnackBarModule
} from "@angular/material";

const materialModules = [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule
];

@NgModule({
    imports: [
        FlexLayoutModule, materialModules,
        HttpClientModule,
    ],
    exports: [FlexLayoutModule, materialModules],
    providers: [
        InterceptService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptService,
            multi: true
        }, ApiService]
})
export class CoreModule { }
