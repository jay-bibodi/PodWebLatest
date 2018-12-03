(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./node_modules/angular2-uuid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/angular2-uuid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-drop.directive.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-item.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-item.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-like-object.class.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        this.rawFile = fileOrInput;
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-select.directive.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_uploader_class_1 = __webpack_require__(/*! ./file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js");
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.onFileSelected = new core_1.EventEmitter();
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return {};
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return true;//!!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        this.uploader.addToQueue(files, options, filters);
        this.onFileSelected.emit(files);
        if (this.isEmptyAfterSelection()) {
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileSelectDirective.prototype, "onFileSelected", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-type.class.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-type.class.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'zip': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-upload.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_drop_directive_1 = __webpack_require__(/*! ./file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js");
var file_select_directive_1 = __webpack_require__(/*! ./file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js");
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng2-file-upload/file-upload/file-uploader.class.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var file_like_object_class_1 = __webpack_require__(/*! ./file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js");
var file_item_class_1 = __webpack_require__(/*! ./file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js");
var file_type_class_1 = __webpack_require__(/*! ./file-type.class */ "./node_modules/ng2-file-upload/file-upload/file-type.class.js");
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false,
            formatDataFunction: function (item) { return item._file; },
            formatDataFunctionIsAsync: false
        };
        this.setOptions(options);
        this.response = new core_1.EventEmitter();
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = this.options.authToken;
        this.authTokenHeader = this.options.authTokenHeader || 'Authorization';
        this.autoUpload = this.options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var that = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            var appendFile = function () { return sendable.append(item.alias, item._file, item.file.name); };
            if (!this.options.parametersBeforeFiles) {
                appendFile();
            }
            // For AWS, Additional Parameters must come BEFORE Files
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    var paramVal = _this.options.additionalParameter[key];
                    // Allow an additional parameter to include the filename
                    if (typeof paramVal === 'string' && paramVal.indexOf('{{file_name}}') >= 0) {
                        paramVal = paramVal.replace('{{file_name}}', item.file.name);
                    }
                    sendable.append(key, paramVal);
                });
            }
            if (this.options.parametersBeforeFiles) {
                appendFile();
            }
        }
        else {
            sendable = this.options.formatDataFunction(item);
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                that.response.emit(xhr.responseText);
            }
        };
        if (this.options.formatDataFunctionIsAsync) {
            sendable.then(function (result) { return xhr.send(JSON.stringify(result)); });
        }
        else {
            xhr.send(sendable);
        }
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
    };
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    FileUploader.prototype._transformResponse = function (response, headers) {
        return response;
    };
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ "./node_modules/ng2-file-upload/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng2-file-upload/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./file-upload/file-select.directive */ "./node_modules/ng2-file-upload/file-upload/file-select.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-drop.directive */ "./node_modules/ng2-file-upload/file-upload/file-drop.directive.js"));
__export(__webpack_require__(/*! ./file-upload/file-uploader.class */ "./node_modules/ng2-file-upload/file-upload/file-uploader.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-item.class */ "./node_modules/ng2-file-upload/file-upload/file-item.class.js"));
__export(__webpack_require__(/*! ./file-upload/file-like-object.class */ "./node_modules/ng2-file-upload/file-upload/file-like-object.class.js"));
var file_upload_module_1 = __webpack_require__(/*! ./file-upload/file-upload.module */ "./node_modules/ng2-file-upload/file-upload/file-upload.module.js");
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ "./src/app/forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"row\">\r\n        <button mat-raised-button type=\"submit\" (click)=\"goBack()\" style=\"margin-left: 20px;\" class=\"btn btn-sm btn-rose pull-left\"><i\r\n                aria-hidden=\"true\" class=\"fa fa-arrow-circle-left\" style=\"padding-bottom: 3px;\"></i>&nbsp;&nbsp;Back to\r\n            list\r\n        </button>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon card-header-rose\">\r\n                            <div class=\"card-icon\">\r\n                                <i class=\"material-icons\">info</i>\r\n                            </div>\r\n                            <h4 class=\"card-title\">Podcast Detail\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Title:</b>\r\n                                            {{titleValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Uploaded By:</b>\r\n                                            {{uploadedByValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Tags:</b>\r\n                                            {{tagsValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Artist Name:</b>\r\n                                            {{artistNameValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Created On:</b>\r\n                                            {{createdDateTimeValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Amount:</b>\r\n                                            {{amountValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <br />\r\n                                    <audio controls=\"controls\" src=\"https://ipfs.io/ipfs/{{podcastId}}\" style=\"width:100%\">\r\n                                        Your browser does not support the <a href=\"http://caniuse.com/#search=audio\"><code>audio</code></a>\r\n                                        element.\r\n                                    </audio>\r\n                                    <br />\r\n                                    <br />\r\n                                    <br />                                    \r\n                                        <b>Likes:&nbsp;&nbsp;&nbsp;</b>{{likesValue}}\r\n                                        <button mat-raised-button type=\"submit\" (click)=\"callLikeFunc()\" class=\"btn btn-rose pull-right\">{{likeButtonValue}}</button>\r\n                                        <button mat-raised-button type=\"submit\" *ngIf=\"isPaidPodcast && !isPurchasedPodcast\" (click)=\"callPurchasePodcast()\" class=\"btn btn-rose pull-right\">Purchase</button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"large\" color = \"#fff\" type = \"square-jelly-box\" ></ngx-spinner>"

/***/ }),

