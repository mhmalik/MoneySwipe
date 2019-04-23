import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../sevices/login.service';
import { UserModel } from 'src/app/modules/registration/models';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  loginForm: FormGroup;
  submitted = false;
  userObj: UserModel;
  mobileNo: any;

  constructor(private router: Router,
    private fb: FormBuilder,
    private _login_service: LoginService,
    private _snack: MatSnackBar
  ) {
    this.userObj = new UserModel();
  }

  ngOnInit() {
    this.loginForm = this.createFormGroup();
    this.mobileNo = localStorage.getItem("mobileSwipe-No");
  }

  back() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.userObj.PIN = this.loginForm.value.pincode + this.loginForm.value.pincode1 + this.loginForm.value.pincode2 + this.loginForm.value.pincode3;
    this.userObj.MobilePhone = this.mobileNo;

    this._login_service.SignIn(this.userObj).subscribe(
      (data: any) => {
        this.loading = false;
        this.router.navigate(['/dashboard']);
        //this.router.navigate(['/register/OTP', { 'mobile': this.userObj.MobilePhone }]);
      }, err => {
        this.loading = false;
        console.log(err);
        this._snack.open(err.split(":")[1], "", { //
          duration: 2000,
          verticalPosition: "top",
          panelClass: ['warn-snackbar']
        });
      });
  }

  createFormGroup() {
    return this.loginForm = this.fb.group({
      pincode: ['', [Validators.required, Validators.maxLength(1)]],
      pincode1: ['', [Validators.required, Validators.maxLength(1)]],
      pincode2: ['', [Validators.required, Validators.maxLength(1)]],
      pincode3: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }


  get f() { return this.loginForm.controls; }

  moveOnMax(field: HTMLInputElement, nextFieldID: HTMLInputElement) {
    if (field.value.length == 1 && !(field.value.length > 1)) {
      nextFieldID.focus();
    }
  }

  onKeydownEvent(nextFieldID: HTMLInputElement, event: KeyboardEvent): void {
    if (event.keyCode === 8) {
      setTimeout(() => {
        nextFieldID.focus();
      }, 200); 0
      // On 'Shift+Enter' do 
    }
  }

}