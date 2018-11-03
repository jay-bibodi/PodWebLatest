(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module"],{

/***/ "./src/app/forms/extendedforms/extendedforms.component.html":
/*!******************************************************************!*\
  !*** ./src/app/forms/extendedforms/extendedforms.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-4 mr-auto\">\n                        <legend>Datepicker</legend>\n                        <mat-form-field >\n                          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" (click)=\"picker.open()\">\n                          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                          <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4 mr-auto\">\n                        <legend>Datepicker Year</legend>\n                        <mat-form-field>\n                          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" (click)=\"picker2.open()\">\n                          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                          <mat-datepicker #picker2 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <legend>Switches</legend>\n                        <div class=\"togglebutton\">\n                          <label>\n                            <input type=\"checkbox\" checked=\"\">\n                            <span class=\"toggle\"></span>\n                            Toggle is on\n                          </label>\n                        </div>\n                        <div class=\"togglebutton\">\n                          <label>\n                            <input type=\"checkbox\">\n                            <span class=\"toggle\"></span>\n                            Toggle is off\n                          </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <legend>Customisable Select</legend>\n\n                        <div class=\"row\">\n                            <div class=\"col-lg-5 col-md-8 col-sm-4\">\n                              <mat-form-field>\n                                  <mat-select multiple placeholder=\"Multiple Cities\" [(ngModel)]=\"currentCity\" name=\"Paris\" ariaLabel=\"cities[0]\">\n                                      <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                          {{ city.viewValue }}\n                                      </mat-option>\n                                  </mat-select>\n                              </mat-form-field>\n                            </div>\n                            <div class=\"col-lg-5 col-md-8 col-sm-4\">\n                                <mat-form-field>\n                                    <mat-select placeholder=\"Single City\" name=\"city\">\n                                      <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                        {{ city.viewValue }}\n                                      </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <legend>Tags</legend>\n                        Regular: <tag-input [(ngModel)]='regularItems' theme='filled-theme'></tag-input>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <legend>Dropdown & Dropup</legend>\n                        <div class=\"row\">\n                            <div class=\"col-lg-4 col-md-6 col-sm-3\">\n                                <div class=\"dropdown\">\n                                    <button mat-raised-button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropdown\n                                        <b class=\"caret\"></b>\n                                    </button>\n                                    <ul class=\"dropdown-menu dropdown-menu-left\">\n                                        <li class=\"dropdown-header\">Dropdown header</li>\n                                        <li>\n                                            <a href=\"#pablo\">Action</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#pablo\">Another action</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#pablo\">Something else here</a>\n                                        </li>\n                                        <li class=\"divider\"></li>\n                                        <li>\n                                            <a href=\"#pablo\">Separated link</a>\n                                        </li>\n                                        <li class=\"divider\"></li>\n                                        <li>\n                                            <a href=\"#pablo\">One more separated link</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"col-lg-4 col-md-6 col-sm-3\">\n                                <div class=\"dropup\">\n                                    <button mat-raised-button href=\"#pablo\" class=\"dropdown-toggle btn btn-primary btn-round btn-block\" data-toggle=\"dropdown\">Dropup\n                                        <b class=\"caret\"></b>\n                                    </button>\n                                    <ul class=\"dropdown-menu dropdown-menu-left\">\n                                        <li class=\"dropdown-header\">Dropdown header</li>\n                                        <li>\n                                            <a href=\"#pablo\">Action</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#pablo\">Another action</a>\n                                        </li>\n                                        <li>\n                                            <a href=\"#pablo\">Something else here</a>\n                                        </li>\n                                        <li class=\"divider\"></li>\n                                        <li>\n                                            <a href=\"#pablo\">Separated link</a>\n                                        </li>\n                                        <li class=\"divider\"></li>\n                                        <li>\n                                            <a href=\"#pablo\">One more separated link</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <br>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <legend>Progress Bars</legend>\n                        <div class=\"progress progress-line-primary\">\n                            <div class=\"progress-bar progress-bar-primary\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\">\n                                <span class=\"sr-only\">60% Complete</span>\n                            </div>\n                        </div>\n                        <div class=\"progress progress-line-info\">\n                            <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n                                <span class=\"sr-only\">60% Complete</span>\n                            </div>\n                        </div>\n                        <div class=\"progress progress-line-danger\">\n                            <div class=\"progress-bar progress-bar-success\" style=\"width: 35%\">\n                                <span class=\"sr-only\">35% Complete (success)</span>\n                            </div>\n                            <div class=\"progress-bar progress-bar-warning\" style=\"width: 20%\">\n                                <span class=\"sr-only\">20% Complete (warning)</span>\n                            </div>\n                            <div class=\"progress-bar progress-bar-danger\" style=\"width: 10%\">\n                                <span class=\"sr-only\">10% Complete (danger)</span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <legend>Sliders</legend>\n                        <nouislider [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\" class=\"slider\"></nouislider>\n                        <br>\n                        <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-4\">\n                        <legend>Regular Image</legend>\n                        <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                            <div class=\"fileinput-new thumbnail\">\n                                <img src=\"./assets/img/image_placeholder.jpg\" alt=\"...\">\n                            </div>\n                            <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n                            <div>\n                                <span class=\"btn btn-rose btn-round btn-file\">\n                                    <span class=\"fileinput-new\">Select image</span>\n                                    <span class=\"fileinput-exists\">Change</span>\n                                    <input type=\"file\" name=\"...\" />\n                                </span>\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3 col-sm-4\">\n                        <legend>Avatar</legend>\n                        <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n                            <div class=\"fileinput-new thumbnail img-circle\">\n                                <img src=\"./assets/img/placeholder.jpg\" alt=\"...\">\n                            </div>\n                            <div class=\"fileinput-preview fileinput-exists thumbnail img-circle\"></div>\n                            <div>\n                                <span class=\"btn btn-round btn-rose btn-file\">\n                                    <span class=\"fileinput-new\">Add Photo</span>\n                                    <span class=\"fileinput-exists\">Change</span>\n                                    <input type=\"file\" name=\"...\" />\n                                </span>\n                                <br />\n                                <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- end card -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/extendedforms/extendedforms.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forms/extendedforms/extendedforms.component.ts ***!
  \****************************************************************/
/*! exports provided: ExtendedFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedFormsComponent", function() { return ExtendedFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExtendedFormsComponent = /** @class */ (function () {
    function ExtendedFormsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.regularItems = ['Pizza', 'Pasta', 'Parmesan'];
        this.selectTheme = 'primary';
        this.cities = [
            { value: 'paris-0', viewValue: 'Paris' },
            { value: 'miami-1', viewValue: 'Miami' },
            { value: 'bucharest-2', viewValue: 'Bucharest' },
            { value: 'new-york-3', viewValue: 'New York' },
            { value: 'london-4', viewValue: 'London' },
            { value: 'barcelona-5', viewValue: 'Barcelona' },
            { value: 'moscow-6', viewValue: 'Moscow' },
        ];
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () { };
    ExtendedFormsComponent.prototype.myFunc = function (val) {
        // code here
    };
    ExtendedFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extendedforms-cmp',
            template: __webpack_require__(/*! ./extendedforms.component.html */ "./src/app/forms/extendedforms/extendedforms.component.html"),
            styles: ["md-calendar {\n      width: 300px;\n  }"]
        })
    ], ExtendedFormsComponent);
    return ExtendedFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.module.ts":
