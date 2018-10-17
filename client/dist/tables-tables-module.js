(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./src/app/tables/datatable.net/datatable.component.html":
/*!***************************************************************!*\
  !*** ./src/app/tables/datatable.net/datatable.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-primary card-header-icon\">\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <h4 class=\"card-title\">DataTables.net</h4>\n                  </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables\">\n                          <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                      <th>{{ dataTable.headerRow[0] }}</th>\n                                      <th>{{ dataTable.headerRow[1] }}</th>\n                                      <th>{{ dataTable.headerRow[2] }}</th>\n                                      <th>{{ dataTable.headerRow[3] }}</th>\n                                      <th>{{ dataTable.headerRow[4] }}</th>\n                                      <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[5] }}</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                      <th>{{ dataTable.footerRow[0] }}</th>\n                                      <th>{{ dataTable.footerRow[1] }}</th>\n                                      <th>{{ dataTable.footerRow[2] }}</th>\n                                      <th>{{ dataTable.footerRow[3] }}</th>\n                                      <th>{{ dataTable.footerRow[4] }}</th>\n                                      <th class=\"text-right\">{{ dataTable.footerRow[5] }}</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td>{{row[4]}}</td>\n                                        <td class=\"text-right\">\n                                          <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\n                                          <a href=\"#\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\n                                          <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/datatable.net/datatable.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/datatable.net/datatable.component.ts ***!
  \*************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataTable = {
            headerRow: ['Name', 'Position', 'Office', 'Age', 'Date', 'Actions'],
            footerRow: ['Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions'],
            dataRows: [
                ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Bradley Greer', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Brenden Wagner', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Brielle Williamson', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Caesar Vance', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Cedric Kelly', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Charde Marshall', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Colleen Hurst', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Dai Rios', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Doris Wilder', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Fiona Green', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Garrett Winters', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Gavin Cortez', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Gavin Joyce', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Gloria Little', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Haley Kennedy', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Herrod Chandler', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Hope Fuentes', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Howard Hatfield', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Jena Gaines', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Jenette Caldwell', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Jennifer Chang', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Martena Mccray', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Michael Silva', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Michelle House', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Paul Byrd', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Prescott Bartlett', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Quinn Flynn', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Rhona Davidson', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['Shou Itou', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['Sonya Frost', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['Suki Burks', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Tatyana Fitzpatrick', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
                ['Tiger Nixon', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Timothy Mooney', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Unity Butler', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Vivian Harrell', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['Yuri Berry', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round']
            ]
        };
    };
    DataTableComponent.prototype.ngAfterViewInit = function () {
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });
        var table = $('#datatables').DataTable();
        // Edit record
        table.on('click', '.edit', function (e) {
            var $tr = $(this).closest('tr');
            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
            e.preventDefault();
        });
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        //Like record
        table.on('click', '.like', function (e) {
            alert('You clicked on Like button');
            e.preventDefault();
        });
        $('.card .material-datatables label').addClass('form-group');
    };
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table-cmp',
            template: __webpack_require__(/*! ./datatable.component.html */ "./src/app/tables/datatable.net/datatable.component.html")
        })
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/extendedtable/extendedtable.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tables/extendedtable/extendedtable.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-rose card-header-icon\">\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <h4 class=\"card-title\">Simple Table</h4>\n                  </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                    <thead>\n                                        <tr>\n                                          <th class=\"text-center\">{{ tableData1.headerRow[0] }}</th>\n                                          <th>{{ tableData1.headerRow[1] }}</th>\n                                          <th>{{ tableData1.headerRow[2] }}</th>\n                                          <th>{{ tableData1.headerRow[3] }}</th>\n                                          <th class=\"text-right\">{{ tableData1.headerRow[4] }}</th>\n                                          <th class=\"text-right\">{{ tableData1.headerRow[5] }}</th>\n                                        </tr>\n                                    </thead>\n                                  <tbody>\n                                      <tr *ngFor=\"let row of tableData1.dataRows\">\n                                          <td class=\"text-center\">{{row[0]}}</td>\n                                          <td>{{row[1]}}</td>\n                                          <td>{{row[2]}}</td>\n                                          <td>{{row[3]}}</td>\n                                          <td class=\"text-right\">&euro; {{row[4]}}</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" class=\"btn btn-info {{row[5]}}\">\n                                                  <i class=\"material-icons\">person</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" class=\"btn btn-success {{row[5]}}\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" class=\"btn btn-danger {{row[5]}}\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-rose card-header-icon\">\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <h4 class=\"card-title\">Striped Table</h4>\n                  </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-striped\">\n                                    <thead>\n                                        <tr>\n                                          <th class=\"text-center\">{{ tableData2.headerRow[0] }}</th>\n                                          <th>{{ tableData2.headerRow[1] }}</th>\n                                          <th>{{ tableData2.headerRow[2] }}</th>\n                                          <th>{{ tableData2.headerRow[3] }}</th>\n                                          <th>{{ tableData2.headerRow[4] }}</th>\n                                          <th class=\"text-right\">{{ tableData2.headerRow[5] }}</th>\n                                          <th class=\"text-right\">{{ tableData2.headerRow[6] }}</th>\n                                        </tr>\n                                    </thead>\n                                  <tbody>\n                                    <tr *ngFor=\"let row of tableData2.dataRows\">\n                                      <td class=\"text-center\">{{row.id}}</td>\n                                      <td>\n                                        <div [ngSwitch]=\"row.ischecked\">\n                                            <div *ngSwitchCase=\"true\">\n                                              <div class=\"form-check\">\n                                                <label class=\"form-check-label\">\n                                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                  <span class=\"form-check-sign\">\n                                                    <span class=\"check\"></span>\n                                                  </span>\n                                                </label>\n                                              </div>\n                                            </div>\n                                            <div *ngSwitchDefault>\n                                              <div class=\"form-check\">\n                                                <label class=\"form-check-label\">\n                                                  <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                  <span class=\"form-check-sign\">\n                                                    <span class=\"check\"></span>\n                                                  </span>\n                                                </label>\n                                              </div>\n                                            </div>\n                                        </div>\n                                      </td>\n                                      <td>{{row.product_name}}</td>\n                                      <td>{{row.type}}</td>\n                                      <td>{{row.quantity}}</td>\n                                      <td class=\"text-right\">€{{ row.price }}</td>\n                                      <td class=\"text-right\">\n                                          &euro; {{row.amount}}\n                                      </td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan=\"5\"></td>\n                                        <td class=\"td-total\">\n                                            Total\n                                        </td>\n                                        <td class=\"td-price\">\n                                            <small>&euro;</small>12,999\n                                        </td>\n                                    </tr>\n                                  </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-rose card-header-icon\">\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <h4 class=\"card-title\">Shopping Cart Table</h4>\n                  </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-shopping\">\n                                    <thead>\n                                        <tr>\n                                          <th class=\"text-center\">{{ tableData3.headerRow[0] }}</th>\n                                          <th>{{ tableData3.headerRow[1] }}</th>\n                                          <th class=\"th-description\">{{ tableData3.headerRow[2] }}</th>\n                                          <th class=\"th-description\">{{ tableData3.headerRow[3] }}</th>\n                                          <th class=\"text-right\">{{ tableData3.headerRow[4] }}</th>\n                                          <th class=\"text-right\">{{ tableData3.headerRow[5] }}</th>\n                                          <th class=\"text-right\">{{ tableData3.headerRow[6] }}</th>\n                                          <th></th>\n                                        </tr>\n                                    </thead>\n                                  <tbody>\n                                      <tr *ngFor=\"let row of tableData3.dataRows\">\n                                          <td>\n                                              <div class=\"img-container\">\n                                                  <img src=\"./assets/img/{{row[0]}}.jpg\" alt=\"...\">\n                                              </div>\n                                          </td>\n                                          <td class=\"td-name\">\n                                              <a href=\"{{row[1]}}\">{{row[2]}}</a>\n                                              <br />\n                                              <small>{{row[3]}}</small>\n                                          </td>\n                                          <td>{{row[4]}}</td>\n                                          <td>\n                                              {{row[5]}}\n                                          </td>\n                                          <td class=\"td-number text-right\"><small>&euro;</small> {{row[6]}}</td>\n                                          <td class=\"td-number\">\n                                              {{row[7]}}\n                                              <div class=\"btn-group btn-group-sm\">\n                                                  <button mat-raised-button class=\"btn btn-round btn-info btn-xs\"> <i class=\"material-icons\">remove</i> </button>\n                                                  <button mat-raised-button class=\"btn btn-round btn-info btn-xs\"> <i class=\"material-icons\">add</i> </button>\n                                              </div>\n                                          </td>\n                                          <td class=\"td-number\">\n                                              <small>&euro;</small>{{row[8]}}\n                                          </td>\n                                          <td class=\"td-actions\">\n                                              <button mat-button type=\"button\"  matTooltip=\"Remove item\" [matTooltipPosition]=\"'left'\" class=\"btn btn-link\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td colspan=\"5\"></td>\n                                          <td class=\"td-total\">\n                                              Total\n                                          </td>\n                                          <td colspan=\"1\" class=\"td-price\">\n                                              <small>&euro;</small>{{getTotal()}}\n                                          </td>\n                                          <td></td>\n                                      </tr>\n                                      <tr>\n                                          <td colspan=\"6\"></td>\n                                          <td colspan=\"2\" class=\"text-right\">\n                                              <button mat-raised-button type=\"button\" class=\"btn btn-info btn-round\">Complete Purchase <i class=\"material-icons\">keyboard_arrow_right</i></button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/extendedtable/extendedtable.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/extendedtable/extendedtable.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExtendedTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedTableComponent", function() { return ExtendedTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExtendedTableComponent = /** @class */ (function () {
    function ExtendedTableComponent() {
    }
    ExtendedTableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225', ''],
                ['2', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-link'],
                ['4', 'Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
            ]
        };
        this.tableData2 = {
            headerRow: ['#', '', 'Product Name', 'Type', 'Qty', 'Price', 'Amount'],
            dataRows: [
                { id: 1, ischecked: true, product_name: 'Moleskine Agenda', type: 'Office', quantity: 25, price: 49, amount: '1,225' },
                { id: 2, ischecked: true, product_name: 'Stabilo Pen', type: 'Office', quantity: 30, price: 10.99, amount: '109' },
                { id: 3, ischecked: true, product_name: 'A4 Paper Pack', type: 'Office', quantity: 50, price: 49, amount: '1,225' },
                { id: 4, ischecked: false, product_name: 'Apple iPad', type: 'Meeting', quantity: 10, price: 499.00, amount: '4,990' },
                { id: 5, ischecked: false, product_name: 'Apple iPhone', type: 'Communication', quantity: 10,
                    price: 599.00, amount: '5,999' }
            ]
        };
        this.tableData3 = {
            headerRow: ['', 'PRODUCT', 'COLOR', 'SIZE', 'PRICE', 'QTY', 'AMOUNT'],
            dataRows: [
                ['product1', '#jacket', 'Spring Jacket', 'by Dolce&Gabbana', 'Red', 'M', '549', '1', '549'],
                ['product2', '#pants', 'Short Pants', 'by Pucci', 'Purple', 'M', '499', '2', '998'],
                ['product3', '#nothing', 'Pencil Skirt', 'by Valentino', 'White', 'XL', '799', '1', '799']
            ]
        };
    };
    ExtendedTableComponent.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.tableData3.dataRows.length; i++) {
            var integer = parseInt(this.tableData3.dataRows[i][8], 10);
            total += integer;
        }
        return total;
    };
    ;
    ExtendedTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extended-table-cmp',
            template: __webpack_require__(/*! ./extendedtable.component.html */ "./src/app/tables/extendedtable/extendedtable.component.html")
        })
    ], ExtendedTableComponent);
    return ExtendedTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/regulartable/regulartable.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/tables/regulartable/regulartable.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                  <div class=\"card-header card-header-icon card-header-rose\">\n                    <div class=\"card-icon\">\n                      <i class=\"material-icons\">assignment</i>\n                    </div>\n                    <h4 class=\"card-title \">Simple Table</h4>\n                  </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                          <table class=\"table\">\n                                  <thead class=\"text-primary\">\n                                      <tr>\n                                        <th *ngFor=\"let cell of tableData1.headerRow\">{{ cell }}</th>\n                                      </tr>\n                                  </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of tableData1.dataRows\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td class=\"text-primary\">{{row[3]}}</td>\n\n                                    </tr>\n                                </tbody>\n                          </table>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"card card-plain\">\n                      <div class=\"card-header card-header-icon card-header-rose\">\n                        <div class=\"card-icon\">\n                          <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title mt-0\"> Table on Plain Background</h4>\n                        <p class=\"card-category\"> Here is a subtitle for this table</p>\n                      </div>\n                        <div class=\"card-body\">\n                          <div class=\"table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                      <th *ngFor=\"let cell of tableData2.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                              <tbody>\n                                      <tr *ngFor=\"let row of tableData2.dataRows\">\n                                          <td *ngFor=\"let cell of row\">{{cell}}</td>\n                                      </tr>\n                              </tbody>\n                            </table>\n                          </div>\n\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"card\">\n                      <div class=\"card-header card-header-icon card-header-rose\">\n                        <div class=\"card-icon\">\n                          <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title \"> Regular Table with Colors</h4>\n                      </div>\n                        <div class=\"card-body table-full-width\">\n                            <div class=\"table-responsive\">\n                                <table class=\"table table-hover\">\n                                    <thead>\n                                        <tr>\n                                          <th *ngFor=\"let cell of tableData3.headerRow\">{{ cell }}</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                          <tr class=\"table-success\">\n                                              <td *ngFor=\"let cell of tableData3.dataRows[0]\">{{cell}}</td>\n                                          </tr>\n                                          <tr>\n                                              <td *ngFor=\"let cell of tableData3.dataRows[1]\">{{cell}}</td>\n                                          </tr>\n                                          <tr class=\"table-info\">\n                                              <td *ngFor=\"let cell of tableData3.dataRows[2]\">{{cell}}</td>\n                                          </tr>\n                                          <tr>\n                                              <td *ngFor=\"let cell of tableData3.dataRows[3]\">{{cell}}</td>\n                                          </tr>\n                                          <tr class=\"table-danger\">\n                                              <td *ngFor=\"let cell of tableData3.dataRows[4]\">{{cell}}</td>\n                                          </tr>\n                                          <tr>\n                                              <td *ngFor=\"let cell of tableData3.dataRows[5]\">{{cell}}</td>\n                                          </tr>\n                                          <tr class=\"table-warning\">\n                                              <td *ngFor=\"let cell of tableData3.dataRows[6]\">{{cell}}</td>\n                                          </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/regulartable/regulartable.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tables/regulartable/regulartable.component.ts ***!
  \***************************************************************/
