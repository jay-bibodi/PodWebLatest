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

module.exports = "<div class=\"main-content\">\r\n    <div class=\"row\">\r\n        <button mat-raised-button type=\"submit\" (click)=\"goBack()\" style=\"margin-left: 20px;\" class=\"btn btn-sm btn-rose pull-left\"><i\r\n                aria-hidden=\"true\" class=\"fa fa-arrow-circle-left\" style=\"padding-bottom: 3px;\"></i>&nbsp;&nbsp;Back to\r\n            list\r\n        </button>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon card-header-rose\">\r\n                            <div class=\"card-icon\">\r\n                                <i class=\"material-icons\">info</i>\r\n                            </div>\r\n                            <h4 class=\"card-title\">Podcast Detail\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Title:</b>\r\n                                            {{titleValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Uploaded By:</b>\r\n                                            {{uploadedByValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Tags:</b>\r\n                                            {{tagsValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Artist Name:</b>\r\n                                            {{artistNameValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Created On:</b>\r\n                                            {{createdDateTimeValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <p><b>Amount:</b>\r\n                                            {{amountValue}}\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <br />\r\n                                    <audio controls=\"controls\" src=\"https://ipfs.io/ipfs/{{podcastId}}\" style=\"width:100%\">\r\n                                        Your browser does not support the <a href=\"http://caniuse.com/#search=audio\"><code>audio</code></a>\r\n                                        element.\r\n                                    </audio>\r\n                                    <br />\r\n                                    <br />\r\n                                    <br />                                    \r\n                                        <b>Likes:&nbsp;&nbsp;&nbsp;</b>{{likesValue}}\r\n                                        <button mat-raised-button type=\"submit\" (click)=\"callLikeFunc()\" class=\"btn btn-rose pull-right\">{{likeButtonValue}}</button>\r\n                                        <button mat-raised-button type=\"submit\" *ngIf=\"isPaidPodcast && !isPurchasedPodcast\" (click)=\"callPurchasePodcast()\" class=\"btn btn-rose pull-right\">Purchase</button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"clearfix\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
    function DetailForLatestAndPurchasedPodcastComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
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
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            _this.id = params.id;
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append("token", localStorage.getItem("token"));
            headers.append("emailAddress", localStorage.getItem("emailAddress"));
            _this.http.post('http://localhost:3000/getPodcastForCurrUser', { "id": _this.id }, { headers: headers }).subscribe(function (data) {
                console.log("Inside getPodcastForCurrUser");
                var body = JSON.parse(data.text());
                console.log(body);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: body.status,
                    text: "",
                    timer: 2000,
                    showConfirmButton: false
                }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                _this.isPaidPodcast = (body.isPaidPodcast === "false" ? false : true);
                _this.isPurchasedPodcast = body.isPurchasedPodcast;
                _this.uploadedByValue = body.uploadedByValue;
                _this.titleValue = body.titleValue;
                _this.tagsValue = body.tagsValue;
                _this.artistNameValue = body.artistNameValue;
                _this.createdDateTimeValue = body.createdDateTimeValue;
                _this.likesValue = body.likesValue;
                _this.amountValue = (body.amountValue === undefined ? "0" : body.amountValue);
                if (!_this.isPaidPodcast || (_this.isPaidPodcast && _this.isPurchasedPodcast)) {
                    _this.podcastId = _this.id;
                }
                else {
                    _this.podcastId = "";
                }
            }, function (err) {
            });
        });
    };
    DetailForLatestAndPurchasedPodcastComponent.prototype.callLikeFunc = function () {
        if (this.likeButtonValue === "Like") {
            this.likeButtonValue = "Liked";
            this.likesValue = this.likesValue + 1;
        }
        else if (this.likeButtonValue === "Liked") {
            this.likeButtonValue = "Like";
            this.likesValue = this.likesValue - 1;
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
                console.log(result.value);
                if (result.value === true) {
                    console.log("Inside if result.value");
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                    headers.append("token", localStorage.getItem("token"));
                    headers.append("emailAddress", localStorage.getItem("emailAddress"));
                    console.log(_this);
                    _this.http.post('http://localhost:3000/transferPodsToPurchase', { "id": _this.id, "amount": _this.amountValue }, { headers: headers }).subscribe(function (data) {
                        console.log(data);
                        var body = JSON.parse(data.text());
                        _this.isPurchasedPodcast = true;
                        _this.podcastId = _this.id;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                            title: body.status,
                            text: "",
                            timer: 1000,
                            showConfirmButton: false
                        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                        // play podcast
                        // pass src to audio control
                    }, function (err) { console.log("message sending err", err); }, function () { });
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
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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

module.exports = "<div class=\"main-content\">\r\n    <div class=\"row\">\r\n        <button mat-raised-button type=\"submit\" (click)=\"goBack()\" style=\"margin-left: 20px;\" class=\"btn btn-sm btn-rose pull-left\"><i\r\n                aria-hidden=\"true\" class=\"fa fa-arrow-circle-left\" style=\"padding-bottom: 3px;\"></i>&nbsp;&nbsp;Back to list\r\n        </button>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header card-header-icon card-header-rose\">\r\n                            <div class=\"card-icon\">\r\n                                <i class=\"material-icons\">cloud_upload</i>\r\n                            </div>\r\n                            <h4 class=\"card-title\">Upload Podcast\r\n                            </h4>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <form #podcastDetailForm=\"ngForm\" (ngSubmit)=\"editPodcastDetail(podcastDetailForm.value)\"\r\n                                (change)=\"mark_changed()\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"titleName\" [(ngModel)]=\"titleName\"\r\n                                        placeholder=\"Enter Title\">\r\n                                    <div *ngIf=\"!isTitlePresent\" class=\"help-block\" style=\"text-align: right;color:red\">Title\r\n                                        for the podcast must be present</div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"text\" class=\"form-control\" name=\"artistName\" [(ngModel)]=\"artistName\"\r\n                                                    placeholder=\"Enter Artist Name\" style=\"margin-top:25px\">\r\n                                            </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\">\r\n                                            <tag-input [(ngModel)]=\"tags\" name=\"tags\" placeholder=\"+ Tag\" secondaryPlaceholder=\"Add Tags\" aria-placeholder=\"tags\"></tag-input>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group\" style=\"margin-top:3%\">\r\n                                            <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"selectedType\" name=\"selectedType\">\r\n                                                <mat-radio-button class=\"example-radio-button\" *ngFor=\"let type of podcastTypes\"\r\n                                                    [value]=\"type\" (change)=\"radioChange($event)\">\r\n                                                    {{type}} &nbsp;&nbsp;&nbsp;&nbsp;\r\n                                                </mat-radio-button>\r\n                                            </mat-radio-group>\r\n                                            <div *ngIf=\"!isRadioButtonSelected\" class=\"help-block\" style=\"text-align: left;color:red\">Please\r\n                                                select atleast one podcast type</div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\" *ngIf=\"isPaidPodcast\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"amount\"\r\n                                                placeholder=\"Number of Pods Token Required to purchase podcast\">\r\n                                            <div *ngIf=\"!isAmountPresent && isPaidPodcast\" class=\"help-block\" style=\"text-align: right;color:red\">{{errorTextForAmount}}</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"!showPlayButton\">\r\n                                    <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\"\r\n                                        [uploader]=\"uploader\" style=\"border: dotted 3px lightgray;min-height: 20px;padding: 19px;margin-bottom: 20px;background-color: #f5f5f5;border-radius:4px;box-shadow:inset 0px 1px 1px rgba(0,0,0,0.05)\">\r\n                                        Drop the File Here\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <label class=\"btn btn-primary\" style=\"background-color:#e91e63 !important;\">\r\n                                            Browse File <input type=\"file\" style=\"display: none;\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" placeholder=\"choose file\"/>\r\n                                        </label>\r\n                                        <div *ngIf=\"!selectFileToUpload\" class=\"help-block\" style=\"text-align: left;color:red\">Please select a file</div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <table class=\"table\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th width=\"50%\">Name</th>\r\n                                                    <th>Size</th>\r\n                                                    <th>Progress</th>\r\n                                                    <th>Status</th>\r\n                                                    <th>Actions</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of uploader.queue\">\r\n                                                    <td>\r\n                                                        <strong>{{ item.file.name }}</strong>\r\n                                                    </td>\r\n                                                    <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\r\n                                                    <td>\r\n                                                        <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                                                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td class=\"text-center\">\r\n                                                        <span *ngIf=\"item.isSuccess\">\r\n                                                            <i class=\"material-icons\">check_circle</i>\r\n                                                        </span>\r\n                                                        <span *ngIf=\"item.isCancel\">\r\n                                                            <i class=\"material-icons\">cancel</i>\r\n                                                        </span>\r\n                                                        <span *ngIf=\"item.isError\">\r\n                                                            <span *ngIf=\"item.isError\">\r\n                                                                <i class=\"material-icons\">error</i>\r\n                                                            </span>\r\n                                                        </span>\r\n                                                    </td>\r\n                                                    <td nowrap>\r\n                                                        <!--<button type=\"button\" class=\"btn btn-success btn-xs\" style=\"background-color:#3581f2 !important;\"\r\n                                                            (click)=\"item.upload();\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                                                            <i class=\"material-icons\">cloud_upload</i> Upload\r\n                                                        </button>-->\r\n                                                        <!--<button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\"\r\n                                                            [disabled]=\"!item.isUploading\">\r\n                                                            <i class=\"material-icons\">cancel</i> Cancel\r\n                                                        </button>-->\r\n                                                        <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"deleteFile(item)\">\r\n                                                            <i class=\"material-icons\">delete_forever</i> Delete\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"showPlayButton\">\r\n                                    <audio controls=\"controls\" src=\"https://ipfs.io/ipfs/{{pathOfPodcastId}}\" style=\"width:100%\">\r\n                                        Your browser does not support the <a href=\"http://caniuse.com/#search=audio\"><code>audio</code></a> element.\r\n                                    </audio>\r\n                                </div>\r\n                                <button mat-raised-button type=\"submit\" (click)=\"loadPublishedPodcast()\" class=\"btn btn-rose pull-right\">Cancel</button>\r\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-rose pull-right\">Save</button>\r\n                                <div class=\"clearfix\"></div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <!--Accordian here-->\r\n                    <div class=\"card\" *ngIf=\"isPaidPodcast && isFromEdit\">\r\n                            <div class=\"card-header card-header-rose card-header-icon\">\r\n                                <div class=\"card-icon\">\r\n                                    <i class=\"material-icons\">shop</i>\r\n                                </div>\r\n                                <h4 class=\"card-title\">Podcast Purchased By:</h4>\r\n                            </div>\r\n                            <br /><br />\r\n                            <div class=\"col-lg-12\" style=\"padding-top:2%;padding-bottom:2%\">\r\n                                <mat-accordion *ngFor=\"let data of podcastPurchasedByDetail\">\r\n                                    <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                                        <mat-expansion-panel-header>\r\n                                            <mat-panel-title>\r\n                                                {{data.name}}\r\n                                            </mat-panel-title>\r\n                                        </mat-expansion-panel-header>\r\n                                        <p>Email Id: {{data.emailId}}</p>\r\n                                    </mat-expansion-panel>\r\n                                </mat-accordion>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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
    function PodcastDetailComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.UIChange = false;
        this.tags = [];
        this.isPaidPodcast = false;
        this.isAmountPresent = true;
        this.isTitlePresent = true;
        this.isErrorPresent = false;
        this.isRadioButtonSelected = true;
        this.selectFileToUpload = true;
        this.fileUploaded = false;
        this.podcastTypes = ['Paid Podcast', 'Free Podcast'];
        this.tagsArray = [];
        this.showPlayButton = false;
        this.isFromEdit = false;
        this.pathOfPodcastId = null;
        this.podcastPurchasedByDetail = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: 'http://localhost:3000/uploadfile' });
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
        console.log(event.value);
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
                    console.log(result.value);
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
        if (this.isPaidPodcast && (form.amount === undefined || (form.amount).trim().length === 0)) {
            this.isAmountPresent = false;
            this.errorTextForAmount = "Amount of pods are required";
            this.isErrorPresent = true;
        }
        if (parseInt(form.amount) === NaN) {
            this.isAmountPresent = false;
            this.errorTextForAmount = "Amount should be expressed in Integer";
            this.isErrorPresent = true;
        }
        if (form.titleName === undefined || (form.titleName).trim().length === 0) {
            this.isTitlePresent = false;
            this.isErrorPresent = true;
        }
        if (this.selectedType === undefined) {
            this.isErrorPresent = true;
            this.isRadioButtonSelected = false;
        }
        if (!this.isFromEdit && this.uploader.queue.length === 0) {
            this.isErrorPresent = true;
            this.selectFileToUpload = false;
        }
        if (!this.isErrorPresent && !this.isFromEdit) {
            console.log("Inside if");
            console.log(form.tags);
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
                    //console.log("response" + JSON.stringify(response));
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
                    //console.log("response" + JSON.stringify(response));
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
            console.log("Inside else of form submit");
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append("token", localStorage.getItem("token"));
            headers.append("emailAddress", localStorage.getItem("emailAddress"));
            this.tagsArray = [];
            console.log("Tags");
            console.log(form.tags);
            for (var i = 0; i < form.tags.length; i++) {
                this.tagsArray.push(form.tags[i].display);
            }
            console.log(this.tagsArray);
            var editedObject = {
                'title': this.titleName,
                'artist': this.artistName,
                'tags': this.tagsArray,
                'isPaidPodcast': this.isPaidPodcast,
                'amount': this.amount,
                'id': this.fileId
            };
            console.log("editedObj");
            console.log(editedObject);
            this.http.post('http://localhost:3000/updatePodcastDetails', editedObject, { headers: headers }).subscribe(function (data) {
                var body = JSON.parse(data.text());
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: body.status,
                    text: "",
                    timer: 2000,
                    showConfirmButton: false
                }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
            }, function (err) { console.log("message sending err", err); }, function () { });
        }
    };
    /*check_for_error(error) {
      console.log(error)
    }*/
    PodcastDetailComponent.prototype.deleteFile = function (item) {
        console.log(item);
        this.uploader.removeFromQueue(item);
    };
    PodcastDetailComponent.prototype.loadPublishedPodcast = function () {
        this.goBack();
    };
    PodcastDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            headers.append("token", localStorage.getItem("token"));
            headers.append("emailAddress", localStorage.getItem("emailAddress"));
            _this.http.post('http://localhost:3000/getPodcastDetailsForView', { "id": params.id }, { headers: headers }).subscribe(function (data) {
                console.log("message sending results", data);
                _this.showPlayButton = true;
                _this.isFromEdit = true;
                _this.pathOfPodcastId = params.id;
                var jsonData = data.json();
                if (jsonData.status !== "Adding Podcast") {
                    jsonData = jsonData.data;
                    _this.fileId = jsonData.fileHashKey[0].hash;
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
            }, function (err) {
            });
        });
    };
    PodcastDetailComponent.prototype.myFunc = function (val) {
        // code here
    };
    PodcastDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-podcastDetailforms-cmp',
            template: __webpack_require__(/*! ./podcastDetailforms.component.html */ "./src/app/forms/podcastDetailforms/podcastDetailforms.component.html"),
            styles: ["md-calendar {\n      width: 300px;\n  }"]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PodcastDetailComponent);
    return PodcastDetailComponent;
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

