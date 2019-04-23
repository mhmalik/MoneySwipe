import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core';
import { UserModel } from '../../registration/models';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private _api: ApiService) { }

    SignIn(user: UserModel): Observable<any> {
        return this._api.sign(`${"SignIn"}`, user)
        // .pipe(map((res: Response) => res),
        //   catchError((error: any) => Observable.throw(error))
        //);
    }
}