/***/ "./src/app/forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DetailForLatestAndPurchasedPodcastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailForLatestAndPurchasedPodcastComponent", function() { return DetailForLatestAndPurchasedPodcastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailForLatestAndPurchasedPodcastComponent = /** @class */ (function () {
    function DetailForLatestAndPurchasedPodcastComponent(http, router, route, spinner) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.isPaidPodcast = false;
        this.likesValue = 0;
        this.likeButtonValue = "Like";
        this.isPurchasedPodcast = true;
    }
    DetailForLatestAndPurchasedPodcastComponent.prototype.goBack = function () {
        this.router.navigate(["tables/latestPodcast"]);
    };
    DetailForLatestAndPurchasedPodcastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            console.log(params.id);
            console.log(_this.id);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append("token", localStorage.getItem("token"));
            headers.append("emailAddress", localStorage.getItem("emailAddress"));
            _this.http.post(_global__WEBPACK_IMPORTED_MODULE_5__["Global"].API_ENDPOINT + '/getPodcastForCurrUser', { "id": _this.id }, { headers: headers }).subscribe(function (data) {
                console.log(data);
                var body = JSON.parse(data.text());
                _this.isPaidPodcast = (body.isPaidPodcast === "false" ? false : true);
                _this.isPurchasedPodcast = body.isPurchasedPodcast;
                _this.uploadedByValue = body.uploadedByValue;
                _this.titleValue = body.titleValue;
                _this.tagsValue = body.tagsValue;
                _this.artistNameValue = body.artistNameValue;
                _this.createdDateTimeValue = body.createdDateTimeValue;
                _this.likesValue = body.likesValue;
                _this.likeButtonValue = (body.isLikedPodcast === "true") ? "Liked" : "Like";
                _this.amountValue = (body.amountValue === "undefined" ? "0" : body.amountValue);
                if (_this.isPurchasedPodcast) {
                    _this.amountValue = "0";
                }
                var path = body.path;
                if (!_this.isPaidPodcast || (_this.isPaidPodcast && _this.isPurchasedPodcast)) {
                    _this.podcastId = path;
                }
                else {
                    _this.podcastId = "";
                }
                _this.spinner.hide();
            }, function (err) {
                _this.spinner.hide();
                var body = JSON.parse(err.text());
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: body.status,
                    text: "",
                    timer: 2000,
                    showConfirmButton: false
                }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
            });
        });
    };
    DetailForLatestAndPurchasedPodcastComponent.prototype.callLikeFunc = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append("token", localStorage.getItem("token"));
        headers.append("emailAddress", localStorage.getItem("emailAddress"));
        if (this.likeButtonValue === "Like") {
            this.likeButtonValue = "Liked";
            this.likesValue = this.likesValue + 1;
            this.http.post(_global__WEBPACK_IMPORTED_MODULE_5__["Global"].API_ENDPOINT + '/likePodcast', { "id": this.id }, { headers: headers }).subscribe(function (data) {
            });
        }
    };
    DetailForLatestAndPurchasedPodcastComponent.prototype.callPurchasePodcast = function () {
        var _this = this;
        if (this.isPaidPodcast && !this.isPurchasedPodcast) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Paid Podcast',
                text: "Do you want to purchase " + this.titleValue + " podcast by " + this.artistNameValue + " for " + this.amountValue + " pods token?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then(function (result) {
                if (result.value === true) {
                    _this.spinner.show();
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                    headers.append("token", localStorage.getItem("token"));
                    headers.append("emailAddress", localStorage.getItem("emailAddress"));
                    _this.http.post(_global__WEBPACK_IMPORTED_MODULE_5__["Global"].API_ENDPOINT + '/transferPodsToPurchase', { "id": _this.id, "amount": _this.amountValue }, { headers: headers }).subscribe(function (data) {
                        var body = JSON.parse(data.text());
                        _this.isPurchasedPodcast = true;
                        _this.podcastId = body.path;
                        _this.spinner.hide();
                    }, function (err) {
                        _this.spinner.hide();
                        var body = JSON.parse(err.text());
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                            title: body.status,
                            text: "",
                            timer: 2000,
                            showConfirmButton: false
                        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                    });
                }
            });
        }
    };
    DetailForLatestAndPurchasedPodcastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detailForLatestAndPurchasedPodcast-cmp',
            template: __webpack_require__(/*! ./detailForLatestAndPurchasedPodcast.component.html */ "./src/app/forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], DetailForLatestAndPurchasedPodcastComponent);
    return DetailForLatestAndPurchasedPodcastComponent;
}());



