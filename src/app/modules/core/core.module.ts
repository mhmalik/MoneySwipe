import { NgModule } from "@angular/core";
import { ApiService, InterceptService } from "./services";
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [
        HttpClientModule,
        FlexLayoutModule
    ],
    exports: [ FlexLayoutModule],
    providers: [
        InterceptService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptService,
            multi: true
        }, ApiService]
})
export class CoreModule { }