/***/ "./src/app/tables/latestPodcast/datatable.component.html":
/*!***************************************************************!*\
  !*** ./src/app/tables/latestPodcast/datatable.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title\">Latest Podcast</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\"\n                                cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>{{ dataTable.headerRow[0] }}</th>\n                                        <th>{{ dataTable.headerRow[1] }}</th>\n                                        <th>{{ dataTable.headerRow[2] }}</th>\n                                        <th>{{ dataTable.headerRow[3] }}</th>\n                                        <th>{{ dataTable.headerRow[4] }}</th>\n                                        <!--<th class=\"disabled-sorting\">{{ dataTable.headerRow[5] }}</th>\n                                        <th class=\"disabled-sorting\">{{ dataTable.headerRow[6] }}</th>-->\n                                        <th class=\"disabled-sorting\">{{ dataTable.headerRow[5] }}</th>\n                                        <th [hidden]=\"true\">{{dataTable.headerRow[6]}}</th>\n                                        <th [hidden]=\"true\">{{dataTable.headerRow[7]}}</th>\n                                    </tr>\n                                </thead>\n                                <!--<tfoot>\n                                    <tr>\n                                      <th>{{ dataTable.footerRow[0] }}</th>\n                                      <th>{{ dataTable.footerRow[1] }}</th>\n                                      <th>{{ dataTable.footerRow[2] }}</th>\n                                      <th>{{ dataTable.footerRow[3] }}</th>\n                                      <th>{{ dataTable.footerRow[4] }}</th>\n                                      <th class=\"text-right\">{{ dataTable.footerRow[5] }}</th>\n                                    </tr>\n                                </tfoot>-->\n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows; let i=index;\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td>{{row[4]}}</td>\n                                        <!--<td>\n                                            <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\n                                          <a href=\"#\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\n                                          <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                            <button (click)=\"clickOnPlay(i)\" class=\"btn btn-link btn-warning btn-just-icon\"\n                                                style=\"color:rgb(171, 71, 188)\"><i class=\"material-icons\" style=\"font-size:18px\">play_circle_outline</i></button>\n\n                                        </td>\n                                        <td>\n                                            <a href=\"#\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\n                                        </td>-->\n                                        <td>\n                                            <a [routerLink]=\"['/tables/latestPodcast/'+row[6]]\" class=\"btn btn-link btn-warning btn-just-icon\"\n                                                style=\"color:rgb(171, 71, 188)\"><i class=\"material-icons\" style=\"font-size:18px\">remove_red_eye</i></a>\n                                        </td>\n                                        <td [hidden]=\"true\">{{row[6]}}</td>\n                                        <td [hidden]=\"true\">{{row[7]}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>"

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




var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(http, router) {
        this.http = http;
        this.router = router;
        this.dataRowsFromDB = null;
        this.getPodcastIdPath = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DataTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append("token", localStorage.getItem("token"));
        headers.append("emailAddress", localStorage.getItem("emailAddress"));
        this.http.get('http://localhost:3000/getLatestPodcast', { headers: headers }).subscribe(function (data) {
            console.log("message sending results", data);
            _this.dataRowsFromDB = data.json();
            _this.dataRowsFromDB = _this.dataRowsFromDB.data;
            console.log(_this.dataRowsFromDB);
            _this.dataTable = {
                //headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'Play', 'Like', 'View', 'id', 'amount'],
                headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'View', 'id', 'amount'],
                footerRow: [],
                dataRows: _this.dataRowsFromDB
            };
            var body = JSON.parse(data.text());
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: body.status,
                text: "",
                timer: 3000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
        }, function (err) { console.log("message sending err", err); });
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
        /*table.on('click', '.play', function (e) {
          
          const $tr = $(this).closest('tr');
          const data = table.row($tr).data();
          console.log('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
          
          e.preventDefault();
          if(data[4] !== "No"){
            console.log("Inside play inside No")
            swal({
              title: 'Paid Podcast',
              text: "Do you want to purchase "+data[0]+" podcast by "+data[1]+" for "+data[9]+" pods token?",
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirm'
            }).then((result) => {
              console.log(result.value);
              if (result.value) {
                
                self.http.post('http://localhost:3000/signup', this.model).subscribe((data) => {
    
                })
                
                // when confirms make an api call
              }
            })
          }
        });*/
        // Edit record
        table.on('click', '.view', function (e) {
            var $tr = $(this).closest('tr');
            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[7] + '\'s row.');
            //e.preventDefault();
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
    DataTableComponent.prototype.clickOnPlay = function (index) {
        var _this = this;
        console.log("clickOnPlay");
        var rowData = this.dataTable.dataRows[index];
        console.log(rowData);
        if (rowData[4] !== "No") {
            console.log("Inside play inside No");
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: 'Paid Podcast',
                text: "Do you want to purchase " + rowData[0] + " podcast by " + rowData[1] + " for " + rowData[9] + " pods token?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
            }).then(function (result) {
                console.log(result.value);
                if (result.value === true) {
                    console.log("Inside if result.value");
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                    headers.append("token", localStorage.getItem("token"));
                    headers.append("emailAddress", localStorage.getItem("emailAddress"));
                    console.log(_this);
                    _this.http.post('http://localhost:3000/transferPodsToPurchase', { "id": rowData[8], "amount": rowData[9] }, { headers: headers }).subscribe(function (data) {
                        console.log(data);
                        var body = JSON.parse(data.text());
                        _this.dataTable.dataRows[index][4] = body.purchasedStatus;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                            title: body.status,
                            text: "",
                            timer: 1000,
                            showConfirmButton: false
                        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                        // play podcast
                        // pass src to audio control
                    }, function (err) { console.log("message sending err", err); }, function () { });
                    // when confirms make an api call 
                }
            });
        }
        else {
            console.log("Inside else of click on play");
            console.log(this.getPodcastIdPath.emit(rowData[8]));
            this.getPodcastIdPath.emit(rowData[8]);
            // play podcast
            // pass src to audio control
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DataTableComponent.prototype, "getPodcastIdPath", void 0);
    DataTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-table-cmp',
            template: __webpack_require__(/*! ./datatable.component.html */ "./src/app/tables/latestPodcast/datatable.component.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title\">Purchased Podcast</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\"\n                                cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>{{ dataTable.headerRow[0] }}</th>\n                                        <th>{{ dataTable.headerRow[1] }}</th>\n                                        <th>{{ dataTable.headerRow[2] }}</th>\n                                        <th>{{ dataTable.headerRow[3] }}</th>\n                                        <th class=\"disabled-sorting\">{{ dataTable.headerRow[4] }}</th>\n                                        <th class=\"disabled-sorting\">{{dataTable.headerRow[5]}}</th>\n                                        <th [hidden]=\"true\">{{dataTable.headerRow[6]}}</th>\n                                        <th>{{ dataTable.headerRow[7] }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows; let i=index;\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td>{{row[4]}}</td>\n                                        <td>\n                                            <a [routerLink]=\"['/tables/purchasedPodcast/'+row[6]]\" class=\"btn btn-link btn-warning btn-just-icon\"\n                                                style=\"color:rgb(171, 71, 188)\"><i class=\"material-icons\" style=\"font-size:18px\">remove_red_eye</i></a>\n                                        </td>\n                                        <td [hidden]=\"true\">{{row[6]}}</td>\n                                        <td><a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>"

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
    function PurchasedPodcastTableComponent(http, router) {
        this.http = http;
        this.router = router;
        this.dataRowsFromDB = null;
    }
    PurchasedPodcastTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append("token", localStorage.getItem("token"));
        headers.append("emailAddress", localStorage.getItem("emailAddress"));
        this.http.get('http://localhost:3000/getPurchasedPodcastList', { headers: headers }).subscribe(function (data) {
            console.log("message sending results", data);
            _this.dataRowsFromDB = data.json();
            _this.dataRowsFromDB = _this.dataRowsFromDB.data;
            console.log(_this.dataRowsFromDB);
            _this.dataTable = {
                headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'View', 'id', 'Actions'],
                footerRow: [],
                dataRows: _this.dataRowsFromDB
            };
            var body = JSON.parse(data.text());
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                title: body.status,
                text: "",
                timer: 3000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
        }, function (err) { console.log("message sending err", err); });
    };
    /*ngOnInit() {
      headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'Play', 'Like', 'View', 'id', 'amount','Actions'],
        this.dataTable = {
            headerRow: [ 'Name', 'Position', 'Office', 'Age', 'Date', 'Actions' ],
            footerRow: [ 'Name', 'Position', 'Office', 'Age', 'Start Date', 'Actions' ],

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

    }*/
    PurchasedPodcastTableComponent.prototype.ngAfterViewInit = function () {
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
        /*table.on('click', '.edit', function(e) {
          const $tr = $(this).closest('tr');
          const data = table.row($tr).data();
          alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
          e.preventDefault();
        });*/
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        //Like record
        /*table.on('click', '.like', function(e) {
          alert('You clicked on Like button');
          e.preventDefault();
        });*/
        $('.card .material-datatables label').addClass('form-group');
    };
    PurchasedPodcastTableComponent.prototype.clickOnPlay = function (index) {
        console.log("clickOnPlay");
        var rowData = this.dataTable.dataRows[index];
        console.log(rowData);
        // play podcast
    };
    PurchasedPodcastTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchased-podcast-cmp',
            template: __webpack_require__(/*! ./purchasedPodcast.component.html */ "./src/app/tables/purchasedPodcast/purchasedPodcast.component.html")
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PurchasedPodcastTableComponent);
    return PurchasedPodcastTableComponent;
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
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extendedtable/extendedtable.component */ "./src/app/tables/extendedtable/extendedtable.component.ts");
/* harmony import */ var _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./regulartable/regulartable.component */ "./src/app/tables/regulartable/regulartable.component.ts");
/* harmony import */ var _latestPodcast_datatable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./latestPodcast/datatable.component */ "./src/app/tables/latestPodcast/datatable.component.ts");
/* harmony import */ var _userPublishedTable_userPublishedTable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userPublishedTable/userPublishedTable.component */ "./src/app/tables/userPublishedTable/userPublishedTable.component.ts");
/* harmony import */ var _purchasedPodcast_purchasedPodcast_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./purchasedPodcast/purchasedPodcast.component */ "./src/app/tables/purchasedPodcast/purchasedPodcast.component.ts");
/* harmony import */ var _forms_podcastDetailforms_podcastDetailforms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../forms/podcastDetailforms/podcastDetailforms.component */ "./src/app/forms/podcastDetailforms/podcastDetailforms.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _forms_detailForLatestAndPurchasedPodcast_detailForLatestAndPurchasedPodcast_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component */ "./src/app/forms/detailForLatestAndPurchasedPodcast/detailForLatestAndPurchasedPodcast.component.ts");
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
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            declarations: [
                _extendedtable_extendedtable_component__WEBPACK_IMPORTED_MODULE_7__["ExtendedTableComponent"],
                _latestPodcast_datatable_component__WEBPACK_IMPORTED_MODULE_9__["DataTableComponent"],
                _regulartable_regulartable_component__WEBPACK_IMPORTED_MODULE_8__["RegularTableComponent"],
                _userPublishedTable_userPublishedTable_component__WEBPACK_IMPORTED_MODULE_10__["UserPublishedTableComponent"],
                _purchasedPodcast_purchasedPodcast_component__WEBPACK_IMPORTED_MODULE_11__["PurchasedPodcastTableComponent"],
                _forms_podcastDetailforms_podcastDetailforms_component__WEBPACK_IMPORTED_MODULE_12__["PodcastDetailComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileSelectDirective"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileDropDirective"],
                _forms_detailForLatestAndPurchasedPodcast_detailForLatestAndPurchasedPodcast_component__WEBPACK_IMPORTED_MODULE_14__["DetailForLatestAndPurchasedPodcastComponent"]
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

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title\">User Published Podcast </h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                            <button mat-raised-button type=\"submit\" [routerLink]=\"['/tables/userPublishedTable', podcastId]\"\n                                class=\"btn btn-sm btn-rose pull-right\">Add Podcast</button>\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\"\n                                cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>{{ dataTable.headerRow[0] }}</th>\n                                        <th>{{ dataTable.headerRow[1] }}</th>\n                                        <th>{{ dataTable.headerRow[2] }}</th>\n                                        <th>{{ dataTable.headerRow[3] }}</th>\n                                        <th>{{ dataTable.headerRow[4] }}</th>\n                                        <th class=\"disabled-sorting\">{{dataTable.headerRow[5]}}</th>\n                                        <th class=\"disabled-sorting\">{{dataTable.headerRow[6]}}</th>\n                                        <th [hidden]=\"true\">{{dataTable.headerRow[7]}}</th>\n                                        <th [hidden]=\"true\">{{dataTable.headerRow[8]}}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows; let i=index;\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td>{{row[4]}}</td>\n                                        <td>\n                                            <a [routerLink]=\"['/tables/userPublishedTable/'+row[7]]\" class=\"btn btn-link btn-warning btn-just-icon\"\n                                                style=\"color:rgb(171, 71, 188)\"><i class=\"material-icons\" style=\"font-size:18px\">remove_red_eye</i></a>\n                                        </td>\n                                        <td>\n                                            <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                        </td>\n                                        <td [hidden]=\"true\">{{row[7]}}</td>\n                                        <td [hidden]=\"true\">{{row[8]}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>"

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





var UserPublishedTableComponent = /** @class */ (function () {
    function UserPublishedTableComponent(http, router) {
        this.http = http;
        this.router = router;
        this.podcastId = angular2_uuid__WEBPACK_IMPORTED_MODULE_1__["UUID"].UUID();
        this.dataRowsFromDB = null;
        this.self = null;
    }
    UserPublishedTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.self = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append("token", localStorage.getItem("token"));
        headers.append("emailAddress", localStorage.getItem("emailAddress"));
        this.http.get('http://localhost:3000/getUserPublishedPodcast', { headers: headers }).subscribe(function (data) {
            console.log("message sending results", data);
            _this.dataRowsFromDB = data.json();
            _this.dataRowsFromDB = _this.dataRowsFromDB.data;
            console.log(_this.dataRowsFromDB);
            _this.dataTable = {
                headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'View', 'Actions', 'id', 'amount'],
                footerRow: [],
                dataRows: _this.dataRowsFromDB
            };
            var body = JSON.parse(data.text());
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: body.status,
                text: "",
                timer: 3000,
                showConfirmButton: false
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
        }, function (err) { console.log("message sending err", err); });
    };
    /*ngOnInit() {
      this.dataTable = {
        headerRow: ['Title', 'Artist', 'Date', 'Tag', 'Paid', 'Play', 'View', 'Actions', 'id', 'amount'],
        footerRow: [],
  
        dataRows: [
          ['Airi Satou', 'Andrew Mike', 'Develop', '2013', '99,225', '', '', '', '', ''],
          ['Angelica Ramos', 'John Doe', 'Design', '2012', '89,241', 'btn-round', '', '', '', '', ''],
          ['Ashton Cox', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple', '', '', '', '', '']
        ]
      };
  
    }*/
    UserPublishedTableComponent.prototype.ngAfterViewInit = function () {
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
        /*table.on('click','.view',function(e){
          console.log("Inside view");
          //const $tr = $(this).closest('tr');
          //const data = table.row($tr).data();
          //this.router.navigate(["tables/userPublishedTable/"+data[8]]);
          e.preventDefault();
        })
    
        // Edit record
        table.on('click', '.edit', function(e) {
          const $tr = $(this).closest('tr');
          const data = table.row($tr).data();
          alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
          e.preventDefault();
        });*/
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        //Like record
        /*table.on('click', '.like', function(e) {
          alert('You clicked on Like button');
          e.preventDefault();
        });*/
        $('.card .material-datatables label').addClass('form-group');
    };
    UserPublishedTableComponent.prototype.clickOnPlay = function (index) {
        console.log("clickOnPlay");
        var rowData = this.dataTable.dataRows[index];
        console.log(rowData);
        // play podcast
    };
    UserPublishedTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-published-table-cmp',
            template: __webpack_require__(/*! ./userPublishedTable.component.html */ "./src/app/tables/userPublishedTable/userPublishedTable.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserPublishedTableComponent);
    return UserPublishedTableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map