/***/ }),

/***/ "./src/app/forms/podcastDetailforms/podcastDetailforms.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/forms/podcastDetailforms/podcastDetailforms.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"row\">\r\n        <button mat-raised-button type=\"submit\" (click)=\"goBack()\" style=\"margin-left: 20px;\" class=\"btn btn-sm btn-rose pull-left\"><i\r\n                aria-hidden=\"true\" class=\"fa fa-arrow-circle-left\" style=\"padding-bottom: 3px;\"></i>&nbsp;&nbsp;Back to list\r\n        </button>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon card-header-rose\">\r\n                            <div class=\"card-icon\">\r\n                                <i class=\"material-icons\">cloud_upload</i>\r\n                            </div>\r\n                            <h4 class=\"card-title\">Upload Podcast\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <form #podcastDetailForm=\"ngForm\" (ngSubmit)=\"editPodcastDetail(podcastDetailForm.value)\"\r\n                                (change)=\"mark_changed()\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"titleName\" [(ngModel)]=\"titleName\"\r\n                                        placeholder=\"Enter Title\">\r\n                                    <div *ngIf=\"!isTitlePresent\" class=\"help-block\" style=\"text-align: right;color:red\">Title\r\n                                        for the podcast must be present</div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\" class=\"form-control\" name=\"artistName\" [(ngModel)]=\"artistName\"\r\n                                                    placeholder=\"Enter Artist Name\" style=\"margin-top:25px\">\r\n                                            </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <tag-input [(ngModel)]=\"tags\" name=\"tags\" placeholder=\"+ Tag\" secondaryPlaceholder=\"Add Tags\" aria-placeholder=\"tags\"></tag-input>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\" style=\"margin-top:3%\">\r\n                                            <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"selectedType\" name=\"selectedType\" [disabled]=\"amountDisable\">\r\n                                                <mat-radio-button class=\"example-radio-button\" *ngFor=\"let type of podcastTypes\"\r\n                                                    [value]=\"type\" (change)=\"radioChange($event)\">\r\n                                                    {{type}} &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                                </mat-radio-button>\r\n                                            </mat-radio-group>\r\n                                            <div *ngIf=\"!isRadioButtonSelected\" class=\"help-block\" style=\"text-align: left;color:red\">Please\r\n                                                select atleast one podcast type</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\" *ngIf=\"isPaidPodcast\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" [disabled]=\"amountDisable\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"amount\"\r\n                                                placeholder=\"Number of Pods Token Required to purchase podcast\">\r\n                                            <div *ngIf=\"!isAmountPresent && isPaidPodcast\" class=\"help-block\" style=\"text-align: right;color:red\">{{errorTextForAmount}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"!showPlayButton\">\r\n                                    <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\"\r\n                                        [uploader]=\"uploader\" style=\"border: dotted 3px lightgray;min-height: 20px;padding: 19px;margin-bottom: 20px;background-color: #f5f5f5;border-radius:4px;box-shadow:inset 0px 1px 1px rgba(0,0,0,0.05)\">\r\n                                        Drop the File Here\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <label class=\"btn btn-primary\" style=\"background-color:#e91e63 !important;\">\r\n                                            Browse File <input type=\"file\" style=\"display: none;\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" placeholder=\"choose file\"/>\r\n                                        </label>\r\n                                        <div *ngIf=\"!selectFileToUpload\" class=\"help-block\" style=\"text-align: left;color:red\">Please select a file</div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <table class=\"table\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th width=\"50%\">Name</th>\r\n                                                    <th>Size</th>\r\n                                                    <th>Progress</th>\r\n                                                    <th>Status</th>\r\n                                                    <th>Actions</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of uploader.queue\">\r\n                                                    <td>\r\n                                                        <strong>{{ item.file.name }}</strong>\r\n                                                    </td>\r\n                                                    <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\r\n                                                    <td>\r\n                                                        <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                                                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td class=\"text-center\">\r\n                                                        <span *ngIf=\"item.isSuccess\">\r\n                                                            <i class=\"material-icons\">check_circle</i>\r\n                                                        </span>\r\n                                                        <span *ngIf=\"item.isCancel\">\r\n                                                            <i class=\"material-icons\">cancel</i>\r\n                                                        </span>\r\n                                                        <span *ngIf=\"item.isError\">\r\n                                                            <span *ngIf=\"item.isError\">\r\n                                                                <i class=\"material-icons\">error</i>\r\n                                                            </span>\r\n                                                        </span>\r\n                                                    </td>\r\n                                                    <td nowrap>\r\n                                                        <!--<button type=\"button\" class=\"btn btn-success btn-xs\" style=\"background-color:#3581f2 !important;\"\r\n                                                            (click)=\"item.upload();\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                                                            <i class=\"material-icons\">cloud_upload</i> Upload\r\n                                                        </button>-->\r\n                                                        <!--<button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\"\r\n                                                            [disabled]=\"!item.isUploading\">\r\n                                                            <i class=\"material-icons\">cancel</i> Cancel\r\n                                                        </button>-->\r\n                                                        <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"deleteFile(item)\">\r\n                                                            <i class=\"material-icons\">delete_forever</i> Delete\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"showPlayButton\">\r\n                                    <audio controls=\"controls\" src=\"https://ipfs.io/ipfs/{{pathOfPodcastId}}\" style=\"width:100%\">\r\n                                        Your browser does not support the <a href=\"http://caniuse.com/#search=audio\"><code>audio</code></a> element.\r\n                                    </audio>\r\n                                </div>\r\n                                <button mat-raised-button type=\"submit\" (click)=\"loadPublishedPodcast()\" class=\"btn btn-rose pull-right\">Cancel</button>\r\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-rose pull-right\">Save</button>\r\n                                <div class=\"clearfix\"></div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <!--Accordian here-->\r\n                    <div class=\"card\" *ngIf=\"isPaidPodcast && isFromEdit\">\r\n                            <div class=\"card-header card-header-rose card-header-icon\">\r\n                                <div class=\"card-icon\">\r\n                                    <i class=\"material-icons\">shop</i>\r\n                                </div>\r\n                                <h4 class=\"card-title\">Podcast Purchased By:</h4>\r\n                            </div>\r\n                            <br /><br />\r\n                            <div class=\"col-lg-12\" style=\"padding-top:2%;padding-bottom:2%\">\r\n                                <mat-accordion *ngFor=\"let data of podcastPurchasedByDetail\">\r\n                                    <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                {{data.name}}\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <p>Email Id: {{data.emailId}}</p>\r\n                                    </mat-expansion-panel>\r\n                                </mat-accordion>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"large\" color = \"#fff\" type = \"square-jelly-box\" ></ngx-spinner>"

