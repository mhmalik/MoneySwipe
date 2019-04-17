import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild("divlogo") logoDiv: ElementRef;

  logo: any = "assets/Bogmærke_mørkblå.svg";

  constructor(private router: Router) { }

  ngOnInit() { }

  btnSign() {
    // this.router.navigate(['/register/OTP']);
   }

  btnCreate() {
    this.router.navigate(['/register']);
  }
}