import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../../models';
import { RegisterService } from '../../services';
import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { PinDialogComponent } from 'src/app/modules/shared/components/pin-dialog/pin-dialog.component';

const dialogConfig = new MatDialogConfig();

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  contactForm: FormGroup;
  userObj: UserModel;
  loading: boolean = false;
  submitted = false;


  constructor(private route: ActivatedRoute,
    private _register_service: RegisterService,
    private formBuilder: FormBuilder,
    private _snack: MatSnackBar,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.userObj = new UserModel();
  }

  ngOnInit() {
    this.contactForm = this.createFormGroup();
  }

  openDialog() {

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Set Pin Code',
    };

    const dialogRef = this.dialog.open(PinDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          //   dialogRef.close();
          this.submit(data);
        }

      });
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    else this.openDialog();
  }

  submit(val) {
    this.loading = true;
    this.userObj.Email = this.contactForm.value.email;
    this.userObj.Name_First = this.contactForm.value.name;
    this.userObj.Name_Last = this.contactForm.value.name;
    this.userObj.MobilePhone = this.route.snapshot.params.mobile;
    this.userObj.Birthday = this.contactForm.value.dob;
    this.userObj.PIN = val.pincode;

    this._register_service.SignUp(this.userObj).subscribe(
      (data: any) => {
        this.loading = false;
        localStorage.setItem("mobileSwipe-No", this.route.snapshot.params.mobile);
        this._snack.open("Registreret bruger med succes", "", { // successfully Occurred
          duration: 2000,
          verticalPosition: "top",
          panelClass: ['warn-snackbar']
        });
        this.router.navigate(['/login']);
        //this.router.navigate(['/register/OTP', { 'mobile': this.userObj.MobilePhone }]);
      }, err => {
        this.loading = false;
        console.log(err);
        this._snack.open("Error Occurred", "", { //
          duration: 2000,
          verticalPosition: "top",
          panelClass: ['warn-snackbar']
        });
      });
  }

  createFormGroup() {
    return this.contactForm = this.formBuilder.group({
      dob: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      mobile: [''],
    });
    // new FormGroup({
    //   personalData: new FormGroup({
    //     email: new FormControl('', Validators.compose([
    //       Validators.required,
    //       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //     ])),
    //     mobile: new FormControl(),
    //     name: new FormControl('', Validators.compose([
    //       Validators.required,
    //       Validators.maxLength(50)
    //     ])),
    //     dob: new FormControl('', Validators.required),
    //   })
    // })
  }

  get f() { return this.contactForm.controls; }

}