/***/ }),

/***/ "./src/app/forms/podcastDetailforms/podcastDetailforms.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/forms/podcastDetailforms/podcastDetailforms.component.ts ***!
  \**************************************************************************/
/*! exports provided: PodcastDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PodcastDetailComponent", function() { return PodcastDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PodcastDetailComponent = /** @class */ (function () {
    function PodcastDetailComponent(http, router, route, spinner) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.spinner = spinner;
        this.UIChange = false;
        this.tags = [];
        this.isPaidPodcast = false;
        this.isAmountPresent = true;
        this.isTitlePresent = true;
        this.isErrorPresent = false;
        this.isRadioButtonSelected = true;
        this.selectFileToUpload = true;
        this.fileUploaded = false;
        this.amountDisable = false;
        this.podcastTypes = ['Paid Podcast', 'Free Podcast'];
        this.tagsArray = [];
        this.showPlayButton = false;
        this.isFromEdit = false;
        this.pathOfPodcastId = null;
        this.podcastPurchasedByDetail = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: _global__WEBPACK_IMPORTED_MODULE_6__["Global"].API_ENDPOINT + '/uploadfile' });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    PodcastDetailComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PodcastDetailComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    PodcastDetailComponent.prototype.radioChange = function (event) {
        if (event.value === "Paid Podcast") {
            this.selectedType = "Paid Podcast";
            this.isPaidPodcast = true;
        }
        else if (event.value === "Free Podcast") {
            this.isPaidPodcast = false;
            this.selectedType = "Free Podcast";
        }
    };
    PodcastDetailComponent.prototype.goBack = function () {
        var _this = this;
        if (!this.UIChange) {
            this.router.navigate(["tables/userPublishedTable"]);
        }
        else {
            if (this.fileUploaded) {
                this.router.navigate(["tables/userPublishedTable"]);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Are you sure?',
                    text: "Changes will be lost",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Confirm'
                }).then(function (result) {
                    if (result.value) {
                        _this.router.navigate(["tables/userPublishedTable"]);
                    }
                });
            }
        }
    };
    PodcastDetailComponent.prototype.mark_changed = function () {
        this.UIChange = true;
    };
    PodcastDetailComponent.prototype.editPodcastDetail = function (form) {
        var _this = this;
        if (this.isPaidPodcast && !this.amountDisable && (form.amount === undefined || (form.amount).trim().length === 0)) {
            this.isAmountPresent = false;
            this.errorTextForAmount = "Amount of pods are required";
            this.isErrorPresent = true;
        }
        if (parseInt(form.amount) === NaN && !this.amountDisable) {
            this.isAmountPresent = false;
            this.errorTextForAmount = "Amount should be expressed in Integer";
            this.isErrorPresent = true;
        }
        if (form.titleName === undefined || (form.titleName).trim().length === 0) {
            this.isTitlePresent = false;
            this.isErrorPresent = true;
        }
        if (this.selectedType === undefined && !this.amountDisable) {
            this.isErrorPresent = true;
            this.isRadioButtonSelected = false;
        }
        if (!this.isFromEdit && this.uploader.queue.length === 0) {
            this.isErrorPresent = true;
            this.selectFileToUpload = false;
        }
        if (!this.isErrorPresent && !this.isFromEdit) {
            for (var i = 0; i < form.tags.length; i++) {
                this.tagsArray.push(form.tags[i].display);
            }
            this.uploader.onBuildItemForm = function (fileItem, form) {
                form.append('title', _this.titleName);
                form.append('artist', _this.artistName);
                form.append('tags', _this.tagsArray);
                form.append('isPaidPodcast', _this.isPaidPodcast);
                form.append('amount', _this.amount);
                form.append('token', localStorage.getItem("token"));
                form.append('emailAddress', localStorage.getItem("emailAddress"));
            };
            this.uploader.uploadAll();
            this.uploader.onSuccessItem = function (item, response, status, headers) {
                if (response) {
                    _this.fileUploaded = true;
                    _this.UIChange = false;
                    var body = JSON.parse(response);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: body.status,
                        text: "",
                        timer: 2000,
                        showConfirmButton: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                }
            };
            this.uploader.onErrorItem = function (item, response, status, headers) {
                if (response) {
                    var body = JSON.parse(response);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: body.status,
                        text: "",
                        timer: 2000,
                        showConfirmButton: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                }
            };
        }
        else if (!this.isErrorPresent && this.isFromEdit) {
            this.spinner.show();
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append("token", localStorage.getItem("token"));
            headers.append("emailAddress", localStorage.getItem("emailAddress"));
            this.tagsArray = [];
            for (var i = 0; i < form.tags.length; i++) {
                this.tagsArray.push(form.tags[i].display);
            }
            var editedObject = {
                'title': this.titleName,
                'artist': this.artistName,
                'tags': this.tagsArray,
                'isPaidPodcast': this.isPaidPodcast,
                'amount': this.amount,
                'id': this.fileId,
                'parameterId': this.parameterId
            };
            console.log(editedObject);
            this.http.post(_global__WEBPACK_IMPORTED_MODULE_6__["Global"].API_ENDPOINT + '/updatePodcastDetails', editedObject, { headers: headers }).subscribe(function (data) {
                _this.spinner.hide();
                var body = JSON.parse(data.text());
                _this.UIChange = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: body.status,
                    text: "",
                    timer: 2000,
                    showConfirmButton: false
                }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
            }, function (err) {
                _this.spinner.hide();
                var body = JSON.parse(err.text());
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: body.status,
                    text: "",
                    timer: 2000,
                    showConfirmButton: false
                }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
            });
        }
    };
    PodcastDetailComponent.prototype.deleteFile = function (item) {
        console.log(item);
        this.uploader.removeFromQueue(item);
    };
    PodcastDetailComponent.prototype.loadPublishedPodcast = function () {
        this.goBack();
    };
    PodcastDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.route.params.subscribe(function (params) {
            _this.parameterId = params.id;
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append("token", localStorage.getItem("token"));
            headers.append("emailAddress", localStorage.getItem("emailAddress"));
            _this.http.post(_global__WEBPACK_IMPORTED_MODULE_6__["Global"].API_ENDPOINT + '/getPodcastDetailsForView', { "id": params.id }, { headers: headers }).subscribe(function (data) {
                _this.showPlayButton = true;
                _this.isFromEdit = true;
                var jsonData = data.json();
                _this.amountDisable = jsonData.amountDisable;
                if (jsonData.status !== "Adding Podcast") {
                    jsonData = jsonData.data;
                    _this.fileId = jsonData.path;
                    _this.titleName = jsonData.title;
                    _this.artistName = jsonData.artistName;
                    if (jsonData.amount !== "undefined") {
                        _this.selectedType = "Paid Podcast";
                        _this.isPaidPodcast = true;
                        _this.amount = jsonData.amount;
                    }
                    else {
                        _this.selectedType = "Free Podcast";
                    }
                    _this.podcastPurchasedByDetail = jsonData.purchasedUserList;
                    var tagsArr = jsonData.tags.split(",");
                    for (var i = 0; i < tagsArr.length; i++) {
                        _this.tags.push({ "display": tagsArr[i], "value": tagsArr[i] });
                    }
                }
                else {
                    _this.showPlayButton = false;
                    _this.isFromEdit = false;
                }
                _this.pathOfPodcastId = jsonData.path;
                _this.spinner.hide();
            }, function (err) {
                var body = JSON.parse(err.text());
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: body.status,
                    text: "",
                    timer: 2000,
                    showConfirmButton: false
                }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
            });
        });
    };
    PodcastDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-podcastDetailforms-cmp',
            template: __webpack_require__(/*! ./podcastDetailforms.component.html */ "./src/app/forms/podcastDetailforms/podcastDetailforms.component.html"),
            styles: ["md-calendar {\n      width: 300px;\n  }"]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], PodcastDetailComponent);
    return PodcastDetailComponent;
}());



