import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { equalValueValidator } from '../../equal-value-validator';

@Component({
  selector: 'app-pin-dialog',
  templateUrl: './pin-dialog.component.html',
  styleUrls: ['./pin-dialog.component.scss']
})
export class PinDialogComponent implements OnInit {

  Form: FormGroup;
  title: string;
  submitted = false;
  pinCode: any;
  
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PinDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.title = data.title;
  }

  ngOnInit() {
    this.Form = this.createFormGroup();
  }

  createFormGroup() {
    return this.Form = this.fb.group({
      pincode: ['', [Validators.required, Validators.minLength(4)]],
      confirmpincode: ['', [Validators.required, Validators.minLength(4)]],
    },
      {
        validator: this.pinCodeValidator
      }  // key is to validate on the form group
    );
  }

  get f() { return this.Form.controls; }

  onSubmit() {
    this.submitted = true;
    //const res = this.matchPins();
    // stop here if form is invalid
    if (this.Form.invalid) {
      return;
    }

    this.dialogRef.close(this.Form.value);
  }

  pinCodeValidator(form: FormGroup) {
    const condition = form.get('pincode').value !== form.get('confirmpincode').value;
    if (condition && form.controls.pincode.valid && form.controls.confirmpincode) {
      form.controls.confirmpincode.setErrors({ equalValue: "pincode" });
    }
    return condition ? { pinNotMatched: true } : null
  }

  close() {
    this.dialogRef.close();
  }

  matchPins() {
    const isMatch = this.Form.value.pincode === this.Form.value.confirmpincode
    // set equal value error on dirty controls
    if (!isMatch && this.Form.controls.pincode.valid && this.Form.controls.confirmpincode) {
      this.Form.controls.confirmpincode.setErrors({ equalValue: "pincode" });
      return { pinNotMatched: true }
    }
    return null;
  }
}