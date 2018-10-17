(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-components-module"],{

/***/ "./src/app/components/buttons/buttons.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">Pick your Color</h4>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button class=\"btn\">Default</button>\n              <button mat-raised-button class=\"btn btn-primary\">Primary</button>\n              <button mat-raised-button class=\"btn btn-info\">Info</button>\n              <button mat-raised-button class=\"btn btn-success\">Success</button>\n              <button mat-raised-button class=\"btn btn-warning\">Warning</button>\n              <button mat-raised-button class=\"btn btn-danger\">Danger</button>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">Buttons with Label</h4>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button class=\"btn\">\n                <span class=\"btn-label\">\n                  <i class=\"material-icons\">keyboard_arrow_left</i>\n                </span>\n                Left\n              </button>\n              <button mat-raised-button class=\"btn\">\n                Right\n                <span class=\"btn-label btn-label-right\">\n                  <i class=\"material-icons\">keyboard_arrow_right</i>\n                </span>\n              </button>\n              <button mat-raised-button class=\"btn btn-info\">\n                <span class=\"btn-label\">\n                  <i class=\"material-icons\">priority_high</i>\n                </span>\n                Info\n              </button>\n              <button mat-raised-button class=\"btn btn-success\">\n                <span class=\"btn-label\">\n                  <i class=\"material-icons\">check</i>\n                </span>\n                Success\n              </button>\n              <button mat-raised-button class=\"btn btn-warning\">\n                <i class=\"material-icons\">warning</i> Warning\n              </button>\n              <button mat-raised-button class=\"btn btn-danger\">\n                <i class=\"material-icons\">close</i> Danger\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">Pick your Size</h4>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button class=\"btn btn-primary btn-sm\">Small</button>\n              <button mat-raised-button class=\"btn btn-primary\">Regular</button>\n              <button mat-raised-button class=\"btn btn-primary btn-lg\">Large</button>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">Pick your Style</h4>\n            </div>\n            <div class=\"card-body\">\n              <button mat-raised-button class=\"btn btn-primary\">Default</button>\n              <button mat-raised-button class=\"btn btn-primary btn-round\">round</button>\n              <button mat-raised-button class=\"btn btn-primary btn-round\">\n                <i class=\"material-icons\">favorite</i> with icon\n              </button>\n              <button mat-raised-button mat-min-fab class=\"btn btn-primary btn-round btn-fab\">\n                <i class=\"material-icons\">favorite</i>\n              </button>\n              <button mat-raised-button class=\"btn btn-primary btn-link\">\n                simple\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">Pagination</h4>\n            </div>\n            <div class=\"card-body\">\n              <nav aria-label=\"Page navigation example\">\n                <ul class=\"pagination pagination-primary\">\n                  <li class=\"page-item active\">\n                    <a mat-button class=\"page-link\">1</a>\n                  </li>\n                  <li class=\"page-item\">\n                    <a mat-button class=\"page-link\">2</a>\n                  </li>\n                  <li class=\"page-item\">\n                    <a mat-button class=\"page-link\">3</a>\n                  </li>\n                  <li class=\"page-item\">\n                    <a mat-button class=\"page-link\">4</a>\n                  </li>\n                  <li class=\"page-item\">\n                    <a mat-button class=\"page-link\">5</a>\n                  </li>\n                </ul>\n                <ul class=\"pagination\">\n                  <li class=\"page-item\">\n                    <a mat-button class=\"page-link\" aria-label=\"Previous\">\n                      <span aria-hidden=\"true\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i></span>\n                    </a>\n                  </li>\n                  <li class=\"page-item\">\n                    <a mat-button class=\"page-link\">1</a>\n                  </li>\n                  <li class=\"page-item active\">\n                    <a mat-button class=\"page-link\">2</a>\n                  </li>\n                  <li class=\"page-item\">\n                    <a mat-button class=\"page-link\">3</a>\n                  </li>\n                  <li class=\"page-item\">\n                    <a mat-button class=\"page-link\" aria-label=\"Next\">\n                      <span aria-hidden=\"true\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>\n                    </a>\n                  </li>\n                </ul>\n              </nav>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">Button Group</h4>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"btn-group\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-info\">Left</button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info\">Middle</button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info\">Right</button>\n              </div>\n              <br>\n              <br>\n              <div class=\"btn-group\" data-toggle=\"buttons\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">1</button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">2</button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">3</button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">4</button>\n              </div>\n              <div class=\"btn-group\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">5</button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">6</button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info\">7</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">Social buttons</h4>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <p class=\"category\">Default</p>\n                  <button mat-raised-button class=\"btn btn-twitter\">\n                    <i class=\"fa fa-twitter\"></i> Connect with Twitter\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <p class=\"category\">&nbsp;</p>\n                  <button mat-raised-button class=\"btn btn-just-icon btn-twitter\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <p class=\"category\">&nbsp;</p>\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-twitter\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <p class=\"category\">Neutral</p>\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-twitter\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <p class=\"category\">&nbsp;</p>\n                  <button mat-raised-button class=\"btn btn-link btn-twitter\">\n                    <i class=\"fa fa-twitter\"></i> Connect with Twitter\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <button mat-raised-button class=\"btn btn-facebook\">\n                    <i class=\"fa fa-facebook-square\"></i> Share · 2.2k\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-facebook\">\n                    <i class=\"fa fa-facebook\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-facebook\">\n                    <i class=\"fa fa-facebook\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-facebook\">\n                    <i class=\"fa fa-facebook-square\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <button mat-raised-button class=\"btn btn-link btn-facebook\">\n                    <i class=\"fa fa-facebook-square\"></i> Share · 2.2k\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <button mat-raised-button class=\"btn btn-google\">\n                    <i class=\"fa fa-google-plus\"></i> Share on Google+\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-google\">\n                    <i class=\"fa fa-google-plus\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-google\">\n                    <i class=\"fa fa-google-plus\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-google\">\n                    <i class=\"fa fa-google-plus\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <button mat-raised-button class=\"btn btn-link btn-google\">\n                    <i class=\"fa fa-google-plus\"></i> Share on Google+\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <button mat-raised-button class=\"btn btn-linkedin\">\n                    <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-linkedin\">\n                    <i class=\"fa fa-linkedin\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-linkedin\">\n                    <i class=\"fa fa-linkedin\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-linkedin\">\n                    <i class=\"fa fa-linkedin-square\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <button mat-raised-button class=\"btn btn-link btn-linkedin\">\n                    <i class=\"fa fa-linkedin-square\"></i> Connect with Linkedin\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <button mat-raised-button class=\"btn btn-pinterest\">\n                    <i class=\"fa fa-pinterest\"></i> Pint it · 212\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-pinterest\">\n                    <i class=\"fa fa-pinterest\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-pinterest\">\n                    <i class=\"fa fa-pinterest\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-pinterest\">\n                    <i class=\"fa fa-pinterest\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <button mat-raised-button class=\"btn btn-link btn-pinterest\">\n                    <i class=\"fa fa-pinterest\"></i> Pint it · 212\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <button mat-raised-button class=\"btn btn-youtube\">\n                    <i class=\"fa fa-youtube-play\"></i> View on Youtube\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-youtube\">\n                    <i class=\"fa fa-youtube\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-youtube\">\n                    <i class=\"fa fa-youtube\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-youtube\">\n                    <i class=\"fa fa-youtube\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <button mat-raised-button class=\"btn btn-link btn-youtube\">\n                    <i class=\"fa fa-youtube-play\"></i> View on Youtube\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <button mat-raised-button class=\"btn btn-tumblr\">\n                    <i class=\"fa fa-tumblr-square\"></i> Repost\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-tumblr\">\n                    <i class=\"fa fa-tumblr\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-tumblr\">\n                    <i class=\"fa fa-tumblr\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-tumblr\">\n                    <i class=\"fa fa-tumblr-square\"> </i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <button mat-raised-button class=\"btn btn-link btn-tumblr\">\n                    <i class=\"fa fa-tumblr-square\"></i> Repost\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <button mat-raised-button class=\"btn btn-github\">\n                    <i class=\"fa fa-github\"></i> Connect with Github\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-github\">\n                    <i class=\"fa fa-github\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-github\">\n                    <i class=\"fa fa-github\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-github\">\n                    <i class=\"fa fa-github\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <button mat-raised-button class=\"btn btn-link btn-github\">\n                    <i class=\"fa fa-github\"></i> Connect with Github\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <button mat-raised-button class=\"btn btn-behance\">\n                    <i class=\"fa fa-behance-square\"></i> Follow us\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-behance\">\n                    <i class=\"fa fa-behance\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-behance\">\n                    <i class=\"fa fa-behance\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-behance\">\n                    <i class=\"fa fa-behance\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <button mat-raised-button class=\"btn btn-link btn-behance\">\n                    <i class=\"fa fa-behance-square\"></i> Follow us\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <button mat-raised-button class=\"btn btn-dribbble\">\n                    <i class=\"fa fa-dribbble\"></i> Find us on Dribble\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-dribbble\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-dribbble\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-dribbble\">\n                    <i class=\"fa fa-dribbble\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <button mat-raised-button class=\"btn btn-link btn-dribbble\">\n                    <i class=\"fa fa-dribbble\"></i> Find us on Dribble\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-5\">\n                  <button mat-raised-button class=\"btn btn-reddit\">\n                    <i class=\"fa fa-reddit\"></i> Repost · 232\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-reddit\">\n                    <i class=\"fa fa-reddit\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-round btn-reddit\">\n                    <i class=\"fa fa-reddit\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-1 col-sm-1\">\n                  <button mat-raised-button class=\"btn btn-just-icon btn-link btn-reddit\">\n                    <i class=\"fa fa-reddit\"></i>\n                  </button>\n                </div>\n                <div class=\"col-md-3 col-sm-4\">\n                  <button mat-raised-button class=\"btn btn-link btn-reddit\">\n                    <i class=\"fa fa-reddit\"></i> Repost · 232\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/components/buttons/buttons.component.html")
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _components_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.routing */ "./src/app/components/components.routing.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/components/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/components/panels/panels.component.ts");
/* harmony import */ var _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sweetalert/sweetalert.component */ "./src/app/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_components_routing__WEBPACK_IMPORTED_MODULE_6__["ComponentsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_7__["GridSystemComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_8__["IconsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"],
                _panels_panels_component__WEBPACK_IMPORTED_MODULE_10__["PanelsComponent"],
                _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_11__["SweetAlertComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_12__["TypographyComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/components/components.routing.ts ***!
  \**************************************************/
/*! exports provided: ComponentsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutes", function() { return ComponentsRoutes; });
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/components/grid/grid.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/components/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/components/panels/panels.component.ts");
/* harmony import */ var _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sweetalert/sweetalert.component */ "./src/app/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");







var ComponentsRoutes = [
    {
        path: '',
        children: [{
                path: 'buttons',
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'grid',
                component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_1__["GridSystemComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'icons',
                component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'notifications',
                component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'panels',
                component: _panels_panels_component__WEBPACK_IMPORTED_MODULE_4__["PanelsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'sweet-alert',
                component: _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_5__["SweetAlertComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'typography',
                component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/components/grid/grid.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/grid/grid.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card card-plain\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title pl-3\">XS Grid\n          <small>Always Horizontal</small>\n        </h4>\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-4</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-4</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-4</code>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"card-title pl-3\">SM Grid\n          <small>Collapsed at 576px</small>\n        </h4>\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-sm-4</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-sm-4</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-sm-4</code>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"card-title pl-3\">MD Grid\n          <small>Collapsed at 768px</small>\n        </h4>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-md-4</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-md-4</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-md-4</code>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"card-title pl-3\">LG Grid\n          <small>Collapsed at 992px</small>\n        </h4>\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-lg-4</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-lg-4</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-lg-4</code>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"card-title pl-3\">XL Grid\n          <small>Collapsed at 1200px</small>\n        </h4>\n        <div class=\"row\">\n          <div class=\"col-xl-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-xl-4</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-xl-4</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xl-4\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-xl-4</code>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"card-title pl-3\">Mixed Grid\n          <small>Showing different sizes on different screens</small>\n        </h4>\n        <div class=\"row\">\n          <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-sm-6 col-lg-3</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-sm-6 col-lg-3</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-sm-6 col-lg-3</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-sm-6 col-lg-3</code>\n              </div>\n            </div>\n          </div>\n        </div>\n        <h4 class=\"card-title pl-3\">Offset Grid\n          <small>Adding some space when needed</small>\n        </h4>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-md-3</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3 ml-auto\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-md-3 ml-auto</code>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 ml-auto mr-auto\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-md-4 ml-auto mr-auto</code>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 ml-auto mr-auto\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-md-4 ml-auto mr-auto</code>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6 ml-auto mr-auto\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <code>col-md-6 ml-auto mr-auto</code>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <h3 class=\"title mt-4 text-center\">Paragraphs</h3>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <h3>Some Title Here</h3>\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought.</p>\n          </div>\n          <div class=\"col-sm-6\">\n            <h3>Another Title Here</h3>\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought.</p>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <h3>Some Title Here</h3>\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\n          </div>\n          <div class=\"col-sm-4\">\n            <h3>Another Title Here</h3>\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\n          </div>\n          <div class=\"col-sm-4\">\n            <h3>Another Title Here</h3>\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <h3>Some Title Here</h3>\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\n          </div>\n          <div class=\"col-sm-8\">\n            <h3>Another Title Here</h3>\n            <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--  end card -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/grid/grid.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridSystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridSystemComponent", function() { return GridSystemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridSystemComponent = /** @class */ (function () {
    function GridSystemComponent() {
    }
    GridSystemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-cmp',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/components/grid/grid.component.html")
        })
    ], GridSystemComponent);
    return GridSystemComponent;
}());



/***/ }),

/***/ "./src/app/components/icons/icons.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/icons/icons.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"header text-center\">\n        <h3 class=\"title\">Material Design Icons</h3>\n        <p class=\"category\">Handcrafted by our friends from\n          <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a>\n        </p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-plain\">\n            <div class=\"card-body\">\n              <div class=\"iframe-container d-none d-lg-block\">\n                <iframe src=\"https://design.google.com/icons/\">\n                  <p>Your browser does not support iframes.</p>\n                </iframe>\n              </div>\n              <div class=\"col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto\">\n                <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the\n                  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a>\n                </h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/icons/icons.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/icons/icons.component.ts ***!
  \*****************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons-cmp',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/components/icons/icons.component.html")
        })
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/components/notifications/notifications.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"header text-center ml-auto mr-auto\">\n          <h3 class=\"title\">Notifications</h3>\n          <p class=\"category\">Handcrafted by our friend\n            <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n            <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n          </p>\n        </div>\n      </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h4 class=\"card-title\">Notifications Style</h4>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"alert alert-info\">\n                  <span>This is a plain notification</span>\n                </div>\n                <div class=\"alert alert-info\">\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                  </button>\n                  <span>This is a notification with close button.</span>\n                </div>\n                <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                  <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                  </button>\n                  <span data-notify=\"icon\" class=\"now-ui-icons ui-1_bell-53\"></span>\n                  <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                </div>\n                <div class=\"alert alert-rose alert-with-icon\" data-notify=\"container\">\n                  <i class=\"material-icons\" data-notify=\"icon\">notifications</i>\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                  </button>\n                  <span data-notify=\"message\">This is a notification with close button and icon and is made with \".alert-rose\". You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <h4 class=\"card-title\">Notification states</h4>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"alert alert-info\">\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                  </button>\n                  <span>\n                    <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                </div>\n                <div class=\"alert alert-success\">\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                  </button>\n                  <span>\n                    <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                </div>\n                <div class=\"alert alert-warning\">\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                  </button>\n                  <span>\n                    <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                </div>\n                <div class=\"alert alert-danger\">\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                  </button>\n                  <span>\n                    <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                </div>\n                <div class=\"alert alert-primary\">\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                  </button>\n                  <span>\n                    <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                </div>\n                <div class=\"alert alert-rose\">\n                  <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                    <i class=\"material-icons\">close</i>\n                  </button>\n                  <span>\n                    <b> Rose - </b> This is a regular notification made with \".alert-rose\"</span>\n                </div>\n              </div>\n            </div>\n          </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"places-buttons\">\n                          <div class=\"row\">\n                            <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                              <h4 class=\"card-title\">\n                                Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                              </h4>\n                            </div>\n                          </div>\n                            <div class=\"row\">\n                              <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                                <div class=\"row\">\n\n                                    <div class=\"col-md-4\">\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                                    </div>\n                                  </div>\n\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                              <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                                <div class=\"row\">\n\n                                    <div class=\"col-md-4\">\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                                    </div>\n                                </div>\n                              </div>\n\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <div class=\"card-header\">\n                                    <h4 class=\"card-title\">Modal</h4>\n                                </div>\n                                <button mat-raised-button class=\"btn btn-primary btn-raised btn-round\" data-toggle=\"modal\" data-target=\"#myModal\">\n                                    Classic modal\n                                </button>\n                                <button mat-raised-button class=\"btn btn-raised btn-round btn-info\" data-toggle=\"modal\" data-target=\"#noticeModal\">\n                                    Notice modal\n                                </button>\n                                <button mat-raised-button class=\"btn btn-raised btn-round btn-rose\" data-toggle=\"modal\" data-target=\"#myModal10\">\n                                    Small alert modal\n                                </button>\n                                <!-- Classic Modal -->\n                                <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                  <div class=\"modal-dialog\">\n                                    <div class=\"modal-content\">\n                                      <div class=\"modal-header\">\n                                        <h4 class=\"modal-title\">Modal title</h4>\n                                        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                                          <i class=\"material-icons\">clear</i>\n                                        </button>\n                                      </div>\n                                      <div class=\"modal-body\">\n                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n                                        </p>\n                                        <div class=\"form-group bmd-form-group is-filled\">\n                                          <label class=\"label-control\">Datetime Picker</label>\n                                          <div class=\"row\">\n                                            <div class=\"col-md-10 col-lg-8 ml-auto mr-auto\">\n                                              <mat-form-field >\n                                                <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" (click)=\"picker.open()\">\n                                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                                <mat-datepicker #picker></mat-datepicker>\n                                              </mat-form-field>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <div class=\"modal-footer\">\n                                        <button mat-raised-button type=\"button\" class=\"btn btn-link\">Nice Button</button>\n                                        <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" data-dismiss=\"modal\">Close</button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <!--  End Modal -->\n                                <!-- notice modal -->\n                                <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                  <div class=\"modal-dialog modal-notice\">\n                                    <div class=\"modal-content\">\n                                      <div class=\"modal-header\">\n                                        <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5>\n                                        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                                          <i class=\"material-icons\">close</i>\n                                        </button>\n                                      </div>\n                                      <div class=\"modal-body\">\n                                        <div class=\"instruction\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-8\">\n                                              <strong>1. Register</strong>\n                                              <p class=\"description\">The first step is to create an account at\n                                                <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\n                                            </div>\n                                            <div class=\"col-md-4\">\n                                              <div class=\"picture\">\n                                                <img src=\"./assets/img/card-1.jpg\" alt=\"Thumbnail Image\" class=\"rounded img-fluid\">\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <div class=\"instruction\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-8\">\n                                              <strong>2. Apply</strong>\n                                              <p class=\"description\">The first step is to create an account at\n                                                <a href=\"https://www.creative-tim.com/\">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>\n                                            </div>\n                                            <div class=\"col-md-4\">\n                                              <div class=\"picture\">\n                                                <img src=\"./assets/img/card-2.jpg\" alt=\"Thumbnail Image\" class=\"rounded img-fluid\">\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>\n                                      </div>\n                                      <div class=\"modal-footer justify-content-center\">\n                                        <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Sounds good!</button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <!-- end notice modal -->\n                                <!-- small modal -->\n                                <div class=\"modal fade modal-mini modal-primary\" id=\"myModal10\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                  <div class=\"modal-dialog modal-small\">\n                                    <div class=\"modal-content\">\n                                      <div class=\"modal-header\">\n                                        <button mat-button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"material-icons\">clear</i></button>\n                                      </div>\n                                      <div class=\"modal-body\">\n                                        <p>Are you sure you want to do this?</p>\n                                      </div>\n                                      <div class=\"modal-footer justify-content-center\">\n                                        <button mat-raised-button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\">Never mind</button>\n                                        <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\">Yes\n                                          <div class=\"ripple-container\"></div>\n                                        </button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <!--    end small modal -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
        var color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            icon: 'notifications',
            message: 'Welcome to <b>Material Dashboard</b> - a beautiful dashboard for every web developer.'
        }, {
            type: type[color],
            timer: 30000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        $('.modal').on('shown.bs.modal', function () {
            mainPanel.classList.add('no-scroll');
        });
        $('.modal').on('hidden.bs.modal', function () {
            mainPanel.classList.remove('no-scroll');
        });
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications-cmp',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/components/notifications/notifications.component.html")
        })
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/panels/panels.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/panels/panels.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"card \">\n          <div class=\"card-header \">\n            <h4 class=\"card-title\">Navigation Pills -\n              <small class=\"description\">Horizontal Tabs</small>\n            </h4>\n          </div>\n          <div class=\"card-body \">\n            <ul class=\"nav nav-pills nav-pills-warning\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link1\" role=\"tablist\">\n                  Profile\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link2\" role=\"tablist\">\n                  Settings\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link3\" role=\"tablist\">\n                  Options\n                </a>\n              </li>\n            </ul>\n            <div class=\"tab-content tab-space\">\n              <div class=\"tab-pane active\" id=\"link1\">\n                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                <br />\n                <br /> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                <br/>\n                <br/> This is very nice.\n              </div>\n              <div class=\"tab-pane\" id=\"link2\">\n                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                <br />\n                <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.\n              </div>\n              <div class=\"tab-pane\" id=\"link3\">\n                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                <br />\n                <br />Dynamically innovate resource-leveling customer service for state of the art customer service.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card \">\n          <div class=\"card-header \">\n            <h4 class=\"card-title\">Navigation Pills -\n              <small class=\"description\">Vertical Tabs</small>\n            </h4>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <ul class=\"nav nav-pills nav-pills-rose flex-column\" role=\"tablist\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link4\" role=\"tablist\">\n                      Profile\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link5\" role=\"tablist\">\n                      Settings\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link6\" role=\"tablist\">\n                      Options\n                    </a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-md-8\">\n                <div class=\"tab-content\">\n                  <div class=\"tab-pane active\" id=\"link4\">\n                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                    <br>\n                    <br> Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. This is very nice.\n                  </div>\n                  <div class=\"tab-pane\" id=\"link5\">\n                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                    <br>\n                    <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                  </div>\n                  <div class=\"tab-pane\" id=\"link6\">\n                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                    <br>\n                    <br>Dynamically innovate resource-leveling customer service for state of the art customer service.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h4 class=\"card-title\">Collapsible Accordion</h4>\n          </div>\n          <div class=\"card-body\">\n            <div id=\"accordion\" role=\"tablist\">\n              <div class=\"card-collapse\">\n                <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                  <h5 class=\"mb-0\">\n                    <a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\" class=\"collapsed\">\n                      Collapsible Group Item #1\n                      <i class=\"material-icons\">keyboard_arrow_down</i>\n                    </a>\n                  </h5>\n                </div>\n                <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\" style=\"\">\n                  <div class=\"card-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-collapse\">\n                <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n                  <h5 class=\"mb-0\">\n                    <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                      Collapsible Group Item #2\n                      <i class=\"material-icons\">keyboard_arrow_down</i>\n                    </a>\n                  </h5>\n                </div>\n                <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                  <div class=\"card-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-collapse\">\n                <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n                  <h5 class=\"mb-0\">\n                    <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                      Collapsible Group Item #3\n                      <i class=\"material-icons\">keyboard_arrow_down</i>\n                    </a>\n                  </h5>\n                </div>\n                <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                  <div class=\"card-body\">\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"card \">\n          <div class=\"card-header \">\n            <h4 class=\"card-title\">Navigation Pills Icons -\n              <small class=\"description\">Vertical Tabs</small>\n            </h4>\n          </div>\n          <div class=\"card-body \">\n            <div class=\"row\">\n              <div class=\"col-lg-4 col-md-6\">\n                <!--\n                                  color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n                              -->\n                <ul class=\"nav nav-pills nav-pills-rose nav-pills-icons flex-column\" role=\"tablist\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link10\" role=\"tablist\">\n                      <i class=\"material-icons\">dashboard</i> Home\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link11\" role=\"tablist\">\n                      <i class=\"material-icons\">schedule</i> Settings\n                    </a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-md-8\">\n                <div class=\"tab-content\">\n                  <div class=\"tab-pane active\" id=\"link10\">\n                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                    <br>\n                    <br> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                    <br/>\n                    <br/> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                  </div>\n                  <div class=\"tab-pane\" id=\"link11\">\n                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                    <br>\n                    <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-8 ml-auto mr-auto\">\n        <div class=\"page-categories\">\n          <h3 class=\"title text-center\">Page Subcategories</h3>\n          <br />\n          <ul class=\"nav nav-pills nav-pills-warning nav-pills-icons justify-content-center\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\n                <i class=\"material-icons\">info</i> Description\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\n                <i class=\"material-icons\">location_on</i> Location\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\n                <i class=\"material-icons\">gavel</i> Legal Info\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link10\" role=\"tablist\">\n                <i class=\"material-icons\">help_outline</i> Help Center\n              </a>\n            </li>\n          </ul>\n          <div class=\"tab-content tab-space tab-subcategories\">\n            <div class=\"tab-pane\" id=\"link7\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\">Description about product</h4>\n                  <p class=\"card-category\">\n                    More information here\n                  </p>\n                </div>\n                <div class=\"card-body\">\n                  Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.\n                  <br>\n                  <br> Dramatically visualize customer directed convergence without revolutionary ROI.\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane active\" id=\"link8\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\">Location of the product</h4>\n                  <p class=\"card-category\">\n                    More information here\n                  </p>\n                </div>\n                <div class=\"card-body\">\n                  Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.\n                  <br>\n                  <br> Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"link9\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\">Legal info of the product</h4>\n                  <p class=\"card-category\">\n                    More information here\n                  </p>\n                </div>\n                <div class=\"card-body\">\n                  Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.\n                  <br>\n                  <br>Dynamically innovate resource-leveling customer service for state of the art customer service.\n                </div>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"link10\">\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\">Help center</h4>\n                  <p class=\"card-category\">\n                    More information here\n                  </p>\n                </div>\n                <div class=\"card-body\">\n                  From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.\n                  <br>\n                  <br> Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/panels/panels.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/panels/panels.component.ts ***!
  \*******************************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelsComponent = /** @class */ (function () {
    function PanelsComponent() {
    }
    PanelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panels-cmp',
            template: __webpack_require__(/*! ./panels.component.html */ "./src/app/components/panels/panels.component.html")
        })
    ], PanelsComponent);
    return PanelsComponent;
}());



