webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <!--\r\n        Stylesheets and Preprocessors\r\n        ==============================\r\n\r\n        You can always bring in CSS files manually with `<link>` tags, or asynchronously\r\n        using a solution like AMD (RequireJS).  Or, if you like, you can take advantage\r\n        of Sails' conventional asset pipeline (boilerplate Gruntfile).\r\n\r\n        By default, stylesheets from your `assets/styles` folder are included\r\n        here automatically (between STYLES and STYLES END). Both CSS (.css) and LESS (.less)\r\n        are supported. In production, your styles will be minified and concatenated into\r\n        a single file.\r\n\r\n        To customize any part of the built-in behavior, just edit `tasks/pipeline.js`.\r\n        For example, here are a few things you could do:\r\n\r\n            + Change the order of your CSS files\r\n            + Import stylesheets from other directories\r\n            + Use a different or additional preprocessor, like SASS, SCSS or Stylus\r\n    -->\r\n\r\n    <!--STYLES-->\r\n    \r\n    <!--STYLES END-->\r\n \r\n<ng2-slim-loading-bar></ng2-slim-loading-bar>\r\n  <app-header></app-header>\r\n   <router-outlet></router-outlet>\r\n   <ng2-toasty></ng2-toasty>\r\n  <app-footer></app-footer>\r\n\r\n\r\n\r\n    <!--\r\n        Client-side Templates\r\n        ========================\r\n\r\n        HTML templates are important prerequisites of modern, rich client applications.\r\n        To work their magic, frameworks like Backbone, Angular, Ember, and Knockout require\r\n        that you load these templates client-side.\r\n\r\n        By default, your Gruntfile is configured to automatically load and precompile\r\n        client-side JST templates in your `assets/templates` folder, then\r\n        include them here automatically (between TEMPLATES and TEMPLATES END).\r\n\r\n        To customize this behavior to fit your needs, just edit `tasks/pipeline.js`.\r\n        For example, here are a few things you could do:\r\n\r\n            + Import templates from other directories\r\n            + Use a different template engine (handlebars, jade, dust, etc.)\r\n            + Internationalize your client-side templates using a server-side\r\n              stringfile before they're served.\r\n    -->\r\n\r\n    <!--TEMPLATES-->\r\n    \r\n    <!--TEMPLATES END-->\r\n\r\n\r\n    <!--\r\n\r\n      Client-side Javascript\r\n      ========================\r\n\r\n      You can always bring in JS files manually with `script` tags, or asynchronously\r\n      on the client using a solution like AMD (RequireJS).  Or, if you like, you can\r\n      take advantage of Sails' conventional asset pipeline (boilerplate Gruntfile).\r\n\r\n      By default, files in your `assets/js` folder are included here\r\n      automatically (between SCRIPTS and SCRIPTS END).  Both JavaScript (.js) and\r\n      CoffeeScript (.coffee) are supported. In production, your scripts will be minified\r\n      and concatenated into a single file.\r\n\r\n      To customize any part of the built-in behavior, just edit `tasks/pipeline.js`.\r\n      For example, here are a few things you could do:\r\n\r\n          + Change the order of your scripts\r\n          + Import scripts from other directories\r\n          + Use a different preprocessor, like TypeScript\r\n\r\n    -->\r\n\r\n    <!--SCRIPTS-->\r\n    \r\n    <!--SCRIPTS END-->\r\n     \r\n     \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_index_index_component__ = __webpack_require__("../../../../../src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_facebook_login_service__ = __webpack_require__("../../../../../src/app/services/facebook-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_forget_pass_forget_pass_component__ = __webpack_require__("../../../../../src/app/components/forget-pass/forget-pass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_verify_verify_component__ = __webpack_require__("../../../../../src/app/components/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var firebaseConfig = {
    apiKey: "AIzaSyCkNbjvBMRz5qYV_nQPiTi3MJeblxMVMUk",
    authDomain: "ecommerce-36ba7.firebaseapp.com",
    databaseURL: "https://ecommerce-36ba7.firebaseio.com",
    projectId: "ecommerce-36ba7",
    storageBucket: "",
    messagingSenderId: "966419666269"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_index_index_component__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_forget_pass_forget_pass_component__["a" /* ForgetPassComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_verify_verify_component__["a" /* VerifyComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng2_toasty__["a" /* ToastyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_10__components_index_index_component__["a" /* IndexComponent */]
                    },
                    {
                        path: 'register',
                        component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */]
                    },
                    {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */]
                    },
                    {
                        path: 'profile',
                        component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */]
                    },
                    {
                        path: 'verification',
                        component: __WEBPACK_IMPORTED_MODULE_20__components_verify_verify_component__["a" /* VerifyComponent */]
                    },
                    {
                        path: 'forgetpass',
                        component: __WEBPACK_IMPORTED_MODULE_19__components_forget_pass_forget_pass_component__["a" /* ForgetPassComponent */]
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_15__services_facebook_login_service__["a" /* FacebookLoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"footer-info\">\n\t\t\t\t<div class=\"col-md-4 footer-grids wow fadeInUp animated\" data-wow-delay=\".5s\">\n\t\t\t\t\t<h4 class=\"footer-logo\"><a href=\"index.html\">Modern <b>Shoppe</b> <span class=\"tag\">Everything for Kids world </span> </a></h4>\n\t\t\t\t\t<p>© 2016 Modern Shoppe . All rights reserved | Design by <a href=\"http://w3layouts.com\" target=\"_blank\">W3layouts</a></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 footer-grids wow fadeInUp animated\" data-wow-delay=\".7s\">\n\t\t\t\t\t<h3>Popular</h3>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><a href=\"about.html\">About Us</a></li>\n\t\t\t\t\t\t<li><a href=\"products.html\">new</a></li>\n\t\t\t\t\t\t<li><a href=\"contact.html\">Contact Us</a></li>\n\t\t\t\t\t\t<li><a href=\"faq.html\">FAQ</a></li>\n\t\t\t\t\t\t<li><a href=\"checkout.html\">Wishlist</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 footer-grids wow fadeInUp animated\" data-wow-delay=\".9s\">\n\t\t\t\t\t<h3>Subscribe</h3>\n\t\t\t\t\t<p>Sign Up Now For More Information <br> About Our Company </p>\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter Your Email\" required=\"\">\n\t\t\t\t\t\t<input type=\"submit\" value=\"Go\">\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/forget-pass/forget-pass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\r\n\tborder-color: red;\r\n    background: #f2edda;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    -webkit-animation: 3s alertAnim forwards;\r\n            animation: 3s alertAnim forwards;\r\n    border-width: 2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forget-pass/forget-pass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page forgetpass\">\r\n\t\t<div class=\"title-info wow fadeInUp animated\" data-wow-delay=\".5s\">\r\n\t\t\t<h3 class=\"title\">ForgetPass</h3>\r\n\t\t\t</div>\r\n<div class=\"widget-shadow\">\r\n\t\t\t<div class=\"login-top wow fadeInUp animated\" data-wow-delay=\".7s\">\r\n\t\t\t\t<h4>Enter Your email</h4>\r\n\t\t\t</div><div class=\"login-body wow fadeInUp animated\" data-wow-delay=\".7s\">\r\n\t\t\t\t<form [formGroup]=\"rForm\"  (ngSubmit)=\"forgetPass()\">\r\n\t\t\t\t\t<input type=\"email\" style=\"font-size: 1em;padding: 0.9em 1em;width: 100%;color: #999;outline: none;border: 1px solid #E2DCDC;background: #FFFFFF;margin: 0em 0em 1em 0em;\" class=\"user\"  placeholder=\"Enter your email\" required=\"\" formControlName=\"email\"  placeholder=\"Email\" required=\"\"  [(ngModel)]=\"data.email\">\r\n\t\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">This is required</div>\r\n\t\t\t\t\t<input type=\"submit\" value=\"Change Password\">\t\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/forget-pass/forget-pass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPassComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetPassComponent = (function () {
    function ForgetPassComponent(dataservice, fb, toastyService, toastyConfig) {
        this.dataservice = dataservice;
        this.fb = fb;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.data = {};
        this.rForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
    }
    ForgetPassComponent.prototype.ngOnInit = function () {
    };
    ForgetPassComponent.prototype.forgetPass = function () {
        var _this = this;
        var toastOptions = {
            title: "Wait",
            msg: "Sending Mail",
            showClose: true,
            timeout: 2000,
            theme: 'bootstrap',
        };
        this.toastyService.wait(toastOptions);
        this.dataservice.forgetPass(this.data).subscribe(function (result) {
            _this.data = '';
            if (result.status == true) {
                console.log("mail sent");
                var toastOptions = {
                    title: "Success",
                    msg: "Check Your Email to Proceed",
                    showClose: true,
                    timeout: 13000,
                    theme: 'bootstrap',
                };
                _this.toastyService.success(toastOptions);
            }
            else if (result.status == false) {
                console.log("mail not sent");
                console.log(result);
                var toastOptions = {
                    title: "Eroor",
                    msg: "Error,Please try agian",
                    showClose: true,
                    timeout: 9000,
                    theme: 'bootstrap',
                };
                _this.toastyService.error(toastOptions);
            }
        });
    };
    ForgetPassComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-forget-pass',
            template: __webpack_require__("../../../../../src/app/components/forget-pass/forget-pass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/forget-pass/forget-pass.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["b" /* ToastyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _d || Object])
    ], ForgetPassComponent);
    return ForgetPassComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=forget-pass.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n\t\t<div class=\"top-header navbar navbar-default\"><!--header-one-->\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"nav navbar-nav wow fadeInLeft animated\" data-wow-delay=\".5s\">\r\n          <div *ngIf=\"check==0;else profile\" ><p>Welcome to Modern Shoppe <a  href=\"/register\">Register </a> Or <a href=\"/login\">Sign In </a></p></div>\r\n          <ng-template #profile><a href=\"/profile\">Profile</a></ng-template>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"nav navbar-nav navbar-right social-icons wow fadeInRight animated\" data-wow-delay=\".5s\">\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"#\"> </a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"pin\"> </a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"in\"> </a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"be\"> </a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"you\"> </a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" class=\"vimeo\"> </a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"header-two navbar navbar-default\"><!--header-two-->\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"nav navbar-nav header-two-left\">\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></i>+1234 567 892</li>\r\n\t\t\t\t\t\t<li><i class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></i><a href=\"mailto:info@example.com\">mail@example.com</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"nav navbar-nav logo wow zoomIn animated\" data-wow-delay=\".7s\">\r\n\t\t\t\t\t<h1><a href=\"index.html\">Modern <b>Shoppe</b><span class=\"tag\">Everything for Kids world </span> </a></h1>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"nav navbar-nav navbar-right header-two-right\">\r\n\t\t\t\t\t<div class=\"header-right my-account\">\r\n\t\t\t\t\t\t<a href=\"contact.html\"><span class=\"glyphicon glyphicon-map-marker\" aria-hidden=\"true\"></span> CONTACT US</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"header-right cart\">\r\n\t\t\t\t\t\t<a href=\"#\"><span class=\"glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span></a>\r\n\t\t\t\t\t\t<h4><a href=\"checkout.html\">\r\n\t\t\t\t\t\t\t\t<span class=\"simpleCart_total\"> $0.00 </span> (<span id=\"simpleCart_quantity\" class=\"simpleCart_quantity\"> 0 </span>)\r\n\t\t\t\t\t\t</a></h4>\r\n\t\t\t\t\t\t<div class=\"cart-box\">\r\n\t\t\t\t\t\t\t<p><a href=\"javascript:;\" class=\"simpleCart_empty\">Empty cart</a></p>\r\n\t\t\t\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"top-nav navbar navbar-default\"><!--header-three-->\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<nav class=\"navbar\" role=\"navigation\">\r\n\t\t\t\t\t<div class=\"navbar-header\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n\t\t\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\r\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--navbar-header-->\r\n\t\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n\t\t\t\t\t\t<ul class=\"nav navbar-nav top-nav-info\">\r\n\t\t\t\t\t\t\t<li><a href=\"/\" class=\"active\">Home</a></li>\r\n\r\n\t\t\t\t\t\t\t<li class=\"dropdown grid\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle list1\" data-toggle=\"dropdown\">Kids<b class=\"caret\"></b></a>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu multi-column multi-column2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 menu-grids\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>New Arrivals</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Topwear</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Bottomwear</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Innerwear</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Nightwear</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Swimwear</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Jumpers</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 menu-grids\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Boys</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Jeans</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Shirts</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">T-shirts</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Dhoti Kurta Sets</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Winter wear</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Party Wear</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 menu-grids\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Girls</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Tops</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Leggings</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Dresses </a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Skirts</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Casual Dresses</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Capris & 3/4ths</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3 menu-grids new-add2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"products.html\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h6>Kids Special</h6>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/img1.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"dropdown grid\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle list1\" data-toggle=\"dropdown\">Accessories<b class=\"caret\"></b></a>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu multi-column menu-two multi-column3\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 menu-grids\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"multi-column-dropdown\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Jewellery</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Hair bands & Clips</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Bangles </a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Caps & Belts</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Rain wear</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a class=\"list\" href=\"products.html\">Bags</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 menu-grids\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"products.html\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"new-add\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>30% OFF <br> Today Only</h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"dropdown grid\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle list1\" data-toggle=\"dropdown\">Categories <b class=\"caret\"></b></a>\r\n\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu multi-column multi-column4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 menu-grids menulist1\" style=\"border-right: solid 1px lightgray\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Categories</h4>\r\n                      <ul  class=\"multi-column-dropdown \">\r\n\r\n                        <li *ngFor=\"let key of keys\" id={{userData[key].id}} ><a class=\"list\" style=\"text-decoration: none;cursor: pointer\" (click)=\"sub(userData[key].id)\"> {{userData[key].name}}</a></li>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 menu-grids\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4>Sub Categories</h4>\r\n                      <ul class=\"multi-column-dropdown \">\r\n\r\n                        <li *ngFor=\"let keysub of keysub\" id={{subcat[keysub].id}} ><a class=\"list\" href=\"#\"> {{subcat[keysub].name}}</a></li>\r\n\r\n\r\n\r\n                      </ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 menu-grids\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 menu-grids\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"products.html\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"new-add\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h5>30% OFF <br> Today Only</h5>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li><a href=\"codes.html\">Special Offers</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t\t\t\t<!--//navbar-collapse-->\r\n\t\t\t\t\t\t<header class=\"cd-main-header\">\r\n\t\t\t\t\t\t\t<ul class=\"cd-header-buttons\">\r\n\t\t\t\t\t\t\t\t<li><a class=\"cd-search-trigger\" href=\"#cd-search\"> <span></span></a></li>\r\n\t\t\t\t\t\t\t</ul> <!-- cd-header-buttons -->\r\n\t\t\t\t\t\t</header>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--//navbar-header-->\r\n\t\t\t\t</nav>\r\n\t\t\t\t<div id=\"cd-search\" class=\"cd-search\">\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<input type=\"search\" placeholder=\"Search...\">\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.check = 0;
        var session = localStorage.getItem('userData');
        if (session) {
            this.check = 1;
        }
        this.getCategory();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getCategory = function () {
        var _this = this;
        this.dataservice.getCategories().subscribe(function (result) {
            console.log("get categories");
            if (result.status == true) {
                _this.userData = result.categories;
                _this.keys = Object.keys(_this.userData);
                console.log(_this.userData);
            }
            else {
                console.log("false");
            }
        });
    };
    HeaderComponent.prototype.sub = function (data) {
        var _this = this;
        console.log("in sub");
        console.log(data);
        this.dataservice.getSubCategories(data).subscribe(function (result) {
            console.log("sub cate");
            if (result.status == true) {
                console.log(result.subcategories);
                _this.subcat = result.subcategories;
                _this.keysub = Object.keys(_this.subcat);
            }
        });
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b;
}());

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t<div class=\"banner\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"banner-text\">\t\t\t\n\t\t\t\t<div class=\"col-sm-5 banner-left wow fadeInLeft animated\" data-wow-delay=\".5s\">\t\t\t\n\t\t\t\t\t<h2>On Entire Fashion range</h2>\n\t\t\t\t\t<h3>Coming Soon </h3>\n\t\t\t\t\t<h4>Our New Designs</h4>\n\t\t\t\t\t<div class=\"count main-row\">\n\t\t\t\t\t\t<ul id=\"example\">\n\t\t\t\t\t\t\t<li><span class=\"hours\">00</span><p class=\"hours_text\">Hours</p></li>\n\t\t\t\t\t\t\t<li><span class=\"minutes\">00</span><p class=\"minutes_text\">Minutes</p></li>\n\t\t\t\t\t\t\t<li><span class=\"seconds\">00</span><p class=\"seconds_text\">Seconds</p></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"clearfix\"> </div>\n\t\t\t\t\t\t\t<script type=\"text/javascript\" src=\"/js/jquery.countdown.min.js\"></script>\n\t\t\t\t\t\t\t<script type=\"text/javascript\">\n\t\t\t\t\t\t\t\t$('#example').countdown({\n\t\t\t\t\t\t\t\t\tdate: '12/24/2020 15:59:59',\n\t\t\t\t\t\t\t\t\toffset: -8,\n\t\t\t\t\t\t\t\t\tday: 'Day',\n\t\t\t\t\t\t\t\t\tdays: 'Days'\n\t\t\t\t\t\t\t\t}, function () {\n\t\t\t\t\t\t\t\t\talert('Done!');\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t</script>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-7 banner-right wow fadeInRight animated\" data-wow-delay=\".5s\">\t\t\t\n\t\t\t\t\t<section class=\"slider grid\">\n\t\t\t\t\t\t<div class=\"flexslider\">\n\t\t\t\t\t\t\t<ul class=\"slides\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<h4>-30%</h4>\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/b1.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<h4>-25%</h4>\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/b2.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<h4>-32%</h4>\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/b3.png\" alt=\"\">\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</section>\n\t\t\t\t\t<!--FlexSlider-->\n\t\t\t\t\t<script defer src=\"/js/jquery.flexslider.js\"></script>\n\t\t\t\t\t<script type=\"text/javascript\">\n\t\t\t\t\t\t$(window).load(function(){\n\t\t\t\t\t\t  $('.flexslider').flexslider({\n\t\t\t\t\t\t\tanimation: \"pagination\",\n\t\t\t\t\t\t\tstart: function(slider){\n\t\t\t\t\t\t\t  $('body').removeClass('loading');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t  });\n\t\t\t\t\t\t});\n\t\t\t\t\t</script>\n\t\t\t\t\t<!--End-slider-script-->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"> </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\t\t\n\t<!--//banner-->\n\t<!--new-->\n\t<div class=\"new\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"title-info wow fadeInUp animated\" data-wow-delay=\".5s\">\n\t\t\t\t<h3 class=\"title\">New <span>Arrivals</span></h3>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur </p>\n\t\t\t</div>\n\t\t\t<div class=\"new-info\">\n\t\t\t\t<div class=\"col-md-3 new-grid simpleCart_shelfItem wow flipInY animated\" data-wow-delay=\".5s\">\n\t\t\t\t\t<div class=\"new-top\">\n\t\t\t\t\t\t<a href=\"single.html\"><img src=\"./assets/images/g9.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t\t<div class=\"new-text\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"\"> Add to cart</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"single.html\">Quick View </a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"products.html\">Show Details </a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"new-bottom\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Baby Red Dress </a></h5>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span>☆</span>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"ofr\">\n\t\t\t\t\t\t\t<p class=\"pric1\"><del>$2000.00</del></p>\n\t\t\t\t\t\t\t<p><span class=\"item_price\">$500.00</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 new-grid new-mdl simpleCart_shelfItem wow flipInY animated\" data-wow-delay=\".7s\">\n\t\t\t\t\t<div class=\"new-top\">\n\t\t\t\t\t\t<a href=\"single.html\"><img src=\"./assets/images/g10.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t\t<div class=\"new-text\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"\"> Add to cart</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"single.html\">Quick View </a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"products.html\">Show Details </a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"new-bottom\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Crocs Sandals </a></h5>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span>☆</span>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"ofr\">\n\t\t\t\t\t\t\t<p><span class=\"item_price\">$50.00</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 new-grid new-mdl1 simpleCart_shelfItem wow flipInY animated\" data-wow-delay=\".9s\">\n\t\t\t\t\t<div class=\"new-top\">\n\t\t\t\t\t\t<a href=\"single.html\"><img src=\"./assets/images/g11.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t\t<div class=\"new-text\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"\"> Add to cart</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"single.html\">Quick View </a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"products.html\">Show Details </a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"new-bottom\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Pink Sip Cup </a></h5>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span>☆</span>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"ofr\">\n\t\t\t\t\t\t\t<p><span class=\"item_price\">$150.00</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 new-grid simpleCart_shelfItem wow flipInY animated\" data-wow-delay=\"1.1s\">\n\t\t\t\t\t<div class=\"new-top\">\n\t\t\t\t\t\t<a href=\"single.html\"><img src=\"./assets/images/g12.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t\t<div class=\"new-text\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"\"> Add to cart</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"single.html\">Quick View </a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"products.html\">Show Details </a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"new-bottom\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Child Print Bike </a></h5>\n\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span class=\"on\">☆</span>\n\t\t\t\t\t\t\t<span>☆</span>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"ofr\">\n\t\t\t\t\t\t\t<p class=\"pric1\"><del>$5050.00</del></p>\n\t\t\t\t\t\t\t<p><span class=\"item_price\">$3020.00</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"> </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\t\t\n\t<!--//new-->\n\t<!--gallery-->\n\t<div class=\"gallery\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"title-info wow fadeInUp animated\" data-wow-delay=\".5s\">\n\t\t\t\t<h3 class=\"title\">Popular<span> Products</span></h3>\n\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur </p>\n\t\t\t</div>\n\t\t\t<div class=\"gallery-info\">\n\t\t\t\t<div class=\"col-md-3 gallery-grid wow flipInY animated\" data-wow-delay=\".5s\">\n\t\t\t\t\t<a href=\"products.html\"><img src=\"./assets/images/g1.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t<div class=\"gallery-text simpleCart_shelfItem\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Baby Girls' Dress </a></h5>\n\t\t\t\t\t\t<p><span class=\"item_price\">100$</span></p>\n\t\t\t\t\t\t<h4 class=\"sizes\">Sizes: <a href=\"#\"> s</a> - <a href=\"#\">m</a> - <a href=\"#\">l</a> - <a href=\"#\">xl</a> </h4>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"#\"><span class=\"glyphicon glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon glyphicon-heart-empty\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 gallery-grid gallery-grid1 wow flipInY animated\" data-wow-delay=\".7s\">\n\t\t\t\t\t<a href=\"products.html\"><img src=\"./assets/images/g2.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t<div class=\"gallery-text simpleCart_shelfItem\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Pokemon Onesies</a></h5>\n\t\t\t\t\t\t<p><span class=\"item_price\">79$</span></p>\n\t\t\t\t\t\t<h4 class=\"sizes\">Sizes: <a href=\"#\"> s</a> - <a href=\"#\">m</a> - <a href=\"#\">l</a> - <a href=\"#\">xl</a> </h4>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"#\"><span class=\"glyphicon glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon glyphicon-heart-empty\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 gallery-grid gallery-grid2 wow flipInY animated\" data-wow-delay=\".9s\">\n\t\t\t\t\t<a href=\"products.html\"><img src=\"./assets/images/g3.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t<div class=\"gallery-text simpleCart_shelfItem\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Doctor Play Set</a></h5>\n\t\t\t\t\t\t<p><span class=\"item_price\">30$</span></p>\n\t\t\t\t\t\t<h4 class=\"sizes\">Sizes: <a href=\"#\"> s</a> - <a href=\"#\">m</a> - <a href=\"#\">l</a> - <a href=\"#\">xl</a> </h4>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"#\"><span class=\"glyphicon glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon glyphicon-heart-empty\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 gallery-grid wow flipInY animated\" data-wow-delay=\"1.1s\">\n\t\t\t\t\t<a href=\"products.html\"><img src=\"./assets/images/g4.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t<div class=\"gallery-text simpleCart_shelfItem\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Cap & Gloves Set</a></h5>\n\t\t\t\t\t\t<p><span class=\"item_price\">15$</span></p>\n\t\t\t\t\t\t<h4 class=\"sizes\">Sizes: <a href=\"#\"> s</a> - <a href=\"#\">m</a> - <a href=\"#\">l</a> - <a href=\"#\">xl</a> </h4>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"#\"><span class=\"glyphicon glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon glyphicon-heart-empty\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 gallery-grid wow flipInY animated\" data-wow-delay=\".5s\">\n\t\t\t\t\t<a href=\"products.html\"><img src=\"./assets/images/g5.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t<div class=\"gallery-text simpleCart_shelfItem\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Full Sleeves Romper</a></h5>\n\t\t\t\t\t\t<p><span class=\"item_price\">60$</span></p>\n\t\t\t\t\t\t<h4 class=\"sizes\">Sizes: <a href=\"#\"> s</a> - <a href=\"#\">m</a> - <a href=\"#\">l</a> - <a href=\"#\">xl</a> </h4>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"#\"><span class=\"glyphicon glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon glyphicon-heart-empty\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 gallery-grid gallery-grid1 wow flipInY animated\" data-wow-delay=\".7s\">\n\t\t\t\t\t<a href=\"products.html\"><img src=\"./assets/images/g6.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t<div class=\"gallery-text simpleCart_shelfItem\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Party Wear Frock</a></h5>\n\t\t\t\t\t\t<p><span class=\"item_price\">80$</span></p>\n\t\t\t\t\t\t<h4 class=\"sizes\">Sizes: <a href=\"#\"> s</a> - <a href=\"#\">m</a> - <a href=\"#\">l</a> - <a href=\"#\">xl</a> </h4>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"#\"><span class=\"glyphicon glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon glyphicon-heart-empty\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 gallery-grid gallery-grid2 wow flipInY animated\" data-wow-delay=\".9s\">\n\t\t\t\t\t<a href=\"products.html\"><img src=\"./assets/images/g7.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t<div class=\"gallery-text simpleCart_shelfItem\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Bear Diaper Bag</a></h5>\n\t\t\t\t\t\t<p><span class=\"item_price\">110$</span></p>\n\t\t\t\t\t\t<h4 class=\"sizes\">Sizes: <a href=\"#\"> s</a> - <a href=\"#\">m</a> - <a href=\"#\">l</a> - <a href=\"#\">xl</a> </h4>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"#\"><span class=\"glyphicon glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon glyphicon-heart-empty\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 gallery-grid wow flipInY animated\" data-wow-delay=\"1.1s\">\n\t\t\t\t\t<a href=\"products.html\"><img src=\"./assets/images/g8.jpg\" class=\"img-responsive\" alt=\"\"/></a>\n\t\t\t\t\t<div class=\"gallery-text simpleCart_shelfItem\">\n\t\t\t\t\t\t<h5><a class=\"name\" href=\"single.html\">Battery Police Bike</a></h5>\n\t\t\t\t\t\t<p><span class=\"item_price\">300$</span></p>\n\t\t\t\t\t\t<h4 class=\"sizes\">Sizes: <a href=\"#\"> s</a> - <a href=\"#\">m</a> - <a href=\"#\">l</a> - <a href=\"#\">xl</a> </h4>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a class=\"item_add\" href=\"#\"><span class=\"glyphicon glyphicon glyphicon-shopping-cart\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon glyphicon-heart-empty\" aria-hidden=\"true\"></span></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--//gallery-->\n\t<!--trend-->\n\t<div class=\"trend wow zoomIn animated\" data-wow-delay=\".5s\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"trend-info\">\n\t\t\t\t<section class=\"slider grid\">\n\t\t\t\t\t<div class=\"flexslider trend-slider\">\n\t\t\t\t\t\t<ul class=\"slides\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class=\"col-md-5 trend-left\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/t1.png\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7 trend-right\">\n\t\t\t\t\t\t\t\t\t<h4>TOP 10 TRENDS <span>FOR YOU</span></h4>\n\t\t\t\t\t\t\t\t\t<h5>Flat 20% OFF</h5>\n\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus, justo ac volutpat vestibulum, dolor massa pharetra nunc, nec facilisis lectus nulla a tortor. Duis ultrices nunc a nisi malesuada suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu bibendum felis. Sed viverra dapibus tincidunt.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class=\"col-md-5 trend-left\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/t2.png\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7 trend-right\">\n\t\t\t\t\t\t\t\t\t<h4>TOP 10 TRENDS <span>FOR YOU</span></h4>\n\t\t\t\t\t\t\t\t\t<h5>Flat 20% OFF</h5>\n\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus, justo ac volutpat vestibulum, dolor massa pharetra nunc, nec facilisis lectus nulla a tortor. Duis ultrices nunc a nisi malesuada suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu bibendum felis. Sed viverra dapibus tincidunt.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class=\"col-md-5 trend-left\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/t3.png\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7 trend-right\">\n\t\t\t\t\t\t\t\t\t<h4>TOP 10 TRENDS <span>FOR YOU</span></h4>\n\t\t\t\t\t\t\t\t\t<h5>Flat 20% OFF</h5>\n\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus, justo ac volutpat vestibulum, dolor massa pharetra nunc, nec facilisis lectus nulla a tortor. Duis ultrices nunc a nisi malesuada suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu bibendum felis. Sed viverra dapibus tincidunt.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class=\"col-md-5 trend-left\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/images/t4.png\" alt=\"\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7 trend-right\">\n\t\t\t\t\t\t\t\t\t<h4>TOP 10 TRENDS <span>FOR YOU</span></h4>\n\t\t\t\t\t\t\t\t\t<h5>Flat 20% OFF</h5>\n\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus, justo ac volutpat vestibulum, dolor massa pharetra nunc, nec facilisis lectus nulla a tortor. Duis ultrices nunc a nisi malesuada suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu bibendum felis. Sed viverra dapibus tincidunt.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</section>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--//trend-->\n\t<!--footer-->\n\t\n\t<!--//footer-->\t\t\n\t<!--search jQuery-->\n\t<script src=\"/js/main.js\"></script>\n\t<!--//search jQuery-->\n\t<!--smooth-scrolling-of-move-up-->\n\t<script type=\"text/javascript\">\n\t\t$(document).ready(function() {\n\t\t\n\t\t\tvar defaults = {\n\t\t\t\tcontainerID: 'toTop', // fading element id\n\t\t\t\tcontainerHoverID: 'toTopHover', // fading element hover id\n\t\t\t\tscrollSpeed: 1200,\n\t\t\t\teasingType: 'linear' \n\t\t\t};\n\t\t\t\n\t\t\t$().UItoTop({ easingType: 'easeOutQuart' });\n\t\t\t\n\t\t});\n\t</script>\n\t<!--//smooth-scrolling-of-move-up-->\n\t<!--Bootstrap core JavaScript\n    ================================================== -->\n    <!--Placed at the end of the document so the pages load faster -->\n "

/***/ }),

