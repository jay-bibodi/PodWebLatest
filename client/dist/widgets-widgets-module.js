(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-widgets-module"],{

/***/ "./src/app/widgets/widgets.component.html":
/*!************************************************!*\
  !*** ./src/app/widgets/widgets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-text card-header-warning\">\n                    <div class=\"card-text\">\n                      <h4 class=\"card-title\">Employees Stats</h4>\n                      <p class=\"card-category\">New employees on 15th September, 2016</p>\n                    </div>\n                  </div>\n                    <div class=\"card-body table-responsive\">\n                        <table class=\"table table-hover\">\n                                <thead class=\"text-warning\">\n                                    <tr>\n                                      <th *ngFor=\"let cell of tableData.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                              <tbody>\n                                  <tr *ngFor=\"let row of tableData.dataRows\">\n                                      <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                  </tr>\n                              </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-tabs card-header-rose\">\n                    <div class=\"nav-tabs-navigation\">\n                      <div class=\"nav-tabs-wrapper\">\n                        <span class=\"nav-tabs-title\">Tasks:</span>\n                        <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                          <li class=\"nav-item\">\n                            <a class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\n                              <i class=\"material-icons\">bug_report</i> Bugs\n                              <div class=\"ripple-container\"></div>\n                            </a>\n                          </li>\n                          <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\n                              <i class=\"material-icons\">code</i> Website\n                              <div class=\"ripple-container\"></div>\n                            </a>\n                          </li>\n                          <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n                              <i class=\"material-icons\">cloud</i> Server\n                              <div class=\"ripple-container\"></div>\n                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                    <div class=\"card-body\">\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"profile\">\n                                <table class=\"table\">\n                                      <tbody>\n                                          <tr *ngFor=\"let row of tasks1\">\n                                              <td>\n                                                  <div [ngSwitch]=\"row.checked\">\n                                                      <div *ngSwitchCase=\"true\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                            <span class=\"form-check-sign\">\n                                                              <span class=\"check\"></span>\n                                                            </span>\n                                                          </label>\n                                                        </div>\n                                                      </div>\n                                                      <div *ngSwitchDefault>\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                            <span class=\"form-check-sign\">\n                                                              <span class=\"check\"></span>\n                                                            </span>\n                                                          </label>\n                                                        </div>\n                                                      </div>\n\n                                                  </div>\n                                              </td>\n                                              <td>{{row.title}}</td>\n                                              <td class=\"td-actions text-right\">\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'left'\" class=\"btn btn-primary btn-link btn-sm\">\n                                                      <i class=\"material-icons\">edit</i>\n                                                  </button>\n\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'left'\" class=\"btn btn-danger btn-link btn-sm\">\n                                                      <i class=\"material-icons\">close</i>\n                                                  </button>\n                                              </td>\n                                           </tr>\n                                      </tbody>\n                                </table>\n                            </div>\n                            <div class=\"tab-pane\" id=\"messages\">\n                                <table class=\"table\">\n                                      <tbody>\n                                          <tr *ngFor=\"let row of tasks2\">\n                                              <td>\n                                                  <div [ngSwitch]=\"row.checked\">\n                                                      <div *ngSwitchCase=\"true\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                            <span class=\"form-check-sign\">\n                                                              <span class=\"check\"></span>\n                                                            </span>\n                                                          </label>\n                                                        </div>\n                                                      </div>\n                                                      <div *ngSwitchDefault>\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                            <span class=\"form-check-sign\">\n                                                              <span class=\"check\"></span>\n                                                            </span>\n                                                          </label>\n                                                        </div>\n                                                      </div>\n\n                                                  </div>\n                                              </td>\n                                              <td>{{row.title}}</td>\n                                              <td class=\"td-actions text-right\">\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm\">\n                                                      <i class=\"material-icons\">edit</i>\n                                                  </button>\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm\">\n                                                      <i class=\"material-icons\">close</i>\n                                                  </button>\n                                              </td>\n                                           </tr>\n                                      </tbody>\n                                </table>\n                            </div>\n                            <div class=\"tab-pane\" id=\"settings\">\n                                <table class=\"table\">\n                                      <tbody>\n                                          <tr *ngFor=\"let row of tasks3\">\n                                              <td>\n                                                  <div [ngSwitch]=\"row.checked\">\n                                                      <div *ngSwitchCase=\"true\">\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                            <span class=\"form-check-sign\">\n                                                              <span class=\"check\"></span>\n                                                            </span>\n                                                          </label>\n                                                        </div>\n                                                      </div>\n                                                      <div *ngSwitchDefault>\n                                                        <div class=\"form-check\">\n                                                          <label class=\"form-check-label\">\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                            <span class=\"form-check-sign\">\n                                                              <span class=\"check\"></span>\n                                                            </span>\n                                                          </label>\n                                                        </div>\n                                                      </div>\n\n                                                  </div>\n                                              </td>\n                                              <td>{{row.title}}</td>\n                                              <td class=\"td-actions text-right\">\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\"class=\"btn btn-primary btn-link btn-sm\">\n                                                      <i class=\"material-icons\">edit</i>\n                                                  </button>\n                                                  <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm\">\n                                                      <i class=\"material-icons\">close</i>\n                                                  </button>\n                                              </td>\n                                           </tr>\n                                      </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"col-lg-6 cards\">\n                  <div class=\"card card-pricing card-raised\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-category\">Small Company</h6>\n                      <div class=\"card-icon icon-rose\">\n                        <i class=\"material-icons\">home</i>\n                      </div>\n                      <h3 class=\"card-title\">$29</h3>\n                      <p class=\"card-description\">\n                        This is good if your company size is between 2 and 10 Persons.\n                      </p>\n                      <a href=\"#pablo\" class=\"btn btn-rose btn-round\">Choose Plan</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-6 cards\">\n                  <div class=\"card card-pricing card-plain\">\n                    <div class=\"card-body\">\n                      <h6 class=\"card-category\">Freelancer</h6>\n                      <div class=\"card-icon\">\n                        <i class=\"material-icons\">weekend</i>\n                      </div>\n                      <h3 class=\"card-title\">FREE</h3>\n                      <p class=\"card-description\">\n                        This is good if your company size is between 2 and 10 Persons.\n                      </p>\n                      <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-11\">\n                  <div class=\"card card-testimonial\">\n                    <div class=\"icon\">\n                      <i class=\"material-icons\">format_quote</i>\n                    </div>\n                    <div class=\"card-body\">\n                      <h5 class=\"card-description\">\n                        Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!\n                      </h5>\n                    </div>\n                    <div class=\"card-footer\">\n                      <h4 class=\"card-title\">Alec Thompson</h4>\n                      <h6 class=\"card-category\">@alecthompson</h6>\n                      <div class=\"card-avatar\">\n                        <a href=\"#pablo\">\n                          <img class=\"img\" src=\"./assets/img/faces/card-profile1-square.jpg\" />\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n              <ul class=\"timeline timeline-simple\">\n                <li class=\"timeline-inverted\">\n                  <div class=\"timeline-badge danger\">\n                    <i class=\"material-icons\">card_travel</i>\n                  </div>\n                  <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                      <span class=\"badge badge-danger\">Some title</span>\n                    </div>\n                    <div class=\"timeline-body\">\n                      <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>\n                    </div>\n                    <h6>\n                      <i class=\"ti-time\"></i> 11 hours ago via Twitter\n                    </h6>\n                  </div>\n                </li>\n                <li class=\"timeline-inverted\">\n                  <div class=\"timeline-badge success\">\n                    <i class=\"material-icons\">extension</i>\n                  </div>\n                  <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                      <span class=\"badge badge-success\">Another One</span>\n                    </div>\n                    <div class=\"timeline-body\">\n                      <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>\n                    </div>\n                  </div>\n                </li>\n                <li class=\"timeline-inverted\">\n                  <div class=\"timeline-badge info\">\n                    <i class=\"material-icons\">fingerprint</i>\n                  </div>\n                  <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                      <span class=\"badge badge-info\">Another Title</span>\n                    </div>\n                    <div class=\"timeline-body\">\n                      <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>\n                      <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>\n                      <hr>\n                      <div class=\"dropdown pull-left\">\n                        <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info dropdown-toggle\" data-toggle=\"dropdown\">\n                          <i class=\"material-icons\">build</i>\n                          <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n                          <li>\n                            <a href=\"#action\">Action</a>\n                          </li>\n                          <li>\n                            <a href=\"#action\">Another action</a>\n                          </li>\n                          <li>\n                            <a href=\"#here\">Something else here</a>\n                          </li>\n                          <li class=\"divider\"></li>\n                          <li>\n                            <a href=\"#link\">Separated link</a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widgets/widgets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/widgets/widgets.component.ts ***!
  \**********************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WidgetsComponent = /** @class */ (function () {
    function WidgetsComponent() {
    }
    WidgetsComponent.prototype.ngOnInit = function () {
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South']
            ]
        };
        this.tasks1 = [
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false },
            { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true },
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true
            },
            { title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false }
        ];
        this.tasks2 = [
            {
                title: "Flooded: One year later, assessing what was lost and\n                 what was found when a ravaging rain swept through metro Detroit",
                checked: true
            },
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false },
        ];
        this.tasks3 = [
            { title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: false },
            {
                title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                checked: true
            },
            { title: 'Sign contract for \'What are conference organizers afraid of?\'', checked: false }
        ];
    };
    WidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widgets-cmp',
            template: __webpack_require__(/*! ./widgets.component.html */ "./src/app/widgets/widgets.component.html")
        })
    ], WidgetsComponent);
    return WidgetsComponent;
}());



/***/ }),

/***/ "./src/app/widgets/widgets.module.ts":
/*!*******************************************!*\
  !*** ./src/app/widgets/widgets.module.ts ***!
  \*******************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets.component */ "./src/app/widgets/widgets.component.ts");
/* harmony import */ var _widgets_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets.routing */ "./src/app/widgets/widgets.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_widgets_routing__WEBPACK_IMPORTED_MODULE_6__["WidgetsRoutes"]),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [_widgets_component__WEBPACK_IMPORTED_MODULE_5__["WidgetsComponent"]]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());



/***/ }),

/***/ "./src/app/widgets/widgets.routing.ts":
/*!********************************************!*\
  !*** ./src/app/widgets/widgets.routing.ts ***!
  \********************************************/
/*! exports provided: WidgetsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsRoutes", function() { return WidgetsRoutes; });
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets.component */ "./src/app/widgets/widgets.component.ts");

var WidgetsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _widgets_component__WEBPACK_IMPORTED_MODULE_0__["WidgetsComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=widgets-widgets-module.js.map