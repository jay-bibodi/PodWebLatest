(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timeline-timeline-module"],{

/***/ "./src/app/timeline/timeline.component.html":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">Timeline</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-content\">\n                        <ul class=\"timeline\">\n                            <li class=\"timeline-inverted\">\n                                <div class=\"timeline-badge danger\">\n                                    <i class=\"material-icons\">card_travel</i>\n                                </div>\n                                <div class=\"timeline-panel\">\n                                    <div class=\"timeline-heading\">\n                                        <span class=\"label label-danger\">Some Title</span>\n                                    </div>\n                                    <div class=\"timeline-body\">\n                                        <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>\n                                    </div>\n                                    <h6>\n                                        <i class=\"ti-time\"></i> 11 hours ago via Twitter\n                                    </h6>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"timeline-badge success\">\n                                    <i class=\"material-icons\">extension</i>\n                                </div>\n                                <div class=\"timeline-panel\">\n                                    <div class=\"timeline-heading\">\n                                        <span class=\"label label-success\">Another One</span>\n                                    </div>\n                                    <div class=\"timeline-body\">\n                                        <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"timeline-inverted\">\n                                <div class=\"timeline-badge info\">\n                                    <i class=\"material-icons\">fingerprint</i>\n                                </div>\n                                <div class=\"timeline-panel\">\n                                    <div class=\"timeline-heading\">\n                                        <span class=\"label label-info\">Another Title</span>\n                                    </div>\n                                    <div class=\"timeline-body\">\n                                        <p>Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>\n                                        <p>What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>\n                                        <hr>\n                                        <div class=\"dropdown pull-left\">\n                                            <button mat-raised-button type=\"button\" class=\"btn btn-round btn-info dropdown-toggle\" data-toggle=\"dropdown\">\n                                                <i class=\"material-icons\">build</i>\n                                                <span class=\"caret\"></span>\n                                            </button>\n                                            <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n                                                <li>\n                                                    <a href=\"#action\">Action</a>\n                                                </li>\n                                                <li>\n                                                    <a href=\"#action\">Another action</a>\n                                                </li>\n                                                <li>\n                                                    <a href=\"#here\">Something else here</a>\n                                                </li>\n                                                <li class=\"divider\"></li>\n                                                <li>\n                                                    <a href=\"#link\">Separated link</a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>\n                            <li>\n                                <div class=\"timeline-badge warning\">\n                                    <i class=\"material-icons\">flight_land</i>\n                                </div>\n                                <div class=\"timeline-panel\">\n                                    <div class=\"timeline-heading\">\n                                        <span class=\"label label-warning\">Another One</span>\n                                    </div>\n                                    <div class=\"timeline-body\">\n                                        <p>Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team</p>\n                                    </div>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline-cmp',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/timeline/timeline.component.html")
        })
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.module.ts":
/*!*********************************************!*\
  !*** ./src/app/timeline/timeline.module.ts ***!
  \*********************************************/
/*! exports provided: TimelineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineModule", function() { return TimelineModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _timeline_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline.routing */ "./src/app/timeline/timeline.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TimelineModule = /** @class */ (function () {
    function TimelineModule() {
    }
    TimelineModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_timeline_routing__WEBPACK_IMPORTED_MODULE_5__["TimelineRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_timeline_component__WEBPACK_IMPORTED_MODULE_4__["TimelineComponent"]]
        })
    ], TimelineModule);
    return TimelineModule;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/timeline/timeline.routing.ts ***!
  \**********************************************/
/*! exports provided: TimelineRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineRoutes", function() { return TimelineRoutes; });
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.component */ "./src/app/timeline/timeline.component.ts");

var TimelineRoutes = [
    {
        path: '',
        children: [{
                path: 'pages/timeline',
                component: _timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=timeline-timeline-module.js.map