/*!***************************************!*\
  !*** ./src/app/forms/forms.module.ts ***!
  \***************************************/
/*! exports provided: Forms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forms", function() { return Forms; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms.routing */ "./src/app/forms/forms.routing.ts");
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ "./src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regularforms/regularforms.component */ "./src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validationforms/validationforms.component */ "./src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/forms/wizard/wizard.component.ts");
/* harmony import */ var _validationforms_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validationforms/field-error-display/field-error-display.component */ "./src/app/forms/validationforms/field-error-display/field-error-display.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_7__["FormsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"]
            ],
            declarations: [
                _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_8__["ExtendedFormsComponent"],
                _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_9__["RegularFormsComponent"],
                _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_10__["ValidationFormsComponent"],
                _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_11__["WizardComponent"],
                _validationforms_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_12__["FieldErrorDisplayComponent"]
            ]
        })
    ], Forms);
    return Forms;
}());



/***/ }),

/***/ "./src/app/forms/forms.routing.ts":
/*!****************************************!*\
  !*** ./src/app/forms/forms.routing.ts ***!
  \****************************************/
/*! exports provided: FormsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsRoutes", function() { return FormsRoutes; });
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ "./src/app/forms/extendedforms/extendedforms.component.ts");
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regularforms/regularforms.component */ "./src/app/forms/regularforms/regularforms.component.ts");
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validationforms/validationforms.component */ "./src/app/forms/validationforms/validationforms.component.ts");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/forms/wizard/wizard.component.ts");