/***/ }),

/***/ "./src/app/tables/latestPodcast/datatable.component.html":
/*!***************************************************************!*\
  !*** ./src/app/tables/latestPodcast/datatable.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title\">Latest Podcast</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                        </div>\n                        <div class=\"material-datatables\">\n                            <table id = \"latestPodcastDataTableId\" class=\"table table-striped table-no-bordered table-hover\"\n                                cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>{{ latestPodcastDataTable.headerRow[0] }}</th>\n                                        <th>{{ latestPodcastDataTable.headerRow[1] }}</th>\n                                        <th>{{ latestPodcastDataTable.headerRow[2] }}</th>\n                                        <th>{{ latestPodcastDataTable.headerRow[3] }}</th>\n                                        <th>{{ latestPodcastDataTable.headerRow[4] }}</th>\n                                        <th class=\"disabled-sorting\">{{ latestPodcastDataTable.headerRow[5] }}</th>\n                                        <th [hidden]=\"true\">{{latestPodcastDataTable.headerRow[6]}}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of latestPodcastDataTable.dataRows; let i=index\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td>{{row[4]}}</td>\n                                        <td>\n                                            <a [routerLink]=\"['/tables/latestPodcast/'+row[6]]\" class=\"btn btn-link btn-warning btn-just-icon\"\n                                                style=\"color:rgb(171, 71, 188)\"><i class=\"material-icons\" style=\"font-size:18px\">remove_red_eye</i></a>\n                                        </td>\n                                        <td [hidden]=\"true\">{{row[6]}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"large\" color = \"#fff\" type = \"square-jelly-box\" ></ngx-spinner>"

/***/ }),

