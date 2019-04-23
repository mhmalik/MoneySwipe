import { Component, OnInit, TemplateRef } from '@angular/core';
import { RegisterService } from '../../services';
import { Router } from '@angular/router';
import { RegisterModel } from '../../models';
import { MatSnackBar } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  mobileNo: any = "";
  loading: boolean = false;
  registerObj: RegisterModel;

  constructor(private _register_service: RegisterService,
    private router: Router,
    private _snack: MatSnackBar,
  ) {
    this.registerObj = new RegisterModel();
  }

  ngOnInit() {
    // this._register_service.getCountries().subscribe((res: any) => {
    //   console.log(res);
    // })
  }

  register() {
    this.loading = true;
    this.registerObj.CustomerID = "";
    this.registerObj.CountryCode = environment.CountryCode;
    this.registerObj.CountryName = "PAK";
    this.registerObj.MobilePhone = this.mobileNo;
    //this.registerObj.MobilePhone = "";
    this.registerObj.Device = "TEST";
    this.registerObj.OS = "Des";

    this._register_service.signUpUser(this.registerObj).subscribe(
      (data: any) => {
        this.loading = false;
        this.router.navigate(['/register/OTP', { 'mobile': this.registerObj.MobilePhone }]);
        console.log(data);
      }, err => {
        this.loading = false;
        console.log(err);
        this._snack.open(err.split(":")[1], "", { //Invaid OTP
          duration: 2000,
          verticalPosition: "top",
          panelClass: ['warn-snackbar']
        });
        //...
      });
  }

  back() {
    this.router.navigate(['/']);
  }

}