/***/ }),

/***/ "./src/app/components/sweetalert/sweetalert.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/sweetalert/sweetalert.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">Sweet Alert 2</h3>\n            <p class=\"category\">A beautiful plugin, that replace the classic alert, Handcrafted by our friend\n                <a target=\"_blank\" href=\"https://twitter.com/t4t5\">Tristan Edwards</a>. Please check out the\n                <a href=\"https://sweetalert2.github.io/\" target=\"_blank\">full documentation.</a>\n            </p>\n        </div>\n        <div class=\"places-sweet-alerts\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <h5>Basic example</h5>\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('basic')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <h5>A title with a text under</h5>\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('title-and-text')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <h5>A success message</h5>\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('success-message')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <h5>Custom HTML description</h5>\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('custom-html')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <h5>A warning message, with a function attached to the \"Confirm\" Button...</h5>\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('warning-message-and-confirmation')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <h5>...and by passing a parameter, you can execute something else for \"Cancel\"</h5>\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('warning-message-and-cancel')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <h5>A message with auto close timer set to 2 seconds</h5>\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('auto-close')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <h5>Modal window with input field</h5>\n                            <button mat-raised-button class=\"btn btn-rose btn-fill\" (click)=\"showSwal('input-field')\">Try me!</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sweetalert/sweetalert.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/sweetalert/sweetalert.component.ts ***!
  \***************************************************************/