/***/ "./src/app/tables/latestPodcast/datatable.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/latestPodcast/datatable.component.ts ***!
  \*************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(http, router, spinner) {
        this.http = http;
        this.router = router;
        this.spinner = spinner;
    }
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Inside ngoninit");
        this.spinner.show();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append("token", localStorage.getItem("token"));
        headers.append("emailAddress", localStorage.getItem("emailAddress"));
        this.http.get(_global__WEBPACK_IMPORTED_MODULE_5__["Global"].API_ENDPOINT + '/getLatestPodcast', { headers: headers }).subscribe(function (data) {
            console.log("Data in this.get");
            console.log(data);
            _this.latestPodcastDataTable = {
                headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'View', 'id'],
                dataRows: data.json().data
            };
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            var body = JSON.parse(err.text());
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: body.status,
                text: "",
                timer: 3000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
        });
    };
    DataTableComponent.prototype.ngAfterViewInit = function () {
        $('#latestPodcastDataTableId').DataTable({
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
        $('.card .material-datatables label').addClass('form-group');
    };
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table-cmp',
            template: __webpack_require__(/*! ./datatable.component.html */ "./src/app/tables/latestPodcast/datatable.component.html")
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/purchasedPodcast/purchasedPodcast.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/tables/purchasedPodcast/purchasedPodcast.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title\">Purchased Podcast</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables\">\n                            <table id=\"purchasedTableId\" class=\"table table-striped table-no-bordered table-hover\"\n                                cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>{{ purchasedTable.headerRow[0] }}</th>\n                                        <th>{{ purchasedTable.headerRow[1] }}</th>\n                                        <th>{{ purchasedTable.headerRow[2] }}</th>\n                                        <th>{{ purchasedTable.headerRow[3] }}</th>\n                                        <th class=\"disabled-sorting\">{{ purchasedTable.headerRow[4] }}</th>\n                                        <th class=\"disabled-sorting\">{{purchasedTable.headerRow[5]}}</th>\n                                        <th [hidden]=\"true\">{{purchasedTable.headerRow[6]}}</th>\n                                        <th>{{ purchasedTable.headerRow[7] }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of purchasedTable.dataRows; let i=index;\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td>{{row[4]}}</td>\n                                        <td>\n                                            <a [routerLink]=\"['/tables/purchasedPodcast/'+row[6]]\" class=\"btn btn-link btn-warning btn-just-icon\"\n                                                style=\"color:rgb(171, 71, 188)\"><i class=\"material-icons\" style=\"font-size:18px\">remove_red_eye</i></a>\n                                        </td>\n                                        <td [hidden]=\"true\">{{row[6]}}</td>\n                                        <td><a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"large\" color = \"#fff\" type = \"square-jelly-box\" ></ngx-spinner>"

/***/ }),

/***/ "./src/app/tables/purchasedPodcast/purchasedPodcast.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tables/purchasedPodcast/purchasedPodcast.component.ts ***!
  \***********************************************************************/