var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'regular',
                component: _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__["RegularFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'extended',
                component: _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__["ExtendedFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'validation',
                component: _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__["ValidationFormsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'wizard',
                component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__["WizardComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/forms/regularforms/regularforms.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forms/regularforms/regularforms.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"card \">\n          <div class=\"card-header card-header-rose card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">mail_outline</i>\n            </div>\n            <h4 class=\"card-title\">Stacked Form</h4>\n          </div>\n          <div class=\"card-body \">\n            <form method=\"#\" action=\"#\">\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Email Address\" type=\"email\">\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Password\" type=\"password\">\n              </mat-form-field>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Subscribe to newsletter\n                  <span class=\"form-check-sign\">\n                    <span class=\"check\"></span>\n                  </span>\n                </label>\n              </div>\n            </form>\n          </div>\n          <div class=\"card-footer \">\n            <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-rose\">Submit</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card \">\n          <div class=\"card-header card-header-rose card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">contacts</i>\n            </div>\n            <h4 class=\"card-title\">Horizontal Form</h4>\n          </div>\n          <div class=\"card-body \">\n            <form class=\"form-horizontal\">\n              <div class=\"row\">\n                <label class=\"col-md-3 col-2 col-form-label\">Email</label>\n                <div class=\"col-md-9 col-9\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"email\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-md-3 col-2 col-form-label\">Password</label>\n                <div class=\"col-md-9 col-9\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"password\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-md-3\"></label>\n                <div class=\"col-md-9\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Remember me\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"card-footer \">\n            <div class=\"row\">\n              <div class=\"col-md-9\">\n                <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-rose\">Sign in</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card \">\n          <div class=\"card-header card-header-rose card-header-text\">\n            <div class=\"card-text\">\n              <h4 class=\"card-title\">Form Elements</h4>\n            </div>\n          </div>\n          <div class=\"card-body \">\n            <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">With help</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"text\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Password</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"password\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Placeholder</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"text\" placeholder=\"placeholder\">\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Disabled</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width\">\n                    <input matInput type=\"text\" placeholder=\"placeholder\" value=\"Disabled input here..\" disabled>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Static control</label>\n                <div class=\"col-sm-10\">\n                  <div class=\"form-group\">\n                    <p class=\"form-control-static\">hello@creative-tim.com</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Checkboxes and radios</label>\n                <div class=\"col-sm-10 checkbox-radios\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> First Checkbox\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Second Checkbox\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\" checked> First Radio\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\"> Second Radio\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Inline checkboxes</label>\n                <div class=\"col-sm-10\">\n                  <div class=\"form-check form-check-inline\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> a\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check form-check-inline\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> b\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check form-check-inline\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> c\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card \">\n          <div class=\"card-header card-header-rose card-header-text\">\n            <div class=\"card-text\">\n              <h4 class=\"card-title\">Input Variants</h4>\n            </div>\n          </div>\n          <div class=\"card-body \">\n            <form method=\"get\" action=\"/\" class=\"form-horizontal\">\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Custom Checkboxes &amp; radios</label>\n                <div class=\"col-sm-4 col-sm-offset-1 checkbox-radios\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Checked\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Unchecked\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled checked> Disabled Checked\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled> Disabled Unchecked\n                      <span class=\"form-check-sign\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-sm-5 checkbox-radios\">\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option1\" checked> Radio is on\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" value=\"option2\"> Radio is off\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios2\" value=\"option1\" checked disabled> Disabled Radio is on\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                  <div class=\"form-check disabled\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios2\" value=\"option2\" disabled> Disabled Radio is off\n                      <span class=\"circle\">\n                        <span class=\"check\"></span>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Input with success</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width has-success\">\n                    <input matInput type=\"text\" placeholder=\"Success input\">\n                    <span class=\"form-control-feedback\">\n                      <i class=\"material-icons\">done</i>\n                    </span>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Input with error</label>\n                <div class=\"col-sm-10\">\n                  <mat-form-field class=\"example-full-width has-danger\">\n                    <input matInput type=\"text\" placeholder=\"Error input\">\n                    <span class=\"form-control-feedback\">\n                      <i class=\"material-icons\">clear</i>\n                    </span>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-sm-2 col-form-label\">Column sizing</label>\n                <div class=\"col-sm-10\">\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" placeholder=\".col-md-3\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-md-4\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" placeholder=\".col-md-4\">\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-md-5\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" placeholder=\".col-md-5\">\n                      </mat-form-field>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/regularforms/regularforms.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forms/regularforms/regularforms.component.ts ***!
  \**************************************************************/
/*! exports provided: RegularFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularFormsComponent", function() { return RegularFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegularFormsComponent = /** @class */ (function () {
    function RegularFormsComponent() {
    }
    RegularFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regularforms-cmp',
            template: __webpack_require__(/*! ./regularforms.component.html */ "./src/app/forms/regularforms/regularforms.component.html")
        })
    ], RegularFormsComponent);
    return RegularFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/field-error-display/field-error-display.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/forms/validationforms/field-error-display/field-error-display.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\n  color: red;\n  display: inline-block;\n  position: absolute;\n  top: 34px;\n  /* font-size: 10px; */\n  font-size: 75%;\n  margin-top: 2.604167em;\n  top: calc(100% - 1.72916667em);\n}\n.fix-error-icon {\n  top: 27px;\n}\n"

/***/ }),

