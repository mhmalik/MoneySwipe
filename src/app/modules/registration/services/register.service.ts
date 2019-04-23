import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../core';
import { RegisterModel } from '../models/register.model';
import { UserModel } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private _api: ApiService, private http: HttpClient) { }

    getCountries() {
        return this.http.get('./assets/phone.json')
    }

    // signUpUser() {
    //     //return this.http.get('https://reqres.in/api/users')
    // }

    signUpUser(Reg: RegisterModel): Observable<any> {
        return this._api.post(`${"SendOTP"}`, Reg)
        // .pipe(map((res: Response) => res),
        //   catchError((error: any) => Observable.throw(error))
        //);
    }

    verifyOTP(Reg: RegisterModel): Observable<any> {
        return this._api.post(`${"VerifyOTP"}`, Reg)
        // .pipe(map((res: Response) => res),
        //   catchError((error: any) => Observable.throw(error))
        //);
    }

    SignUp(user: UserModel): Observable<any> {
        return this._api.sign(`${"Register"}`, user)
        // .pipe(map((res: Response) => res),
        //   catchError((error: any) => Observable.throw(error))
        //);
    }
}