/***/ "../../../../../src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("../../../../../src/app/components/index/index.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\r\n\tborder-color: red;\r\n    background: #f2edda;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    -webkit-animation: 3s alertAnim forwards;\r\n            animation: 3s alertAnim forwards;\r\n    border-width: 2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\nAuthor: W3layouts\r\nAuthor URL: http://w3layouts.com\r\nLicense: Creative Commons Attribution 3.0 Unported\r\nLicense URL: http://creativecommons.org/licenses/by/3.0/\r\n-->\r\n\r\n\t<!--header-->\r\n\r\n\t<!--//header-->\r\n\t<!--breadcrumbs-->\r\n\t<div class=\"breadcrumbs\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<ol class=\"breadcrumb breadcrumb1 animated wow fadeInUp\" data-wow-delay=\".5s\">\r\n\t\t\t\t<li><a href=\"index.html\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>Home</a></li>\r\n\t\t\t\t<li class=\"active\">Sign In</li>\r\n\t\t\t</ol>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--//breadcrumbs-->\r\n\t<!--login-->\r\n\t<div class=\"login-page\">\r\n\t\t<div class=\"title-info wow fadeInUp animated\" data-wow-delay=\".5s\">\r\n\t\t\t<h3 class=\"title\">SignIn<span> Form</span></h3>\r\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur </p>\r\n\t\t</div>\r\n\t\t<div class=\"widget-shadow\">\r\n\t\t\t<div class=\"login-top wow fadeInUp animated\" data-wow-delay=\".7s\">\r\n\t\t\t\t<h4>Welcome back to Modern Shoppe ! <br> Not a Member? <a href=\"register.html\">  Register Now »</a> </h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"login-body wow fadeInUp animated\" data-wow-delay=\".7s\">\r\n\t\t\t\t<form [formGroup]=\"rForm\" (ngSubmit)=\"login()\">\r\n\t\t\t\t\t<input type=\"text\" class=\"user\"  placeholder=\"Enter your email\" required=\"\" formControlName=\"email\"  placeholder=\"First Name\" required=\"\" [(ngModel)]=\"data.email\">\r\n\t\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">This is required</div>\r\n\t\t\t\t\t<input type=\"password\"  formControlName=\"password\" class=\"lock\" placeholder=\"Password\" required=\"\" [(ngModel)]=\"data.password\">\r\n\t\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">This is required</div>\r\n\t\t\t\t\t<input type=\"submit\" value=\"Sign In\"  >\r\n\t\t\t\t\t<div class=\"forgot-grid\">\r\n\t\t\t\t\t\t<label class=\"checkbox\"><input type=\"checkbox\" name=\"checkbox\"><i></i>Remember me</label>\r\n\t\t\t\t\t\t<div class=\"forgot\">\r\n\t\t\t\t\t\t\t<a href=\"/forgetpass\">Forgot Password?</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"clearfix\"> </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"login-page-bottom\">\r\n\t\t\t<h5> - OR -</h5>\r\n\t\t\t<div class=\"social-btn\"><a  (click)=\"socialLogin('facebook')\" *ngIf=\"!(user | async)?.uid\" ><i>Sign In with Facebook</i></a></div>\r\n\t\t\t<div class=\"social-btn sb-two\"><a (click)=\"socialLogin('twitter')\" *ngIf=\"!(user | async)?.uid\"><i>Sign In with Twitter</i></a></div>\r\n\t\t\t<br><br>\r\n\t\t\t<div class=\"social-btn sb-three\" style=\"background-color:red\"><a (click)=\"socialLogin('google')\" *ngIf=\"!(user | async)?.uid\"><i>Sign In with Google</i></a></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<ng2-toasty></ng2-toasty>\r\n\t<!--//login-->\r\n\t<!--footer-->\r\n\r\n\t<!--//footer-->\r\n\t<!--search jQuery-->\r\n\t<script src=\"js/main.js\"></script>\r\n\t<!--//search jQuery-->\r\n\t<!--smooth-scrolling-of-move-up-->\r\n\t<script type=\"text/javascript\">\r\n\t\t$(document).ready(function() {\r\n\r\n\t\t\tvar defaults = {\r\n\t\t\t\tcontainerID: 'toTop', // fading element id\r\n\t\t\t\tcontainerHoverID: 'toTopHover', // fading element hover id\r\n\t\t\t\tscrollSpeed: 1200,\r\n\t\t\t\teasingType: 'linear'\r\n\t\t\t};\r\n\r\n\t\t\t$().UItoTop({ easingType: 'easeOutQuart' });\r\n\r\n\t\t});\r\n\t</script>\r\n\t<!--//smooth-scrolling-of-move-up-->\r\n\t<!--Bootstrap core JavaScript\r\n    ================================================== -->\r\n    <!--Placed at the end of the document so the pages load faster -->\r\n    <script src=\"js/bootstrap.js\"></script>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_facebook_login_service__ = __webpack_require__("../../../../../src/app/services/facebook-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = (function () {
    function LoginComponent(dataservice, fb, afService, router, toastyService, toastyConfig, slimLoadingBarService) {
        this.dataservice = dataservice;
        this.fb = fb;
        this.afService = afService;
        this.router = router;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.slimLoadingBarService = slimLoadingBarService;
        this.data = {};
        this.rForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
        });
        console.log("check status");
        if (localStorage.getItem('userData')) {
            this.router.navigate(['/profile']); // redirecting to home page
        }
        /* (auth) => {
           if (auth == null) {
             console.log("Not Logged in.");
             this.isLoggedIn = false;  //login fail
              // redirecting to login page
           }
           else {
             console.log("Successfully Logged in.");
             this. isLoggedIn = true; //login success
             //storing userData value in bower location storage.
             localStorage.setItem('userData', JSON.stringify(auth.auth));
             this.router.navigate(['profile']); // redirecting to home page
           }*/
        /*}*/
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var toastOptions = {
            title: "Wait",
            msg: "Matching Credentials",
            showClose: true,
            timeout: 2000,
            theme: 'bootstrap',
        };
        this.toastyService.wait(toastOptions);
        this.dataservice.loginUser(this.data).subscribe(function (result) {
            //this.toastyService.clearAll();
            console.log(result);
            if (result.status == true) {
                _this.slimLoadingBarService.start();
                var toastOptions = {
                    title: "Success",
                    msg: "Redirecting to Profile",
                    showClose: true,
                    timeout: 9000,
                    theme: 'bootstrap',
                };
                localStorage.setItem('userData', JSON.stringify(result.userData));
                // Add see all possible types in one shot
                _this.toastyService.success(toastOptions);
                console.log("stauts true");
                _this.slimLoadingBarService.complete();
                _this.router.navigate(['/profile']);
            }
            else if (result.status == false) {
                console.log("in the false");
                var toastOptions = {
                    title: "Error",
                    msg: "Wrong Credentials",
                    showClose: true,
                    timeout: 9000,
                    theme: 'bootstrap',
                };
                _this.toastyService.error(toastOptions);
                console.log("stauts false");
            }
            else if (result.verified == 0) {
                var toastOptions = {
                    title: "Info",
                    msg: "Please Registerd First",
                    showClose: true,
                    timeout: 9000,
                    theme: 'bootstrap',
                };
                _this.toastyService.info(toastOptions);
                //alert("Please register YOur account");
            }
        });
    };
    LoginComponent.prototype.socialLogin = function (loginProvider) {
        var _this = this;
        this.slimLoadingBarService.start();
        console.log("logun social login");
        console.log(loginProvider);
        this.afService.socialLogin(loginProvider).then(function (data) {
            console.log("in social login");
            console.log(data);
            localStorage.setItem('userData', JSON.stringify(data));
            /*this.router.navigate(['/profile',{userData:JSON.stringify(data)}]);*/
            _this.router.navigate(['/profile']);
        }).catch(function (data) {
            console.log(data);
            console.log("in catch");
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_facebook_login_service__["a" /* FacebookLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_facebook_login_service__["a" /* FacebookLoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["b" /* ToastyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _g || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n      <h1>\r\n        Welcome {{userData.user.displayName}} \r\n      </h1>\r\n     \r\n      <img src=\"{{userData.user.photoURL}}\" class=\"profilePic\"/>\r\n      <a (click)=\"logout()\" >logout out</a>\r\n    "

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_facebook_login_service__ = __webpack_require__("../../../../../src/app/services/facebook-login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(route, router, afService) {
        this.route = route;
        this.router = router;
        this.afService = afService;
        this.check = 0;
        var session = localStorage.getItem('userData');
        if (session) {
            this.check = 1;
        }
        this.session();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        /* this.sub = this.route.params.subscribe(params => {
            console.log("in porgile params");
            var result=JSON.parse(params.userData);
            console.log(result);
            this.userData=result;
            console.log(result.user.photoURL);
          });*/
    };
    ProfileComponent.prototype.session = function () {
        var storage = localStorage.getItem('userData');
        if (storage) {
            var result = JSON.parse(localStorage.getItem('userData'));
            this.userData = JSON.parse(localStorage.getItem('userData'));
        }
        else {
            console.log("No Data");
            this.router.navigate(['/login']);
        }
    };
    ProfileComponent.prototype.logout = function () {
        localStorage.setItem('userData', '');
        this.afService.logout();
        this.router.navigate(['/login']);
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_facebook_login_service__["a" /* FacebookLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_facebook_login_service__["a" /* FacebookLoginService */]) === "function" && _c || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\r\n    background: #f2edda;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\nAuthor: W3layouts\r\nAuthor URL: http://w3layouts.com\r\nLicense: Creative Commons Attribution 3.0 Unported\r\nLicense URL: http://creativecommons.org/licenses/by/3.0/\r\n-->\r\n\t<!--header-->\r\n\r\n\t<!--//header-->\r\n\t<!--breadcrumbs-->\r\n\t<div class=\"breadcrumbs\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<ol class=\"breadcrumb breadcrumb1 animated wow slideInLeft\" data-wow-delay=\".5s\">\r\n\t\t\t\t<li><a href=\"index.html\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>Home</a></li>\r\n\t\t\t\t<li class=\"active\">Register</li>\r\n\t\t\t</ol>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--//breadcrumbs-->\r\n\t<!--login-->\r\n\t\r\n\t<div class=\"login-page\">\r\n\t\t<div class=\"title-info wow fadeInUp animated\" data-wow-delay=\".5s\">\r\n\t\t\t<h3 class=\"title\">Register<span> Form</span></h3>\r\n\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur </p>\r\n\t\t</div>\r\n\t\t<div class=\"widget-shadow\">\r\n\t\t\t<div class=\"login-top wow fadeInUp animated\" data-wow-delay=\".7s\">\r\n\t\t\t\t<h4>Already have an Account ?<a href=\"signin.html\">  Sign In »</a> </h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"login-body\">\r\n\t\t\t\t<form [formGroup]=\"rForm\" class=\"wow fadeInUp animated\" data-wow-delay=\".7s\" (ngSubmit)=\"formSubmit()\">\r\n\t\t\t\t\t<input type=\"text\" formControlName=\"fname\"  placeholder=\"First Name\" required=\"\" [(ngModel)]=\"data.firstname\">\r\n\t\t\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['fname'].valid && rForm.controls['fname'].touched\">This is required</div>\r\n\t\t\t\t\t<input type=\"text\"  formControlName=\"lname\" placeholder=\"Last Name\" required=\"\" [(ngModel)]=\"data.lastname\">\r\n\t\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['lname'].valid && rForm.controls['lname'].touched\">This is required</div>\r\n\t\t\t\t\t<input type=\"email\"  formControlName=\"email\" style=\"font-size: 1em; padding: 0.9em 1em;width: 100%;color: #999;outline: none;border: 1px solid #E2DCDC;background: #FFFFFF;margin: 0em 0em 1em 0em;\" class=\"email\" placeholder=\"Email Address\" required=\"\" [(ngModel)]=\"data.email\">\r\n\t\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['email'].valid && rForm.controls['email'].touched\">This is required</div>\r\n\t\t\t\t\t<input type=\"password\"  class=\"lock\" formControlName=\"password\" placeholder=\"Password\" [(ngModel)]=\"data.password\">\r\n\t\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">This is required</div>\r\n\t\t\t\t\t<!-- <input type=\"password\" name=\"confirmpassword\" class=\"lock\" formControlName=\"conformpassword\" placeholder=\"Confirm Password\" [(ngModel)]=\"data.confirmpassword\"> -->\r\n\t\t\t\t\t<select required=\"\" [(ngModel)]=\"data.country\" id=\"country\" formControlName=\"country\" style=\"font-size: 1em; padding: 0.9em 1em;width: 100%;color: #999;outline: none;border: 1px solid #E2DCDC;background: #FFFFFF;margin: 0em 0em 1em 0em;\"><option>Select country</option></select>\r\n\t\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['country'].valid && rForm.controls['country'].touched\">This is required</div>\r\n\t\t\t\t\t<select required=\"\" [(ngModel)]=\"data.state\" formControlName=\"state\" id=\"state\" placeholder=\"Select State\" style=\"font-size: 1em; padding: 0.9em 1em;width: 100%;color: #999;outline: none;border: 1px solid #E2DCDC;background: #FFFFFF;margin: 0em 0em 1em 0em;\"><option>Select State</option></select>\r\n\t\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['state'].valid && rForm.controls['state'].touched\">This is required</div>\r\n\t\t\t\t\t<input type=\"text\" formControlName=\"address\" placeholder=\"Address\" required=\"\" [(ngModel)]=\"data.address\">\r\n\t\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['address'].valid && rForm.controls['address'].touched\">This is required</div>\r\n\t\t\t\t\t <fieldset id=\"group1\" style=\"text-align: center;\">\r\n        \t\t\t <LABEL>Gender</LABEL>\r\n        \t\t\t <br>\r\n       \t\t\t\t\t Male:<input type=\"radio\" value=\"male\" formControlName=\"gender\" [(ngModel)]=\"data.gender\" >&nbsp;&nbsp;&nbsp;\r\n        \t\t\t\t Female:<input type=\"radio\" value=\"female\"  formControlName=\"gender\" [(ngModel)]=\"data.gender\" >\r\n    \t\t\t\t</fieldset>\r\n    \t\t\t\t\r\n\t\t\t\t\t<input type=\"submit\"  value=\"Register\">\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!--//login-->\r\n\t<!--footer-->\r\n\t\r\n\t<!--//footer-->\t\t\t\t\r\n\t<!--search jQuery-->\r\n\t\r\n\t<!--//search jQuery-->\r\n\t<!--smooth-scrolling-of-move-up-->\r\n\t\r\n\t<!--//smooth-scrolling-of-move-up-->\r\n\t<!--Bootstrap core JavaScript\r\n    ================================================== -->\r\n    <!--Placed at the end of the document so the pages load faster -->\r\n    "

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(dataservice, router, fb, toastyService, toastyConfig, slimLoadingBarService) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.slimLoadingBarService = slimLoadingBarService;
        this.data = {};
        this.rForm = fb.group({
            'fname': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'lname': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'country': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'state': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'address': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'gender': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(500)])],
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log("ngConstructor.... register");
    };
    RegisterComponent.prototype.formSubmit = function () {
        var _this = this;
        console.log("in form submit");
        var toastOptions = {
            title: "Wait",
            msg: "Registering the user",
            showClose: true,
            timeout: 2000,
            theme: 'bootstrap',
        };
        // this.slimLoadingBarService.start();
        this.toastyService.wait(toastOptions);
        this.dataservice.registerUser(this.data)
            .subscribe(function (result) {
            var user = _this.data;
            console.log("user data is ");
            console.log(user['email']);
            console.log(result);
            console.log(result.empty);
            if (result.success == 1) {
                console.log("user registered");
                var toastOptions = {
                    title: "Success",
                    msg: "Redirecting to Verification",
                    showClose: true,
                    timeout: 9000,
                    theme: 'bootstrap',
                };
                _this.toastyService.success(toastOptions);
                // Add see all possible types in one shot
                //  this.slimLoadingBarService.start();
                _this.router.navigate(['/verification', { data: user['email'] }]);
            }
            else if (result.error == 0) {
                console.log("some error occured registering user");
                var toastOptions = {
                    title: "Error",
                    msg: "Cant registers",
                    showClose: true,
                    timeout: 10000,
                    theme: 'bootstrap',
                };
                _this.toastyService.error(toastOptions);
            }
            else if (result.empty == 0) {
                console.log("Empty fields");
                var toastOptions = {
                    title: "Error",
                    msg: "Empty Fields",
                    showClose: true,
                    timeout: 10000,
                    theme: 'bootstrap',
                };
                _this.toastyService.error(toastOptions);
            }
            else if (result.found != 'undefined') {
                console.log("email already exists");
                var toastOptions = {
                    title: "Info",
                    msg: "User already exist",
                    showClose: true,
                    timeout: 10000,
                    theme: 'bootstrap',
                };
                _this.toastyService.info(toastOptions);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _f || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page Verification\">\r\n\t\t<div class=\"title-info wow fadeInUp animated\" data-wow-delay=\".5s\">\r\n\t\t\t<h3 class=\"title\">Verification</h3>\r\n\t\t\t</div>\r\n<div class=\"widget-shadow\">\r\n\t\t\t<div class=\"login-top wow fadeInUp animated\" data-wow-delay=\".7s\">\r\n\t\t\t\t\r\n\t\t\t</div><div class=\"login-body wow fadeInUp animated\" data-wow-delay=\".7s\">\r\n\t\t\t\t<p> Open your Email {{userData}} to verify the account  </p>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/verify/verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyComponent = (function () {
    function VerifyComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    VerifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            console.log("in porgile params");
            _this.userData = params.data;
        });
    };
    VerifyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
            selector: 'app-verify',
            template: __webpack_require__("../../../../../src/app/components/verify/verify.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], VerifyComponent);
    return VerifyComponent;
    var _a, _b;
}());

//# sourceMappingURL=verify.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        console.log("DataService constructor....");
    }
    DataService.prototype.registerUser = function (data) {
        var param = JSON.stringify(data);
        console.log(param);
        param = '{"data":' + param + '}';
        console.log(param);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form--urlencoded');
        return this.http.post(' https://ecommerce-freelance.herokuapp.com/register', param, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.loginUser = function (data) {
        var params = JSON.stringify(data);
        console.log(params);
        var obj = '{"data":' + params + '}';
        console.log(obj);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form--urlencoded');
        return this.http.post(' https://ecommerce-freelance.herokuapp.com/login', obj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.forgetPass = function (data) {
        console.log(data);
        var params = JSON.stringify(data);
        var obj = '{"data":' + params + '}';
        console.log(obj);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form--urlencoded');
        return this.http.post(' https://ecommerce-freelance.herokuapp.com/forget-password', obj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getCategories = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form--urlencoded');
        return this.http.get(' https://ecommerce-freelance.herokuapp.com/get-categories', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getSubCategories = function (data) {
        var params = '{"category_id":' + data + '}';
        var obj = '{"category":' + params + '}';
        console.log(obj);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form--urlencoded');
        return this.http.post(' https://ecommerce-freelance.herokuapp.com/get-subcategories', obj, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], DataService);
    return DataService;
    var _a;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/facebook-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacebookLoginService = (function () {
    function FacebookLoginService(afAuth, af) {
        this.afAuth = afAuth;
        this.af = af;
        this.msgVal = '';
        this.items = af.list('/messages', {
            query: {
                limitToLast: 50
            }
        });
        this.user = this.afAuth.authState;
    }
    FacebookLoginService.prototype.socialLogin = function (loginProvider) {
        console.log("favebook socilalogin");
        var provider;
        if (loginProvider === 'google') {
            return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
        }
        else if (loginProvider === 'facebook') {
            console.log("in facebook");
            return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider());
        }
        else if (loginProvider === 'twitter') {
            return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].TwitterAuthProvider());
        }
    };
    // Logs out the current user
    FacebookLoginService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    FacebookLoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
    ], FacebookLoginService);
    return FacebookLoginService;
    var _a, _b;
}());

//# sourceMappingURL=facebook-login.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map