/***/ "./src/app/forms/validationforms/field-error-display/field-error-display.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/forms/validationforms/field-error-display/field-error-display.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\" >\n  <!-- <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span> -->\n  <span class=\"sr-only\">(error)</span>\n  <div class=\"error-msg\">\n    {{ errorMsg }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/validationforms/field-error-display/field-error-display.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/forms/validationforms/field-error-display/field-error-display.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FieldErrorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldErrorDisplayComponent", function() { return FieldErrorDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldErrorDisplayComponent = /** @class */ (function () {
    function FieldErrorDisplayComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], FieldErrorDisplayComponent.prototype, "displayError", void 0);
    FieldErrorDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field-error-display',
            template: __webpack_require__(/*! ./field-error-display.component.html */ "./src/app/forms/validationforms/field-error-display/field-error-display.component.html"),
            styles: [__webpack_require__(/*! ./field-error-display.component.css */ "./src/app/forms/validationforms/field-error-display/field-error-display.component.css")]
        })
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/password-validator.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/forms/validationforms/password-validator.component.ts ***!
  \***********************************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ "./src/app/forms/validationforms/validationforms.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/forms/validationforms/validationforms.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form [formGroup]=\"register\">\n                      <div class=\"card-header card-header-rose card-header-icon\">\n                        <div class=\"card-icon\">\n                          <i class=\"material-icons\">mail_outline</i>\n                        </div>\n                        <h4 class=\"card-title\">Register Form</h4>\n                      </div>\n                        <div class=\"card-body\">\n                          <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validEmailRegister===true}\">\n                             <input\n                             type=\"email\"\n                             matInput\n                             placeholder=\"Email Address *\"\n                             [errorStateMatcher]=\"matcher\"\n                             formControlName=\"email\"\n                             (ngModelChange)=\"emailValidationRegister($event)\">\n                             <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                               Please enter a valid email address\n                             </mat-error>\n                             <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                               Email is <strong>required</strong>\n                             </mat-error>\n                           </mat-form-field>\n                            <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validPasswordRegister===true}\">\n                              <input type=\"password\"\n                              matInput\n                              id=\"password\"\n                              placeholder=\"Password *\"\n                              (ngModelChange)=\"passwordValidationRegister($event)\"\n                              formControlName=\"password\">\n                              <app-field-error-display [displayError]=\"isFieldValid(register, 'password')\" errorMsg=\"Enter a valid password.\">\n                              </app-field-error-display>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validConfirmPasswordRegister===true}\" [ngClass]=\"displayFieldCss(register, 'password')\">\n                              <input type=\"password\"\n                              matInput\n                              id=\"confirmPassword\"\n                              placeholder=\"Confirm Password *\"\n                              (ngModelChange)=\"confirmPasswordValidationRegister($event)\"\n                              formControlName=\"confirmPassword\">\n                              <app-field-error-display\n                               [displayError]=\"isFieldValid(register, 'confirmPassword')\" errorMsg=\"These passwords don't match. Try again!\">\n                              </app-field-error-display>\n                            </mat-form-field>\n                            <div class=\"category form-category\">* Required fields</div>\n\n                          </div>\n                            <div class=\"card-footer text-right\">\n                              <div class=\"form-check mr-auto\">\n                                <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\"> Subscribe to newsletter\n                                  <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                  </span>\n                                </label>\n                              </div>\n                              <button mat-raised-button type=\"submit\" class=\"btn btn-rose\" (click)=\"onRegister()\">Register</button>\n                            </div>\n                    </form>\n                </div>\n\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <form [formGroup]=\"login\">\n                      <div class=\"card-header card-header-rose card-header-icon\">\n                        <div class=\"card-icon\">\n                          <i class=\"material-icons\">contacts</i>\n                        </div>\n                        <h4 class=\"card-title\">Login Form</h4>\n                      </div>\n                        <div class=\"card-body\">\n                          <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validEmailLogin===true}\">\n                             <input\n                             type=\"email\"\n                             matInput\n                             placeholder=\"Email Address *\"\n                             [errorStateMatcher]=\"matcher\"\n                             (ngModelChange)=\"emailValidationLogin($event)\"\n                             formControlName=\"email\">\n                             <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                               Please enter a valid email address\n                             </mat-error>\n                             <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                               Email is <strong>required</strong>\n                             </mat-error>\n                           </mat-form-field>\n                            <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validPasswordLogin===true}\" [ngClass]=\"displayFieldCss(login, 'password')\">\n                              <input type=\"password\"\n                              matInput\n                              placeholder=\"Password *\"\n                              (ngModelChange)=\"passwordValidationLogin($event)\"\n                              formControlName=\"password\">\n                              <app-field-error-display [displayError]=\"isFieldValid(login, 'password')\" errorMsg=\"Enter a valid password.\">\n                              </app-field-error-display>\n                            </mat-form-field>\n                            <div class=\"category form-category\">* Required fields</div>\n                          </div>\n                            <div class=\"card-footer text-right\">\n                                <div class=\"form-group\">\n                                    <button mat-raised-button type=\"submit\" class=\"btn btn-rose btn-fill btn-wd\" (click)=\"onLogin()\">Login</button>\n                                </div>\n                            </div>\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form [formGroup]=\"type\" class=\"form-horizontal\">\n                      <div class=\"card-header card-header-rose card-header-text\">\n                        <div class=\"card-text\">\n                          <h4 class=\"card-title\">Type Validation</h4>\n                        </div>\n                      </div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                              <label class=\"col-sm-2 col-form-label\">Required Text</label>\n                                <div class=\"col-sm-7\">\n                                  <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validTextType===true}\" [ngClass]=\"displayFieldCss(type, 'text')\">\n                                    <input type=\"text\"\n                                    matInput\n                                    id=\"text\"\n                                    (ngModelChange)=\"textValidationType($event)\"\n                                    formControlName=\"text\">\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'text')\" errorMsg=\"Required text\">\n                                    </app-field-error-display>\n                                  </mat-form-field>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>required</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n\n                                <label class=\"col-sm-2 col-form-label\">Email</label>\n\n                                <div class=\"col-sm-7\">\n                                  <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validEmailType===true}\">\n                                     <input\n                                     type=\"email\"\n                                     matInput\n                                     [errorStateMatcher]=\"matcher\"\n                                     (ngModelChange)=\"emailValidationType($event)\"\n                                     formControlName=\"email\">\n                                     <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                                       Please enter a valid email address\n                                     </mat-error>\n                                     <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                                       Email is <strong>required</strong>\n                                     </mat-error>\n                                   </mat-form-field>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>email=\"true\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Number</label>\n                                <div class=\"col-sm-7\">\n                                  <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validNumberType===true}\" [ngClass]=\"displayFieldCss(type, 'number')\">\n                                    <input type=\"number\" name=\"number\" number=\"true\"\n                                    matInput\n                                    (ngModelChange)=\"numberValidationType($event)\"\n                                    formControlName=\"number\">\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'number')\" errorMsg=\"Add a number!\">\n                                    </app-field-error-display>\n                                  </mat-form-field>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>number=\"true\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Url</label>\n                                <div class=\"col-sm-7\">\n                                  <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"{'has-success':validUrlType===true}\" [ngClass]=\"displayFieldCss(type, 'url')\">\n                                    <input type=\"text\" id=\"url\" pattern=\"https?://.+\" name=\"url\" formControlName=\"url\"\n                                    matInput\n                                    (ngModelChange)=\"urlValidationType($event)\">\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'url')\" errorMsg=\"Must be a valid URL!\">\n                                    </app-field-error-display>\n                                  </mat-form-field>\n                                </div>\n\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>url=\"true\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n\n                                <label class=\"col-sm-2 col-form-label\">Equal to</label>\n                                <div class=\"col-sm-3\">\n                                  <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validSourceType===true}\" [ngClass]=\"displayFieldCss(type, 'password')\">\n                                    <input type=\"text\"\n                                    matInput\n                                    placeholder=\"#idSource\"\n                                      name=\"idSource\"\n                                      (ngModelChange)=\"sourceValidationType($event)\"\n                                    formControlName=\"password\">\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'password')\" errorMsg=\"IdSource is required\">\n                                    </app-field-error-display>\n                                  </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                  <mat-form-field class=\"example-full-width\" [ngClass]=\"{'has-success':validDestinationType===true}\" [ngClass]=\"displayFieldCss(type, 'confirmPassword')\">\n                                    <input type=\"text\"\n                                    matInput\n                                    name=\"idDestination\"\n                                    placeholder=\"#idDestination\"\n                                    (ngModelChange)=\"confirmDestinationValidationType($event)\"\n                                    formControlName=\"confirmPassword\">\n                                    <app-field-error-display [displayError]=\"isFieldValid(type, 'confirmPassword')\" errorMsg=\" IdSource mismatch!\">\n                                    </app-field-error-display>\n                                  </mat-form-field>\n                                </div>\n                                <label class=\"col-sm-4 label-on-right\">\n                                    <code>equalTo=\"#idSource\"</code>\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-rose btn-fill\" (click)=\"onType()\">Validate Inputs</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            <!-- <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <form id=\"RangeValidation\" class=\"form-horizontal\" action=\"\" method=\"\">\n\n                        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\n                            <h4 class=\"card-title\">Range Validation</h4>\n                        </div>\n                        <div class=\"card-content\">\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Min Length</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group has-label\">\n                                        <label class=\"bmd-label-floating\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"min_length\" minLength=\"5\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>minLength=\"5\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Max Length</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group has-label\">\n                                        <label class=\"bmd-label-floating\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"max_length\" maxLength=\"5\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>maxLength=\"5\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Range</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group has-label\">\n                                        <label class=\"bmd-label-floating\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"range\" range=\"[6,10]\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>range=\"[6,10]\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Min Value</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group has-label\">\n                                        <label class=\"bmd-label-floating\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"min\" min=\"6\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>min=\"6\"</code>\n                                </label>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"col-sm-2 col-form-label\">Max Value</label>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"form-group has-label\">\n                                        <label class=\"bmd-label-floating\"></label>\n                                        <input class=\"form-control\" type=\"text\" name=\"max\" max=\"6\" />\n                                    </div>\n                                </div>\n                                <label class=\"col-sm-3 label-on-right\">\n                                    <code>max=\"6\"</code>\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"card-footer text-center\">\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-rose btn-fill\">Validate Inputs</button>\n                        </div>\n                    </form>\n                </div>\n            </div> -->\n        <!-- </div> -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/validationforms/validationforms.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/forms/validationforms/validationforms.component.ts ***!
  \********************************************************************/
