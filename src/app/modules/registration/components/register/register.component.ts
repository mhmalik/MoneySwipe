import { Component, OnInit, TemplateRef } from '@angular/core';
import { RegisterService } from '../../services';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { RegisterModel } from '../../models/register.model';


const PrimaryWhite = '#ffffff';
const SecondaryGrey = '#ccc';
const PrimaryRed = '#dd0031';
const SecondaryBlue = '#006ddd';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  mobileNo: any = "";
  registerObj: RegisterModel;

  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  public primaryColour = PrimaryWhite;
  public secondaryColour = SecondaryGrey;
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any>;
  public config = { animationType: ngxLoadingAnimationTypes.doubleBounce, primaryColour: this.primaryColour, secondaryColour: this.secondaryColour, tertiaryColour: this.primaryColour, backdropBorderRadius: '3px' };

  constructor(private _register_service: RegisterService) {
    this.registerObj = new RegisterModel();

  }

  ngOnInit() {
    // this.loading = true;
    // this._register_service.getUsers().subscribe(data => {
    //   console.log(data);
    //   this.loading = false;
    // }, err => {
    //   this.loading = false;
    //   //...
    // });
  }

  register() {
    this.loading = true;
    this.registerObj.CustomerID = "";
    this.registerObj.CountryCode = "0092";
    this.registerObj.CountryName = "PAK";
    //this.registerObj.MobilePhone = this.mobileNo;
    this.registerObj.MobilePhone = "3315699972";
    this.registerObj.Device = "TEST";
    this.registerObj.OS = "Des";

    this._register_service.signUpUser(this.registerObj).subscribe(
      (data: any) => {
        console.log(data);
        this.loading = false;
      }, err => {
        this.loading = false;
        //...
      });
  }

}