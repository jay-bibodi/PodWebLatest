(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./src/app/maps/fullscreenmap/fullscreenmap.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/maps/fullscreenmap/fullscreenmap.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "./src/app/maps/fullscreenmap/fullscreenmap.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/maps/fullscreenmap/fullscreenmap.component.ts ***!
  \***************************************************************/
/*! exports provided: FullScreenMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenMapsComponent", function() { return FullScreenMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullScreenMapsComponent = /** @class */ (function () {
    function FullScreenMapsComponent() {
    }
    FullScreenMapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [
                { 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }] },
                { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }] },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }] },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }
            ]
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Hello World!'
        });
        // To add the marker to the map, call setMap();
        Marker.setMap(map);
    };
    FullScreenMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fullscreen-map-cmp',
            template: __webpack_require__(/*! ./fullscreenmap.component.html */ "./src/app/maps/fullscreenmap/fullscreenmap.component.html")
        })
    ], FullScreenMapsComponent);
    return FullScreenMapsComponent;
}());



/***/ }),

/***/ "./src/app/maps/googlemaps/googlemaps.component.html":
/*!***********************************************************!*\
  !*** ./src/app/maps/googlemaps/googlemaps.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-text card-header-rose\">\n                    <div class=\"card-text\">\n                      <h4 class=\"card-title\">Satellite Map</h4>\n                    </div>\n                  </div>\n                    <div class=\"card-content\">\n                        <div id=\"satelliteMap\" class=\"map map-big\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-text card-header-rose\">\n                    <div class=\"card-text\">\n                      <h4 class=\"card-title\">Regular Map</h4>\n                    </div>\n                  </div>\n                    <div class=\"card-content\">\n\n                        <div id=\"regularMap\" class=\"map\"></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-text card-header-rose\">\n                    <div class=\"card-text\">\n                      <h4 class=\"card-title\">Custom Skin & Settings Map</h4>\n                    </div>\n                  </div>\n                    <div class=\"card-content\">\n                        <div id=\"customSkinMap\" class=\"map\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/maps/googlemaps/googlemaps.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/googlemaps/googlemaps.component.ts ***!
  \*********************************************************/
/*! exports provided: GoogleMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsComponent", function() { return GoogleMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GoogleMapsComponent = /** @class */ (function () {
    function GoogleMapsComponent() {
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 8,
            center: myLatlng,
            scrollwheel: false,
        };
        var map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Regular Map!'
        });
        marker.setMap(map);
        // Custom Skin & Settings Map
        myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions1 = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            disableDefaultUI: true,
            zoomControl: true,
            styles: [{ 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }] },
                { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }] },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }] },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] }, { 'featureType': 'poi.sports_complex',
                    'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] }, { 'featureType': 'poi.business',
                    'stylers': [{ 'visibility': 'simplified' }] }]
        };
        map = new google.maps.Map(document.getElementById('customSkinMap'), mapOptions1);
        marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Custom Skin & Settings Map!'
        });
        marker.setMap(map);
        // Satellite Map
        myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions2 = {
            zoom: 3,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        map = new google.maps.Map(document.getElementById('satelliteMap'), mapOptions2);
        marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Satellite Map!'
        });
        marker.setMap(map);
    };
    GoogleMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vector-maps-cmp',
            template: __webpack_require__(/*! ./googlemaps.component.html */ "./src/app/maps/googlemaps/googlemaps.component.html")
        })
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps.routing */ "./src/app/maps/maps.routing.ts");
/* harmony import */ var _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fullscreenmap/fullscreenmap.component */ "./src/app/maps/fullscreenmap/fullscreenmap.component.ts");
/* harmony import */ var _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./googlemaps/googlemaps.component */ "./src/app/maps/googlemaps/googlemaps.component.ts");
/* harmony import */ var _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vectormaps/vectormaps.component */ "./src/app/maps/vectormaps/vectormaps.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_maps_routing__WEBPACK_IMPORTED_MODULE_4__["MapsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_5__["FullScreenMapsComponent"],
                _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsComponent"],
                _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_7__["VectorMapsComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/maps/maps.routing.ts":
/*!**************************************!*\
  !*** ./src/app/maps/maps.routing.ts ***!
  \**************************************/
/*! exports provided: MapsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutes", function() { return MapsRoutes; });
/* harmony import */ var _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullscreenmap/fullscreenmap.component */ "./src/app/maps/fullscreenmap/fullscreenmap.component.ts");
/* harmony import */ var _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlemaps/googlemaps.component */ "./src/app/maps/googlemaps/googlemaps.component.ts");
/* harmony import */ var _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vectormaps/vectormaps.component */ "./src/app/maps/vectormaps/vectormaps.component.ts");



var MapsRoutes = [
    {
        path: '',
        children: [{
                path: 'fullscreen',
                component: _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_0__["FullScreenMapsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'google',
                component: _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'vector',
                component: _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_2__["VectorMapsComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/maps/vectormaps/vectormaps.component.html":
/*!***********************************************************!*\
  !*** ./src/app/maps/vectormaps/vectormaps.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"header text-center\">\n            <h3 class=\"title\">World Map</h3>\n            <p class=\"category\">Looks great on any resolution. Made by our friends from\n                <a target=\"_blank\" href=\"http://jvectormap.com/\">jVector Map</a>.</p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-content\">\n                        <div id=\"worldMap\" class=\"map map-big\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/maps/vectormaps/vectormaps.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/vectormaps/vectormaps.component.ts ***!
  \*********************************************************/
/*! exports provided: VectorMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorMapsComponent", function() { return VectorMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VectorMapsComponent = /** @class */ (function () {
    function VectorMapsComponent() {
    }
    VectorMapsComponent.prototype.ngOnInit = function () {
        $('#worldMap').vectorMap({
            map: 'world_en',
            backgroundColor: 'transparent',
            borderColor: '#818181',
            borderOpacity: 0.25,
            borderWidth: 1,
            color: '#ffffff',
            enableZoom: true,
            hoverColor: '#b3b3b3',
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
    VectorMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vector-maps-cmp',
            template: __webpack_require__(/*! ./vectormaps.component.html */ "./src/app/maps/vectormaps/vectormaps.component.html")
        })
    ], VectorMapsComponent);
    return VectorMapsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=maps-maps-module.js.map