/*! exports provided: MyErrorStateMatcher, ValidationFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsComponent", function() { return ValidationFormsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _password_validator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-validator.component */ "./src/app/forms/validationforms/password-validator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ValidationFormsComponent = /** @class */ (function () {
    function ValidationFormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.validEmailRegister = false;
        this.validConfirmPasswordRegister = false;
        this.validPasswordRegister = false;
        this.validEmailLogin = false;
        this.validPasswordLogin = false;
        this.validTextType = false;
        this.validEmailType = false;
        this.validNumberType = false;
        this.validUrlType = false;
        this.pattern = "https?://.+";
        this.validSourceType = false;
        this.validDestinationType = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ValidationFormsComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    ValidationFormsComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    ValidationFormsComponent.prototype.onRegister = function () {
        if (this.register.valid) {
        }
        else {
            this.validateAllFormFields(this.register);
        }
    };
    ValidationFormsComponent.prototype.onLogin = function () {
        if (this.login.valid) {
        }
        else {
            this.validateAllFormFields(this.login);
        }
    };
    ValidationFormsComponent.prototype.onType = function () {
        if (this.type.valid) {
        }
        else {
            this.validateAllFormFields(this.type);
        }
    };
    ValidationFormsComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ValidationFormsComponent.prototype.ngOnInit = function () {
        this.register = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            optionsCheckboxes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: _password_validator_component__WEBPACK_IMPORTED_MODULE_2__["PasswordValidation"].MatchPassword // your validation method
        });
        this.login = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            text: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            url: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validator: _password_validator_component__WEBPACK_IMPORTED_MODULE_2__["PasswordValidation"].MatchPassword // your validation method
        });
    };
    ValidationFormsComponent.prototype.emailValidationRegister = function (e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase())) {
            this.validEmailRegister = true;
        }
        else {
            this.validEmailRegister = false;
        }
    };
    ValidationFormsComponent.prototype.passwordValidationRegister = function (e) {
        if (e.length > 5) {
            this.validPasswordRegister = true;
        }
        else {
            this.validPasswordRegister = false;
        }
    };
    ValidationFormsComponent.prototype.confirmPasswordValidationRegister = function (e) {
        if (this.register.controls['password'].value === e) {
            this.validConfirmPasswordRegister = true;
        }
        else {
            this.validConfirmPasswordRegister = false;
        }
    };
    ValidationFormsComponent.prototype.emailValidationLogin = function (e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase())) {
            this.validEmailLogin = true;
        }
        else {
            this.validEmailLogin = false;
        }
    };
    ValidationFormsComponent.prototype.passwordValidationLogin = function (e) {
        if (e.length > 5) {
            this.validPasswordLogin = true;
        }
        else {
            this.validPasswordLogin = false;
        }
    };
    ValidationFormsComponent.prototype.textValidationType = function (e) {
        if (e) {
            this.validTextType = true;
        }
        else {
            this.validTextType = false;
        }
    };
    ValidationFormsComponent.prototype.emailValidationType = function (e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase())) {
            this.validEmailType = true;
        }
        else {
            this.validEmailType = false;
        }
    };
    ValidationFormsComponent.prototype.numberValidationType = function (e) {
        if (e) {
            this.validNumberType = true;
        }
        else {
            this.validNumberType = false;
        }
    };
    ValidationFormsComponent.prototype.urlValidationType = function (e) {
        try {
            new URL(e);
            this.validUrlType = true;
        }
        catch (_) {
            this.validUrlType = false;
        }
    };
    ValidationFormsComponent.prototype.sourceValidationType = function (e) {
        if (e) {
            this.validSourceType = true;
        }
        else {
            this.validSourceType = false;
        }
    };
    ValidationFormsComponent.prototype.confirmDestinationValidationType = function (e) {
        if (this.type.controls['password'].value === e) {
            this.validDestinationType = true;
        }
        else {
            this.validDestinationType = false;
        }
    };
    ValidationFormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validationforms-cmp',
            template: __webpack_require__(/*! ./validationforms.component.html */ "./src/app/forms/validationforms/validationforms.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ValidationFormsComponent);
    return ValidationFormsComponent;
}());



