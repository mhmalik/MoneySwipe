(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{sl0Z:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),o=u("gIcY"),r=u("dJrM"),a=u("seP3"),s=u("Wf4p"),b=u("Fzqc"),c=u("dWZg"),d=u("wFw1"),g=u("6uYy"),f=u("Ip0R"),p=u("b716"),m=u("/VYK"),h=u("21Lb"),y=u("OzfB"),x=(u("q/PB"),u("07G3")),A=u("t/Na"),k=function(){function l(l,n){this._api=l,this.http=n}return l.prototype.getCountries=function(){return this.http.get("./assets/phone.json")},l.prototype.signUpUser=function(l){return this._api.post("SendOTP",l)},l.prototype.verifyOTP=function(l){return this._api.post("VerifyOTP",l)},l.prototype.SignUp=function(l){return this._api.sign("Register",l)},l.ngInjectableDef=e.U({factory:function(){return new l(e.Y(x.a),e.Y(A.c))},token:l,providedIn:"root"}),l}(),v=u("277j"),C=u("AytR"),q=function(){function l(l,n,u){this._register_service=l,this.router=n,this._snack=u,this.mobileNo="",this.loading=!1,this.registerObj=new v.a}return l.prototype.ngOnInit=function(){},l.prototype.register=function(){var l=this;this.loading=!0,this.registerObj.CustomerID="",this.registerObj.CountryCode=C.a.CountryCode,this.registerObj.CountryName="PAK",this.registerObj.MobilePhone=this.mobileNo,this.registerObj.Device="TEST",this.registerObj.OS="Des",this._register_service.signUpUser(this.registerObj).subscribe(function(n){l.loading=!1,l.router.navigate(["/register/OTP",{mobile:l.registerObj.MobilePhone}]),console.log(n)},function(n){l.loading=!1,console.log(n),l._snack.open(n.split(":")[1],"",{duration:2e3,verticalPosition:"top",panelClass:["warn-snackbar"]})})},l.prototype.back=function(){this.router.navigate(["/"])},l}(),F=u("ZYCi"),_=u("vARd"),w=e.pb({encapsulation:0,styles:[[".register-container[_ngcontent-%COMP%]{background-color:#f9fafc;height:100vh}.btn-send[_ngcontent-%COMP%]{color:#3070fe;background-color:#fff;width:100%}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}div.container[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}div.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1 1 5em;margin-left:10px;height:50px;background-color:#00f}div.container[_ngcontent-%COMP%] > div.two[_ngcontent-%COMP%]{flex:2 2 calc(10em + 10px)}div.container[_ngcontent-%COMP%] > div.three[_ngcontent-%COMP%]{flex:3 3 calc(15em + 20px)}.panel[_ngcontent-%COMP%]{height:100vh;display:-moz-flex;-moz-flex-direction:column;-moz-flex-wrap:nowrap;display:-webkit-flex;-webkit-flex-wrap:nowrap;display:-ms-flex;-ms-flex-wrap:nowrap;display:flex;flex-direction:column;flex-wrap:nowrap}header[_ngcontent-%COMP%]{background-color:grey;padding:1em;-ms-flex-shrink:0;flex-shrink:0}.body[_ngcontent-%COMP%]{-moz-flex-grow:1;-ms-flex-grow:1;flex-grow:1;overflow:auto;background-color:silver}footer[_ngcontent-%COMP%]{background-color:grey;padding:1em;-ms-flex-shrink:0;flex-shrink:0}"]],data:{}});function L(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,37,"div",[["class","panel"]],null,null,null,null,null)),(l()(),e.rb(1,0,null,null,2,"header",[],null,null,null,null,null)),(l()(),e.rb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Header"])),(l()(),e.rb(4,0,null,null,28,"div",[["class","body"]],null,null,null,null,null)),(l()(),e.rb(5,0,null,null,27,"form",[["class","example-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Ab(l,7).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Ab(l,7).onReset()&&t),t},null,null)),e.qb(6,16384,null,0,o.t,[],null,null),e.qb(7,4210688,null,0,o.n,[[8,null],[8,null]],null,null),e.Cb(2048,null,o.b,null,[o.n]),e.qb(9,16384,null,0,o.m,[[4,o.b]],null,null),(l()(),e.rb(10,0,null,null,22,"mat-form-field",[["class","example-full-width mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,r.b,r.a)),e.qb(11,7520256,null,7,a.c,[e.k,e.h,[2,s.c],[2,b.b],[2,a.a],c.a,e.A,[2,d.a]],null,null),e.Db(335544320,1,{_control:0}),e.Db(335544320,2,{_placeholderChild:0}),e.Db(335544320,3,{_labelChild:0}),e.Db(603979776,4,{_errorChildren:1}),e.Db(603979776,5,{_hintChildren:1}),e.Db(603979776,6,{_prefixChildren:1}),e.Db(603979776,7,{_suffixChildren:1}),(l()(),e.rb(19,0,null,0,2,"span",[["matPrefix",""]],null,null,null,null,null)),e.qb(20,16384,[[6,4]],0,a.f,[],null,null),(l()(),e.Fb(-1,null,["+45 \xa0"])),(l()(),e.rb(22,0,null,1,10,"input",[["class","mat-input-element mat-form-field-autofill-control"],["mask","00 00 00 00 00"],["matInput",""],["name","mobile number"],["placeholder","Telephone"],["type","tel"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"click"],[null,"keydown"],[null,"paste"],[null,"focus"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,23)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,23).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,23)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,23)._compositionEnd(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,25).onInput(u)&&t),"blur"===n&&(t=!1!==e.Ab(l,25).onBlur()&&t),"click"===n&&(t=!1!==e.Ab(l,25).onFocus(u)&&t),"keydown"===n&&(t=!1!==e.Ab(l,25).a(u)&&t),"paste"===n&&(t=!1!==e.Ab(l,25).onPaste()&&t),"blur"===n&&(t=!1!==e.Ab(l,31)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==e.Ab(l,31)._focusChanged(!0)&&t),"input"===n&&(t=!1!==e.Ab(l,31)._onInput()&&t),"ngModelChange"===n&&(t=!1!==(i.mobileNo=u)&&t),t},null,null)),e.qb(23,16384,null,0,o.c,[e.F,e.k,[2,o.a]],null,null),e.Cb(512,null,g.c,g.c,[f.c,g.g,e.k,e.F]),e.qb(25,540672,null,0,g.b,[f.c,g.c],{maskExpression:[0,"maskExpression"]},null),e.Cb(1024,null,o.i,function(l){return[l]},[g.b]),e.Cb(1024,null,o.j,function(l,n){return[l,n]},[o.c,g.b]),e.qb(28,671744,null,0,o.o,[[2,o.b],[6,o.i],[8,null],[6,o.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,o.k,null,[o.o]),e.qb(30,16384,null,0,o.l,[[4,o.k]],null,null),e.qb(31,999424,null,0,p.a,[e.k,c.a,[6,o.k],[2,o.n],[2,o.f],s.a,[8,null],m.a,e.A],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.Cb(2048,[[1,4]],a.d,null,[p.a]),(l()(),e.rb(33,0,null,null,4,"footer",[],null,null,null,null,null)),(l()(),e.rb(34,0,null,null,3,"div",[["class","m-p"],["fxLayout",""],["style","width: 100%"]],null,null,null,null,null)),e.qb(35,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),(l()(),e.rb(36,0,null,null,1,"button",[["class","btn btn-block btn-send"],["style","font-weight: bold"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.register()&&e),e},null,null)),(l()(),e.Fb(-1,null,["Send"]))],function(l,n){var u=n.component;l(n,25,0,"00 00 00 00 00"),l(n,28,0,"mobile number",u.mobileNo),l(n,31,0,"Telephone","tel"),l(n,35,0,"")},function(l,n){var u=n.component;l(n,5,0,e.Ab(n,9).ngClassUntouched,e.Ab(n,9).ngClassTouched,e.Ab(n,9).ngClassPristine,e.Ab(n,9).ngClassDirty,e.Ab(n,9).ngClassValid,e.Ab(n,9).ngClassInvalid,e.Ab(n,9).ngClassPending),l(n,10,1,["standard"==e.Ab(n,11).appearance,"fill"==e.Ab(n,11).appearance,"outline"==e.Ab(n,11).appearance,"legacy"==e.Ab(n,11).appearance,e.Ab(n,11)._control.errorState,e.Ab(n,11)._canLabelFloat,e.Ab(n,11)._shouldLabelFloat(),e.Ab(n,11)._hasFloatingLabel(),e.Ab(n,11)._hideControlPlaceholder(),e.Ab(n,11)._control.disabled,e.Ab(n,11)._control.autofilled,e.Ab(n,11)._control.focused,"accent"==e.Ab(n,11).color,"warn"==e.Ab(n,11).color,e.Ab(n,11)._shouldForward("untouched"),e.Ab(n,11)._shouldForward("touched"),e.Ab(n,11)._shouldForward("pristine"),e.Ab(n,11)._shouldForward("dirty"),e.Ab(n,11)._shouldForward("valid"),e.Ab(n,11)._shouldForward("invalid"),e.Ab(n,11)._shouldForward("pending"),!e.Ab(n,11)._animationsEnabled]),l(n,22,1,[e.Ab(n,30).ngClassUntouched,e.Ab(n,30).ngClassTouched,e.Ab(n,30).ngClassPristine,e.Ab(n,30).ngClassDirty,e.Ab(n,30).ngClassValid,e.Ab(n,30).ngClassInvalid,e.Ab(n,30).ngClassPending,e.Ab(n,31)._isServer,e.Ab(n,31).id,e.Ab(n,31).placeholder,e.Ab(n,31).disabled,e.Ab(n,31).required,e.Ab(n,31).readonly&&!e.Ab(n,31)._isNativeSelect||null,e.Ab(n,31)._ariaDescribedby||null,e.Ab(n,31).errorState,e.Ab(n,31).required.toString()]),l(n,36,0,u.mobileNo.length<8)})}function P(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,1,"app-register",[],null,null,null,L,w)),e.qb(1,114688,null,0,q,[k,F.k,_.b],null,null)],function(l,n){l(n,1,0)},null)}var O=e.nb("app-register",q,P,{},{},[]),j=u("ivdH"),I=u("49vG"),M=u("b9uP"),S=function(){function l(l,n,u,e){this._register_service=l,this.router=n,this.route=u,this._snack=e,this.otp="",this.loading=!1,this.registerObj=new M.a,this.registerObj.MobilePhone=this.route.snapshot.params.mobile}return l.prototype.ngOnInit=function(){},l.prototype.verify=function(){var l=this;this.loading=!0,this.registerObj.CustomerID="",this.registerObj.CountryCode=C.a.CountryCode,this.registerObj.CountryName="PAK",this.registerObj.Device="TEST",this.registerObj.OS="Des",this.registerObj.OTP=this.otp,this._register_service.verifyOTP(this.registerObj).subscribe(function(n){console.log(n),l.router.navigate(["/register/sign",{mobile:l.registerObj.MobilePhone}]),l.loading=!1},function(n){l.loading=!1,l._snack.open("ugyldig OTP","",{duration:2e3,verticalPosition:"top",panelClass:["warn-snackbar"]})})},l}(),N=e.pb({encapsulation:0,styles:[["input[_ngcontent-%COMP%]{height:45px;outline:0;border:none;border-radius:.3rem;width:100%}.btn-send[_ngcontent-%COMP%]{color:#3070fe;background-color:#fff}"]],data:{}});function T(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,1,"app-loader",[],null,null,null,j.b,j.a)),e.qb(1,114688,null,0,I.a,[],{loading:[0,"loading"]},null),(l()(),e.rb(2,0,null,null,42,"div",[["fxFill",""],["fxLayout","column"],["id","container"]],null,null,null,null,null)),e.qb(3,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(4,671744,null,0,h.f,[e.k,y.i,h.g,y.f],null,null),(l()(),e.rb(5,0,null,null,11,"header",[["class","shadow"],["fxLayout",""],["fxLayoutAlign","space-between center"],["style","height: 50px;"]],null,null,null,null,null)),e.qb(6,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(7,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),e.rb(8,0,null,null,1,"div",[["fxLayoutAlign","center center"],["style","background-color: rgb(198, 198, 198, 0); width: 50px;"]],null,null,null,null,null)),e.qb(9,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),e.rb(10,0,null,null,2,"div",[["fxLayoutAlign","center center"],["style","height: 50px"]],null,null,null,null,null)),e.qb(11,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),e.rb(12,0,null,null,0,"img",[["src","./assets/Logo.svg"],["style","width:48%"]],null,null,null,null,null)),(l()(),e.rb(13,0,null,null,3,"div",[["fxLayoutAlign","center center"],["style","background-color: rgb(198, 198, 198, 0); width: 50px;"]],null,null,null,null,null)),e.qb(14,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),e.rb(15,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,[" help_outline "])),(l()(),e.rb(17,0,null,null,21,"div",[["fxFlex",""],["fxLayout","column"],["fxLayoutAlign","space-between center"]],null,null,null,null,null)),e.qb(18,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(19,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.qb(20,671744,null,0,h.b,[e.k,y.i,y.e,h.i,y.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.rb(21,0,null,null,17,"div",[["class","pl-3 pr-3 mt-3"],["fxFill",""],["fxFlex",""],["fxLayout","column"],["fxLayoutAlign","start start"]],null,null,null,null,null)),e.qb(22,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(23,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.qb(24,671744,null,0,h.f,[e.k,y.i,h.g,y.f],null,null),e.qb(25,671744,null,0,h.b,[e.k,y.i,y.e,h.i,y.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.rb(26,0,null,null,1,"span",[["class","mb-1"],["style","font-weight: bold"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Enter the activation code"])),(l()(),e.rb(28,0,null,null,8,"input",[["mask","000000"],["placeholder","112233"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"click"],[null,"keydown"],[null,"paste"]],function(l,n,u){var t=!0,i=l.component;return"input"===n&&(t=!1!==e.Ab(l,29)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,29).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,29)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,29)._compositionEnd(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,31).onInput(u)&&t),"blur"===n&&(t=!1!==e.Ab(l,31).onBlur()&&t),"click"===n&&(t=!1!==e.Ab(l,31).onFocus(u)&&t),"keydown"===n&&(t=!1!==e.Ab(l,31).a(u)&&t),"paste"===n&&(t=!1!==e.Ab(l,31).onPaste()&&t),"ngModelChange"===n&&(t=!1!==(i.otp=u)&&t),t},null,null)),e.qb(29,16384,null,0,o.c,[e.F,e.k,[2,o.a]],null,null),e.Cb(512,null,g.c,g.c,[f.c,g.g,e.k,e.F]),e.qb(31,540672,null,0,g.b,[f.c,g.c],{maskExpression:[0,"maskExpression"]},null),e.Cb(1024,null,o.i,function(l){return[l]},[g.b]),e.Cb(1024,null,o.j,function(l,n){return[l,n]},[o.c,g.b]),e.qb(34,671744,null,0,o.o,[[8,null],[6,o.i],[8,null],[6,o.j]],{model:[0,"model"]},{update:"ngModelChange"}),e.Cb(2048,null,o.k,null,[o.o]),e.qb(36,16384,null,0,o.l,[[4,o.k]],null,null),(l()(),e.rb(37,0,null,null,1,"span",[["class","mt-1"],["style","font-weight: 100; font-size: 10px"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["The 6-digit activation code has now been sent by text message"])),(l()(),e.rb(39,0,null,null,5,"div",[["class","m-p"],["fxFill",""],["fxFlex","40px"],["fxLayout",""]],null,null,null,null,null)),e.qb(40,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(41,671744,null,0,h.f,[e.k,y.i,h.g,y.f],null,null),e.qb(42,671744,null,0,h.b,[e.k,y.i,y.e,h.i,y.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.rb(43,0,null,null,1,"button",[["class","btn btn-block btn-send"],["style","font-weight: bold"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.verify()&&e),e},null,null)),(l()(),e.Fb(-1,null,["Verify"]))],function(l,n){var u=n.component;l(n,1,0,u.loading),l(n,3,0,"column"),l(n,6,0,""),l(n,7,0,"space-between center"),l(n,9,0,"center center"),l(n,11,0,"center center"),l(n,14,0,"center center"),l(n,18,0,"column"),l(n,19,0,"space-between center"),l(n,20,0,""),l(n,22,0,"column"),l(n,23,0,"start start"),l(n,25,0,""),l(n,31,0,"000000"),l(n,34,0,u.otp),l(n,40,0,""),l(n,42,0,"40px")},function(l,n){var u=n.component;l(n,28,0,e.Ab(n,36).ngClassUntouched,e.Ab(n,36).ngClassTouched,e.Ab(n,36).ngClassPristine,e.Ab(n,36).ngClassDirty,e.Ab(n,36).ngClassValid,e.Ab(n,36).ngClassInvalid,e.Ab(n,36).ngClassPending),l(n,43,0,u.otp.length<6)})}function D(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,1,"app-one-time-password",[],null,null,null,T,N)),e.qb(1,114688,null,0,S,[k,F.k,F.a,_.b],null,null)],function(l,n){l(n,1,0)},null)}var E=e.nb("app-one-time-password",S,D,{},{},[]),G=u("hUWP"),U=u("o3x0"),B=u("+lQN"),Y=new U.g,R=function(){function l(l,n,u,e,t,i){this.route=l,this._register_service=n,this.formBuilder=u,this._snack=e,this.router=t,this.dialog=i,this.loading=!1,this.submitted=!1,this.userObj=new v.b}return l.prototype.ngOnInit=function(){this.contactForm=this.createFormGroup()},l.prototype.openDialog=function(){var l=this;Y.disableClose=!0,Y.autoFocus=!0,Y.data={id:1,title:"Set Pin Code"},this.dialog.open(B.a,Y).afterClosed().subscribe(function(n){n&&l.submit(n)})},l.prototype.onSubmit=function(){this.submitted=!0,this.contactForm.invalid||this.openDialog()},l.prototype.submit=function(l){var n=this;this.loading=!0,this.userObj.Email=this.contactForm.value.email,this.userObj.Name_First=this.contactForm.value.name,this.userObj.Name_Last=this.contactForm.value.name,this.userObj.MobilePhone=this.route.snapshot.params.mobile,this.userObj.Birthday=this.contactForm.value.dob,this.userObj.PIN=l.pincode,this._register_service.SignUp(this.userObj).subscribe(function(l){n.loading=!1,localStorage.setItem("mobileSwipe-No",n.route.snapshot.params.mobile),n._snack.open("Registreret bruger med succes","",{duration:2e3,verticalPosition:"top",panelClass:["warn-snackbar"]}),n.router.navigate(["/login"])},function(l){n.loading=!1,console.log(l),n._snack.open("Error Occurred","",{duration:2e3,verticalPosition:"top",panelClass:["warn-snackbar"]})})},l.prototype.createFormGroup=function(){return this.contactForm=this.formBuilder.group({dob:["",[o.r.required,o.r.minLength(8)]],email:["",[o.r.required,o.r.email]],name:["",[o.r.required,o.r.maxLength(50)]],mobile:[""]})},Object.defineProperty(l.prototype,"f",{get:function(){return this.contactForm.controls},enumerable:!0,configurable:!0}),l}(),V=e.pb({encapsulation:0,styles:[["input[_ngcontent-%COMP%]{height:45px;outline:0;border:none;border-radius:.3rem}.btn-send[_ngcontent-%COMP%]{color:#3070fe;background-color:#fff}.form-group[_ngcontent-%COMP%]{width:100%}"]],data:{}});function Q(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Name is required"]))],null,null)}function z(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,2,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,Q)),e.qb(2,16384,null,0,f.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,n.component.f.name.errors.required)},null)}function Z(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Email is required"]))],null,null)}function J(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Email must be a valid email address"]))],null,null)}function K(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,4,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,Z)),e.qb(2,16384,null,0,f.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,null,1,null,J)),e.qb(4,16384,null,0,f.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.f.email.errors.required),l(n,4,0,u.f.email.errors.email)},null)}function X(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Date of birth is required"]))],null,null)}function H(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Fb(-1,null,["complete date of birth required"]))],null,null)}function W(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,4,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e.ib(16777216,null,null,1,null,X)),e.qb(2,16384,null,0,f.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,null,1,null,H)),e.qb(4,16384,null,0,f.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,u.f.dob.errors.required),l(n,4,0,u.f.dob.errors.minlength)},null)}function $(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,1,"app-loader",[],null,null,null,j.b,j.a)),e.qb(1,114688,null,0,I.a,[],{loading:[0,"loading"]},null),(l()(),e.rb(2,0,null,null,86,"div",[["fxFill",""],["fxLayout","column"],["id","container"]],null,null,null,null,null)),e.qb(3,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(4,671744,null,0,h.f,[e.k,y.i,h.g,y.f],null,null),(l()(),e.rb(5,0,null,null,11,"header",[["class","shadow"],["fxLayout",""],["fxLayoutAlign","space-between center"],["style","height: 50px;"]],null,null,null,null,null)),e.qb(6,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(7,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),e.rb(8,0,null,null,1,"div",[["fxLayoutAlign","center center"],["style","background-color: rgb(198, 198, 198, 0); width: 50px;"]],null,null,null,null,null)),e.qb(9,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),e.rb(10,0,null,null,2,"div",[["fxLayoutAlign","center center"],["style","height: 50px"]],null,null,null,null,null)),e.qb(11,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),e.rb(12,0,null,null,0,"img",[["src","./assets/Logo.svg"],["style","width:48%"]],null,null,null,null,null)),(l()(),e.rb(13,0,null,null,3,"div",[["fxLayoutAlign","center center"],["style","background-color: rgb(198, 198, 198, 0); width: 50px;"]],null,null,null,null,null)),e.qb(14,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),e.rb(15,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,[" help_outline "])),(l()(),e.rb(17,0,null,null,71,"form",[["fxFlex",""],["fxLayout","column"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Ab(l,19).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Ab(l,19).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.onSubmit()&&t),t},null,null)),e.qb(18,16384,null,0,o.t,[],null,null),e.qb(19,540672,null,0,o.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Cb(2048,null,o.b,null,[o.f]),e.qb(21,16384,null,0,o.m,[[4,o.b]],null,null),e.qb(22,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(23,671744,null,0,h.b,[e.k,y.i,y.e,h.i,y.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.rb(24,0,null,null,58,"div",[["fxFlex",""],["fxLayout","column"],["fxLayoutAlign","space-between center"]],null,null,null,null,null)),e.qb(25,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(26,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.qb(27,671744,null,0,h.b,[e.k,y.i,y.e,h.i,y.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.rb(28,0,null,null,54,"div",[["class","pl-3 pr-3 mt-3"],["fxFill",""],["fxFlex",""],["fxLayout","column"],["fxLayoutAlign","start start"]],null,null,null,null,null)),e.qb(29,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(30,671744,null,0,h.c,[e.k,y.i,[2,h.j],y.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),e.qb(31,671744,null,0,h.f,[e.k,y.i,h.g,y.f],null,null),e.qb(32,671744,null,0,h.b,[e.k,y.i,y.e,h.i,y.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.rb(33,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(34,0,null,null,1,"span",[["class","mb-1"],["style","font-weight: bold"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Full Name:"])),(l()(),e.rb(36,0,null,null,9,"input",[["class","form-control"],["formControlName","name"],["placeholder","enter your full name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.Ab(l,39)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,39).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,39)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,39)._compositionEnd(u.target.value)&&t),t},null,null)),e.qb(37,278528,null,0,f.h,[e.t,e.u,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Bb(38,{"is-invalid":0}),e.qb(39,16384,null,0,o.c,[e.F,e.k,[2,o.a]],null,null),e.Cb(1024,null,o.j,function(l){return[l]},[o.c]),e.qb(41,671744,null,0,o.e,[[3,o.b],[8,null],[8,null],[6,o.j],[2,o.v]],{name:[0,"name"]},null),e.Cb(2048,null,o.k,null,[o.e]),e.qb(43,16384,null,0,o.l,[[4,o.k]],null,null),e.qb(44,933888,null,0,G.a,[e.k,y.i,y.f,e.t,e.u,e.F,[6,f.h]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),e.Bb(45,{"is-invalid":0}),(l()(),e.ib(16777216,null,null,1,null,z)),e.qb(47,16384,null,0,f.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(48,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(49,0,null,null,1,"span",[["class","mb-1"],["style","font-weight: bold"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Email address:"])),(l()(),e.rb(51,0,null,null,9,"input",[["class","form-control"],["formControlName","email"],["placeholder","xyz@gmail.com"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.Ab(l,54)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,54).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,54)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,54)._compositionEnd(u.target.value)&&t),t},null,null)),e.qb(52,278528,null,0,f.h,[e.t,e.u,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Bb(53,{"is-invalid":0}),e.qb(54,16384,null,0,o.c,[e.F,e.k,[2,o.a]],null,null),e.Cb(1024,null,o.j,function(l){return[l]},[o.c]),e.qb(56,671744,null,0,o.e,[[3,o.b],[8,null],[8,null],[6,o.j],[2,o.v]],{name:[0,"name"]},null),e.Cb(2048,null,o.k,null,[o.e]),e.qb(58,16384,null,0,o.l,[[4,o.k]],null,null),e.qb(59,933888,null,0,G.a,[e.k,y.i,y.f,e.t,e.u,e.F,[6,f.h]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),e.Bb(60,{"is-invalid":0}),(l()(),e.ib(16777216,null,null,1,null,K)),e.qb(62,16384,null,0,f.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(63,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.rb(64,0,null,null,1,"span",[["class","mb-1"],["style","font-weight: bold"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Date of Birth:"])),(l()(),e.rb(66,0,null,null,12,"input",[["class","form-control"],["formControlName","dob"],["mask","d0/M0/0000"],["placeholder","DD/MM/YYYY"],["type","tel"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"click"],[null,"keydown"],[null,"paste"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.Ab(l,69)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Ab(l,69).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Ab(l,69)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Ab(l,69)._compositionEnd(u.target.value)&&t),"input"===n&&(t=!1!==e.Ab(l,71).onInput(u)&&t),"blur"===n&&(t=!1!==e.Ab(l,71).onBlur()&&t),"click"===n&&(t=!1!==e.Ab(l,71).onFocus(u)&&t),"keydown"===n&&(t=!1!==e.Ab(l,71).a(u)&&t),"paste"===n&&(t=!1!==e.Ab(l,71).onPaste()&&t),t},null,null)),e.qb(67,278528,null,0,f.h,[e.t,e.u,e.k,e.F],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Bb(68,{"is-invalid":0}),e.qb(69,16384,null,0,o.c,[e.F,e.k,[2,o.a]],null,null),e.Cb(512,null,g.c,g.c,[f.c,g.g,e.k,e.F]),e.qb(71,540672,null,0,g.b,[f.c,g.c],{maskExpression:[0,"maskExpression"]},null),e.Cb(1024,null,o.i,function(l){return[l]},[g.b]),e.Cb(1024,null,o.j,function(l,n){return[l,n]},[o.c,g.b]),e.qb(74,671744,null,0,o.e,[[3,o.b],[6,o.i],[8,null],[6,o.j],[2,o.v]],{name:[0,"name"]},null),e.Cb(2048,null,o.k,null,[o.e]),e.qb(76,16384,null,0,o.l,[[4,o.k]],null,null),e.qb(77,933888,null,0,G.a,[e.k,y.i,y.f,e.t,e.u,e.F,[6,f.h]],{ngClass:[0,"ngClass"],klass:[1,"klass"]},null),e.Bb(78,{"is-invalid":0}),(l()(),e.ib(16777216,null,null,1,null,W)),e.qb(80,16384,null,0,f.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(81,0,null,null,1,"span",[["class","mt-3"],["style","font-weight: 200; background: #E8E8E6; padding: 25px; border-radius: .3rem;"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Please enter your Name, DOB & Email exactly as on your social security card (sygesikringsbevis)"])),(l()(),e.rb(83,0,null,null,5,"div",[["class","m-p"],["fxFill",""],["fxFlex","40px"],["fxLayout",""]],null,null,null,null,null)),e.qb(84,671744,null,0,h.d,[e.k,y.i,[2,h.k],y.f],{fxLayout:[0,"fxLayout"]},null),e.qb(85,671744,null,0,h.f,[e.k,y.i,h.g,y.f],null,null),e.qb(86,671744,null,0,h.b,[e.k,y.i,y.e,h.i,y.f],{fxFlex:[0,"fxFlex"]},null),(l()(),e.rb(87,0,null,null,1,"button",[["class","btn btn-block btn-send"],["style","font-weight: bold"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e.Fb(-1,null,["Submit"]))],function(l,n){var u=n.component;l(n,1,0,u.loading),l(n,3,0,"column"),l(n,6,0,""),l(n,7,0,"space-between center"),l(n,9,0,"center center"),l(n,11,0,"center center"),l(n,14,0,"center center"),l(n,19,0,u.contactForm),l(n,22,0,"column"),l(n,23,0,""),l(n,25,0,"column"),l(n,26,0,"space-between center"),l(n,27,0,""),l(n,29,0,"column"),l(n,30,0,"start start"),l(n,32,0,"");var e=l(n,38,0,u.submitted&&u.f.name.errors);l(n,37,0,"form-control",e),l(n,41,0,"name");var t=l(n,45,0,u.submitted&&u.f.name.errors);l(n,44,0,t,"form-control"),l(n,47,0,u.submitted&&u.f.name.errors);var i=l(n,53,0,u.submitted&&u.f.email.errors);l(n,52,0,"form-control",i),l(n,56,0,"email");var o=l(n,60,0,u.submitted&&u.f.email.errors);l(n,59,0,o,"form-control"),l(n,62,0,u.submitted&&u.f.email.errors);var r=l(n,68,0,u.submitted&&u.f.dob.errors);l(n,67,0,"form-control",r),l(n,71,0,"d0/M0/0000"),l(n,74,0,"dob");var a=l(n,78,0,u.submitted&&u.f.dob.errors);l(n,77,0,a,"form-control"),l(n,80,0,u.submitted&&u.f.dob.errors),l(n,84,0,""),l(n,86,0,"40px")},function(l,n){var u=n.component;l(n,17,0,e.Ab(n,21).ngClassUntouched,e.Ab(n,21).ngClassTouched,e.Ab(n,21).ngClassPristine,e.Ab(n,21).ngClassDirty,e.Ab(n,21).ngClassValid,e.Ab(n,21).ngClassInvalid,e.Ab(n,21).ngClassPending),l(n,36,0,e.Ab(n,43).ngClassUntouched,e.Ab(n,43).ngClassTouched,e.Ab(n,43).ngClassPristine,e.Ab(n,43).ngClassDirty,e.Ab(n,43).ngClassValid,e.Ab(n,43).ngClassInvalid,e.Ab(n,43).ngClassPending),l(n,51,0,e.Ab(n,58).ngClassUntouched,e.Ab(n,58).ngClassTouched,e.Ab(n,58).ngClassPristine,e.Ab(n,58).ngClassDirty,e.Ab(n,58).ngClassValid,e.Ab(n,58).ngClassInvalid,e.Ab(n,58).ngClassPending),l(n,66,0,e.Ab(n,76).ngClassUntouched,e.Ab(n,76).ngClassTouched,e.Ab(n,76).ngClassPristine,e.Ab(n,76).ngClassDirty,e.Ab(n,76).ngClassValid,e.Ab(n,76).ngClassInvalid,e.Ab(n,76).ngClassPending),l(n,87,0,u.loading)})}function ll(l){return e.Gb(0,[(l()(),e.rb(0,0,null,null,1,"app-sign-in",[],null,null,null,$,V)),e.qb(1,114688,null,0,R,[F.a,k,o.d,_.b,F.k,U.e],null,null)],function(l,n){l(n,1,0)},null)}var nl=e.nb("app-sign-in",R,ll,{},{},[]),ul=u("xYTU"),el=u("t68o"),tl=u("Ye/4"),il=u("M2Lx"),ol=u("eDkP"),rl=u("MJ8Z"),al=function(){return function(){}}(),sl=u("3pJQ"),bl=u("V9q+"),cl=u("ZYjt"),dl=u("SMsm"),gl=u("4c35"),fl=u("qAlS"),pl=u("UodH"),ml=u("6ZYd"),hl=u("RygT"),yl=u("FpXt");u.d(n,"RegisterModuleNgFactory",function(){return xl});var xl=e.ob(t,[],function(l){return e.xb([e.yb(512,e.j,e.db,[[8,[i.a,O,E,nl,ul.a,ul.b,el.a,tl.a]],[3,e.j],e.y]),e.yb(4608,f.k,f.j,[e.v,[2,f.w]]),e.yb(4608,o.d,o.d,[]),e.yb(4608,o.u,o.u,[]),e.yb(5120,e.b,function(l,n){return[y.j(l,n)]},[f.c,e.C]),e.yb(4608,il.c,il.c,[]),e.yb(4608,s.a,s.a,[]),e.yb(4608,ol.a,ol.a,[ol.g,ol.c,e.j,ol.f,ol.d,e.r,e.A,f.c,b.b,[2,f.f]]),e.yb(5120,ol.h,ol.i,[ol.a]),e.yb(5120,U.c,U.d,[ol.a]),e.yb(135680,U.e,U.e,[ol.a,e.r,[2,f.f],[2,U.b],U.c,[3,U.e],ol.c]),e.yb(4608,A.j,A.p,[f.c,e.C,A.n]),e.yb(4608,A.q,A.q,[A.j,A.o]),e.yb(5120,A.a,function(l,n){return[l,new rl.a(n)]},[A.q,F.k]),e.yb(4608,A.m,A.m,[]),e.yb(6144,A.k,null,[A.m]),e.yb(4608,A.i,A.i,[A.k]),e.yb(6144,A.b,null,[A.i]),e.yb(4608,A.f,A.l,[A.b,e.r]),e.yb(4608,A.c,A.c,[A.f]),e.yb(4608,rl.a,rl.a,[F.k]),e.yb(4608,x.a,x.a,[A.c,F.k]),e.yb(5120,g.g,g.f,[g.a,g.d]),e.yb(4608,g.i,g.i,[g.g]),e.yb(1073742336,f.b,f.b,[]),e.yb(1073742336,F.l,F.l,[[2,F.r],[2,F.k]]),e.yb(1073742336,al,al,[]),e.yb(1073742336,o.s,o.s,[]),e.yb(1073742336,o.q,o.q,[]),e.yb(1073742336,o.g,o.g,[]),e.yb(1073742336,y.c,y.c,[]),e.yb(1073742336,b.a,b.a,[]),e.yb(1073742336,h.h,h.h,[]),e.yb(1073742336,G.b,G.b,[]),e.yb(1073742336,sl.a,sl.a,[]),e.yb(1073742336,bl.a,bl.a,[[2,y.g],e.C]),e.yb(1073742336,il.d,il.d,[]),e.yb(1073742336,a.e,a.e,[]),e.yb(1073742336,s.e,s.e,[[2,s.b],[2,cl.g]]),e.yb(1073742336,dl.a,dl.a,[]),e.yb(1073742336,c.b,c.b,[]),e.yb(1073742336,m.c,m.c,[]),e.yb(1073742336,p.b,p.b,[]),e.yb(1073742336,gl.f,gl.f,[]),e.yb(1073742336,fl.b,fl.b,[]),e.yb(1073742336,ol.e,ol.e,[]),e.yb(1073742336,s.g,s.g,[]),e.yb(1073742336,pl.c,pl.c,[]),e.yb(1073742336,_.e,_.e,[]),e.yb(1073742336,U.i,U.i,[]),e.yb(1073742336,A.e,A.e,[]),e.yb(1073742336,A.d,A.d,[]),e.yb(1073742336,ml.a,ml.a,[]),e.yb(1073742336,hl.b,hl.b,[]),e.yb(1073742336,g.e,g.e,[]),e.yb(1073742336,yl.a,yl.a,[]),e.yb(1073742336,t,t,[]),e.yb(1024,F.i,function(){return[[{path:"",children:[{path:"",component:q},{path:"OTP",component:S},{path:"sign",component:R}]}]]},[]),e.yb(256,A.n,"XSRF-TOKEN",[]),e.yb(256,A.o,"X-XSRF-TOKEN",[]),e.yb(256,g.a,g.h,[]),e.yb(256,g.d,void 0,[]),e.yb(256,"loadingConfig",{},[])])})}}]);