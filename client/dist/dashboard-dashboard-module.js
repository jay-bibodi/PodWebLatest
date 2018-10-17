(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                <div class=\"card-header card-header-success card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\"></i>\n                  </div>\n                  <h4 class=\"card-title\">Global Sales by Top Locations</h4>\n                </div>\n                  <div class=\"card-body\">\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <app-md-table\n                                [data]=\"tableData\">\n                            </app-md-table>\n                          </div>\n                          <div class=\"col-md-6 ml-auto mr-auto\">\n                              <div id=\"worldMap\" class=\"map\"></div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-chart\">\n            <div class=\"card-header card-header-rose\" data-header-animation=\"true\">\n              <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info btn-link\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">refresh</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">Website Views</h4>\n              <p class=\"card-category\">Last Campaign Performance</p>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-chart\">\n            <div class=\"card-header card-header-success\" data-header-animation=\"true\">\n              <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info btn-link\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">refresh</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">Daily Sales</h4>\n              <p class=\"card-category\">\n                <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55% </span> increase in today sales.</p>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-chart\">\n            <div class=\"card-header card-header-info\" data-header-animation=\"true\">\n              <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-info btn-link\" matTooltip=\"Refresh\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">refresh</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"Change Date\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">Completed Tasks</h4>\n              <p class=\"card-category\">Last Campaign Performance</p>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-warning card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"material-icons\">weekend</i>\n              </div>\n              <p class=\"card-category\">Bookings</p>\n              <h3 class=\"card-title\">184</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons text-danger\">warning</i>\n                <a href=\"#pablo\">Get More Space...</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-rose card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"material-icons\">equalizer</i>\n              </div>\n              <p class=\"card-category\">Website Visits</p>\n              <h3 class=\"card-title\">75.521</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">local_offer</i> Tracked from Google Analytics\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-success card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"material-icons\">store</i>\n              </div>\n              <p class=\"card-category\">Revenue</p>\n              <h3 class=\"card-title\">$34,245</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">date_range</i> Last 24 Hours\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6\">\n          <div class=\"card card-stats\">\n            <div class=\"card-header card-header-info card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"fa fa-twitter\"></i>\n              </div>\n              <p class=\"card-category\">Followers</p>\n              <h3 class=\"card-title\">+245</h3>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"stats\">\n                <i class=\"material-icons\">update</i> Just Updated\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h3>Manage Listings</h3>\n      <br>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-product\">\n            <div class=\"card-header card-header-image\" data-header-animation=\"true\">\n              <a href=\"#pablo\">\n                <img class=\"img\" src=\"./assets/img/card-2.jpg\">\n              </a>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions text-center\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">art_track</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">close</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">\n                <a href=\"#pablo\">Cozy 5 Stars Apartment</a>\n              </h4>\n              <div class=\"card-description\">\n                The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Barcelona.\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"price\">\n                <h4>$899/night</h4>\n              </div>\n              <div class=\"stats\">\n                <p class=\"card-category\"><i class=\"material-icons\">place</i> Barcelona, Spain</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-product\">\n            <div class=\"card-header card-header-image\" data-header-animation=\"true\">\n              <a href=\"#pablo\">\n                <img class=\"img\" src=\"./assets/img/card-3.jpg\">\n              </a>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions text-center\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">art_track</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">close</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">\n                <a href=\"#pablo\">Office Studio</a>\n              </h4>\n              <div class=\"card-description\">\n                The place is close to Metro Station and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the night life in London, UK.\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"price\">\n                <h4>$1.119/night</h4>\n              </div>\n              <div class=\"stats\">\n                <p class=\"card-category\"><i class=\"material-icons\">place</i> London, UK</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-product\">\n            <div class=\"card-header card-header-image\" data-header-animation=\"true\">\n              <a href=\"#pablo\">\n                <img class=\"img\" src=\"./assets/img/card-1.jpg\">\n              </a>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-actions text-center\">\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">art_track</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">close</i>\n                </button>\n              </div>\n              <h4 class=\"card-title\">\n                <a href=\"#pablo\">Beautiful Castle</a>\n              </h4>\n              <div class=\"card-description\">\n                The place is close to Metro Station and bus stop just 2 min by walk and near to \"Naviglio\" where you can enjoy the main night life in Milan.\n              </div>\n            </div>\n            <div class=\"card-footer\">\n              <div class=\"price\">\n                <h4>$459/night</h4>\n              </div>\n              <div class=\"stats\">\n                <p class=\"card-category\"><i class=\"material-icons\">place</i> Milan, Italy</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    // constructor(private navbarTitleService: NavbarTitleService) { }
    DashboardComponent.prototype.ngOnInit = function () {
        this.tableData = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['US', 'USA', '2.920	', '53.23%'],
                ['DE', 'Germany', '1.300', '20.43%'],
                ['AU', 'Australia', '760', '10.35%'],
                ['GB', 'United Kingdom	', '690', '7.87%'],
                ['RO', 'Romania', '600', '5.94%'],
                ['BR', 'Brasil', '550', '4.34%']
            ]
        };
        /* ----------==========     Daily Sales Chart initialization    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            // look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataWebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsWebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var websiteViewsChart = new chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);
        this.startAnimationForBarChart(websiteViewsChart);
        $('#worldMap').vectorMap({
            map: 'world_en',
            backgroundColor: 'transparent',
            borderColor: '#818181',
            borderOpacity: 0.25,
            borderWidth: 1,
            color: '#b3b3b3',
            enableZoom: true,
            hoverColor: '#eee',
            hoverOpacity: null,
            normalizeFunction: 'linear',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#c9dfaf',
            selectedRegions: null,
            showTooltip: true,
            onRegionClick: function (element, code, region) {
                var message = 'You clicked "'
                    + region
                    + '" which has the code: '
                    + code.toUpperCase();
                alert(message);
            }
        });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var breakCards = true;
        if (breakCards === true) {
            // We break the cards headers if there is too much stress on them :-)
            $('[data-header-animation="true"]').each(function () {
                var $fix_button = $(this);
                var $card = $(this).parent('.card');
                $card.find('.fix-broken-card').click(function () {
                    var $header = $(this).parent().parent().siblings('.card-header, .card-image');
                    $header.removeClass('hinge').addClass('fadeInDown');
                    $card.attr('data-count', 0);
                    setTimeout(function () {
                        $header.removeClass('fadeInDown animate');
                    }, 480);
                });
                $card.mouseenter(function () {
                    var $this = $(this);
                    var hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                    $this.attr('data-count', hover_count);
                    if (hover_count >= 20) {
                        $(this).children('.card-header, .card-image').addClass('hinge animated');
                    }
                });
            });
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../md/md.module */ "./src/app/md/md.module.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _md_md_module__WEBPACK_IMPORTED_MODULE_4__["MdModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    {
        path: '',
        children: [{
                path: 'dashboard',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map