/***/ }),

/***/ "./src/app/forms/wizard/wizard.component.css":
/*!***************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/wizard/wizard.component.html":
/*!****************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8 mr-auto ml-auto\">\n        <!--      Wizard container        -->\n        <div class=\"wizard-container\">\n          <div class=\"card card-wizard\" data-color=\"rose\" id=\"wizardProfile\">\n            <form [formGroup]=\"type\" action=\"\" method=\"\">\n              <!--        You can switch \" data-color=\"primary\" \"  with one of the next bright colors: \"green\", \"orange\", \"red\", \"blue\"       -->\n              <div class=\"card-header text-center\">\n                <h3 class=\"card-title\">\n                  Build Your Profile\n                </h3>\n                <h5 class=\"card-description\">This information will let us know more about you.</h5>\n              </div>\n              <div class=\"wizard-navigation\">\n                <ul class=\"nav nav-pills\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link active\" href=\"#about\" data-toggle=\"tab\" role=\"tab\">\n                      About\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#account\" data-toggle=\"tab\" role=\"tab\">\n                      Account\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#address\" data-toggle=\"tab\" role=\"tab\">\n                      Address\n                    </a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"tab-content\">\n                  <div class=\"tab-pane active\" id=\"about\">\n                    <h5 class=\"info-text\"> Let's start with the basic information (with validation)</h5>\n                    <div class=\"row justify-content-center\">\n                      <div class=\"col-sm-4\">\n                        <div class=\"picture-container\">\n                          <div class=\"picture\">\n                            <img src=\"./assets/img/default-avatar.png\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\n                            <input type=\"file\" id=\"wizard-picture\">\n                          </div>\n                          <h6 class=\"description\">Choose Picture</h6>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-6\">\n                        <div class=\"input-group form-control-lg\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"material-icons\">face</i>\n                            </span>\n                          </div>\n                          <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'firstName')\">\n                            <input type=\"text\"\n                            name=\"firstname\"\n                            matInput\n                            id=\"text\"\n                            placeholder=\"First Name\"\n                            formControlName=\"firstName\">\n                          </mat-form-field>\n                        </div>\n                        <div class=\"input-group form-control-lg\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"material-icons\">record_voice_over</i>\n                            </span>\n                          </div>\n                          <mat-form-field class=\"example-full-width has-label\" [ngClass]=\"displayFieldCss(type, 'lastName')\">\n                            <input type=\"text\"\n                            name=\"lastname\"\n                            matInput\n                            id=\"text\"\n                            placeholder=\"last Name\"\n                            formControlName=\"lastName\">\n                          </mat-form-field>\n                        </div>\n                      </div>\n                      <div class=\"col-lg-10 mt-3\">\n                        <div class=\"input-group form-control-lg\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">\n                              <i class=\"material-icons\">email</i>\n                            </span>\n                          </div>\n                          <mat-form-field class=\"example-full-width\">\n                             <input matInput placeholder=\"Email (required)\" [formControl]=\"emailFormControl\"\n                               type=\"email\" id=\"exampleemalil\" name=\"email\">\n                           </mat-form-field>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"tab-pane\" id=\"account\">\n                    <h5 class=\"info-text\"> What are you doing? (checkboxes) </h5>\n                    <div class=\"row justify-content-center\">\n                      <div class=\"col-lg-10\">\n                        <div class=\"row\">\n                          <div class=\"col-sm-4\">\n                            <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                              <input type=\"checkbox\" name=\"jobb\" value=\"Design\">\n                              <div class=\"icon\">\n                                <i class=\"fa fa-pencil\"></i>\n                              </div>\n                              <h6>Design</h6>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-4\">\n                            <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                              <input type=\"checkbox\" name=\"jobb\" value=\"Code\">\n                              <div class=\"icon\">\n                                <i class=\"fa fa-terminal\"></i>\n                              </div>\n                              <h6>Code</h6>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-4\">\n                            <div class=\"choice\" data-toggle=\"wizard-checkbox\">\n                              <input type=\"checkbox\" name=\"jobb\" value=\"Develop\">\n                              <div class=\"icon\">\n                                <i class=\"fa fa-laptop\"></i>\n                              </div>\n                              <h6>Develop</h6>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"tab-pane\" id=\"address\">\n                    <div class=\"row justify-content-center\">\n                      <div class=\"col-sm-12\">\n                        <h5 class=\"info-text\"> Are you living in a nice area? </h5>\n                      </div>\n                      <div class=\"col-sm-7\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput type=\"text\" placeholder=\"Street Name\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput type=\"text\" placeholder=\"Street No.\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-sm-5\">\n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput type=\"text\" placeholder=\"City\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-sm-5\">\n                          <mat-form-field>\n                              <mat-select placeholder=\"Single City\" name=\"city\">\n                                <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                  {{ city.viewValue }}\n                                </mat-option>\n                              </mat-select>\n                          </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-footer\">\n                <div class=\"mr-auto\">\n                  <input type=\"button\" class=\"btn btn-previous btn-fill btn-default btn-wd disabled\" name=\"previous\" value=\"Previous\">\n                </div>\n                <div class=\"ml-auto\">\n                  <input type=\"button\" class=\"btn btn-next btn-fill btn-rose btn-wd\" name=\"next\" value=\"Next\">\n                  <input type=\"button\" class=\"btn btn-finish btn-fill btn-rose btn-wd\" name=\"finish\" value=\"Finish\" style=\"display: none;\">\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n            </form>\n          </div>\n        </div>\n        <!-- wizard container -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forms/wizard/wizard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/forms/wizard/wizard.component.ts ***!
  \**************************************************/
