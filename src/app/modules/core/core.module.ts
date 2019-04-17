import { NgModule } from "@angular/core";
import { ApiService, InterceptService } from "./services";
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
    imports: [
        HttpClientModule,
    ],
    exports: [],
    providers: [
        InterceptService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptService,
            multi: true
        }, ApiService]
})
export class CoreModule { }