/*! exports provided: RegularTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularTableComponent", function() { return RegularTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegularTableComponent = /** @class */ (function () {
    function RegularTableComponent() {
    }
    RegularTableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
        this.tableData3 = {
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice (Success)', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez (Info)', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene (Danger)', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
                ['7', 'Mike Chaney (Warning)', '$38,735', 'Romania', 'Bucharest']
            ]
        };
    };
    RegularTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regular-table-cmp',
            template: __webpack_require__(/*! ./regulartable.component.html */ "./src/app/tables/regulartable/regulartable.component.html")
        })
    ], RegularTableComponent);
    return RegularTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _tables_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tables.routing */ "./src/app/tables/tables.routing.ts");
/* harmony import */ var _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extendedtable/extendedtable.component */ "./src/app/tables/extendedtable/extendedtable.component.ts");
/* harmony import */ var _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./regulartable/regulartable.component */ "./src/app/tables/regulartable/regulartable.component.ts");
/* harmony import */ var _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datatable.net/datatable.component */ "./src/app/tables/datatable.net/datatable.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_5__["TablesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [
                _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_6__["ExtendedTableComponent"],
                _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"],
                _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_7__["RegularTableComponent"]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/tables/tables.routing.ts":
/*!******************************************!*\
  !*** ./src/app/tables/tables.routing.ts ***!
  \******************************************/
/*! exports provided: TablesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutes", function() { return TablesRoutes; });
/* harmony import */ var _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedtable/extendedtable.component */ "./src/app/tables/extendedtable/extendedtable.component.ts");
/* harmony import */ var _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regulartable/regulartable.component */ "./src/app/tables/regulartable/regulartable.component.ts");
/* harmony import */ var _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatable.net/datatable.component */ "./src/app/tables/datatable.net/datatable.component.ts");



var TablesRoutes = [
    {
        path: '',
        children: [{
                path: 'regular',
                component: _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_1__["RegularTableComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'extended',
                component: _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_0__["ExtendedTableComponent"]
            }]
    }, {
        path: '',
        children: [{
                path: 'datatables.net',
                component: _datatable_net_datatable_component__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map