/*! exports provided: MyErrorStateMatcher, WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var WizardComponent = /** @class */ (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.cities = [
            { value: 'paris-0', viewValue: 'Paris' },
            { value: 'miami-1', viewValue: 'Miami' },
            { value: 'bucharest-2', viewValue: 'Bucharest' },
            { value: 'new-york-3', viewValue: 'New York' },
            { value: 'london-4', viewValue: 'London' },
            { value: 'barcelona-5', viewValue: 'Barcelona' },
            { value: 'moscow-6', viewValue: 'Moscow' },
        ];
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    WizardComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    WizardComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    WizardComponent.prototype.ngOnInit = function () {
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        });
        // Code for the Validator
        var $validator = $('.card-wizard form').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 3
                },
                lastname: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    minlength: 3,
                }
            },
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
            },
            success: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
            },
            errorPlacement: function (error, element) {
                $(element).append(error);
            }
        });
        // Wizard Initialization
        $('.card-wizard').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',
            onNext: function (tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                if (!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                // check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $wizard = navigation.closest('.card-wizard');
                var $first_li = navigation.find('li:first-child a').html();
                var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
                $('.card-wizard .wizard-navigation').append($moving_div);
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                var $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css('transition', 'transform 0s');
            },
            onTabClick: function (tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                if (!$valid) {
                    return false;
                }
                else {
                    return true;
                }
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                var $wizard = navigation.closest('.card-wizard');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                }
                else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }
                var button_text = navigation.find('li:nth-child(' + $current + ') a').html();
                setTimeout(function () {
                    $('.moving-tab').text(button_text);
                }, 150);
                var checkbox = $('.footer-checkbox');
                if (index !== 0) {
                    $(checkbox).css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'position': 'absolute'
                    });
                }
                else {
                    $(checkbox).css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
            }
        });
        // Prepare the preview for profile picture
        $('#wizard-picture').change(function () {
            var input = $(this);
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                };
                reader.readAsDataURL(input[0].files[0]);
            }
        });
        $('[data-toggle="wizard-radio"]').click(function () {
            var wizard = $(this).closest('.card-wizard');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });
        $('[data-toggle="wizard-checkbox"]').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            }
            else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });
        $('.set-full-height').css('height', 'auto');
    };
    WizardComponent.prototype.ngOnChanges = function (changes) {
        var input = $(this);
        if (input[0].files && input[0].files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input[0].files[0]);
        }
    };
    WizardComponent.prototype.ngAfterViewInit = function () {
        $(window).resize(function () {
            $('.card-wizard').each(function () {
                var $wizard = $(this);
                var index = $wizard.bootstrapWizard('currentIndex');
                var $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                var $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css({
                    'transition': 'transform 0s'
                });
            });
        });
    };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard-cmp',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/forms/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.css */ "./src/app/forms/wizard/wizard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module.js.map