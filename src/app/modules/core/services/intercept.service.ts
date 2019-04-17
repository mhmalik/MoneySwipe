import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpError } from '../models/HttpErrors';

@Injectable()
export class InterceptService implements HttpInterceptor {
    constructor(private route: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                // http response status code

                switch (error.status) {

                    case HttpError.BadRequest:
                        // console.error('%c Bad Request 400', logFormat);
                        break;

                    case HttpError.Unauthorized:
                        console.log("status code:" + error.status);
                        // console.error('%c Unauthorized 401', logFormat);
                        // window.location.href = '/login' + window.location.hash;
                        break;

                    case HttpError.NotFound:
                        //show error toast message
                        // console.error('%c Not Found 404', logFormat);
                        // const _toaster = this._injector.get(Toaster),
                        //     _router = this._injector.get(Router);
                        // _toaster.show({
                        //     message: exception.error && exception.error.message ? exception.error.message :
                        //         exception.statusText,
                        //     typeId: 'error',
                        //     isDismissable: true
                        // });
                        // _router.navigate(['']);
                        break;

                    case HttpError.TimeOut:
                        // Handled in AnalyticsExceptionHandler
                        // console.error('%c TimeOut 408', logFormat);
                        break;

                    case HttpError.Forbidden:
                        // console.error('%c Forbidden 403', logFormat);
                        // const _authService = this._injector.get(AuthorizationService);
                        // _authService.showForbiddenModal();
                        break;

                    case HttpError.InternalServerError:
                        // console.error('%c big bad 500', logFormat);
                        break;
                }

                let errorMessage = '';
                if (error.error instanceof ErrorEvent) {
                    // client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // server-side error
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                //window.alert(errorMessage);
                return throwError(error);
            })
        );
    }
}