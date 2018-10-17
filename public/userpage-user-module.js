(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userpage-user-module"],{

/***/ "./src/app/userpage/user.component.html":
/*!**********************************************!*\
  !*** ./src/app/userpage/user.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-icon card-header-rose\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">perm_identity</i>\n            </div>\n            <h4 class=\"card-title\">Edit User Profile\n            </h4>\n          </div>\n          <div class=\"card-body\">\n            <form #userProfileForm=\"ngForm\" (ngSubmit)=\"editUserProfile(userProfileForm.value)\" (change)=\"mark_changed()\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Token</label>\n                    <input [disabled]=\"disableToken\" type=\"text\" class=\"form-control\" name=\"userToken\" [(ngModel)]=\"userToken\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Name</label>\n                    <input type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"userName\">\n                    <div *ngIf=\"!isNamePresent\" class=\"help-block\" style=\"text-align: right;\">Name is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Email address</label>\n                    <input [disabled]=\"disableEmailAddress\" type=\"email\" class=\"form-control\" name=\"userEmail\" [(ngModel)]=\"userEmail\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\">Seconday email address</label>\n                      <input type=\"email\" class=\"form-control\" name=\"userSecondaryEmail\" [(ngModel)]=\"userSecondaryEmail\">\n                    </div>\n                  </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Address</label>\n                    <input type=\"text\" class=\"form-control\" name=\"userAddress\" [(ngModel)]=\"userAddress\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">City</label>\n                    <input type=\"text\" class=\"form-control\" name=\"userCity\" [(ngModel)]=\"userCity\">\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Country</label>\n                    <input type=\"text\" class=\"form-control\" name=\"userCountry\" [(ngModel)]=\"userCountry\">\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Postal Code</label>\n                    <input type=\"text\" class=\"form-control\" name=\"userPostalCode\" [(ngModel)]=\"userPostalCode\">\n                  </div>\n                </div>\n              </div>\n              <button mat-raised-button type=\"submit\" (click)=\"loadLatestPodcast()\" class=\"btn btn-rose pull-right\">Cancel</button>\n              <button mat-raised-button type=\"submit\" class=\"btn btn-rose pull-right\">Update Profile</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/userpage/user.component.ts":
/*!********************************************!*\
  !*** ./src/app/userpage/user.component.ts ***!
  \********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(http, router) {
        this.http = http;
        this.router = router;
        this.userObject = null;
        this.disableEmailAddress = true;
        this.disableToken = true;
        this.isNamePresent = true;
        this.valuesAltered = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append("token", localStorage.getItem("token"));
        headers.append("emailAddress", localStorage.getItem("emailAddress"));
        this.http.get('http://localhost:3000/getUserInfo', { headers: headers }).subscribe(function (data) {
            console.log("message sending results", data);
            _this.userObject = data.json();
            _this.userObject = _this.userObject.data;
            console.log(_this.userObject);
            _this.userToken = _this.userObject.token;
            _this.userName = _this.userObject.name;
            _this.userEmail = _this.userObject.emailAddress;
            _this.userSecondaryEmail = _this.userObject.secondaryEmailAddress;
            _this.userAddress = _this.userObject.userAddress;
            _this.userCity = _this.userObject.city;
            _this.userCountry = _this.userObject.country;
            _this.userPostalCode = _this.userObject.postalCode;
            //console.log(data.text());
            /*var dataFromS = JSON.parse(JSON.stringify(data.text()));
            console.log(dataFromS);
            this.userToken = dataFromS.data.token;
            this.userName = dataFromS.data.name;
            this.userEmail = dataFromS.data.emailAddress;
            this.userSecondaryEmail = dataFromS.data.secondaryEmailAddress;
            this.userAddress = dataFromS.data.address;
            this.userCity = dataFromS.data.city;
            this.userCountry = dataFromS.data.country;
            this.userPostalCode = dataFromS.data.postalCode;*/
        }, function (err) {
            console.log("message sending err", err);
            localStorage.removeItem("token");
            localStorage.removeItem("emailAddress");
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: "Invalid login credentials. Please login again!",
                text: "",
                timer: 3000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
            _this.router.navigateByUrl('/');
        });
    };
    UserComponent.prototype.loadLatestPodcast = function () {
        this.router.navigateByUrl('/tables/latestPodcast');
    };
    UserComponent.prototype.editUserProfile = function (form) {
        if (this.valuesAltered) {
            console.log(form);
            console.log((form.userName).trim().length);
            if (form.userName !== undefined && (form.userName).trim().length > 0) {
                this.isNamePresent = true;
                form.userName = form.userName.trim();
                form.userAddress = form.userAddress.trim();
                form.userCity = form.userCity.trim();
                form.userCountry = form.userCountry.trim();
                form.userPostalCode = form.userPostalCode.trim();
                form.userSecondaryEmail = form.userSecondaryEmail.trim();
                var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                headers.append("token", localStorage.getItem("token"));
                headers.append("emailAddress", localStorage.getItem("emailAddress"));
                this.http.post('http://localhost:3000/updateUserDetails', form, { headers: headers }).subscribe(function (data) {
                    console.log("message sending results", data);
                    var body = JSON.parse(data.text());
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: body.status,
                        text: "",
                        timer: 3000,
                        showConfirmButton: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                }, function (err) { console.log("message sending err", err); });
            }
            else {
                this.isNamePresent = false;
            }
        }
        else {
            this.valuesAltered = false;
        }
    };
    UserComponent.prototype.mark_changed = function () {
        this.valuesAltered = true;
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-cmp',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/userpage/user.component.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/userpage/user.module.ts":
/*!*****************************************!*\
  !*** ./src/app/userpage/user.module.ts ***!
  \*****************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.component */ "./src/app/userpage/user.component.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.routing */ "./src/app/userpage/user.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_5__["UserRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/userpage/user.routing.ts":
/*!******************************************!*\
  !*** ./src/app/userpage/user.routing.ts ***!
  \******************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ "./src/app/userpage/user.component.ts");

var UserRoutes = [
    {
        path: '',
        children: [{
                path: 'pages/user',
                component: _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=userpage-user-module.js.map