import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { Observable } from 'rxjs';
import { ApiService } from '../../core';
import { RegisterModel } from '../models/register.model';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private _api: ApiService) { }

    getUsers() {
       // return this.http.get('https://reqres.in/api/users')
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
}