/*! exports provided: SweetAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertComponent", function() { return SweetAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SweetAlertComponent = /** @class */ (function () {
    function SweetAlertComponent() {
    }
    SweetAlertComponent.prototype.showSwal = function (type) {
        if (type == 'basic') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: "Here's a message!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
        else if (type == 'title-and-text') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: "Here's a message!",
                text: "It's pretty, isn't it?",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-info"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
        else if (type == 'success-message') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: "Good job!",
                text: "You clicked the button!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                type: "success"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
        else if (type == 'warning-message-and-confirmation') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes, delete it!',
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: "btn btn-success",
                        buttonsStyling: false
                    });
                }
            });
        }
        else if (type == 'warning-message-and-cancel') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
                confirmButtonClass: "btn btn-success",
                cancelButtonClass: "btn btn-danger",
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                        title: 'Deleted!',
                        text: 'Your imaginary file has been deleted.',
                        type: 'success',
                        confirmButtonClass: "btn btn-success",
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                        title: 'Cancelled',
                        text: 'Your imaginary file is safe :)',
                        type: 'error',
                        confirmButtonClass: "btn btn-info",
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
                }
            });
        }
        else if (type == 'custom-html') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: 'HTML example',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                html: 'You can use <b>bold text</b>, ' +
                    '<a href="http://github.com">links</a> ' +
                    'and other HTML tags'
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
        else if (type == 'auto-close') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
        else if (type == 'input-field') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                title: 'Input something',
                html: '<div class="form-group">' +
                    '<input id="input-field" type="text" class="form-control" />' +
                    '</div>',
                showCancelButton: true,
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false
            }).then(function (result) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default()({
                    type: 'success',
                    html: 'You entered: <strong>' +
                        $('#input-field').val() +
                        '</strong>',
                    confirmButtonClass: 'btn btn-success',
                    buttonsStyling: false
                });
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.noop);
        }
    };
    SweetAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sweetalert-cmp',
            template: __webpack_require__(/*! ./sweetalert.component.html */ "./src/app/components/sweetalert/sweetalert.component.html")
        })
    ], SweetAlertComponent);
    return SweetAlertComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">Material Dashboard Heading</h3>\n            <p class=\"category\">Created using Roboto Font Family</p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div id=\"typography\">\n                            <div class=\"card-title\">\n                                <h2>Typography</h2>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"tim-typo\">\n                                    <h1>\n                                        <span class=\"tim-note\">Header 1</span>The Life of Material Kit </h1>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h2>\n                                        <span class=\"tim-note\">Header 2</span>The Life of Material Kit</h2>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h3>\n                                        <span class=\"tim-note\">Header 3</span>The Life of Material Kit</h3>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h4>\n                                        <span class=\"tim-note\">Header 4</span>The Life of Material Kit</h4>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h5>\n                                        <span class=\"tim-note\">Header 5</span>The Life of Material Kit</h5>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h6>\n                                        <span class=\"tim-note\">Header 6</span>The Life of Material Kit</h6>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <p>\n                                        <span class=\"tim-note\">Paragraph</span>\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Quote</span>\n                                    <blockquote>\n                                        <p>\n                                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                                        </p>\n                                        <small>\n                                            Kanye West, Musician\n                                        </small>\n                                    </blockquote>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Muted Text</span>\n                                    <p class=\"text-muted\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                                    </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Primary Text</span>\n                                    <p class=\"text-primary\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Info Text</span>\n                                    <p class=\"text-info\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Success Text</span>\n                                    <p class=\"text-success\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Warning Text</span>\n                                    <p class=\"text-warning\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                                    </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <span class=\"tim-note\">Danger Text</span>\n                                    <p class=\"text-danger\">\n                                        I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                                </div>\n                                <div class=\"tim-typo\">\n                                    <h2>\n                                        <span class=\"tim-note\">Small Tag</span>\n                                        Header with small subtitle\n                                        <br>\n                                        <small>Use \"small\" tag for the headers</small>\n                                    </h2>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography-cmp',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html")
        })
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-components-module.js.map