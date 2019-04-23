import { Component, OnInit, TemplateRef } from '@angular/core';
import { RegisterModel } from '../../models/register.model';
import { RegisterService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-one-time-password',
  templateUrl: './one-time-password.component.html',
  styleUrls: ['./one-time-password.component.scss']
})
export class OneTimePasswordComponent implements OnInit {

  otp: any = "";
  loading: boolean = false;
  registerObj: RegisterModel;

  constructor(private _register_service: RegisterService,
    private router: Router,
    private route: ActivatedRoute,
    private _snack: MatSnackBar,
  ) {
    this.registerObj = new RegisterModel();

    this.registerObj.MobilePhone = this.route.snapshot.params.mobile;
  }

  ngOnInit() { }

  verify() {
    this.loading = true;
    this.registerObj.CustomerID = "";
    this.registerObj.CountryCode = environment.CountryCode;
    this.registerObj.CountryName = "PAK";
    this.registerObj.Device = "TEST";
    this.registerObj.OS = "Des";
    this.registerObj.OTP = this.otp;

    this._register_service.verifyOTP(this.registerObj).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/register/sign', { 'mobile': this.registerObj.MobilePhone }]);
        this.loading = false;
      }, err => {
        this.loading = false;
        this._snack.open("ugyldig OTP", "", { //Invaid OTP
          duration: 2000,
          verticalPosition: "top",
          panelClass: ['warn-snackbar']
        });
        //...
      });
  }

}
