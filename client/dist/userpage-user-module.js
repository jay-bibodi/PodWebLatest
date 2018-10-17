(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userpage-user-module"],{

/***/ "./src/app/userpage/user.component.html":
/*!**********************************************!*\
  !*** ./src/app/userpage/user.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-icon card-header-rose\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">perm_identity</i>\n            </div>\n            <h4 class=\"card-title\">Edit Profile -\n              <small class=\"category\">Complete your profile</small>\n            </h4>\n          </div>\n          <div class=\"card-body\">\n            <form>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Company (disabled)</label>\n                    <input type=\"text\" class=\"form-control\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Username</label>\n                    <input type=\"text\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Email address</label>\n                    <input type=\"email\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Fist Name</label>\n                    <input type=\"text\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Last Name</label>\n                    <input type=\"text\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Adress</label>\n                    <input type=\"text\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">City</label>\n                    <input type=\"text\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Country</label>\n                    <input type=\"text\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label class=\"bmd-label-floating\">Postal Code</label>\n                    <input type=\"text\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>About Me</label>\n                    <div class=\"form-group\">\n                      <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                      <textarea class=\"form-control\" rows=\"5\"></textarea>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <button mat-raised-button type=\"submit\" class=\"btn btn-rose pull-right\">Update Profile</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"card card-profile\">\n          <div class=\"card-avatar\">\n            <a href=\"#pablo\">\n              <img class=\"img\" src=\"./assets/img/faces/marc.jpg\" />\n            </a>\n          </div>\n          <div class=\"card-body\">\n            <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n            <h4 class=\"card-title\">Alec Thompson</h4>\n            <p class=\"card-description\">\n              Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n            </p>\n            <a href=\"#pablo\" class=\"btn btn-rose btn-round\">Follow</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-cmp',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/userpage/user.component.html")
        })
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