/*! exports provided: PurchasedPodcastTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedPodcastTableComponent", function() { return PurchasedPodcastTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
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






var PurchasedPodcastTableComponent = /** @class */ (function () {
    function PurchasedPodcastTableComponent(http, router, spinner) {
        this.http = http;
        this.router = router;
        this.spinner = spinner;
    }
    PurchasedPodcastTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append("token", localStorage.getItem("token"));
        headers.append("emailAddress", localStorage.getItem("emailAddress"));
        this.http.get(_global__WEBPACK_IMPORTED_MODULE_5__["Global"].API_ENDPOINT + '/getPurchasedPodcastList', { headers: headers }).subscribe(function (data) {
            console.log("Purchased Podcast list");
            console.log(data);
            _this.purchasedTable = {
                headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'View', 'id', 'Actions'],
                dataRows: data.json().data
            };
            //this.purchasedTable.dataRows = ;       
            _this.spinner.hide();
        }, function (err) {
            var body = JSON.parse(err.text());
            _this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: body.status,
                text: "",
                timer: 3000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
        });
    };
    PurchasedPodcastTableComponent.prototype.ngAfterViewInit = function () {
        $('#purchasedTableId').DataTable({
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
        var table = $('#purchasedTableId').DataTable();
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        $('.card .material-datatables label').addClass('form-group');
    };
    PurchasedPodcastTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchased-podcast-cmp',
            template: __webpack_require__(/*! ./purchasedPodcast.component.html */ "./src/app/tables/purchasedPodcast/purchasedPodcast.component.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], PurchasedPodcastTableComponent);
    return PurchasedPodcastTableComponent;
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
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _latestPodcast_datatable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./latestPodcast/datatable.component */ "./src/app/tables/latestPodcast/datatable.component.ts");
/* harmony import */ var _userPublishedTable_userPublishedTable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userPublishedTable/userPublishedTable.component */ "./src/app/tables/userPublishedTable/userPublishedTable.component.ts");
/* harmony import */ var _purchasedPodcast_purchasedPodcast_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./purchasedPodcast/purchasedPodcast.component */ "./src/app/tables/purchasedPodcast/purchasedPodcast.component.ts");
/* harmony import */ var _forms_podcastDetailforms_podcastDetailforms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../forms/podcastDetailforms/podcastDetailforms.component */ "./src/app/forms/podcastDetailforms/podcastDetailforms.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _forms_detailForLatestAndPurchasedPodcast_detailForLatestAndPurchasedPodcast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component */ "./src/app/forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"]
            ],
            declarations: [
                _latestPodcast_datatable_component__WEBPACK_IMPORTED_MODULE_7__["DataTableComponent"],
                _userPublishedTable_userPublishedTable_component__WEBPACK_IMPORTED_MODULE_8__["UserPublishedTableComponent"],
                _purchasedPodcast_purchasedPodcast_component__WEBPACK_IMPORTED_MODULE_9__["PurchasedPodcastTableComponent"],
                _forms_podcastDetailforms_podcastDetailforms_component__WEBPACK_IMPORTED_MODULE_10__["PodcastDetailComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileSelectDirective"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_11__["FileDropDirective"],
                _forms_detailForLatestAndPurchasedPodcast_detailForLatestAndPurchasedPodcast_component__WEBPACK_IMPORTED_MODULE_12__["DetailForLatestAndPurchasedPodcastComponent"]
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
/* harmony import */ var _latestPodcast_datatable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./latestPodcast/datatable.component */ "./src/app/tables/latestPodcast/datatable.component.ts");
/* harmony import */ var _userPublishedTable_userPublishedTable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userPublishedTable/userPublishedTable.component */ "./src/app/tables/userPublishedTable/userPublishedTable.component.ts");
/* harmony import */ var _purchasedPodcast_purchasedPodcast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchasedPodcast/purchasedPodcast.component */ "./src/app/tables/purchasedPodcast/purchasedPodcast.component.ts");
/* harmony import */ var _forms_podcastDetailforms_podcastDetailforms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/podcastDetailforms/podcastDetailforms.component */ "./src/app/forms/podcastDetailforms/podcastDetailforms.component.ts");
/* harmony import */ var _forms_detailForLatestAndPurchasedPodcast_detailForLatestAndPurchasedPodcast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component */ "./src/app/forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component.ts");





var TablesRoutes = [
    {
        path: '',
        children: [{
                path: 'latestPodcast',
                component: _latestPodcast_datatable_component__WEBPACK_IMPORTED_MODULE_0__["DataTableComponent"]
            }, {
                path: 'latestPodcast/:id',
                component: _forms_detailForLatestAndPurchasedPodcast_detailForLatestAndPurchasedPodcast_component__WEBPACK_IMPORTED_MODULE_4__["DetailForLatestAndPurchasedPodcastComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'userPublishedTable',
                component: _userPublishedTable_userPublishedTable_component__WEBPACK_IMPORTED_MODULE_1__["UserPublishedTableComponent"],
            },
            {
                path: 'userPublishedTable/:id',
                component: _forms_podcastDetailforms_podcastDetailforms_component__WEBPACK_IMPORTED_MODULE_3__["PodcastDetailComponent"]
            }]
    },
    {
        path: '',
        children: [{
                path: 'purchasedPodcast',
                component: _purchasedPodcast_purchasedPodcast_component__WEBPACK_IMPORTED_MODULE_2__["PurchasedPodcastTableComponent"]
            }, {
                path: 'purchasedPodcast/:id',
                component: _forms_detailForLatestAndPurchasedPodcast_detailForLatestAndPurchasedPodcast_component__WEBPACK_IMPORTED_MODULE_4__["DetailForLatestAndPurchasedPodcastComponent"]
            }]
    },
];


/***/ }),

/***/ "./src/app/tables/userPublishedTable/userPublishedTable.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/tables/userPublishedTable/userPublishedTable.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title\">User Published Podcast </h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                            <button mat-raised-button type=\"submit\" [routerLink]=\"['/tables/userPublishedTable', podcastId]\"\n                                class=\"btn btn-sm btn-rose pull-right\">Add Podcast</button>\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables\">\n                            <table id=\"publishedTableId\" class=\"table table-striped table-no-bordered table-hover\"\n                                cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>{{ userPublishedTableDataTable.headerRow[0] }}</th>\n                                        <th>{{ userPublishedTableDataTable.headerRow[1] }}</th>\n                                        <th>{{ userPublishedTableDataTable.headerRow[2] }}</th>\n                                        <th>{{ userPublishedTableDataTable.headerRow[3] }}</th>\n                                        <th>{{ userPublishedTableDataTable.headerRow[4] }}</th>\n                                        <th class=\"disabled-sorting\">{{userPublishedTableDataTable.headerRow[5]}}</th>\n                                        <th class=\"disabled-sorting\">{{userPublishedTableDataTable.headerRow[6]}}</th>\n                                        <th [hidden]=\"true\">{{userPublishedTableDataTable.headerRow[7]}}</th>\n                                        <th [hidden]=\"true\">{{userPublishedTableDataTable.headerRow[8]}}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of userPublishedTableDataTable.dataRows; let i=index;\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td>{{row[4]}}</td>\n                                        <td>\n                                            <a [routerLink]=\"['/tables/userPublishedTable/'+row[7]]\" class=\"btn btn-link btn-warning btn-just-icon\"\n                                                style=\"color:rgb(171, 71, 188)\"><i class=\"material-icons\" style=\"font-size:18px\">remove_red_eye</i></a>\n                                        </td>\n                                        <td>\n                                            <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                        </td>\n                                        <td [hidden]=\"true\">{{row[7]}}</td>\n                                        <td [hidden]=\"true\">{{row[8]}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>\n<ngx-spinner bdColor = \"rgba(51, 51, 51, 0.8)\" size = \"large\" color = \"#fff\" type = \"square-jelly-box\" ></ngx-spinner>"

/***/ }),

/***/ "./src/app/tables/userPublishedTable/userPublishedTable.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tables/userPublishedTable/userPublishedTable.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserPublishedTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPublishedTableComponent", function() { return UserPublishedTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global */ "./src/app/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserPublishedTableComponent = /** @class */ (function () {
    function UserPublishedTableComponent(http, router, spinner) {
        this.http = http;
        this.router = router;
        this.spinner = spinner;
        this.podcastId = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
        this.self = null;
    }
    UserPublishedTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner.show();
        this.self = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("token", localStorage.getItem("token"));
        headers.append("emailAddress", localStorage.getItem("emailAddress"));
        this.http.get(_global__WEBPACK_IMPORTED_MODULE_6__["Global"].API_ENDPOINT + '/getUserPublishedPodcast', { headers: headers }).subscribe(function (data) {
            _this.userPublishedTableDataTable = {
                headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'View', 'Actions', 'id', 'amount'],
                dataRows: data.json().data
            };
            //this.userPublishedTableDataTable.dataRows = data.json().data;  
            _this.spinner.hide();
        }, function (err) {
            _this.spinner.hide();
            var body = JSON.parse(err.text());
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: body.status,
                text: "",
                timer: 3000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
        });
    };
    UserPublishedTableComponent.prototype.ngAfterViewInit = function () {
        $('#publishedTableId').DataTable({
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
        var table = $('#publishedTableId').DataTable();
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        $('.card .material-datatables label').addClass('form-group');
    };
    UserPublishedTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-published-table-cmp',
            template: __webpack_require__(/*! ./userPublishedTable.component.html */ "./src/app/tables/userPublishedTable/userPublishedTable.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])
    ], UserPublishedTableComponent);
    return UserPublishedTableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map