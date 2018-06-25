(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/MPNode.ts":
/*!***************************!*\
  !*** ./src/app/MPNode.ts ***!
  \***************************/
/*! exports provided: MPNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPNode", function() { return MPNode; });
/**
 * Created by sunlu on 2018/6/20.
 */
var MPNode = /** @class */ (function () {
    function MPNode() {
    }
    return MPNode;
}());



/***/ }),

/***/ "./src/app/Submit.ts":
/*!***************************!*\
  !*** ./src/app/Submit.ts ***!
  \***************************/
/*! exports provided: Submit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return Submit; });
/**
 * Created by sunlu on 2018/6/23.
 */
var Submit = /** @class */ (function () {
    function Submit() {
    }
    return Submit;
}());



/***/ }),

/***/ "./src/app/account.ts":
/*!****************************!*\
  !*** ./src/app/account.ts ***!
  \****************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/**
 * Created by sunlu on 2018/6/23.
 */
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _teacher_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teacher/lessons/lessons.component */ "./src/app/teacher/lessons/lessons.component.ts");
/* harmony import */ var _teacher_mindmap_mindmap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher/mindmap/mindmap.component */ "./src/app/teacher/mindmap/mindmap.component.ts");
/* harmony import */ var _student_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student/courses/courses.component */ "./src/app/student/courses/courses.component.ts");
/* harmony import */ var _student_studentmap_studentmap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/studentmap/studentmap.component */ "./src/app/student/studentmap/studentmap.component.ts");
/* harmony import */ var _student_shomework_shomework_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student/shomework/shomework.component */ "./src/app/student/shomework/shomework.component.ts");
/* harmony import */ var _student_sresource_sresource_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student/sresource/sresource.component */ "./src/app/student/sresource/sresource.component.ts");
/* harmony import */ var _student_scourseware_scourseware_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./student/scourseware/scourseware.component */ "./src/app/student/scourseware/scourseware.component.ts");
/* harmony import */ var _teacher_thomework_thomework_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./teacher/thomework/thomework.component */ "./src/app/teacher/thomework/thomework.component.ts");
/* harmony import */ var _teacher_tresource_tresource_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./teacher/tresource/tresource.component */ "./src/app/teacher/tresource/tresource.component.ts");
/* harmony import */ var _teacher_tcourseware_tcourseware_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teacher/tcourseware/tcourseware.component */ "./src/app/teacher/tcourseware/tcourseware.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"] },
    { path: 'mindmap/:username/:id', component: _teacher_mindmap_mindmap_component__WEBPACK_IMPORTED_MODULE_6__["MindmapComponent"] },
    { path: 'studentmap/:username/:id', component: _student_studentmap_studentmap_component__WEBPACK_IMPORTED_MODULE_8__["StudentmapComponent"] },
    { path: 'teacher/:username', component: _teacher_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_5__["LessonsComponent"] },
    { path: 'student/:username', component: _student_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__["CoursesComponent"] },
    { path: 'shomework/:username/:mapid/:lid/:node_id', component: _student_shomework_shomework_component__WEBPACK_IMPORTED_MODULE_9__["ShomeworkComponent"] },
    { path: 'sresource/:username/:mapid/:lid/:node_id', component: _student_sresource_sresource_component__WEBPACK_IMPORTED_MODULE_10__["SresourceComponent"] },
    { path: 'scourseware/:username/:mapid/:lid/:node_id', component: _student_scourseware_scourseware_component__WEBPACK_IMPORTED_MODULE_11__["ScoursewareComponent"] },
    { path: 'thomework/:username/:mapid/:lid/:node_id', component: _teacher_thomework_thomework_component__WEBPACK_IMPORTED_MODULE_12__["ThomeworkComponent"] },
    { path: 'tresource/:username/:mapid/:lid/:node_id', component: _teacher_tresource_tresource_component__WEBPACK_IMPORTED_MODULE_13__["TresourceComponent"] },
    { path: 'tcourseware/:username/:mapid/:lid/:node_id', component: _teacher_tcourseware_tcourseware_component__WEBPACK_IMPORTED_MODULE_14__["TcoursewareComponent"] },
    { path: 'mindmap', component: _teacher_mindmap_mindmap_component__WEBPACK_IMPORTED_MODULE_6__["MindmapComponent"] },
    { path: 'studentmap', component: _student_studentmap_studentmap_component__WEBPACK_IMPORTED_MODULE_8__["StudentmapComponent"] },
    { path: 'teacher', component: _teacher_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_5__["LessonsComponent"] },
    { path: 'student', component: _student_courses_courses_component__WEBPACK_IMPORTED_MODULE_7__["CoursesComponent"] },
    { path: 'shomework', component: _student_shomework_shomework_component__WEBPACK_IMPORTED_MODULE_9__["ShomeworkComponent"] },
    { path: 'sresource', component: _student_sresource_sresource_component__WEBPACK_IMPORTED_MODULE_10__["SresourceComponent"] },
    { path: 'scourseware', component: _student_scourseware_scourseware_component__WEBPACK_IMPORTED_MODULE_11__["ScoursewareComponent"] },
    { path: 'thomework', component: _teacher_thomework_thomework_component__WEBPACK_IMPORTED_MODULE_12__["ThomeworkComponent"] },
    { path: 'tresource', component: _teacher_tresource_tresource_component__WEBPACK_IMPORTED_MODULE_13__["TresourceComponent"] },
    { path: 'tcourseware', component: _teacher_tcourseware_tcourseware_component__WEBPACK_IMPORTED_MODULE_14__["TcoursewareComponent"] },
    { path: '', redirectTo: '/index', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title{\n    padding: 10px 0 0 0;\n}\n\n#content{\n    margin: 5% 0 0 0;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '混合式教学在线系统';
        this.content = '思维导图+个性化+主动学习+讨论式教学';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _teacher_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teacher/lessons/lessons.component */ "./src/app/teacher/lessons/lessons.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _teacher_mindmap_mindmap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teacher/mindmap/mindmap.component */ "./src/app/teacher/mindmap/mindmap.component.ts");
/* harmony import */ var _student_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student/courses/courses.component */ "./src/app/student/courses/courses.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _student_studentmap_studentmap_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./student/studentmap/studentmap.component */ "./src/app/student/studentmap/studentmap.component.ts");
/* harmony import */ var _teacher_thomework_thomework_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teacher/thomework/thomework.component */ "./src/app/teacher/thomework/thomework.component.ts");
/* harmony import */ var _teacher_tresource_tresource_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./teacher/tresource/tresource.component */ "./src/app/teacher/tresource/tresource.component.ts");
/* harmony import */ var _teacher_tcourseware_tcourseware_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./teacher/tcourseware/tcourseware.component */ "./src/app/teacher/tcourseware/tcourseware.component.ts");
/* harmony import */ var _student_shomework_shomework_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./student/shomework/shomework.component */ "./src/app/student/shomework/shomework.component.ts");
/* harmony import */ var _student_sresource_sresource_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./student/sresource/sresource.component */ "./src/app/student/sresource/sresource.component.ts");
/* harmony import */ var _student_scourseware_scourseware_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./student/scourseware/scourseware.component */ "./src/app/student/scourseware/scourseware.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _teacher_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_6__["LessonsComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_7__["IndexComponent"],
                _teacher_mindmap_mindmap_component__WEBPACK_IMPORTED_MODULE_8__["MindmapComponent"],
                _student_courses_courses_component__WEBPACK_IMPORTED_MODULE_9__["CoursesComponent"],
                _student_studentmap_studentmap_component__WEBPACK_IMPORTED_MODULE_13__["StudentmapComponent"],
                _teacher_thomework_thomework_component__WEBPACK_IMPORTED_MODULE_14__["ThomeworkComponent"],
                _teacher_tresource_tresource_component__WEBPACK_IMPORTED_MODULE_15__["TresourceComponent"],
                _teacher_tcourseware_tcourseware_component__WEBPACK_IMPORTED_MODULE_16__["TcoursewareComponent"],
                _student_shomework_shomework_component__WEBPACK_IMPORTED_MODULE_17__["ShomeworkComponent"],
                _student_sresource_sresource_component__WEBPACK_IMPORTED_MODULE_18__["SresourceComponent"],
                _student_scourseware_scourseware_component__WEBPACK_IMPORTED_MODULE_19__["ScoursewareComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                // NgbModule.forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__["FileUploadModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/course.ts":
/*!***************************!*\
  !*** ./src/app/course.ts ***!
  \***************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/**
 * Created by sunlu on 2018/6/14.
 */
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/courses.ts":
/*!****************************!*\
  !*** ./src/app/courses.ts ***!
  \****************************/
/*! exports provided: Courses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Courses", function() { return Courses; });
var Courses = /** @class */ (function () {
    function Courses() {
    }
    return Courses;
}());



/***/ }),

/***/ "./src/app/descripQ.ts":
/*!*****************************!*\
  !*** ./src/app/descripQ.ts ***!
  \*****************************/
/*! exports provided: DescripQ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescripQ1", function() { return DescripQ1; });
/**
 * Created by sunlu on 2018/6/20.
 */
var DescripQ1 = /** @class */ (function () {
    function DescripQ1() {
    }
    return DescripQ1;
}());



/***/ }),

/***/ "./src/app/download.service.ts":
/*!*************************************!*\
  !*** ./src/app/download.service.ts ***!
  \*************************************/
/*! exports provided: DownloadService, UploadService, RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadService", function() { return DownloadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _upfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upfile */ "./src/app/upfile.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DownloadService = /** @class */ (function () {
    function DownloadService(http) {
        this.http = http;
    }
    DownloadService.prototype.showfile = function (url) {
        var body = {};
        return this.http.post(url, body);
    };
    DownloadService.prototype.showlink = function (url, data) {
        var body = {};
        return this.http.post(url, data);
    };
    // Blob请求
    DownloadService.prototype.requestBlob = function (url, data) {
        return this.http.request('post', url, { body: data, observe: 'response', responseType: 'blob' });
    };
    // Blob文件转换下载
    DownloadService.prototype.downFile = function (result, fileName) {
        var data = result.body;
        var blob = new Blob([data]);
        var objectUrl = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.setAttribute('style', 'display:none');
        a.setAttribute('href', objectUrl);
        a.setAttribute('download', fileName);
        a.click();
        a.addEventListener('click', function () {
            URL.revokeObjectURL(objectUrl);
            document.getElementById('download').remove();
        });
    };
    DownloadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DownloadService);
    return DownloadService;
}());

var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.uploadLink = function (url, data) {
        return this.http.post(url, data);
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());

var RestService = /** @class */ (function () {
    function RestService(downloadService, uploadService, http) {
        this.downloadService = downloadService;
        this.uploadService = uploadService;
        this.http = http;
    }
    // 导出
    RestService.prototype.download = function (fileName, lid, mapid) {
        var _this = this;
        console.log('restservice export start');
        var url = 'http://13.67.110.158:8080/mindmap/download';
        var body = { 'filename': fileName,
            'lid': lid,
            'mapid': mapid
        };
        this.downloadService.requestBlob(url, body).subscribe(function (result) {
            _this.downloadService.downFile(result, fileName);
        });
    };
    RestService.prototype.download1 = function (fileName, lid, mapid) {
        var _this = this;
        console.log('restservice export start');
        var url = 'http://13.67.110.158:8080/mindmap/download1';
        var body = { 'filename': fileName,
            'lid': lid,
            'mapid': mapid };
        this.downloadService.requestBlob(url, body).subscribe(function (result) {
            _this.downloadService.downFile(result, fileName);
        });
    };
    RestService.prototype.show = function () {
        var url = 'http://13.67.110.158:8080/mindmap/showfile/1';
        // 得到文件名称数组
        return this.downloadService.showfile(url);
    };
    RestService.prototype.showLink = function (lid, node_id, mapid) {
        var url = 'http://13.67.110.158:8080/mindmap/get_link';
        var body = {
            'lid': lid,
            'node_id': node_id,
            'mapid': mapid,
        };
        return this.downloadService.showlink(url, body);
    };
    RestService.prototype.uploadLink = function (linkname, linkcontent, lid, node_id, mapid) {
        var url = 'http://13.67.110.158:8080/mindmap/upload_link';
        var body = {
            'linkname': linkname,
            'linkcontent': linkcontent,
            'lid': lid,
            'node_id': node_id,
            'mapid': mapid,
        };
        return this.uploadService.uploadLink(url, body);
    };
    RestService.prototype.uploadFileDescription = function (filename, fd, lid, node_id, mapid) {
        console.log("enter");
        var upFile = new _upfile__WEBPACK_IMPORTED_MODULE_2__["Upfile"]();
        upFile.node_id = node_id;
        upFile.lid = lid;
        upFile.filename = filename;
        upFile.fd = fd;
        upFile.mapid = mapid;
        console.log(upFile);
        var url = 'http://13.67.110.158:8080/mindmap/upload_fd';
        return this.http.post(url, upFile);
    };
    RestService.prototype.uploadFileDescription1 = function (filename, fd, lid, node_id, mapid) {
        console.log("enter");
        var upFile = new _upfile__WEBPACK_IMPORTED_MODULE_2__["Upfile"]();
        upFile.node_id = node_id;
        upFile.lid = lid;
        upFile.filename = filename;
        upFile.fd = fd;
        upFile.mapid = mapid;
        console.log(upFile);
        var url = 'http://13.67.110.158:8080/mindmap/upload_fd1';
        return this.http.post(url, upFile);
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [DownloadService, UploadService, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".index-top{\n    margin-top: 100px;\n    margin-bottom: 50px;\n}\n\n#title{\n    margin-bottom: 50px;\n    text-align: center; \n}\n\n#subtitle{\n    margin-right: 180px;\n    text-align: right;\n}\n\n#bt1{\n    padding: 8px 24px;\n    margin:  2% 0px 2% 42%;\n}\n\n#bt2{\n    padding: 8px 24px;\n    margin:  2% 0px 2% 5%;\n}\n\n#bt3{\n    padding: 8px 24px;\n    margin:  2% 0px 2% 5%;\n}"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head> \n  <meta charset=\"utf-8\"> \n  <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">  \n</head>\n  \n<div class=\"index-top\">\n  <h1 id=\"title\">\n    混合式教学在线系统\n  </h1>\n  <h5 id=\"subtitle\">\n      思维导图·个性化·主动学习·讨论式教学\n  </h5>\n</div>\n\n\n<a routerLink=\"/login\"><button type=\"button\" class=\"btn btn-default\" id=\"bt1\" >登录</button></a>\n\n<a routerLink=\"/register\"><button type=\"button\" class=\"btn btn-default\" id=\"bt2\">注册</button></a>\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
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

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.title = "混合式教学在线系统";
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/jsmind/js/jsmind.js":
/*!*************************************!*\
  !*** ./src/app/jsmind/js/jsmind.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Released under BSD License
 * Copyright (c) 2014-2016 hizzgdev@163.com
 *
 * Project Home:
 *   https://github.com/hizzgdev/jsmind/
 */

;(function($w){
    'use strict';       
    // set 'jsMind' as the library name.
    // __name__ should be a const value, Never try to change it easily.
    var __name__ = 'jsMind';
    // library version
    var __version__ = '0.4.6';
    // author
    var __author__ = 'hizzgdev@163.com';

    // an noop function define
    var _noop = function(){};
    var logger = (typeof console === 'undefined')?{
            log:_noop, debug:_noop, error:_noop, warn:_noop, info:_noop
        }:console;

    // check global variables
    if(typeof module === 'undefined' || !module.exports){
        if(typeof $w[__name__] != 'undefined'){
            logger.log(__name__+' has been already exist.');
            return;
        }
    }

    // shortcut of methods in dom
    var $d = $w.document;
    var $g = function(id){return $d.getElementById(id);};
    var $c = function(tag){return $d.createElement(tag);};
    var $t = function(n,t){if(n.hasChildNodes()){n.firstChild.nodeValue = t;}else{n.appendChild($d.createTextNode(t));}};
    var $h = function(n,t){n.innerHTML = t;};
    // detect isElement
    var $i = function(el){return !!el&&(typeof el==='object')&&(el.nodeType===1)&&(typeof el.style==='object')&&(typeof el.ownerDocument==='object');};
    if(typeof String.prototype.startsWith != 'function'){String.prototype.startsWith=function(p){return this.slice(0,p.length)===p;};}

    var DEFAULT_OPTIONS = {
        container : '',   // id of the container
        editable : false, // you can change it in your options
        theme : null,
        mode :'full',     // full or side
        support_html : true,

        view:{
            hmargin:100,
            vmargin:50,
            line_width:2,
            line_color:'#555'
        },
        layout:{
            hspace:30,
            vspace:20,
            pspace:13
        },
        default_event_handle:{
            enable_mousedown_handle:true,
            enable_click_handle:true,
            enable_dblclick_handle:true
        },
        shortcut:{
            enable:true,
            handles:{
            },
            mapping:{
                addchild   : 45, // Insert
                addbrother : 13, // Enter
                editnode   : 113,// F2
                delnode    : 46, // Delete
                toggle     : 32, // Space
                left       : 37, // Left
                up         : 38, // Up
                right      : 39, // Right
                down       : 40, // Down
            }
        },
    };

    // core object
    var jm = function(options){
        jm.current = this;

        this.version = __version__;
        var opts = {};
        jm.util.json.merge(opts, DEFAULT_OPTIONS);
        jm.util.json.merge(opts, options);

        if(!opts.container){
            logger.error('the options.container should not be null or empty.');
            return;
        }
        this.options = opts;
        this.inited = false;
        this.mind = null;
        this.event_handles = [];
        this.init();
    };

    // ============= static object =============================================
    jm.direction = {left:-1,center:0,right:1};
    jm.event_type = {show:1,resize:2,edit:3,select:4};

    jm.node = function(sId,iIndex,sTopic,oData,bIsRoot,oParent,eDirection,bExpanded){
        if(!sId){logger.error('invalid nodeid');return;}
        if(typeof iIndex != 'number'){logger.error('invalid node index');return;}
        if(typeof bExpanded === 'undefined'){bExpanded = true;}
        this.id = sId;
        this.index = iIndex;
        this.topic = sTopic;
        this.data = oData || {};
        this.isroot = bIsRoot;
        this.parent = oParent;
        this.direction = eDirection;
        this.expanded = !!bExpanded;
        this.children = [];
        this._data = {};
    };

    jm.node.compare=function(node1,node2){
        // '-1' is alwary the last
        var r = 0;
        var i1 = node1.index;
        var i2 = node2.index;
        if(i1>=0 && i2>=0){
            r = i1-i2;
        }else if(i1==-1 && i2==-1){
            r = 0;
        }else if(i1==-1){
            r = 1;
        }else if(i2==-1){
            r = -1;
        }else{
            r = 0;
        }
        //logger.debug(i1+' <> '+i2+'  =  '+r);
        return r;
    };

    jm.node.inherited=function(pnode,node){
        if(!!pnode && !!node){
            if(pnode.id === node.id){
                return true;
            }
            if(pnode.isroot){
                return true;
            }
            var pid = pnode.id;
            var p = node;
            while(!p.isroot){
                p = p.parent;
                if(p.id === pid){
                    return true;
                }
            }
        }
        return false;
    };

    jm.node.prototype = {
        get_location:function(){
            var vd = this._data.view;
            return {
                x:vd.abs_x,
                y:vd.abs_y
            };
        },
        get_size:function(){
            var vd = this._data.view;
            return {
                w:vd.width,
                h:vd.height
            }
        }
    };


    jm.mind = function(){
        this.name = null;
        this.author = null;
        this.version = null;
        this.root = null;
        this.selected = null;
        this.nodes = {};
    };

    jm.mind.prototype = {
        get_node:function(nodeid){
            if(nodeid in this.nodes){
                return this.nodes[nodeid];
            }else{
                logger.warn('the node[id='+nodeid+'] can not be found');
                return null;
            }
        },

        set_root:function(nodeid, topic, data){
            if(this.root == null){
                this.root = new jm.node(nodeid, 0, topic, data, true);
                this._put_node(this.root);
            }else{
                logger.error('root node is already exist');
            }
        },

        add_node:function(parent_node, nodeid, topic, data, idx, direction, expanded){
            if(!jm.util.is_node(parent_node)){
                var the_parent_node = this.get_node(parent_node);
                if(!the_parent_node){
                    logger.error('the parent_node[id='+parent_node+'] can not be found.');
                    return null;
                }else{
                    return this.add_node(the_parent_node, nodeid, topic, data, idx, direction, expanded);
                }
            }
            var nodeindex = idx || -1;
            var node = null;
            if(parent_node.isroot){
                var d = jm.direction.right;
                if(isNaN(direction)){
                    var children = parent_node.children;
                    var children_len = children.length;
                    var r = 0;
                    for(var i=0;i<children_len;i++){if(children[i].direction === jm.direction.left){r--;}else{r++;}}
                    d = (children_len > 1 && r > 0) ? jm.direction.left : jm.direction.right
                }else{
                    d = (direction != jm.direction.left) ? jm.direction.right : jm.direction.left;
                }
                node = new jm.node(nodeid,nodeindex,topic,data,false,parent_node,d,expanded);
            }else{
                node = new jm.node(nodeid,nodeindex,topic,data,false,parent_node,parent_node.direction,expanded);
            }
            if(this._put_node(node)){
                parent_node.children.push(node);
                this._reindex(parent_node);
            }else{
                logger.error('fail, the nodeid \''+node.id+'\' has been already exist.');
                node = null;
            }
            return node;
        },

        insert_node_before:function(node_before, nodeid, topic, data){
            if(!jm.util.is_node(node_before)){
                var the_node_before = this.get_node(node_before);
                if(!the_node_before){
                    logger.error('the node_before[id='+node_before+'] can not be found.');
                    return null;
                }else{
                    return this.insert_node_before(the_node_before, nodeid, topic, data);
                }
            }
            var node_index = node_before.index-0.5;
            return this.add_node(node_before.parent, nodeid, topic, data, node_index);
        },

        get_node_before:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return null;
                }else{
                    return this.get_node_before(the_node);
                }
            }
            if(node.isroot){return null;}
            var idx = node.index - 2;
            if(idx >= 0){
                return node.parent.children[idx];
            }else{
                return null;
            }
        },

        insert_node_after:function(node_after, nodeid, topic, data){
            if(!jm.util.is_node(node_after)){
                var the_node_after = this.get_node(node_before);
                if(!the_node_after){
                    logger.error('the node_after[id='+node_after+'] can not be found.');
                    return null;
                }else{
                    return this.insert_node_after(the_node_after, nodeid, topic, data);
                }
            }
            var node_index = node_after.index + 0.5;
            return this.add_node(node_after.parent, nodeid, topic, data, node_index);
        },

        get_node_after:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return null;
                }else{
                    return this.get_node_after(the_node);
                }
            }
            if(node.isroot){return null;}
            var idx = node.index;
            var brothers = node.parent.children;
            if(brothers.length >= idx){
                return node.parent.children[idx];
            }else{
                return null;
            }
        },

        move_node:function(node, beforeid, parentid, direction){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return null;
                }else{
                    return this.move_node(the_node, beforeid, parentid, direction);
                }
            }
            if(!parentid){
                parentid = node.parent.id;
            }
            return this._move_node(node, beforeid, parentid, direction);
        },

        _flow_node_direction:function(node,direction){
            if(typeof direction === 'undefined'){
                direction = node.direction;
            }else{
                node.direction = direction;
            }
            var len = node.children.length;
            while(len--){
                this._flow_node_direction(node.children[len],direction);
            }
        },

        _move_node_internal:function(node, beforeid){
            if(!!node && !!beforeid){
                if(beforeid == '_last_'){
                    node.index = -1;
                    this._reindex(node.parent);
                }else if(beforeid == '_first_'){
                    node.index = 0;
                    this._reindex(node.parent);
                }else{
                    var node_before = (!!beforeid)?this.get_node(beforeid):null;
                    if(node_before!=null && node_before.parent!=null && node_before.parent.id==node.parent.id){
                        node.index = node_before.index - 0.5;
                        this._reindex(node.parent);
                    }
                }
            }
            return node;
        },

        _move_node:function(node, beforeid, parentid, direction){
            if(!!node && !!parentid){
                if(node.parent.id != parentid){
                    // remove from parent's children
                    var sibling = node.parent.children;
                    var si = sibling.length;
                    while(si--){
                        if(sibling[si].id == node.id){
                            sibling.splice(si,1);
                            break;
                        }
                    }
                    node.parent = this.get_node(parentid);
                    node.parent.children.push(node);
                }

                if(node.parent.isroot){
                    if(direction == jsMind.direction.left){
                        node.direction = direction;
                    }else{
                        node.direction = jm.direction.right;
                    }
                }else{
                    node.direction = node.parent.direction;
                }
                this._move_node_internal(node, beforeid);
                this._flow_node_direction(node);
            }
            return node;
        },

        remove_node:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return false;
                }else{
                    return this.remove_node(the_node);
                }
            }
            if(!node){
                logger.error('fail, the node can not be found');
                return false;
            }
            if(node.isroot){
                logger.error('fail, can not remove root node');
                return false;
            }
            if(this.selected!=null && this.selected.id == node.id){
                this.selected = null;
            }
            // clean all subordinate nodes
            var children = node.children;
            var ci = children.length;
            while(ci--){
                this.remove_node(children[ci]);
            }
            // clean all children
            children.length = 0;
            // remove from parent's children
            var sibling = node.parent.children;
            var si = sibling.length;
            while(si--){
                if(sibling[si].id == node.id){
                    sibling.splice(si,1);
                    break;
                }
            }
            // remove from global nodes
            delete this.nodes[node.id];
            // clean all properties
            for(var k in node){
                delete node[k];
            }
            // remove it's self
            node = null;
            //delete node;
            return true;
        },

        _put_node:function(node){
            if(node.id in this.nodes){
                logger.warn('the nodeid \''+node.id+'\' has been already exist.');
                return false;
            }else{
                this.nodes[node.id] = node;
                return true;
            }
        },

        _reindex:function(node){
            if(node instanceof jm.node){
                node.children.sort(jm.node.compare);
                for(var i=0;i<node.children.length;i++){
                    node.children[i].index = i+1;
                }
            }
        },
    };

    jm.format = {
        node_tree:{
            example:{
                "meta":{
                    "name":__name__,
                    "author":__author__,
                    "version":__version__
                },
                "format":"node_tree",
                "data":{"id":"root","topic":"jsMind Example"}
            },
            get_mind:function(source){
                var df = jm.format.node_tree;
                var mind = new jm.mind();
                mind.name = source.meta.name;
                mind.author = source.meta.author;
                mind.version = source.meta.version;
                df._parse(mind,source.data);
                return mind;
            },
            get_data:function(mind){
                var df = jm.format.node_tree;
                var json = {};
                json.meta = {
                    name : mind.name,
                    author : mind.author,
                    version : mind.version
                };
                json.format = 'node_tree';
                json.data = df._buildnode(mind.root);
                return json;
            },

            _parse:function(mind, node_root){
                var df = jm.format.node_tree;
                var data = df._extract_data(node_root);
                mind.set_root(node_root.id, node_root.topic, data);
                if('children' in node_root){
                    var children = node_root.children;
                    for(var i=0;i<children.length;i++){
                        df._extract_subnode(mind, mind.root, children[i]);
                    }
                }
            },

            _extract_data:function(node_json){
                var data = {};
                for(var k in node_json){
                    if(k == 'id' || k=='topic' || k=='children' || k=='direction' || k=='expanded'){
                        continue;
                    }
                    data[k] = node_json[k];
                }
                return data;
            },

            _extract_subnode:function(mind, node_parent, node_json){
                var df = jm.format.node_tree;
                var data = df._extract_data(node_json);
                var d = null;
                if(node_parent.isroot){
                    d = node_json.direction == 'left'?jm.direction.left:jm.direction.right;
                }
                var node = mind.add_node(node_parent, node_json.id, node_json.topic, data, null, d, node_json.expanded);
                if('children' in node_json){
                    var children = node_json.children;
                    for(var i=0;i<children.length;i++){
                        df._extract_subnode(mind, node, children[i]);
                    }
                }
            },

            _buildnode:function(node){
                var df = jm.format.node_tree;
                if(!(node instanceof jm.node)){return;}
                var o = {
                    id : node.id,
                    topic : node.topic,
                    expanded : node.expanded
                };
                if(!!node.parent && node.parent.isroot){
                    o.direction = node.direction == jm.direction.left?'left':'right';
                }
                if(node.data != null){
                    var node_data = node.data;
                    for(var k in node_data){
                        o[k] = node_data[k];
                    }
                }
                var children = node.children;
                if(children.length > 0){
                    o.children = [];
                    for(var i=0;i<children.length;i++){
                        o.children.push(df._buildnode(children[i]));
                    }
                }
                return o;
            }
        },

        node_array:{
            example:{
                "meta":{
                    "name":__name__,
                    "author":__author__,
                    "version":__version__
                },
                "format":"node_array",
                "data":[
                    {"id":"root","topic":"jsMind Example", "isroot":true}
                ]
            },

            get_mind:function(source){
                var df = jm.format.node_array;
                var mind = new jm.mind();
                mind.name = source.meta.name;
                mind.author = source.meta.author;
                mind.version = source.meta.version;
                df._parse(mind,source.data);
                return mind;
            },

            get_data:function(mind){
                var df = jm.format.node_array;
                var json = {};
                json.meta = {
                    name : mind.name,
                    author : mind.author,
                    version : mind.version
                };
                json.format = 'node_array';
                json.data = [];
                df._array(mind,json.data);
                return json;
            },

            _parse:function(mind, node_array){
                var df = jm.format.node_array;
                var narray = node_array.slice(0);
                // reverse array for improving looping performance
                narray.reverse();
                var root_id = df._extract_root(mind, narray);
                if(!!root_id){
                    df._extract_subnode(mind, root_id, narray);
                }else{
                    logger.error('root node can not be found');
                }
            },

            _extract_root:function(mind, node_array){
                var df = jm.format.node_array;
                var i = node_array.length;
                while(i--){
                    if('isroot' in node_array[i] && node_array[i].isroot){
                        var root_json = node_array[i];
                        var data = df._extract_data(root_json);
                        mind.set_root(root_json.id,root_json.topic,data);
                        node_array.splice(i,1);
                        return root_json.id;
                    }
                }
                return null;
            },

            _extract_subnode:function(mind, parentid, node_array){
                var df = jm.format.node_array;
                var i = node_array.length;
                var node_json = null;
                var data = null;
                var extract_count = 0;
                while(i--){
                    node_json = node_array[i];
                    if(node_json.parentid == parentid){
                        data = df._extract_data(node_json);
                        var d = null;
                        var node_direction = node_json.direction;
                        if(!!node_direction){
                            d = node_direction == 'left'?jm.direction.left:jm.direction.right;
                        }
                        mind.add_node(parentid, node_json.id, node_json.topic, data, null, d, node_json.expanded);
                        node_array.splice(i,1);
                        extract_count ++;
                        var sub_extract_count = df._extract_subnode(mind, node_json.id, node_array);
                        if(sub_extract_count > 0){
                            // reset loop index after extract subordinate node
                            i = node_array.length;
                            extract_count += sub_extract_count;
                        }
                    }
                }
                return extract_count;
            },

            _extract_data:function(node_json){
                var data = {};
                for(var k in node_json){
                    if(k == 'id' || k=='topic' || k=='parentid' || k=='isroot' || k=='direction' || k=='expanded'){
                        continue;
                    }
                    data[k] = node_json[k];
                }
                return data;
            },

            _array:function(mind, node_array){
                var df = jm.format.node_array;
                df._array_node(mind.root, node_array);
            },

            _array_node:function(node, node_array){
                var df = jm.format.node_array;
                if(!(node instanceof jm.node)){return;}
                var o = {
                    id : node.id,
                    topic : node.topic,
                    expanded : node.expanded
                };
                if(!!node.parent){
                    o.parentid = node.parent.id;
                }
                if(node.isroot){
                    o.isroot = true;
                }
                if(!!node.parent && node.parent.isroot){
                    o.direction = node.direction == jm.direction.left?'left':'right';
                }
                if(node.data != null){
                    var node_data = node.data;
                    for(var k in node_data){
                        o[k] = node_data[k];
                    }
                }
                node_array.push(o);
                var ci = node.children.length;
                for(var i=0;i<ci;i++){
                    df._array_node(node.children[i], node_array);
                }
            },
        },

        freemind:{
            example:{
                "meta":{
                    "name":__name__,
                    "author":__author__,
                    "version":__version__
                },
                "format":"freemind",
                "data":"<map version=\"1.0.1\"><node ID=\"root\" TEXT=\"freemind Example\"/></map>"
            },
            get_mind:function(source){
                var df = jm.format.freemind;
                var mind = new jm.mind();
                mind.name = source.meta.name;
                mind.author = source.meta.author;
                mind.version = source.meta.version;
                var xml = source.data;
                var xml_doc = df._parse_xml(xml);
                var xml_root = df._find_root(xml_doc);
                df._load_node(mind, null, xml_root);
                return mind;
            },

            get_data:function(mind){
                var df = jm.format.freemind;
                var json = {};
                json.meta = {
                    name : mind.name,
                    author : mind.author,
                    version : mind.version
                };
                json.format = 'freemind';
                var xmllines = [];
                xmllines.push('<map version=\"1.0.1\">');
                df._buildmap(mind.root, xmllines);
                xmllines.push('</map>');
                json.data = xmllines.join(' ');
                return json;
            },

            _parse_xml:function(xml){
                var xml_doc = null;
                if (window.DOMParser){
                    var parser = new DOMParser();
                    xml_doc = parser.parseFromString(xml,'text/xml');
                }else{ // Internet Explorer
                    xml_doc = new ActiveXObject('Microsoft.XMLDOM');
                    xml_doc.async = false;
                    xml_doc.loadXML(xml);
                }
                return xml_doc;
            },

            _find_root:function(xml_doc){
                var nodes = xml_doc.childNodes;
                var node = null;
                var root = null;
                var n = null;
                for(var i=0;i<nodes.length;i++){
                    n = nodes[i];
                    if(n.nodeType == 1 && n.tagName == 'map'){
                        node = n;
                        break;
                    }
                }
                if(!!node){
                    var ns = node.childNodes;
                    node = null;
                    for(var i=0;i<ns.length;i++){
                        n = ns[i];
                        if(n.nodeType == 1 && n.tagName == 'node'){
                            node = n;
                            break;
                        }
                    }
                }
                return node;
            },

            _load_node:function(mind, parent_id, xml_node){
                var df = jm.format.freemind;
                var node_id = xml_node.getAttribute('ID');
                var node_topic = xml_node.getAttribute('TEXT');
                // look for richcontent
                if(node_topic == null){
                    var topic_children = xml_node.childNodes;
                    var topic_child = null;
                    for(var i=0;i<topic_children.length;i++){
                        topic_child = topic_children[i];
                        //logger.debug(topic_child.tagName);
                        if(topic_child.nodeType == 1 && topic_child.tagName === 'richcontent'){
                            node_topic = topic_child.textContent;
                            break;
                        }
                    }
                }
                var node_data = df._load_attributes(xml_node);
                var node_expanded = ('expanded' in node_data)?(node_data.expanded == 'true') : true;
                delete node_data.expanded;

                var node_position = xml_node.getAttribute('POSITION');
                var node_direction = null;
                if(!!node_position){
                    node_direction = node_position=='left'?jm.direction.left:jm.direction.right;
                }
                //logger.debug(node_position +':'+ node_direction);
                if(!!parent_id){
                    mind.add_node(parent_id, node_id, node_topic, node_data, null, node_direction, node_expanded);
                }else{
                    mind.set_root(node_id, node_topic, node_data);
                }
                var children = xml_node.childNodes;
                var child = null;
                for(var i=0;i<children.length;i++){
                    child = children[i];
                    if(child.nodeType == 1 && child.tagName == 'node'){
                        df._load_node(mind, node_id, child);
                    }
                }
            },

            _load_attributes:function(xml_node){
                var children = xml_node.childNodes;
                var attr = null;
                var attr_data = {};
                for(var i=0;i<children.length;i++){
                    attr = children[i];
                    if(attr.nodeType == 1 && attr.tagName === 'attribute'){
                        attr_data[attr.getAttribute('NAME')] = attr.getAttribute('VALUE');
                    }
                }
                return attr_data;
            },

            _buildmap:function(node, xmllines){
                var df = jm.format.freemind;
                var pos = null;
                if(!!node.parent && node.parent.isroot){
                    pos = node.direction === jm.direction.left?'left':'right';
                }
                xmllines.push('<node');
                xmllines.push('ID=\"'+node.id+'\"');
                if(!!pos){
                    xmllines.push('POSITION=\"'+pos+'\"');
                }
                xmllines.push('TEXT=\"'+node.topic+'\">');

                // store expanded status as an attribute
                xmllines.push('<attribute NAME=\"expanded\" VALUE=\"'+node.expanded+'\"/>');

                // for attributes
                var node_data = node.data;
                if(node_data != null){
                    for(var k in node_data){
                        xmllines.push('<attribute NAME=\"'+k+'\" VALUE=\"'+node_data[k]+'\"/>');
                    }
                }

                // for children
                var children = node.children;
                for(var i=0;i<children.length;i++){
                    df._buildmap(children[i], xmllines);
                }

                xmllines.push('</node>');
            },
        },
    };

    // ============= utility object =============================================

    jm.util = {
        is_node: function(node){
            return !!node && node instanceof jm.node;
        },
        ajax:{
            _xhr:function(){
                var xhr = null;
                if(window.XMLHttpRequest){
                    xhr = new XMLHttpRequest();
                }else{
                    try{
                        xhr = new ActiveXObject('Microsoft.XMLHTTP');
                    }catch(e){}
                }
                return xhr;
            },
            _eurl:function(url){
                return encodeURIComponent(url);
            },
            request:function(url,param,method,callback,fail_callback){
                var a = jm.util.ajax;
                var p = null;
                var tmp_param = [];
                for(var k in param){
                    tmp_param.push(a._eurl(k)+'='+a._eurl(param[k]));
                }
                if(tmp_param.length>0){
                    p = tmp_param.join('&');
                }
                var xhr = a._xhr();
                if(!xhr){return;}
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4){
                        if(xhr.status == 200 || xhr.status == 0){
                            if(typeof callback === 'function'){
                                var data = jm.util.json.string2json(xhr.responseText);
                                if(data != null){
                                    callback(data);
                                }else{
                                    callback(xhr.responseText);
                                }
                            }
                        }else{
                            if(typeof fail_callback === 'function'){
                                fail_callback(xhr);
                            }else{
                                logger.error('xhr request failed.',xhr);
                            }
                        }
                    }
                }
                method = method || 'GET';
                xhr.open(method,url,true);
                xhr.setRequestHeader('If-Modified-Since','0');
                if(method == 'POST'){
                    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=utf-8');
                    xhr.send(p);
                }else{
                    xhr.send();
                }
            },
            get:function(url,callback){
                return jm.util.ajax.request(url,{},'GET',callback);
            },
            post:function(url,param,callback){
                return jm.util.ajax.request(url,param,'POST',callback);
            }
        },

        dom:{
            //target,eventType,handler
            add_event:function(t,e,h){
                if(!!t.addEventListener){
                    t.addEventListener(e,h,false);
                }else{
                    t.attachEvent('on'+e,h);
                }
            }
        },

        canvas:{
            bezierto: function(ctx,x1,y1,x2,y2){
                ctx.beginPath();
                ctx.moveTo(x1,y1);
                ctx.bezierCurveTo(x1+(x2-x1)*2/3,y1,x1,y2,x2,y2);
                ctx.stroke();
            },
            lineto : function(ctx,x1,y1,x2,y2){
                ctx.beginPath();
                ctx.moveTo(x1,y1);
                ctx.lineTo(x2,y2);
                ctx.stroke();
            },
            clear:function(ctx,x,y,w,h){
                ctx.clearRect(x,y,w,h);
            }
        },

        file:{
            read:function(file_data,fn_callback){
                var reader = new FileReader();
                reader.onload = function(){
                    if(typeof fn_callback === 'function'){
                        fn_callback(this.result, file_data.name);
                    }
                };
                reader.readAsText(file_data);
            },

            save:function(file_data, type, name) {
                var blob;
                if (typeof $w.Blob === 'function') {
                    blob = new Blob([file_data], {type: type});
                } else {
                    var BlobBuilder = $w.BlobBuilder || $w.MozBlobBuilder || $w.WebKitBlobBuilder || $w.MSBlobBuilder;
                    var bb = new BlobBuilder();
                    bb.append(file_data);
                    blob = bb.getBlob(type);
                }
                if (navigator.msSaveBlob) {
                    navigator.msSaveBlob(blob, name);
                } else {
                    var URL = $w.URL || $w.webkitURL;
                    var bloburl = URL.createObjectURL(blob);
                    var anchor = $c('a');
                    if ('download' in anchor) {
                        anchor.style.visibility = 'hidden';
                        anchor.href = bloburl;
                        anchor.download = name;
                        $d.body.appendChild(anchor);
                        var evt = $d.createEvent('MouseEvents');
                        evt.initEvent('click', true, true);
                        anchor.dispatchEvent(evt);
                        $d.body.removeChild(anchor);
                    } else {
                        location.href = bloburl;
                    }
                }
            }
        },

        json:{
            json2string:function(json){
                if(!!JSON){
                    try{
                        var json_str = JSON.stringify(json);
                        return json_str;
                    }catch(e){
                        logger.warn(e);
                        logger.warn('can not convert to string');
                        return null;
                    }
                }
            },
            string2json:function(json_str){
                if(!!JSON){
                    try{
                        var json = JSON.parse(json_str);
                        return json;
                    }catch(e){
                        logger.warn(e);
                        logger.warn('can not parse to json');
                        return null;
                    }
                }
            },
            merge:function(b,a){
                for(var o in a){
                    if(o in b){
                        if(typeof b[o] === 'object' &&
                            Object.prototype.toString.call(b[o]).toLowerCase() == '[object object]' &&
                            !b[o].length){
                            jm.util.json.merge(b[o], a[o]);
                        }else{
                            b[o] = a[o];
                        }
                    }else{
                        b[o] = a[o];
                    }
                }
                return b;
            }
        },

        uuid:{
            newid:function(){
                return (new Date().getTime().toString(16)+Math.random().toString(16).substr(2)).substr(2,16);
            }
        },

        text:{
            is_empty:function(s){
                if(!s){return true;}
                return s.replace(/\s*/,'').length == 0;
            }
        }
    };

    jm.prototype={
        init : function(){
            if(this.inited){return;}
            this.inited = true;

            var opts = this.options;

            var opts_layout = {
                mode:opts.mode,
                hspace:opts.layout.hspace,
                vspace:opts.layout.vspace,
                pspace:opts.layout.pspace
            }
            var opts_view = {
                container:opts.container,
                support_html:opts.support_html,
                hmargin:opts.view.hmargin,
                vmargin:opts.view.vmargin,
                line_width:opts.view.line_width,
                line_color:opts.view.line_color
            };
            // create instance of function provider
            this.data = new jm.data_provider(this);
            this.layout = new jm.layout_provider(this, opts_layout);
            this.view = new jm.view_provider(this, opts_view);
            this.shortcut = new jm.shortcut_provider(this, opts.shortcut);

            this.data.init();
            this.layout.init();
            this.view.init();
            this.shortcut.init();

            this._event_bind();

            jm.init_plugins(this);
        },

        enable_edit:function(){
            this.options.editable = true;
        },

        disable_edit:function(){
            this.options.editable = false;
        },

        // call enable_event_handle('dblclick')
        // options are 'mousedown', 'click', 'dblclick'
        enable_event_handle: function(event_handle){
            this.options.default_event_handle['enable_'+event_handle+'_handle'] = true;
        },

        // call disable_event_handle('dblclick')
        // options are 'mousedown', 'click', 'dblclick'
        disable_event_handle: function(event_handle){
            this.options.default_event_handle['enable_'+event_handle+'_handle'] = false;
        },

        get_editable:function(){
            return this.options.editable;
        },

        set_theme:function(theme){
            var theme_old = this.options.theme;
            this.options.theme = (!!theme) ? theme : null;
            if(theme_old != this.options.theme){
                this.view.reset_theme();
                this.view.reset_custom_style();
            }
        },
        _event_bind:function(){
            this.view.add_event(this,'mousedown',this.mousedown_handle);
            this.view.add_event(this,'click',this.click_handle);
            this.view.add_event(this,'dblclick',this.dblclick_handle);
        },

        mousedown_handle:function(e){
            if (!this.options.default_event_handle['enable_mousedown_handle']) {
                return;
            }
            var element = e.target || event.srcElement;
            var nodeid = this.view.get_binded_nodeid(element);
            if(!!nodeid){
                this.select_node(nodeid);
            }else{
                this.select_clear();
            }
        },

        click_handle:function(e){
            if (!this.options.default_event_handle['enable_click_handle']) {
                return;
            }
            var element = e.target || event.srcElement;
            var isexpander = this.view.is_expander(element);
            if(isexpander){
                var nodeid = this.view.get_binded_nodeid(element);
                if(!!nodeid){
                    this.toggle_node(nodeid);
                }
            }
        },

        dblclick_handle:function(e){
            if (!this.options.default_event_handle['enable_dblclick_handle']) {
                return;
            }
            if(this.get_editable()){
                var element = e.target || event.srcElement;
                var nodeid = this.view.get_binded_nodeid(element);
                if(!!nodeid){
                    this.begin_edit(nodeid);
                }
            }
        },

        begin_edit:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return false;
                }else{
                    return this.begin_edit(the_node);
                }
            }
            if(this.get_editable()){
                this.view.edit_node_begin(node);
            }else{
                logger.error('fail, this mind map is not editable.');
                return;
            }
        },

        end_edit:function(){
            this.view.edit_node_end();
        },

        toggle_node:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return;
                }else{
                    return this.toggle_node(the_node);
                }
            }
            if(node.isroot){return;}
            this.view.save_location(node);
            this.layout.toggle_node(node);
            this.view.relayout();
            this.view.restore_location(node);
        },

        expand_node:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return;
                }else{
                    return this.expand_node(the_node);
                }
            }
            if(node.isroot){return;}
            this.view.save_location(node);
            this.layout.expand_node(node);
            this.view.relayout();
            this.view.restore_location(node);
        },

        collapse_node:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return;
                }else{
                    return this.collapse_node(the_node);
                }
            }
            if(node.isroot){return;}
            this.view.save_location(node);
            this.layout.collapse_node(node);
            this.view.relayout();
            this.view.restore_location(node);
        },

        expand_all:function(){
            this.layout.expand_all();
            this.view.relayout();
        },

        collapse_all:function(){
            this.layout.collapse_all();
            this.view.relayout();
        },

        expand_to_depth:function(depth){
            this.layout.expand_to_depth(depth);
            this.view.relayout();
        },

        _reset:function(){
            this.view.reset();
            this.layout.reset();
            this.data.reset();
        },

        _show:function(mind){
            var m = mind || jm.format.node_array.example;

            this.mind = this.data.load(m);
            if(!this.mind){
                logger.error('data.load error');
                return;
            }else{
                logger.debug('data.load ok');
            }

            this.view.load();
            logger.debug('view.load ok');

            this.layout.layout();
            logger.debug('layout.layout ok');

            this.view.show(true);
            logger.debug('view.show ok');

            this.invoke_event_handle(jm.event_type.show,{data:[mind]});
        },

        show : function(mind){
            this._reset();
            this._show(mind);
        },

        get_meta: function(){
            return {
                name : this.mind.name,
                author : this.mind.author,
                version : this.mind.version
            };
        },

        get_data: function(data_format){
            var df = data_format || 'node_tree';
            return this.data.get_data(df);
        },

        get_root:function(){
            return this.mind.root;
        },

        get_node:function(nodeid){
            return this.mind.get_node(nodeid);
        },

        add_node:function(parent_node, nodeid, topic, data){
            if(this.get_editable()){
                var node = this.mind.add_node(parent_node, nodeid, topic, data);
                if(!!node){
                    this.view.add_node(node);
                    this.layout.layout();
                    this.view.show(false);
                    this.view.reset_node_custom_style(node);
                    this.expand_node(parent_node);
                    this.invoke_event_handle(jm.event_type.edit,{evt:'add_node',data:[parent_node.id,nodeid,topic,data],node:nodeid});
                }
                return node;
            }else{
                logger.error('fail, this mind map is not editable');
                return null;
            }
        },

        insert_node_before:function(node_before, nodeid, topic, data){
            if(this.get_editable()){
                var beforeid = jm.util.is_node(node_before) ? node_before.id : node_before;
                var node = this.mind.insert_node_before(node_before, nodeid, topic, data);
                if(!!node){
                    this.view.add_node(node);
                    this.layout.layout();
                    this.view.show(false);
                    this.invoke_event_handle(jm.event_type.edit,{evt:'insert_node_before',data:[beforeid,nodeid,topic,data],node:nodeid});
                }
                return node;
            }else{
                logger.error('fail, this mind map is not editable');
                return null;
            }
        },

        insert_node_after:function(node_after, nodeid, topic, data){
            if(this.get_editable()){
                var afterid = jm.util.is_node(node_after) ? node_after.id : node_after;
                var node = this.mind.insert_node_after(node_after, nodeid, topic, data);
                if(!!node){
                    this.view.add_node(node);
                    this.layout.layout();
                    this.view.show(false);
                    this.invoke_event_handle(jm.event_type.edit,{evt:'insert_node_after',data:[afterid,nodeid,topic,data],node:nodeid});
                }
                return node;
            }else{
                logger.error('fail, this mind map is not editable');
                return null;
            }
        },

        remove_node:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return false;
                }else{
                    return this.remove_node(the_node);
                }
            }
            if(this.get_editable()){
                if(node.isroot){
                    logger.error('fail, can not remove root node');
                    return false;
                }
                var nodeid = node.id;
                var parentid = node.parent.id;
                var parent_node = this.get_node(parentid);
                this.view.save_location(parent_node);
                this.view.remove_node(node);
                this.mind.remove_node(node);
                this.layout.layout();
                this.view.show(false);
                this.view.restore_location(parent_node);
                this.invoke_event_handle(jm.event_type.edit,{evt:'remove_node',data:[nodeid],node:parentid});
                return true;
            }else{
                logger.error('fail, this mind map is not editable');
                return false;
            }
        },

        update_node:function(nodeid, topic){
            if(this.get_editable()){
                if(jm.util.text.is_empty(topic)){
                    logger.warn('fail, topic can not be empty');
                    return;
                }
                var node = this.get_node(nodeid);
                if(!!node){
                    if(node.topic === topic){
                        logger.info('nothing changed');
                        this.view.update_node(node);
                        return;
                    }
                    node.topic = topic;
                    this.view.update_node(node);
                    this.layout.layout();
                    this.view.show(false);
                    this.invoke_event_handle(jm.event_type.edit,{evt:'update_node',data:[nodeid,topic],node:nodeid});
                }
            }else{
                logger.error('fail, this mind map is not editable');
                return;
            }
        },

        move_node:function(nodeid, beforeid, parentid, direction){
            if(this.get_editable()){
                var node = this.mind.move_node(nodeid,beforeid,parentid,direction);
                if(!!node){
                    this.view.update_node(node);
                    this.layout.layout();
                    this.view.show(false);
                    this.invoke_event_handle(jm.event_type.edit,{evt:'move_node',data:[nodeid,beforeid,parentid,direction],node:nodeid});
                }
            }else{
                logger.error('fail, this mind map is not editable');
                return;
            }
        },

        select_node:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return;
                }else{
                    return this.select_node(the_node);
                }
            }
            if(!this.layout.is_visible(node)){
                return;
            }
            this.mind.selected = node;
            this.view.select_node(node);
        },

        get_selected_node:function(){
            if(!!this.mind){
                return this.mind.selected;
            }else{
                return null;
            }
        },

        select_clear:function(){
            if(!!this.mind){
                this.mind.selected = null;
                this.view.select_clear();
            }
        },

        is_node_visible:function(node){
            return this.layout.is_visible(node);
        },

        find_node_before:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return;
                }else{
                    return this.find_node_before(the_node);
                }
            }
            if(node.isroot){return null;}
            var n = null;
            if(node.parent.isroot){
                var c = node.parent.children;
                var prev = null;
                var ni = null;
                for(var i=0;i<c.length;i++){
                    ni = c[i];
                    if(node.direction === ni.direction){
                        if(node.id === ni.id){
                            n = prev;
                        }
                        prev = ni;
                    }
                }
            }else{
                n = this.mind.get_node_before(node);
            }
            return n;
        },

        find_node_after:function(node){
            if(!jm.util.is_node(node)){
                var the_node = this.get_node(node);
                if(!the_node){
                    logger.error('the node[id='+node+'] can not be found.');
                    return;
                }else{
                    return this.find_node_after(the_node);
                }
            }
            if(node.isroot){return null;}
            var n = null;
            if(node.parent.isroot){
                var c = node.parent.children;
                var getthis = false;
                var ni = null;
                for(var i=0;i<c.length;i++){
                    ni = c[i];
                    if(node.direction === ni.direction){
                        if(getthis){
                            n = ni;
                            break;
                        }
                        if(node.id === ni.id){
                            getthis = true;
                        }
                    }
                }
            }else{
                n = this.mind.get_node_after(node);
            }
            return n;
        },

        set_node_color:function(nodeid, bgcolor, fgcolor){
            if(this.get_editable()){
                var node = this.mind.get_node(nodeid);
                if(!!node){
                    if(!!bgcolor){
                        node.data['background-color'] = bgcolor;
                    }
                    if(!!fgcolor){
                        node.data['foreground-color'] = fgcolor;
                    }
                    this.view.reset_node_custom_style(node);
                }
            }else{
                logger.error('fail, this mind map is not editable');
                return null;
            }
        },

        set_node_font_style:function(nodeid, size, weight, style){
            if(this.get_editable()){
                var node = this.mind.get_node(nodeid);
                if(!!node){
                    if(!!size){
                        node.data['font-size'] = size;
                    }
                    if(!!weight){
                        node.data['font-weight'] = weight;
                    }
                    if(!!style){
                        node.data['font-style'] = style;
                    }
                    this.view.reset_node_custom_style(node);
                    this.view.update_node(node);
                    this.layout.layout();
                    this.view.show(false);
                }
            }else{
                logger.error('fail, this mind map is not editable');
                return null;
            }
        },

        set_node_background_image:function(nodeid, image, width, height, rotation){
            if(this.get_editable()){
                var node = this.mind.get_node(nodeid);
                if(!!node){
                    if(!!image){
                        node.data['background-image'] = image;
                    }
                    if(!!width){
                        node.data['width'] = width;
                    }
                    if(!!height){
                        node.data['height'] = height;
                    }
                    if(!!rotation){
                        node.data['background-rotation'] = rotation;
                    }
                    this.view.reset_node_custom_style(node);
                    this.view.update_node(node);
                    this.layout.layout();
                    this.view.show(false);
                }
            }else{
                logger.error('fail, this mind map is not editable');
                return null;
            }
        },

        set_node_background_rotation:function(nodeid, rotation){
            if(this.get_editable()){
                var node = this.mind.get_node(nodeid);
                if(!!node){
                    if(!node.data['background-image']) {
                        logger.error('fail, only can change rotation angle of node with background image');
                        return null;
                    }
                    node.data['background-rotation'] = rotation;
                    this.view.reset_node_custom_style(node);
                    this.view.update_node(node);
                    this.layout.layout();
                    this.view.show(false);
                }
            }else{
                logger.error('fail, this mind map is not editable');
                return null;
            }
        },

        resize:function(){
            this.view.resize();
        },

        // callback(type ,data)
        add_event_listener:function(callback){
            if(typeof callback === 'function'){
                this.event_handles.push(callback);
            }
        },

        invoke_event_handle:function(type, data){
            var j = this;
            $w.setTimeout(function(){
                j._invoke_event_handle(type,data);
            },0);
        },

        _invoke_event_handle:function(type,data){
            var l = this.event_handles.length;
            for(var i=0;i<l;i++){
                this.event_handles[i](type,data);
            }
        }

    };

// ============= data provider =============================================

    jm.data_provider = function(jm){
        this.jm = jm;
    };

    jm.data_provider.prototype={
        init:function(){
            logger.debug('data.init');
        },

        reset:function(){
            logger.debug('data.reset');
        },

        load:function(mind_data){
            var df = null;
            var mind = null;
            if(typeof mind_data === 'object'){
                if(!!mind_data.format){
                    df = mind_data.format;
                }else{
                    df = 'node_tree';
                }
            }else{
                df = 'freemind';
            }

            if(df == 'node_array'){
                mind = jm.format.node_array.get_mind(mind_data);
            }else if(df == 'node_tree'){
                mind = jm.format.node_tree.get_mind(mind_data);
            }else if(df == 'freemind'){
                mind = jm.format.freemind.get_mind(mind_data);
            }else{
                logger.warn('unsupported format');
            }
            return mind;
        },

        get_data:function(data_format){
            var data = null;
            if(data_format == 'node_array'){
                data = jm.format.node_array.get_data(this.jm.mind);
            }else if(data_format == 'node_tree'){
                data = jm.format.node_tree.get_data(this.jm.mind);
            }else if(data_format == 'freemind'){
                data = jm.format.freemind.get_data(this.jm.mind);
            }else{
                logger.error('unsupported '+data_format+' format');
            }
            return data;
        },
    };

    // ============= layout provider ===========================================

    jm.layout_provider = function(jm, options){
        this.opts = options;
        this.jm = jm;
        this.isside = (this.opts.mode == 'side');
        this.bounds = null;

        this.cache_valid = false;
    };

    jm.layout_provider.prototype={
        init:function(){
            logger.debug('layout.init');
        },
        reset:function(){
            logger.debug('layout.reset');
            this.bounds = {n:0,s:0,w:0,e:0};
        },
        layout:function(){
            logger.debug('layout.layout');
            this.layout_direction();
            this.layout_offset();
        },

        layout_direction:function(){
            this._layout_direction_root();
        },

        _layout_direction_root:function(){
            var node = this.jm.mind.root;
            // logger.debug(node);
            var layout_data = null;
            if('layout' in node._data){
                layout_data = node._data.layout;
            }else{
                layout_data = {};
                node._data.layout = layout_data;
            }
            var children = node.children;
            var children_count = children.length;
            layout_data.direction = jm.direction.center;
            layout_data.side_index = 0;
            if(this.isside){
                var i = children_count;
                while(i--){
                    this._layout_direction_side(children[i], jm.direction.right, i);
                }
            }else{
                var i = children_count;
                var subnode = null;
                while(i--){
                    subnode = children[i];
                    if(subnode.direction == jm.direction.left){
                        this._layout_direction_side(subnode,jm.direction.left, i);
                    }else{
                        this._layout_direction_side(subnode,jm.direction.right, i);
                    }
                }
                /*
                var boundary = Math.ceil(children_count/2);
                var i = children_count;
                while(i--){
                    if(i>=boundary){
                        this._layout_direction_side(children[i],jm.direction.left, children_count-i-1);
                    }else{
                        this._layout_direction_side(children[i],jm.direction.right, i);
                    }
                }*/

            }
        },

        _layout_direction_side:function(node, direction, side_index){
            var layout_data = null;
            if('layout' in node._data){
                layout_data = node._data.layout;
            }else{
                layout_data = {};
                node._data.layout = layout_data;
            }
            var children = node.children;
            var children_count = children.length;

            layout_data.direction = direction;
            layout_data.side_index = side_index;
            var i = children_count;
            while(i--){
                this._layout_direction_side(children[i], direction, i);
            }
        },

        layout_offset:function(){
            var node = this.jm.mind.root;
            var layout_data = node._data.layout;
            layout_data.offset_x = 0;
            layout_data.offset_y = 0;
            layout_data.outer_height = 0;
            var children = node.children;
            var i = children.length;
            var left_nodes = [];
            var right_nodes = [];
            var subnode = null;
            while(i--){
                subnode = children[i];
                if(subnode._data.layout.direction == jm.direction.right){
                    right_nodes.unshift(subnode);
                }else{
                    left_nodes.unshift(subnode);
                }
            }
            layout_data.left_nodes = left_nodes;
            layout_data.right_nodes = right_nodes;
            layout_data.outer_height_left = this._layout_offset_subnodes(left_nodes);
            layout_data.outer_height_right = this._layout_offset_subnodes(right_nodes);
            this.bounds.e=node._data.view.width/2;
            this.bounds.w=0-this.bounds.e;
            //logger.debug(this.bounds.w);
            this.bounds.n=0;
            this.bounds.s = Math.max(layout_data.outer_height_left,layout_data.outer_height_right);
        },

        // layout both the x and y axis
        _layout_offset_subnodes:function(nodes){
            var total_height = 0;
            var nodes_count = nodes.length;
            var i = nodes_count;
            var node = null;
            var node_outer_height = 0;
            var layout_data = null;
            var base_y = 0;
            var pd = null; // parent._data
            while(i--){
                node = nodes[i];
                layout_data = node._data.layout;
                if(pd == null){
                    pd = node.parent._data;
                }

                node_outer_height = this._layout_offset_subnodes(node.children);
                if(!node.expanded){
                    node_outer_height=0;
                    this.set_visible(node.children,false);
                }
                node_outer_height = Math.max(node._data.view.height,node_outer_height);

                layout_data.outer_height = node_outer_height;
                layout_data.offset_y = base_y - node_outer_height/2;
                layout_data.offset_x = this.opts.hspace * layout_data.direction + pd.view.width * (pd.layout.direction + layout_data.direction)/2;
                if(!node.parent.isroot){
                    layout_data.offset_x += this.opts.pspace * layout_data.direction;
                }

                base_y = base_y - node_outer_height - this.opts.vspace;
                total_height += node_outer_height;
            }
            if(nodes_count>1){
                total_height += this.opts.vspace * (nodes_count-1);
            }
            i = nodes_count;
            var middle_height = total_height/2;
            while(i--){
                node = nodes[i];
                node._data.layout.offset_y += middle_height;
            }
            return total_height;
        },

        // layout the y axis only, for collapse/expand a node
        _layout_offset_subnodes_height:function(nodes){
            var total_height = 0;
            var nodes_count = nodes.length;
            var i = nodes_count;
            var node = null;
            var node_outer_height = 0;
            var layout_data = null;
            var base_y = 0;
            var pd = null; // parent._data
            while(i--){
                node = nodes[i];
                layout_data = node._data.layout;
                if(pd == null){
                    pd = node.parent._data;
                }

                node_outer_height = this._layout_offset_subnodes_height(node.children);
                if(!node.expanded){
                    node_outer_height=0;
                }
                node_outer_height = Math.max(node._data.view.height,node_outer_height);

                layout_data.outer_height = node_outer_height;
                layout_data.offset_y = base_y - node_outer_height/2;
                base_y = base_y - node_outer_height - this.opts.vspace;
                total_height += node_outer_height;
            }
            if(nodes_count>1){
                total_height += this.opts.vspace * (nodes_count-1);
            }
            i = nodes_count;
            var middle_height = total_height/2;
            while(i--){
                node = nodes[i];
                node._data.layout.offset_y += middle_height;
                //logger.debug(node.topic);
                //logger.debug(node._data.layout.offset_y);
            }
            return total_height;
        },

        get_node_offset:function(node){
            var layout_data = node._data.layout;
            var offset_cache = null;
            if(('_offset_' in layout_data) && this.cache_valid){
                offset_cache = layout_data._offset_;
            }else{
                offset_cache = {x:-1, y:-1};
                layout_data._offset_ = offset_cache;
            }
            if(offset_cache.x == -1 || offset_cache.y == -1){
                var x = layout_data.offset_x;
                var y = layout_data.offset_y;
                if(!node.isroot){
                    var offset_p = this.get_node_offset(node.parent);
                    x += offset_p.x;
                    y += offset_p.y;
                }
                offset_cache.x = x;
                offset_cache.y = y;
            }
            return offset_cache;
        },

        get_node_point:function(node){
            var view_data = node._data.view;
            var offset_p = this.get_node_offset(node);
            //logger.debug(offset_p);
            var p = {};
            p.x = offset_p.x + view_data.width*(node._data.layout.direction-1)/2;
            p.y = offset_p.y-view_data.height/2;
            //logger.debug(p);
            return p;
        },

        get_node_point_in:function(node){
            var p = this.get_node_offset(node);
            return p;
        },

        get_node_point_out:function(node){
            var layout_data = node._data.layout;
            var pout_cache = null;
            if(('_pout_' in layout_data) && this.cache_valid){
                pout_cache = layout_data._pout_;
            }else{
                pout_cache = {x:-1, y:-1};
                layout_data._pout_ = pout_cache;
            }
            if(pout_cache.x == -1 || pout_cache.y == -1){
                if(node.isroot){
                    pout_cache.x = 0;
                    pout_cache.y = 0;
                }else{
                    var view_data = node._data.view;
                    var offset_p = this.get_node_offset(node);
                    pout_cache.x = offset_p.x + (view_data.width+this.opts.pspace)*node._data.layout.direction;
                    pout_cache.y = offset_p.y;
                    //logger.debug('pout');
                    //logger.debug(pout_cache);
                }
            }
            return pout_cache;
        },

        get_expander_point:function(node){
            var p = this.get_node_point_out(node);
            var ex_p = {};
            if(node._data.layout.direction == jm.direction.right){
                ex_p.x = p.x - this.opts.pspace;
            }else{
                ex_p.x = p.x;
            }
            ex_p.y = p.y - Math.ceil(this.opts.pspace/2);
            return ex_p;
        },

        get_min_size:function(){
            var nodes = this.jm.mind.nodes;
            var node = null;
            var pout = null;
            for(var nodeid in nodes){
                node = nodes[nodeid];
                pout = this.get_node_point_out(node);
                //logger.debug(pout.x);
                if(pout.x > this.bounds.e){this.bounds.e = pout.x;}
                if(pout.x < this.bounds.w){this.bounds.w = pout.x;}
            }
            return {
                w:this.bounds.e - this.bounds.w,
                h:this.bounds.s - this.bounds.n
            }
        },

        toggle_node:function(node){
            if(node.isroot){
                return;
            }
            if(node.expanded){
                this.collapse_node(node);
            }else{
                this.expand_node(node);
            }
        },

        expand_node:function(node){
            node.expanded = true;
            this.part_layout(node);
            this.set_visible(node.children,true);
        },

        collapse_node:function(node){
            node.expanded = false;
            this.part_layout(node);
            this.set_visible(node.children,false);
        },

        expand_all:function(){
            var nodes = this.jm.mind.nodes;
            var c = 0;
            var node;
            for(var nodeid in nodes){
                node = nodes[nodeid];
                if(!node.expanded){
                    node.expanded = true;
                    c++;
                }
            }
            if(c>0){
                var root = this.jm.mind.root;
                this.part_layout(root);
                this.set_visible(root.children,true);
            }
        },

        collapse_all:function(){
            var nodes = this.jm.mind.nodes;
            var c = 0;
            var node;
            for(var nodeid in nodes){
                node = nodes[nodeid];
                if(node.expanded && !node.isroot){
                    node.expanded = false
                    c++;
                }
            }
            if(c>0){
                var root = this.jm.mind.root;
                this.part_layout(root);
                this.set_visible(root.children,true);
            }
        },

        expand_to_depth:function(target_depth,curr_nodes,curr_depth){
            if(target_depth < 1){return;}
            var nodes = curr_nodes || this.jm.mind.root.children;
            var depth = curr_depth || 1;
            var i = nodes.length;
            var node = null;
            while(i--){
                node = nodes[i];
                if(depth < target_depth){
                    if(!node.expanded){
                        this.expand_node(node);
                    }
                    this.expand_to_depth(target_depth, node.children, depth+1);
                }
                if(depth == target_depth){
                    if(node.expanded){
                        this.collapse_node(node);
                    }
                }
            }
        },

        part_layout:function(node){
            var root = this.jm.mind.root;
            if(!!root){
                var root_layout_data = root._data.layout;
                if(node.isroot){
                    root_layout_data.outer_height_right=this._layout_offset_subnodes_height(root_layout_data.right_nodes);
                    root_layout_data.outer_height_left=this._layout_offset_subnodes_height(root_layout_data.left_nodes);
                }else{
                    if(node._data.layout.direction == jm.direction.right){
                        root_layout_data.outer_height_right=this._layout_offset_subnodes_height(root_layout_data.right_nodes);
                    }else{
                        root_layout_data.outer_height_left=this._layout_offset_subnodes_height(root_layout_data.left_nodes);
                    }
                }
                this.bounds.s = Math.max(root_layout_data.outer_height_left,root_layout_data.outer_height_right);
                this.cache_valid = false;
            }else{
                logger.warn('can not found root node');
            }
        },

        set_visible:function(nodes,visible){
            var i = nodes.length;
            var node = null;
            var layout_data = null;
            while(i--){
                node = nodes[i];
                layout_data = node._data.layout;
                if(node.expanded){
                    this.set_visible(node.children,visible);
                }else{
                    this.set_visible(node.children,false);
                }
                if(!node.isroot){
                    node._data.layout.visible = visible;
                }
            }
        },

        is_expand:function(node){
            return node.expanded;
        },

        is_visible:function(node){
            var layout_data = node._data.layout;
            if(('visible' in layout_data) && !layout_data.visible){
                return false;
            }else{
                return true;
            }
        },
    };

    // view provider
    jm.view_provider= function(jm, options){
        this.opts = options;
        this.jm = jm;
        this.layout = jm.layout;

        this.container = null;
        this.e_panel = null;
        this.e_nodes= null;
        this.e_canvas = null;

        this.canvas_ctx = null;
        this.size = {w:0,h:0};

        this.selected_node = null;
        this.editing_node = null;
    };

    jm.view_provider.prototype={
        init:function(){
            logger.debug('view.init');

            this.container = $i(this.opts.container) ? this.opts.container : $g(this.opts.container);
            if(!this.container){
                logger.error('the options.view.container was not be found in dom');
                return;
            }
            this.e_panel = $c('div');
            this.e_canvas = $c('canvas');
            this.e_nodes = $c('jmnodes');
            this.e_editor = $c('input');

            this.e_panel.className = 'jsmind-inner';
            this.e_panel.appendChild(this.e_canvas);
            this.e_panel.appendChild(this.e_nodes);

            this.e_editor.className = 'jsmind-editor';
            this.e_editor.type = 'text';

            this.actualZoom = 1;
            this.zoomStep = 0.1;
            this.minZoom = 0.5;
            this.maxZoom = 2;

            var v = this;
            jm.util.dom.add_event(this.e_editor,'keydown',function(e){
                var evt = e || event;
                if(evt.keyCode == 13){v.edit_node_end();evt.stopPropagation();}
            });
            jm.util.dom.add_event(this.e_editor,'blur',function(e){
                v.edit_node_end();
            });

            this.container.appendChild(this.e_panel);

            this.init_canvas();
        },

        add_event:function(obj,event_name,event_handle){
            jm.util.dom.add_event(this.e_nodes,event_name,function(e){
                var evt = e || event;
                event_handle.call(obj,evt);
            });
        },

        get_binded_nodeid:function(element){
            if(element == null){
                return null;
            }
            var tagName = element.tagName.toLowerCase();
            if(tagName == 'jmnodes' || tagName == 'body' || tagName == 'html'){
                return null;
            }
            if(tagName == 'jmnode' || tagName == 'jmexpander'){
                return element.getAttribute('nodeid');
            }else{
                return this.get_binded_nodeid(element.parentElement);
            }
        },

        is_expander:function(element){
            return (element.tagName.toLowerCase() == 'jmexpander');
        },

        reset:function(){
            logger.debug('view.reset');
            this.selected_node = null;
            this.clear_lines();
            this.clear_nodes();
            this.reset_theme();
        },

        reset_theme:function(){
            var theme_name = this.jm.options.theme;
            if(!!theme_name){
                this.e_nodes.className = 'theme-' + theme_name;
            }else{
                this.e_nodes.className = '';
            }
        },

        reset_custom_style:function(){
            var nodes = this.jm.mind.nodes;
            for(var nodeid in nodes){
                this.reset_node_custom_style(nodes[nodeid]);
            }
        },

        load:function(){
            logger.debug('view.load');
            this.init_nodes();
        },

        expand_size:function(){
            var min_size = this.layout.get_min_size();
            var min_width = min_size.w + this.opts.hmargin*2;
            var min_height = min_size.h + this.opts.vmargin*2;
            var client_w = this.e_panel.clientWidth;
            var client_h = this.e_panel.clientHeight;
            if(client_w < min_width){client_w = min_width;}
            if(client_h < min_height){client_h = min_height;}
            this.size.w = client_w;
            this.size.h = client_h;
        },

        init_canvas:function(){
            var ctx = this.e_canvas.getContext('2d');
            this.canvas_ctx = ctx;
        },

        init_nodes_size:function(node){
            var view_data = node._data.view;
            view_data.width = view_data.element.clientWidth;
            view_data.height = view_data.element.clientHeight;
        },

        init_nodes:function(){
            var nodes = this.jm.mind.nodes;
            var doc_frag = $d.createDocumentFragment();
            for(var nodeid in nodes){
                this.create_node_element(nodes[nodeid],doc_frag);
            }
            this.e_nodes.appendChild(doc_frag);
            for(var nodeid in nodes){
                this.init_nodes_size(nodes[nodeid]);
            }
        },

        add_node:function(node){
            this.create_node_element(node,this.e_nodes);
            this.init_nodes_size(node);
        },

        create_node_element:function(node,parent_node){
            var view_data = null;
            if('view' in node._data){
                view_data = node._data.view;
            }else{
                view_data = {};
                node._data.view = view_data;
            }

            var d = $c('jmnode');
            if(node.isroot){
                d.className = 'root';
            }else{
                var d_e = $c('jmexpander');
                $t(d_e,'-');
                d_e.setAttribute('nodeid',node.id);
                d_e.style.visibility = 'hidden';
                parent_node.appendChild(d_e);
                view_data.expander = d_e;
            }
            if (!!node.topic) {
                if(this.opts.support_html){
                    $h(d,node.topic);
                }else{
                    $t(d,node.topic);
                }
            }
            d.setAttribute('nodeid',node.id);
            d.style.visibility='hidden';
            this._reset_node_custom_style(d, node.data);

            parent_node.appendChild(d);
            view_data.element = d;
        },

        remove_node:function(node){
            if(this.selected_node != null && this.selected_node.id == node.id){
                this.selected_node = null;
            }
            if(this.editing_node != null && this.editing_node.id == node.id){
                node._data.view.element.removeChild(this.e_editor);
                this.editing_node = null;
            }
            var children = node.children;
            var i = children.length;
            while(i--){
                this.remove_node(children[i]);
            }
            if(node._data.view){
                var element = node._data.view.element;
                var expander = node._data.view.expander;
                this.e_nodes.removeChild(element);
                this.e_nodes.removeChild(expander);
                node._data.view.element = null;
                node._data.view.expander = null;
            }
        },

        update_node:function(node){
            var view_data = node._data.view;
            var element = view_data.element;
            if (!!node.topic) {
                if(this.opts.support_html){
                    $h(element,node.topic);
                }else{
                    $t(element,node.topic);
                }
            }
            view_data.width = element.clientWidth;
            view_data.height = element.clientHeight;
        },

        select_node:function(node){
            if(!!this.selected_node){
                this.selected_node._data.view.element.className =
                this.selected_node._data.view.element.className.replace(/\s*selected\b/i,'');
                this.reset_node_custom_style(this.selected_node);
            }
            if(!!node){
                this.selected_node = node;
                node._data.view.element.className += ' selected';
                this.clear_node_custom_style(node);
            }
        },

        select_clear:function(){
            this.select_node(null);
        },

        get_editing_node:function(){
            return this.editing_node;
        },

        is_editing:function(){
            return (!!this.editing_node);
        },

        edit_node_begin:function(node){
            if(!node.topic) {
                logger.warn("don't edit image nodes");
                return;
            }
            if(this.editing_node != null){
                this.edit_node_end();
            }
            this.editing_node = node;
            var view_data = node._data.view;
            var element = view_data.element;
            var topic = node.topic;
            var ncs = getComputedStyle(element);
            this.e_editor.value = topic;
            this.e_editor.style.width = (element.clientWidth-parseInt(ncs.getPropertyValue('padding-left'))-parseInt(ncs.getPropertyValue('padding-right')))+'px';
            element.innerHTML = '';
            element.appendChild(this.e_editor);
            element.style.zIndex = 5;
            this.e_editor.focus();
            this.e_editor.select();
        },

        edit_node_end:function(){
            if(this.editing_node != null){
                var node = this.editing_node;
                this.editing_node = null;
                var view_data = node._data.view;
                var element = view_data.element;
                var topic = this.e_editor.value;
                element.style.zIndex = 'auto';
                element.removeChild(this.e_editor);
                if(jm.util.text.is_empty(topic) || node.topic === topic){
                    if(this.opts.support_html){
                        $h(element,node.topic);
                    }else{
                        $t(element,node.topic);
                    }
                }else{
                    this.jm.update_node(node.id,topic);
                }
            }
        },

        get_view_offset:function(){
            var bounds = this.layout.bounds;
            var _x = (this.size.w - bounds.e - bounds.w)/2;
            var _y = this.size.h / 2;
            return{x:_x, y:_y};
        },

        resize:function(){
            this.e_canvas.width = 1;
            this.e_canvas.height = 1;
            this.e_nodes.style.width = '1px';
            this.e_nodes.style.height = '1px';

            this.expand_size();
            this._show();
        },

        _show:function(){
            this.e_canvas.width = this.size.w;
            this.e_canvas.height = this.size.h;
            this.e_nodes.style.width = this.size.w+'px';
            this.e_nodes.style.height = this.size.h+'px';
            this.show_nodes();
            this.show_lines();
            //this.layout.cache_valid = true;
            this.jm.invoke_event_handle(jm.event_type.resize,{data:[]});
        },

        zoomIn: function() {
            return this.setZoom(this.actualZoom + this.zoomStep);
        },

        zoomOut: function() {
            return this.setZoom(this.actualZoom - this.zoomStep);
        },

        setZoom: function(zoom) {
            if ((zoom < this.minZoom) || (zoom > this.maxZoom)) {
                return false;
            }
            this.actualZoom = zoom;
            for (var i=0; i < this.e_panel.children.length; i++) {
                this.e_panel.children[i].style.transform = 'scale(' + zoom + ')';
            };
            this.show(true);
            return true;

        },

        _center_root:function(){
            // center root node
            var outer_w = this.e_panel.clientWidth;
            var outer_h = this.e_panel.clientHeight;
            if(this.size.w > outer_w){
                var _offset = this.get_view_offset();
                this.e_panel.scrollLeft = _offset.x - outer_w/2;
            }
            if(this.size.h > outer_h){
                this.e_panel.scrollTop = (this.size.h - outer_h)/2;
            }
        },

        show:function(keep_center){
            logger.debug('view.show');
            this.expand_size();
            this._show();
            if(!!keep_center){
                this._center_root();
            }
        },

        relayout:function(){
            this.expand_size();
            this._show();
        },

        save_location:function(node){
            var vd = node._data.view;
            vd._saved_location={
                x:parseInt(vd.element.style.left)-this.e_panel.scrollLeft,
                y:parseInt(vd.element.style.top)-this.e_panel.scrollTop,
            };
        },

        restore_location:function(node){
            var vd = node._data.view;
            this.e_panel.scrollLeft = parseInt(vd.element.style.left)-vd._saved_location.x;
            this.e_panel.scrollTop = parseInt(vd.element.style.top)-vd._saved_location.y;
        },

        clear_nodes:function(){
            var mind = this.jm.mind;
            if(mind == null){
                return;
            }
            var nodes = mind.nodes;
            var node = null;
            for(var nodeid in nodes){
                node = nodes[nodeid];
                node._data.view.element = null;
                node._data.view.expander = null;
            }
            this.e_nodes.innerHTML = '';
        },

        show_nodes:function(){
            var nodes = this.jm.mind.nodes;
            var node = null;
            var node_element = null;
            var expander = null;
            var p = null;
            var p_expander= null;
            var expander_text = '-';
            var view_data = null;
            var _offset = this.get_view_offset();
            for(var nodeid in nodes){
                node = nodes[nodeid];
                view_data = node._data.view;
                node_element = view_data.element;
                expander = view_data.expander;
                if(!this.layout.is_visible(node)){
                    node_element.style.display = 'none';
                    expander.style.display = 'none';
                    continue;
                }
                this.reset_node_custom_style(node);
                p = this.layout.get_node_point(node);
                view_data.abs_x = _offset.x + p.x;
                view_data.abs_y = _offset.y + p.y;
                node_element.style.left = (_offset.x+p.x) + 'px';
                node_element.style.top = (_offset.y+p.y) + 'px';
                node_element.style.display = '';
                node_element.style.visibility = 'visible';
                if(!node.isroot && node.children.length>0){
                    expander_text = node.expanded?'-':'+';
                    p_expander= this.layout.get_expander_point(node);
                    expander.style.left = (_offset.x + p_expander.x) + 'px';
                    expander.style.top = (_offset.y + p_expander.y) + 'px';
                    expander.style.display = '';
                    expander.style.visibility = 'visible';
                    $t(expander,expander_text);
                }
                // hide expander while all children have been removed
                if(!node.isroot && node.children.length==0){
                    expander.style.display = 'none';
                    expander.style.visibility = 'hidden';
                }
            }
        },

        reset_node_custom_style:function(node){
            this._reset_node_custom_style(node._data.view.element, node.data);
        },

        _reset_node_custom_style:function(node_element, node_data){
            if('background-color' in node_data){
                node_element.style.backgroundColor = node_data['background-color'];
            }
            if('foreground-color' in node_data){
                node_element.style.color = node_data['foreground-color'];
            }
            if('width' in node_data){
                node_element.style.width = node_data['width']+'px';
            }
            if('height' in node_data){
                node_element.style.height = node_data['height']+'px';
            }
            if('font-size' in node_data){
                node_element.style.fontSize = node_data['font-size']+'px';
            }
            if('font-weight' in node_data){
                node_element.style.fontWeight = node_data['font-weight'];
            }
            if('font-style' in node_data){
                node_element.style.fontStyle = node_data['font-style'];
            }
            if('background-image' in node_data) {
                var backgroundImage = node_data['background-image'];
                if (backgroundImage.startsWith('data') && node_data['width'] && node_data['height']) {
                    var img = new Image();

                    img.onload = function() {
                        var c = $c('canvas');
                        c.width = node_element.clientWidth;
                        c.height = node_element.clientHeight;
                        var img = this;
                        if(c.getContext) {
                            var ctx = c.getContext('2d');
                            ctx.drawImage(img, 2, 2, node_element.clientWidth, node_element.clientHeight);
                            var scaledImageData = c.toDataURL();
                            node_element.style.backgroundImage='url('+scaledImageData+')';
                        }
                    };
                    img.src = backgroundImage;

                } else {
                    node_element.style.backgroundImage='url('+backgroundImage+')';
                }
                node_element.style.backgroundSize='99%';

                if('background-rotation' in node_data){
                    node_element.style.transform = 'rotate(' + node_data['background-rotation'] + 'deg)';
                }

            }
        },

        clear_node_custom_style:function(node){
            var node_element = node._data.view.element;
            node_element.style.backgroundColor = "";
            node_element.style.color = "";
        },

        clear_lines:function(canvas_ctx){
            var ctx = canvas_ctx || this.canvas_ctx;
            jm.util.canvas.clear(ctx,0,0,this.size.w,this.size.h);
        },

        show_lines:function(canvas_ctx){
            this.clear_lines(canvas_ctx);
            var nodes = this.jm.mind.nodes;
            var node = null;
            var pin = null;
            var pout = null;
            var _offset = this.get_view_offset();
            for(var nodeid in nodes){
                node = nodes[nodeid];
                if(!!node.isroot){continue;}
                if(('visible' in node._data.layout) && !node._data.layout.visible){continue;}
                pin = this.layout.get_node_point_in(node);
                pout = this.layout.get_node_point_out(node.parent);
                this.draw_line(pout,pin,_offset,canvas_ctx);
            }
        },

        draw_line:function(pin,pout,offset,canvas_ctx){
            var ctx = canvas_ctx || this.canvas_ctx;
            ctx.strokeStyle = this.opts.line_color;
            ctx.lineWidth = this.opts.line_width;
            ctx.lineCap = 'round';

            jm.util.canvas.bezierto(
                ctx,
                pin.x + offset.x,
                pin.y + offset.y,
                pout.x + offset.x,
                pout.y + offset.y);
        },
    };

    // shortcut provider
    jm.shortcut_provider= function(jm, options){
        this.jm = jm;
        this.opts = options;
        this.mapping = options.mapping;
        this.handles = options.handles;
        this._mapping = {};
    };

    jm.shortcut_provider.prototype = {
        init : function(){
            jm.util.dom.add_event($d,'keydown',this.handler.bind(this));

            this.handles['addchild'] = this.handle_addchild;
            this.handles['addbrother'] = this.handle_addbrother;
            this.handles['editnode'] = this.handle_editnode;
            this.handles['delnode'] = this.handle_delnode;
            this.handles['toggle'] = this.handle_toggle;
            this.handles['up'] = this.handle_up;
            this.handles['down'] = this.handle_down;
            this.handles['left'] = this.handle_left;
            this.handles['right'] = this.handle_right;

            for(var handle in this.mapping){
                if(!!this.mapping[handle] && (handle in this.handles)){
                    this._mapping[this.mapping[handle]] = this.handles[handle];
                }
            }
        },

        enable_shortcut : function(){
            this.opts.enable = true;
        },

        disable_shortcut : function(){
            this.opts.enable = false;
        },

        handler : function(e){
            if(this.jm.view.is_editing()){return;}
            var evt = e || event;
            if(!this.opts.enable){return true;}
            var kc = evt.keyCode;
            if(kc in this._mapping){
                this._mapping[kc].call(this,this.jm,e);
            }
        },

        handle_addchild: function(_jm,e){
            var selected_node = _jm.get_selected_node();
            if(!!selected_node){
                var nodeid = jm.util.uuid.newid();
                var node = _jm.add_node(selected_node, nodeid, 'New Node');
                if(!!node){
                    _jm.select_node(nodeid);
                    _jm.begin_edit(nodeid);
                }
            }
        },
        handle_addbrother:function(_jm,e){
            var selected_node = _jm.get_selected_node();
            if(!!selected_node && !selected_node.isroot){
                var nodeid = jm.util.uuid.newid();
                var node = _jm.insert_node_after(selected_node, nodeid, 'New Node');
                if(!!node){
                    _jm.select_node(nodeid);
                    _jm.begin_edit(nodeid);
                }
            }
        },
        handle_editnode:function(_jm,e){
            var selected_node = _jm.get_selected_node();
            if(!!selected_node){
                _jm.begin_edit(selected_node);
            }
        },
        handle_delnode:function(_jm,e){
            var selected_node = _jm.get_selected_node();
            if(!!selected_node && !selected_node.isroot){
                _jm.select_node(selected_node.parent);
                _jm.remove_node(selected_node);
            }
        },
        handle_toggle:function(_jm,e){
            var evt = e || event;
            var selected_node = _jm.get_selected_node();
            if(!!selected_node){
                _jm.toggle_node(selected_node.id);
                evt.stopPropagation();
                evt.preventDefault();
            }
        },
        handle_up:function(_jm,e){
            var evt = e || event;
            var selected_node = _jm.get_selected_node();
            if(!!selected_node){
                var up_node = _jm.find_node_before(selected_node);
                if(!up_node){
                    var np = _jm.find_node_before(selected_node.parent);
                    if(!!np && np.children.length > 0){
                        up_node = np.children[np.children.length-1];
                    }
                }
                if(!!up_node){
                    _jm.select_node(up_node);
                }
                evt.stopPropagation();
                evt.preventDefault();
            }
        },

        handle_down:function(_jm,e){
            var evt = e || event;
            var selected_node = _jm.get_selected_node();
            if(!!selected_node){
                var down_node = _jm.find_node_after(selected_node);
                if(!down_node){
                    var np = _jm.find_node_after(selected_node.parent);
                    if(!!np && np.children.length > 0){
                        down_node = np.children[0];
                    }
                }
                if(!!down_node){
                    _jm.select_node(down_node);
                }
                evt.stopPropagation();
                evt.preventDefault();
            }
        },

        handle_left:function(_jm,e){
            this._handle_direction(_jm,e,jm.direction.left);
        },
        handle_right:function(_jm,e){
            this._handle_direction(_jm,e,jm.direction.right);
        },
        _handle_direction:function(_jm,e,d){
            var evt = e || event;
            var selected_node = _jm.get_selected_node();
            var node = null;
            if(!!selected_node){
                if(selected_node.isroot){
                    var c = selected_node.children;
                    var children = [];
                    for(var i=0;i<c.length;i++){
                        if(c[i].direction === d){
                            children.push(i)
                        }
                    }
                    node = c[children[Math.floor((children.length-1)/2)]];
                }
                else if(selected_node.direction === d){
                    var children = selected_node.children;
                    var childrencount = children.length;
                    if(childrencount > 0){
                        node = children[Math.floor((childrencount-1)/2)]
                    }
                }else{
                    node = selected_node.parent;
                }
                if(!!node){
                    _jm.select_node(node);
                }
                evt.stopPropagation();
                evt.preventDefault();
            }
        },
    };


    // plugin
    jm.plugin = function(name,init){
        this.name = name;
        this.init = init;
    };

    jm.plugins = [];

    jm.register_plugin = function(plugin){
        if(plugin instanceof jm.plugin){
            jm.plugins.push(plugin);
        }
    };

    jm.init_plugins = function(sender){
        $w.setTimeout(function(){
            jm._init_plugins(sender);
        },0);
    };

    jm._init_plugins = function(sender){
        var l = jm.plugins.length;
        var fn_init = null;
        for(var i=0;i<l;i++){
            fn_init = jm.plugins[i].init;
            if(typeof fn_init === 'function'){
                fn_init(sender);
            }
        }
    };

    // quick way
    jm.show = function(options,mind){
        var _jm = new jm(options);
        _jm.show(mind);
        return _jm;
    };

    // export jsmind
    if (true) {
        module.exports = jm;
        $w[__name__] = jm;
    } else {}
})(typeof window !== 'undefined' ? window : global);



/***/ }),

/***/ "./src/app/jsmind/js/jsmind.screenshot.js":
/*!************************************************!*\
  !*** ./src/app/jsmind/js/jsmind.screenshot.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Released under BSD License
 * Copyright (c) 2014-2015 hizzgdev@163.com
 * 
 * Project Home:
 *   https://github.com/hizzgdev/jsmind/
 */

(function($w){
    'use strict';

    var __name__ = 'jsMind';
    var jsMind = $w[__name__];
    if(!jsMind){return;}
    if(typeof jsMind.screenshot != 'undefined'){return;}

    var $d = $w.document;
    var $c = function(tag){return $d.createElement(tag);};

    var css = function(cstyle,property_name){
        return cstyle.getPropertyValue(property_name);
    };
    var is_visible = function(cstyle){
        var visibility = css(cstyle,'visibility');
        var display  = css(cstyle,'display');
        return (visibility !== 'hidden' && display !== 'none');
    };
    var jcanvas = jsMind.util.canvas;
    jcanvas.rect = function (ctx,x,y,w,h,r) {
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        ctx.moveTo(x+r, y);
        ctx.arcTo(x+w, y,   x+w, y+h, r);
        ctx.arcTo(x+w, y+h, x,   y+h, r);
        ctx.arcTo(x,   y+h, x,   y,   r);
        ctx.arcTo(x,   y,   x+w, y,   r);
    };

    jcanvas.text_multiline = function(ctx,text,x,y,w,h,lineheight){
        var line = '';
        var text_len = text.length;
        var chars = text.split('');
        var test_line = null;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        for(var i=0;i<text_len;i++){
            test_line = line + chars[i];
            if(ctx.measureText(test_line).width > w && i>0){
                ctx.fillText(line,x,y);
                line = chars[i];
                y += lineheight;
            }else{
                line = test_line;
            }
        }
        ctx.fillText(line,x,y);
    };

    jcanvas.text_ellipsis = function(ctx,text,x,y,w,h){
        var center_y = y+h/2;
        var text = jcanvas.fittingString(ctx,text,w);
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(text,x,center_y,w);
    };

    jcanvas.fittingString = function(ctx,text,max_width) {
        var width = ctx.measureText(text).width;
        var ellipsis = '…'
        var ellipsis_width = ctx.measureText(ellipsis).width;
        if (width<=max_width || width<=ellipsis_width) {
            return text;
        } else {
            var len = text.length;
            while (width>=max_width-ellipsis_width && len-->0) {
                text = text.substring(0, len);
                width = ctx.measureText(text).width;
            }
            return text+ellipsis;
        }
    };

    jcanvas.image = function(ctx,backgroundUrl,x,y,w,h,r,rotation,callback){
        var img = new Image();
        img.onload = function () {
            ctx.save();
            ctx.translate(x,y);
            ctx.save();
            ctx.beginPath();
            jcanvas.rect(ctx,0,0,w,h,r);
            ctx.closePath();
            ctx.clip();
            ctx.translate(w/2,h/2);
            ctx.rotate(rotation*Math.PI/180);
            ctx.drawImage(img,-w/2,-h/2);
            ctx.restore();
            ctx.restore();
            callback();
        }
        img.src = backgroundUrl;
    };

    jsMind.screenshot = function(jm){
        this.jm = jm;
        this.canvas_elem = null;
        this.canvas_ctx = null;
        this._inited = false;
    };

    jsMind.screenshot.prototype = {
        init:function(){
            if(this._inited){return;}
            console.log('init');
            var c = $c('canvas');
            var ctx = c.getContext('2d');

            this.canvas_elem = c;
            this.canvas_ctx = ctx;
            this.jm.view.e_panel.appendChild(c);
            this._inited = true;
            this.resize();
        },

        shoot:function(callback){
            this.init();
            this._watermark();
            var jms = this;
            this._draw(function(){
                if(!!callback){
                    callback(jms);
                }
                jms.clean();
            });
        },

        shootDownload: function(){
            this.shoot(function(jms){
                jms._download();
            });
        },

        shootAsDataURL: function(callback){
            this.shoot(function(jms){
                callback(jms.canvas_elem.toDataURL());
            });
        },

        resize:function(){
            if(this._inited){
                this.canvas_elem.width=this.jm.view.size.w;
                this.canvas_elem.height=this.jm.view.size.h;
            }
        },

        clean:function(){
            var c = this.canvas_elem;
            this.canvas_ctx.clearRect(0,0,c.width,c.height);
        },

        _draw:function(callback){
            var ctx = this.canvas_ctx;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            this._draw_lines();
            this._draw_nodes(callback);
        },

        _watermark:function(){
            var c = this.canvas_elem;
            var ctx = this.canvas_ctx;
            ctx.textAlign='right';
            ctx.textBaseline='bottom';
            ctx.fillStyle='#000';
            ctx.font='11px Verdana,Arial,Helvetica,sans-serif';
            ctx.fillText('hizzgdev.github.io/jsmind',c.width-5.5,c.height-2.5);
            ctx.textAlign='left';
            ctx.fillText($w.location,5.5,c.height-2.5);
        },

        _draw_lines:function(){
            this.jm.view.show_lines(this.canvas_ctx);
        },

        _draw_nodes:function(callback){
            var nodes = this.jm.mind.nodes;
            var node;
            for(var nodeid in nodes){
                node = nodes[nodeid];
                this._draw_node(node);
            }

            function check_nodes_ready() {
                console.log('check_node_ready'+new Date());
                var allOk = true;
                for(var nodeid in nodes){
                    node = nodes[nodeid];
                    allOk = allOk & node.ready;
                }

                if(!allOk) {
                    $w.setTimeout(check_nodes_ready, 200);
                } else {
                    $w.setTimeout(callback, 200);
                }
            }
            check_nodes_ready();
        },

        _draw_node:function(node){
            var ctx = this.canvas_ctx;
            var view_data = node._data.view;
            var node_element = view_data.element;
            var ncs = getComputedStyle(node_element);
            if(!is_visible(ncs)){
                node.ready = true;
                return;
            }

            var bgcolor = css(ncs,'background-color');
            var round_radius = parseInt(css(ncs,'border-top-left-radius'));
            var color = css(ncs,'color');
            var padding_left = parseInt(css(ncs,'padding-left'));
            var padding_right = parseInt(css(ncs,'padding-right'));
            var padding_top = parseInt(css(ncs,'padding-top'));
            var padding_bottom = parseInt(css(ncs,'padding-bottom'));
            var text_overflow = css(ncs,'text-overflow');
            var font = css(ncs,'font-style')+' '+
                        css(ncs,'font-variant')+' '+
                        css(ncs,'font-weight')+' '+
                        css(ncs,'font-size')+'/'+css(ncs,'line-height')+' '+
                        css(ncs,'font-family');

            var rb = {x:view_data.abs_x,
                      y:view_data.abs_y,
                      w:view_data.width+1,
                      h:view_data.height+1};
            var tb = {x:rb.x+padding_left,
                      y:rb.y+padding_top,
                      w:rb.w-padding_left-padding_right,
                      h:rb.h-padding_top-padding_bottom};

            ctx.font=font;
            ctx.fillStyle = bgcolor;
            ctx.beginPath();
            jcanvas.rect(ctx, rb.x, rb.y, rb.w, rb.h, round_radius);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = color;
            if ('background-image' in node.data) {
                var backgroundUrl = css(ncs,'background-image').slice(5, -2);
                node.ready = false;
                var rotation = 0;
                if ('background-rotation' in node.data) {
                    rotation = node.data['background-rotation'];
                }
                jcanvas.image(ctx, backgroundUrl, rb.x, rb.y, rb.w, rb.h, round_radius, rotation,
                    function() {
                        node.ready = true;
                    });
            }
            if (!!node.topic) {
                if(text_overflow === 'ellipsis'){
                    jcanvas.text_ellipsis(ctx, node.topic, tb.x, tb.y, tb.w, tb.h);
                }else{
                    var line_height = parseInt(css(ncs,'line-height'));
                    jcanvas.text_multiline(ctx, node.topic, tb.x, tb.y, tb.w, tb.h,line_height);
                }
            }
            if(!!view_data.expander){
                this._draw_expander(view_data.expander);
            }
            if (!('background-image' in node.data)) {
                node.ready = true;
            }
        },

        _draw_expander:function(expander){
            var ctx = this.canvas_ctx;
            var ncs = getComputedStyle(expander);
            if(!is_visible(ncs)){ return; }

            var style_left = css(ncs,'left');
            var style_top = css(ncs,'top');
            var font = css(ncs,'font');
            var left = parseInt(style_left);
            var top = parseInt(style_top);
            var is_plus = expander.innerHTML === '+';

            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.arc(left+7,top+7,5,0,Math.PI*2,true);
            ctx.moveTo(left+10,top+7);
            ctx.lineTo(left+4,top+7);
            if(is_plus){
                ctx.moveTo(left+7,top+4);
                ctx.lineTo(left+7,top+10);
            }
            ctx.closePath();
            ctx.stroke();
        },

        _download:function(){
            var c = this.canvas_elem;
            var name = this.jm.mind.name+'.png';

            if (navigator.msSaveBlob && (!!c.msToBlob)) {
                var blob = c.msToBlob();
                navigator.msSaveBlob(blob,name);
            } else {
                var bloburl = this.canvas_elem.toDataURL();
                var anchor = $c('a');
                if ('download' in anchor) {
                    anchor.style.visibility = 'hidden';
                    anchor.href = bloburl;
                    anchor.download = name;
                    $d.body.appendChild(anchor);
                    var evt = $d.createEvent('MouseEvents');
                    evt.initEvent('click', true, true);
                    anchor.dispatchEvent(evt);
                    $d.body.removeChild(anchor);
                } else {
                    location.href = bloburl;
                }
            }
        },

        jm_event_handle:function(type,data){
            if(type === jsMind.event_type.resize){
                this.resize();
            }
        }
    };

    var screenshot_plugin = new jsMind.plugin('screenshot',function(jm){
        var jss = new jsMind.screenshot(jm);
        jm.screenshot = jss;
        jm.shoot = function(){
            jss.shoot();
        };
        jm.add_event_listener(function(type,data){
            jss.jm_event_handle.call(jss,type,data);
        });
    });

    jsMind.register_plugin(screenshot_plugin);

})(window);


/***/ }),

/***/ "./src/app/lesson.ts":
/*!***************************!*\
  !*** ./src/app/lesson.ts ***!
  \***************************/
/*! exports provided: Lesson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lesson", function() { return Lesson; });
var Lesson = /** @class */ (function () {
    function Lesson() {
    }
    return Lesson;
}());



/***/ }),

/***/ "./src/app/lessons.ts":
/*!****************************!*\
  !*** ./src/app/lessons.ts ***!
  \****************************/
/*! exports provided: Lessons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lessons", function() { return Lessons; });
var Lessons = /** @class */ (function () {
    function Lessons() {
    }
    return Lessons;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".index-top{\n    margin-top: 100px;\n    margin-bottom: 50px;\n}\n\n#title{\n    margin-bottom: 50px;\n    text-align: center; \n}\n\n#subtitle{\n    margin-right: 180px;\n    text-align: right;\n}\n\n.container{\n    margin: 0 0 0 10%;\n}\n\nh4{\n    margin: 3% 0 0 0;\n}\n\n.row{\n    margin: 5% 10% 0 32%;\n}\n\n.form-control{\n    width: 300px;\n}\n\n#bt1{\n    padding: 8px 24px;\n    margin:  0% 0px 2% 100px;\n}\n\n#bt2{\n    padding: 8px 24px;\n    margin:  0% 0px 2% 100px;\n}\n\n.identity{\n    margin:  4% 0px 0% 3%;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"utf-8\">\n    <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n</head>\n\n\n<div class=\"index-top\">\n    <h1 id=\"title\">\n        混合式教学在线系统\n    </h1>\n    <h5 id=\"subtitle\">\n        思维导图·个性化·主动学习·讨论式教学\n    </h5>\n</div>\n\n<div style=\"text-align:center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <h4>{{con1}}</h4>\n            </div>\n            <div class=\"col-md-2\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"user.username\" id=\"ip1\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <h4>{{con2}}</h4>\n            </div>\n            <div class=\"col-md-2\">\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" id=\"ip2\">\n            </div>\n        </div>\n\n        <div class=\"radio\">\n            <label class=\"identity\">\n                <input type=\"radio\" name=\"Radios\" id=\"teacherRdio\" value=\"teacher\" checked (click)=\"getType('teacher')\">教师\n            </label>\n            <label class=\"identity\">\n                <input type=\"radio\" name=\"Radios\" id=\"studentRadio\" value=\"student\" (click)=\"getType('student')\"> 学生\n            </label>\n        </div>\n\n\n        <div class=\"row\">\n            <button type=\"button\" class=\"btn btn-default\" id=\"bt1\" (click)=\"login()\">登录</button>\n\n            <button type=\"button\" class=\"btn btn-default\" id=\"bt2\" routerLink=\"/index\">取消</button>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../person */ "./src/app/person.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../response */ "./src/app/response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.con1 = '用户名';
        this.con2 = '密码';
        this.user = new _person__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.response = new _response__WEBPACK_IMPORTED_MODULE_4__["Response"]();
        this.type = 'teacher';
    }
    LoginComponent.prototype.getType = function (type) {
        this.type = type;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.user.type = this.type;
        this.user.status = "online";
        this.userService.login(this.user).subscribe(function (data) {
            console.log(data);
            _this.response = data;
            console.log(_this.response);
            if (_this.response.status === 'yes') {
                console.log(1);
                alert('User login successfully.');
                if (_this.response.type === 'teacher') {
                    _this.router.navigateByUrl('teacher/' + _this.response.username);
                }
                else {
                    _this.router.navigateByUrl('student/' + _this.response.username);
                }
            }
            else {
                alert('User login failure, please input again !');
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mindmap.ts":
/*!****************************!*\
  !*** ./src/app/mindmap.ts ***!
  \****************************/
/*! exports provided: MindMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MindMap", function() { return MindMap; });
/**
 * Created by sunlu on 2018/6/19.
 */
var MindMap = /** @class */ (function () {
    function MindMap() {
    }
    return MindMap;
}());



/***/ }),

/***/ "./src/app/number.ts":
/*!***************************!*\
  !*** ./src/app/number.ts ***!
  \***************************/
/*! exports provided: Number */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return Number; });
/**
 * Created by sunlu on 2018/6/19.
 */
var Number = /** @class */ (function () {
    function Number() {
    }
    return Number;
}());



/***/ }),

/***/ "./src/app/person.ts":
/*!***************************!*\
  !*** ./src/app/person.ts ***!
  \***************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/**
 * Created by sunlu on 2018/6/9.
 */
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".index-top{\n    margin-top: 100px;\n    margin-bottom: 50px;\n}\n\n#title{\n    margin-bottom: 50px;\n    text-align: center; \n}\n\n#subtitle{\n    margin-right: 180px;\n    text-align: right;\n}\n\n.container{\n    margin: 0 0 0 10%;\n}\n\nh4{\n    margin: 3% 0 0 0;\n}\n\n.row{\n    margin: 5% 0% 0 32%;\n}\n\n.form-control{\n    width: 300px;\n}\n\n#bt1{\n    padding: 8px 24px;\n    margin:  0% 0px 2% 100px;\n}\n\n#bt2{\n    padding: 8px 24px;\n    margin:  0% 0px 2% 100px;\n}\n\n.identity{\n    margin:  4% 0px 0% 3%;\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"utf-8\">\n    <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n</head>\n\n\n<div class=\"index-top\">\n    <h1 id=\"title\">\n        混合式教学在线系统\n    </h1>\n    <h5 id=\"subtitle\">\n        思维导图·个性化·主动学习·讨论式教学\n    </h5>\n</div>\n\n<div style=\"text-align:center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <h4>{{con1}}</h4>\n            </div>\n            <div class=\"col-md-6\">\n                <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\" class=\"form-control\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <h4>{{con2}}</h4>\n            </div>\n            <div class=\"col-md-6\">\n                <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <h4>{{con3}}</h4>\n            </div>\n            <div class=\"col-md-6\">\n                <input type=\"password\" [(ngModel)]=\"cpassword\" name=\"cpassword\" class=\"form-control\">\n            </div>\n            <h5 style=\"color: red\" *ngIf=\"(cpassword!=null && user.password!=cpassword)\">两次密码不一致</h5>\n        </div>\n\n\n        <div class=\"radio\">\n            <label class=\"identity\">\n                <input type=\"radio\" name=\"Radios\" id=\"teacherRdio\" value=\"teacher\" checked (click)=\"getType('teacher')\">教师\n            </label>\n            <label class=\"identity\">\n                <input type=\"radio\" name=\"Radios\" id=\"studentRadio\" value=\"student\" (click)=\"getType('student')\"> 学生\n            </label>\n        </div>\n\n\n        <div class=\"row\">\n            <button type=\"button\" class=\"btn btn-default\" id=\"bt1\" (click)=\"createUser()\">注册</button>\n            <button type=\"button\" class=\"btn btn-default\" id=\"bt2\" routerLink=\"/index\">取消</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../person */ "./src/app/person.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../response */ "./src/app/response.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new _person__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.response = new _response__WEBPACK_IMPORTED_MODULE_2__["Response"]();
        this.title = '欢迎来到注册界面';
        this.con1 = '用户名';
        this.con2 = '密码';
        this.con3 = '密码确认';
        this.type = 'teacher';
    }
    RegisterComponent.prototype.getType = function (type) {
        this.type = type;
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        this.user.type = this.type;
        this.user.status = "offline";
        if (this.cpassword !== this.user.password) {
            alert('密码不一致');
        }
        else if (this.user.username == null) {
            alert('用户名不能为空');
        }
        else {
            this.userService.createUser(this.user).subscribe(function (data) {
                console.log(data);
                _this.response = data;
                console.log(_this.response);
                if (_this.response.status === 'yes') {
                    console.log(1);
                    alert('User created successfully.');
                    _this.router.navigateByUrl('login');
                }
                else {
                    alert('User created failure, please input again !');
                }
            });
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/response.ts":
/*!*****************************!*\
  !*** ./src/app/response.ts ***!
  \*****************************/
/*! exports provided: Response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/**
 * Created by sunlu on 2018/6/11.
 */
var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());



/***/ }),

/***/ "./src/app/selectQ.ts":
/*!****************************!*\
  !*** ./src/app/selectQ.ts ***!
  \****************************/
/*! exports provided: SelectQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectQ", function() { return SelectQ; });
/**
 * Created by sunlu on 2018/6/20.
 */
var SelectQ = /** @class */ (function () {
    function SelectQ() {
    }
    return SelectQ;
}());



/***/ }),

/***/ "./src/app/student/courses/courses.component.css":
/*!*******************************************************!*\
  !*** ./src/app/student/courses/courses.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    margin: 5% 0 0 3%;\n}\n\n.card{\n    width: 24%;\n    float: left;\n    margin: 1% 1% 0 0;\n    \n}\n\n.lesson-enter{\n    float: right;\n}\n\n/* #myModal{\n    width: 300px;\n} */\n\n.form-control{\n    width: 100%;\n    margin-top: 5%;\n\n    /* margin: 5% 0 0 20%; */\n}"

/***/ }),

/***/ "./src/app/student/courses/courses.component.html":
/*!********************************************************!*\
  !*** ./src/app/student/courses/courses.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"utf-8\">\n    <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n</head>\n\n\n<div class=\"container\">\n    <div>\n        <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal1\">选课</button>\n        <div class=\"modal fade\" id=\"myModal1\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n\n                    <!-- 模态框头部 -->\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">选择课程</h4>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n\n                    <!-- 模态框主体 -->\n                    <div class=\"modal-body\" *ngFor=\"let item of lessons\">\n                        <div>No.{{item.id}} <br>课程名称： {{item.name}}<br>授课老师：{{item.teacher}}<a class=\"lesson-enter\" data-dismiss=\"modal\" (click)=\"chooseLesson(item)\" routerLink=\"/student/{{user.username}}\" >选课</a></div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal2\">修改密码</button>\n            \n        <div class=\"modal fade\" id=\"myModal2\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n\n                    <!-- 模态框头部 -->\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">修改密码</h4>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n\n                    <!-- 模态框主体 -->\n                    <div class=\"modal-body\">\n\n                        <input type=\"password\" [(ngModel)]=\"password1\" placeholder=\"新密码\" name=\"password1\" class=\"form-control\">\n                        <input type=\"password\" [(ngModel)]=\"password2\" placeholder=\"确认密码\" name=\"password2\" class=\"form-control\">\n\n                    </div>\n\n                    <!-- 模态框底部 -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"changePassword()\">确定</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\" *ngFor=\"let item of chooses\">\n        <div class=\"card-header\">No.{{item.cid}} <a class=\"lesson-enter\" routerLink=\"/studentmap/{{this.user.username}}/{{item.lid}}\">进入课程 <span class=\"glyphicon glyphicon-chevron-right\"></span></a></div>\n        <div class=\"card-body\">课程名称：{{item.name}}<br>课程人数: {{item.people_num}}</div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/student/courses/courses.component.ts":
/*!******************************************************!*\
  !*** ./src/app/student/courses/courses.component.ts ***!
  \******************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../person */ "./src/app/person.ts");
/* harmony import */ var _lessons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lessons */ "./src/app/lessons.ts");
/* harmony import */ var _courses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../courses */ "./src/app/courses.ts");
/* harmony import */ var _lesson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lesson */ "./src/app/lesson.ts");
/* harmony import */ var _course__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../course */ "./src/app/course.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../response */ "./src/app/response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.user = new _person__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.lesson = new _lessons__WEBPACK_IMPORTED_MODULE_4__["Lessons"]();
        this.course = new _courses__WEBPACK_IMPORTED_MODULE_5__["Courses"]();
        this.ls = new _course__WEBPACK_IMPORTED_MODULE_7__["Course"]();
        this.response = new _response__WEBPACK_IMPORTED_MODULE_8__["Response"]();
    }
    CoursesComponent.prototype.ngOnInit = function () {
        this.getCourses();
        this.getAll();
    };
    CoursesComponent.prototype.chooseLesson = function (choose) {
        var _this = this;
        this.ls.cid = choose.id;
        this.ls.name = choose.name;
        this.ls.people_num = choose.people_num;
        this.ls.student = this.user.username;
        this.ls.lid = choose.id;
        console.log(this.ls);
        this.userService.addCourses(this.ls)
            .subscribe(function (data) {
            console.log(data);
            _this.response = data;
            if (_this.response.status === 'yes') {
                alert('选课成功');
                _this.updateAll();
            }
            else {
                alert('选课失败');
            }
        });
        this.lessons.splice(this.lessons.indexOf(choose, 0), 1);
    };
    CoursesComponent.prototype.getAll = function () {
        var _this = this;
        this.userService.addAll(this.user)
            .subscribe(function (data) {
            _this.lesson.list = data;
            _this.updateLesson(_this.lesson);
        });
    };
    CoursesComponent.prototype.getCourses = function () {
        var _this = this;
        var username = this.route.snapshot.paramMap.get('username');
        console.log(username);
        this.user.username = username;
        this.userService.examineLogin(this.user.username)
            .subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_8__["Response"]();
            re = data;
            console.log(re.status);
            if (re.status == "online") {
                _this.userService.getCourses(_this.user)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.course.list = data;
                    _this.updateChoose(_this.course);
                });
            }
            else {
                alert("登录失效，请重新登录！");
                _this.router.navigateByUrl('login');
            }
        });
    };
    CoursesComponent.prototype.updateLesson = function (lesson) {
        var tmp = new _lesson__WEBPACK_IMPORTED_MODULE_6__["Lesson"]();
        this.lessons = [];
        for (var i = 0; i < lesson.list.length; i++) {
            tmp.id = lesson.list[i].id;
            tmp.name = lesson.list[i].name;
            tmp.people_num = lesson.list[i].people_num;
            tmp.teacher = lesson.list[i].teacher;
            this.lessons.push(tmp);
            tmp = new _lesson__WEBPACK_IMPORTED_MODULE_6__["Lesson"]();
        }
    };
    CoursesComponent.prototype.updateChoose = function (lesson) {
        var tmp = new _course__WEBPACK_IMPORTED_MODULE_7__["Course"]();
        this.chooses = [];
        for (var i = 0; i < lesson.list.length; i++) {
            tmp.cid = lesson.list[i].cid;
            tmp.name = lesson.list[i].name;
            tmp.people_num = lesson.list[i].people_num;
            tmp.student = lesson.list[i].student;
            tmp.lid = lesson.list[i].lid;
            this.chooses.push(tmp);
            tmp = new _course__WEBPACK_IMPORTED_MODULE_7__["Course"]();
        }
    };
    CoursesComponent.prototype.updateAll = function () {
        var _this = this;
        this.userService.getCourses(this.user)
            .subscribe(function (data) {
            console.log(data);
            _this.course.list = data;
            console.log(_this.lesson.list);
            _this.updateChoose(_this.course);
        });
    };
    CoursesComponent.prototype.changePassword = function () {
        if (this.password1 != this.password2) {
            alert("两次密码输入不一致，修改失败！");
            return;
        }
        alert("修改成功");
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/student/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/student/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/student/scourseware/scourseware.component.css":
/*!***************************************************************!*\
  !*** ./src/app/student/scourseware/scourseware.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#jsmind_container {\r\n    float: left;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n*{ margin:0; padding: 0; }\r\n\r\n\r\n#left-nav{\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:7cm;\r\n    height:100%;\r\n    background-color:#373737;z-index:9999;\r\n}\r\n\r\n\r\n#right-part{\r\n    top:0;\r\n    left: 2cm;\r\n    min-height: 600px;\r\n}\r\n\r\n\r\na:hover ,a:focus{text-decoration:none}\r\n\r\n\r\n.nav-total{\r\n    float: left;\r\n}\r\n\r\n\r\n.nav-tabs {\r\n    font-size: 15px;\r\n}\r\n\r\n\r\n.nav-tabs li a {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.nav-collapse li{\r\n    /* float: left; */\r\n    padding:5% 0;  \r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\n\r\n.nav-collapse li a {\r\n    color:gray;\r\n    display:block;\r\n    padding:5% 5%;    \r\n    /* border-top:1px solid #4f4f4f;\r\n    border-bottom:1px solid #292929; */\r\n    transition:all 0.2s ease-out;\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n.nav-collapse li a:hover {\r\n    background-color: #4f4f4f;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n.nav-collapse li a:focus {\r\n    background-color: #4f4f4f;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n#left-bottom {\r\n    position: absolute;\r\n    bottom: 0px;\r\n}\r\n\r\n\r\n.btn{\r\n    margin: 2% 0 0 5%;\r\n}\r\n\r\n\r\n.btn-group{\r\n    margin: 2% 0 0 5%;\r\n}\r\n\r\n\r\n.childList{\r\n    padding-left: 10px;\r\n}\r\n\r\n\r\n.dropdown-menu li a {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.card{\r\n    width: 80%;\r\n    float: left;\r\n    margin: 2% 0 0 5%;\r\n}\r\n\r\n\r\n.card-header{\r\n    padding: 3% 2% 0% 2%;\r\n}\r\n\r\n\r\n.card-body{\r\n    padding: 1% 2% 1% 2%;\r\n}\r\n\r\n\r\n.delete{\r\n    float: right;\r\n    margin: 0 0 2% 0;\r\n}\r\n\r\n\r\n.panel-default{\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/student/scourseware/scourseware.component.html":
/*!****************************************************************!*\
  !*** ./src/app/student/scourseware/scourseware.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <meta charset=\"utf-8\">\r\n  <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n</head>\r\n\r\n<body>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div id=\"left-nav\" class=\"col-xs-2 col-sm-2\">\r\n        <ul class=\"nav-collapse\">\r\n          <li><a>课件</a></li>\r\n          <!-- <ul class=\"childList\" *ngIf=\"show_hide_val1\">\r\n              <li style=\"color: gray\">新增资源</li>\r\n              <li><a (click)=\"mapShoot()\">链接</a></li>\r\n              <li><a (click)=\"creatMap()\">文件</a></li>\r\n          </ul> -->\r\n          <ul id=\"left-bottom\">\r\n            <li><a>课程首页</a></li>\r\n            <li><a (click)=\"this.exitLogin8()\">退出登录</a></li>\r\n          </ul>\r\n      </ul>\r\n      \r\n      </div>\r\n\r\n      <div id=\"right-part\" class=\"col-xs-6 col-sm-10\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li><a routerLink=\"/studentmap/{{this.username}}/{{this.lid}}\">思维导图</a></li>\r\n          <li><a routerLink=\"/shomework/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">作业</a></li>\r\n          <li><a routerLink=\"/sresource/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">资源</a></li>\r\n          <li class=\"active\"><a routerLink=\"/scourseware/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">课件</a></li>\r\n        </ul>\r\n\r\n        <div id=\"node-edit\" >\r\n          <div class=\"panel panel-default\">\r\n            <h3>下载课件</h3>\r\n            <table class=\"table table-bordered table-striped\">\r\n              <thead>\r\n              <tr>\r\n                <th width=\"25%\">名称</th>\r\n                <th width=\"50%\">描述</th>\r\n                <th width=\"25%\">下载</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let item of filenames\">\r\n                <td width=\"25%\"><strong>{{ item.filename }}</strong></td>\r\n                <td width=\"50%\">{{item.fd}}</td>\r\n                <td width=\"25%\">\r\n                  <button type=\"button\" class=\"btn btn-default\" (click)=\"downloadfile(item.filename)\">\r\n                    download\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <script type=\"text/javascript\" src=\"../../jsmind/js/jsmind.screenshot.js\"></script>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/student/scourseware/scourseware.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/student/scourseware/scourseware.component.ts ***!
  \**************************************************************/
/*! exports provided: ScoursewareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoursewareComponent", function() { return ScoursewareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../download.service */ "./src/app/download.service.ts");
/* harmony import */ var _upfiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../upfiles */ "./src/app/upfiles.ts");
/* harmony import */ var _upfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../upfile */ "./src/app/upfile.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _MPNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MPNode */ "./src/app/MPNode.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../response */ "./src/app/response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScoursewareComponent = /** @class */ (function () {
    function ScoursewareComponent(router, route, restService, userService) {
        this.router = router;
        this.route = route;
        this.restService = restService;
        this.userService = userService;
        this.show_hide_val1 = false;
        this.upfiles = new _upfiles__WEBPACK_IMPORTED_MODULE_2__["UpFiles"]();
        this.url = 'http://13.67.110.158:8080/mindmap/upload/';
    }
    ScoursewareComponent.prototype.showFile = function () {
        var _this = this;
        var mpnode = new _MPNode__WEBPACK_IMPORTED_MODULE_5__["MPNode"]();
        mpnode.lid = this.lid;
        mpnode.node_id = this.node_id;
        mpnode.mapid = this.mapid;
        console.log(mpnode);
        this.userService.showWare(mpnode).subscribe(function (data) {
            console.log(data);
            if (data === null) {
            }
            else {
                _this.upfiles.list = data;
                _this.update(_this.upfiles);
            }
        });
    };
    ScoursewareComponent.prototype.getID1 = function () {
        var _this = this;
        var mapid = this.route.snapshot.paramMap.get('mapid');
        this.mapid = mapid;
        var lid = this.route.snapshot.paramMap.get('lid');
        console.log(lid);
        this.lid = lid;
        console.log(this.lid);
        var node_id = this.route.snapshot.paramMap.get('node_id');
        this.node_id = node_id;
        this.url = 'http://13.67.110.158:8080/mindmap/upload_ware/' + this.lid + "/" + this.node_id;
        console.log(this.url);
        var username = this.route.snapshot.paramMap.get('username');
        this.username = username;
        this.userService.examineLogin(this.username)
            .subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_7__["Response"]();
            re = data;
            console.log(re.status);
            if (re.status == "online") {
            }
            else {
                alert("登录失效，请重新登录！");
                _this.router.navigateByUrl('login');
            }
        });
    };
    ScoursewareComponent.prototype.update = function (upfiles) {
        var tmp = new _upfile__WEBPACK_IMPORTED_MODULE_3__["Upfile"]();
        this.filenames = [];
        console.log(upfiles.list.length);
        for (var i = 0; i < upfiles.list.length; i++) {
            tmp.lid = upfiles.list[i].lid;
            tmp.filename = upfiles.list[i].filename;
            tmp.fd = upfiles.list[i].fd;
            this.filenames.push(tmp);
            tmp = new _upfile__WEBPACK_IMPORTED_MODULE_3__["Upfile"]();
        }
    };
    ScoursewareComponent.prototype.downloadfile = function (filename) {
        console.log('downloadfile start');
        console.log(filename);
        console.log(this.lid);
        console.log(this.mapid);
        this.restService.download1(filename, this.lid, this.mapid);
    };
    ScoursewareComponent.prototype.ngOnInit = function () {
        this.getID1();
        this.showFile();
    };
    ScoursewareComponent.prototype.afterAddingFile = function (fileitem) {
        fileitem.withCredentials = false;
        console.log(fileitem);
    };
    ScoursewareComponent.prototype.showList1 = function () {
        this.show_hide_val1 = !this.show_hide_val1;
    };
    ScoursewareComponent.prototype.exitLogin8 = function () {
        var _this = this;
        this.userService.exitLogin(this.username)
            .subscribe(function (data) {
            alert("已登出！");
            _this.router.navigateByUrl('login');
        });
    };
    ScoursewareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scourseware',
            template: __webpack_require__(/*! ./scourseware.component.html */ "./src/app/student/scourseware/scourseware.component.html"),
            styles: [__webpack_require__(/*! ./scourseware.component.css */ "./src/app/student/scourseware/scourseware.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _download_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], ScoursewareComponent);
    return ScoursewareComponent;
}());



/***/ }),

/***/ "./src/app/student/shomework/shomework.component.css":
/*!***********************************************************!*\
  !*** ./src/app/student/shomework/shomework.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#jsmind_container {\n    float: left;\n    width: 100%;\n    height: 100%;\n}\n\n\n*{ margin:0; padding: 0; }\n\n\n#left-nav{\n    position:fixed;\n    top:0;\n    left:0;\n    width:7cm;\n    height:100%;\n    background-color:#373737;z-index:9999;\n}\n\n\n#right-part{\n    top:0;\n    left: 2cm;\n    min-height: 600px;\n}\n\n\na:hover ,a:focus{text-decoration:none}\n\n\n.nav-total{\n    float: left;\n}\n\n\n.nav-tabs {\n    font-size: 15px;\n}\n\n\n.nav-tabs li a {\n    cursor: pointer;\n}\n\n\n.nav-collapse li{\n    /* float: left; */\n    padding:5% 0;  \n    position: relative;\n    display: block;\n}\n\n\n.nav-collapse li a {\n    color:gray;\n    display:block;\n    padding:5% 5%;    \n    /* border-top:1px solid #4f4f4f;\n    border-bottom:1px solid #292929; */\n    transition:all 0.2s ease-out;\n    cursor:pointer;\n}\n\n\n.nav-collapse li a:hover {\n    background-color: #4f4f4f;\n    color: #ffffff;\n}\n\n\n.nav-collapse li a:focus {\n    background-color: #4f4f4f;\n    color: #ffffff;\n}\n\n\n#left-bottom {\n    position: absolute;\n    bottom: 0px;\n}\n\n\n.btn{\n    float: right;\n    margin: 5% 0% 0 0%;\n}\n\n\n.childList{\n    padding-left: 10px;\n}\n\n\n.dropdown-menu li a {\n    cursor: pointer;\n}\n\n\n.card{\n    width: 100%;\n    float: left;\n    margin: 2% 0% 0 3%;   \n}\n\n\n.card-header{\n    padding: 2% 2% 2% 2%;\n}\n\n\n.card-body{\n    padding: 1% 2% 1% 2%;\n}\n\n\n.delete{\n    float: right;\n    margin: 0 0 2% 0;\n}\n\n\n.checkbox label{\n    float: left;\n    margin: 0 0 0 3%;\n}\n\n\n.checkbox input[type=\"checkbox\"] {\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/student/shomework/shomework.component.html":
/*!************************************************************!*\
  !*** ./src/app/student/shomework/shomework.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head> \n  <meta charset=\"utf-8\"> \n  <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">  \n</head>\n\n<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div id=\"left-nav\" class=\"col-xs-2 col-sm-2\">\n        <ul class=\"nav-collapse\">\n          <li><a>作业  <span class=\"glyphicon glyphicon-chevron-down\"></span></a></li>\n          <!-- <ul class=\"childList\" *ngIf=\"show_hide_val1\">\n              <li style=\"color: gray\">新增作业</li>\n              <li><a (click)=\"mapShoot()\">选择题</a></li>\n              <li><a (click)=\"creatMap()\">简答题</a></li>\n            </ul> -->\n            <ul id=\"left-bottom\">\n              <li><a>课程首页</a></li>\n              <li><a (click)=\"this.exitLogin7()\">退出登录</a></li>\n            </ul>\n      </ul>\n      \n      </div>\n\n      <div id=\"right-part\" class=\"col-xs-6 col-sm-10\">\n        <ul class=\"nav nav-tabs\">\n          <li><a routerLink=\"/studentmap/{{this.username}}/{{this.lid}}\">思维导图</a></li>\n            <li class=\"active\"><a routerLink=\"/shomework/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">作业</a></li>\n          <li><a routerLink=\"/sresource/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">资源</a></li>\n          <li><a routerLink=\"/scourseware/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">课件</a></li>\n        </ul>\n   \n        <div class=\"card\" *ngFor=\"let item of homeworks; let i = index\">\n            <div class=\"card-header\">{{item[1]}}</div>\n            <div class=\"card-body\" *ngIf=\"item[0]==0\">\n                <div class=\"checkbox\" *ngFor=\"let question of item[2]; let j = index\">\n                    <label>\n                      <input type=\"checkbox\" [(ngModel)]=\"answers[i][1][j]\">{{question}}\n                    </label>\n                </div>\n\n            </div>\n            <div class=\"card-body\" *ngIf=\"item[0]==1\">\n                <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"answers[i][1]\"></textarea>\n            </div>\n        </div>\n\n        \n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit()\" >提交</button>\n      </div>\n    </div>\n  </div>\n  <script type=\"text/javascript\" src=\"../../jsmind/js/jsmind.screenshot.js\"></script>\n</body>\n"

/***/ }),

/***/ "./src/app/student/shomework/shomework.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/student/shomework/shomework.component.ts ***!
  \**********************************************************/
/*! exports provided: ShomeworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShomeworkComponent", function() { return ShomeworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _MPNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../MPNode */ "./src/app/MPNode.ts");
/* harmony import */ var _Submit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Submit */ "./src/app/Submit.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../response */ "./src/app/response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShomeworkComponent = /** @class */ (function () {
    function ShomeworkComponent(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
    }
    ShomeworkComponent.prototype.ngOnInit = function () {
        this.getID1();
    };
    ShomeworkComponent.prototype.getID1 = function () {
        var _this = this;
        var mapid = this.route.snapshot.paramMap.get('mapid');
        this.mapid = mapid;
        var username = this.route.snapshot.paramMap.get('username');
        this.username = username;
        this.userService.examineLogin(this.username)
            .subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_5__["Response"]();
            re = data;
            console.log(re.status);
            if (re.status == "online") {
            }
            else {
                alert("登录失效，请重新登录！");
                _this.router.navigateByUrl('login');
            }
        });
        this.homeworks = [];
        var lid = this.route.snapshot.paramMap.get('lid');
        console.log(lid);
        this.lid = lid;
        console.log(this.lid);
        var node_id = this.route.snapshot.paramMap.get('node_id');
        this.node_id = node_id;
        console.log(this.node_id);
        var mpNode = new _MPNode__WEBPACK_IMPORTED_MODULE_3__["MPNode"]();
        mpNode.lid = this.lid;
        mpNode.node_id = this.node_id;
        mpNode.mapid = this.mapid;
        this.userService.getQ0(mpNode)
            .subscribe(function (data) {
            console.log("enter q0");
            console.log(data);
            if (data == null) {
            }
            else {
                _this.Q0sum = data;
                console.log(_this.Q0sum);
                for (var i = 0; i < _this.Q0sum.length; i++) {
                    var tmp = [];
                    var choice = [];
                    choice.push(_this.Q0sum[i].a1, _this.Q0sum[i].a2, _this.Q0sum[i].a3, _this.Q0sum[i].a4);
                    tmp.push('0');
                    tmp.push(_this.Q0sum[i].title);
                    tmp.push(choice);
                    tmp.push(_this.Q0sum[i].trueA);
                    _this.homeworks.push(tmp);
                }
            }
            console.log("enter q1");
            _this.userService.getQ1(mpNode)
                .subscribe(function (data) {
                console.log(1);
                console.log(data);
                if (data == null) {
                }
                else {
                    _this.Q1sum = data;
                    console.log(_this.Q1sum);
                    for (var i = 0; i < _this.Q1sum.length; i++) {
                        var tmp = [];
                        tmp.push('1');
                        tmp.push(_this.Q1sum[i].title);
                        tmp.push([]);
                        tmp.push([]);
                        _this.homeworks.push(tmp);
                    }
                }
                _this.answers = [];
                _this.submits = [];
                _this.initAnswer();
            });
        });
    };
    ShomeworkComponent.prototype.initAnswer = function () {
        console.log(this.homeworks.length);
        for (var i = 0; i < this.homeworks.length; i++) {
            if (this.homeworks[i][0] == "0") {
                this.answers.push(["0", [false, false, false, false]]);
            }
            else if (this.homeworks[i][0] == "1") {
                this.answers.push(["1", []]);
            }
        }
    };
    ShomeworkComponent.prototype.checkAnswer = function () {
        this.tm = [];
        for (var i = 0; i < this.answers.length; i++) {
            var sub = new _Submit__WEBPACK_IMPORTED_MODULE_4__["Submit"]();
            sub.username = this.username;
            sub.mapid = this.mapid;
            sub.lid = this.lid;
            sub.node_id = this.node_id;
            if (this.answers[i][0] == "0") {
                var tmp = [];
                if (this.answers[i][1][0]) {
                    tmp.push('A');
                }
                if (this.answers[i][1][1]) {
                    tmp.push('B');
                }
                if (this.answers[i][1][2]) {
                    tmp.push('C');
                }
                if (this.answers[i][1][3]) {
                    tmp.push('D');
                }
                if (tmp.toString() == "") {
                }
                else {
                    if (tmp.toString() == this.homeworks[i][3].toString()) {
                        //title，课程id，节点id，学生id，对错结果
                        sub.title = this.homeworks[i][1];
                        sub.answer = "yes";
                        this.tm.push(sub);
                    }
                    else {
                        sub.title = this.homeworks[i][1];
                        sub.answer = "false";
                        this.tm.push(sub);
                    }
                }
            }
        }
    };
    ShomeworkComponent.prototype.submit = function () {
        this.checkAnswer();
        console.log(this.tm);
        this.userService.submit(this.tm)
            .subscribe(function (data) {
            console.log(data);
            var re = new _response__WEBPACK_IMPORTED_MODULE_5__["Response"]();
            re = data;
            if (re.status == "答题成功") {
                alert("答题成功！");
            }
            else {
                alert(re.status);
            }
        });
    };
    ShomeworkComponent.prototype.exitLogin7 = function () {
        var _this = this;
        this.userService.exitLogin(this.username)
            .subscribe(function (data) {
            alert("已登出！");
            _this.router.navigateByUrl('login');
        });
    };
    ShomeworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shomework',
            template: __webpack_require__(/*! ./shomework.component.html */ "./src/app/student/shomework/shomework.component.html"),
            styles: [__webpack_require__(/*! ./shomework.component.css */ "./src/app/student/shomework/shomework.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ShomeworkComponent);
    return ShomeworkComponent;
}());



/***/ }),

/***/ "./src/app/student/sresource/sresource.component.css":
/*!***********************************************************!*\
  !*** ./src/app/student/sresource/sresource.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{ margin:0; padding: 0; }\r\n\r\n#left-nav{\r\n  position:fixed;\r\n  top:0;\r\n  left:0;\r\n  width:7cm;\r\n  height:100%;\r\n  background-color:#373737;z-index:9999;\r\n}\r\n\r\n#right-part{\r\n  top:0;\r\n  left: 2cm;\r\n  min-height: 600px;\r\n}\r\n\r\na:hover ,a:focus{text-decoration:none}\r\n\r\n.nav-total{\r\n  float: left;\r\n}\r\n\r\n.nav-tabs {\r\n  font-size: 15px;\r\n}\r\n\r\n.nav-tabs li a {\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-collapse li{\r\n  /* float: left; */\r\n  padding:5% 0;  \r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.nav-collapse li a {\r\n  color:gray;\r\n  display:block;\r\n  padding:5% 5%;    \r\n  /* border-top:1px solid #4f4f4f;\r\n  border-bottom:1px solid #292929; */\r\n  transition:all 0.2s ease-out;\r\n  cursor:pointer;\r\n}\r\n\r\n.nav-collapse li a:hover {\r\n  background-color: #4f4f4f;\r\n  color: #ffffff;\r\n}\r\n\r\n.nav-collapse li a:focus {\r\n  background-color: #4f4f4f;\r\n  color: #ffffff;\r\n}\r\n\r\n#left-bottom {\r\n  position: absolute;\r\n  bottom: 0px;\r\n}\r\n\r\n.btn{\r\n  margin: 2% 0 0 5%;\r\n}\r\n\r\n.btn-group{\r\n  margin: 2% 0 0 5%;\r\n}\r\n\r\n.childList{\r\n  padding-left: 10px;\r\n}\r\n\r\n.dropdown-menu li a {\r\n  cursor: pointer;\r\n}\r\n\r\n.panel-default{\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/student/sresource/sresource.component.html":
/*!************************************************************!*\
  !*** ./src/app/student/sresource/sresource.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <meta charset=\"utf-8\">\r\n  <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n</head>\r\n\r\n<body>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div id=\"left-nav\" class=\"col-xs-2 col-sm-2\">\r\n        <ul class=\"nav-collapse\">\r\n          <li><a>资源</a></li>\r\n          <!-- <ul class=\"childList\" *ngIf=\"show_hide_val1\">\r\n              <li style=\"color: gray\">新增资源</li>\r\n              <li><a (click)=\"mapShoot()\">链接</a></li>\r\n              <li><a (click)=\"creatMap()\">文件</a></li>\r\n            </ul> -->\r\n            <ul id=\"left-bottom\">\r\n              <li><a>课程首页</a></li>\r\n              <li><a (click)=\"this.exitLogin6()\">退出登录</a></li>\r\n            </ul>\r\n      </ul>\r\n      \r\n      </div>\r\n\r\n      <div id=\"right-part\" class=\"col-xs-6 col-sm-10\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li><a routerLink=\"/studentmap/{{this.username}}/{{this.lid}}\">思维导图</a></li>\r\n          <li><a routerLink=\"/shomework/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">作业</a></li>\r\n          <li class=\"active\"><a routerLink=\"/sresource/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">资源</a></li>\r\n          <li><a a routerLink=\"/scourseware/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">课件</a></li>\r\n        </ul>\r\n\r\n        <div id=\"node-edit\" >\r\n          <div class=\"panel panel-default\">\r\n            <h3>下载资源</h3>\r\n            <div class=\"panel panel-default\">\r\n              <h4>文件</h4>\r\n              <table class=\"table table-bordered table-striped\">\r\n                <thead>\r\n                <tr>\r\n                  <th width=\"25%\">名称</th>\r\n                  <th width=\"50%\">描述</th>\r\n                  <th width=\"25%\">下载</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of filenames\">\r\n                  <td width=\"25%\"><strong>{{ item.filename }}</strong></td>\r\n                  <td width=\"50%\">{{ item.fd }}</td>\r\n                  <td width=\"25%\">\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"downloadfile(item.filename)\">\r\n                      download\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n            <div class=\"panel panel-default\">\r\n              <h4>链接</h4>\r\n              <table class=\"table table-bordered table-striped\">\r\n                <thead>\r\n                <tr>\r\n                  <th width=\"50%\">名称</th>\r\n                  <th width=\"50%\">描述</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor=\"let item of links\">\r\n                  <td width=\"50%\"><a target=\"_blank\" href=\"http://{{item.linkname}}\">{{ item.linkname }}</a></td>\r\n                  <td width=\"50%\">\r\n                    {{ item.linkcontent }}\r\n                  </td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <script type=\"text/javascript\" src=\"../../jsmind/js/jsmind.screenshot.js\"></script>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/student/sresource/sresource.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/student/sresource/sresource.component.ts ***!
  \**********************************************************/
/*! exports provided: SresourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SresourceComponent", function() { return SresourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../download.service */ "./src/app/download.service.ts");
/* harmony import */ var _upfiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../upfiles */ "./src/app/upfiles.ts");
/* harmony import */ var _upfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../upfile */ "./src/app/upfile.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _MPNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../MPNode */ "./src/app/MPNode.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../response */ "./src/app/response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SresourceComponent = /** @class */ (function () {
    function SresourceComponent(router, route, restService, userService) {
        this.router = router;
        this.route = route;
        this.restService = restService;
        this.userService = userService;
        this.show_hide_val1 = false;
        this.upfiles = new _upfiles__WEBPACK_IMPORTED_MODULE_2__["UpFiles"]();
        this.url = 'http://13.67.110.158:8080/mindmap/upload/';
    }
    SresourceComponent.prototype.showLink = function () {
        var _this = this;
        this.restService.showLink(this.lid, this.node_id, this.mapid).subscribe(function (data) {
            // 数据处理
            console.log("get link success");
            _this.links = data;
        });
    };
    SresourceComponent.prototype.showFile = function () {
        var _this = this;
        var mpnode = new _MPNode__WEBPACK_IMPORTED_MODULE_5__["MPNode"]();
        mpnode.lid = this.lid;
        mpnode.node_id = this.node_id;
        mpnode.mapid = this.mapid;
        console.log(mpnode);
        this.userService.showResource(mpnode).subscribe(function (data) {
            console.log(data);
            if (data === null) {
            }
            else {
                _this.upfiles.list = data;
                _this.update(_this.upfiles);
            }
        });
    };
    SresourceComponent.prototype.update = function (upfiles) {
        var tmp = new _upfile__WEBPACK_IMPORTED_MODULE_3__["Upfile"]();
        this.filenames = [];
        console.log(upfiles.list.length);
        for (var i = 0; i < upfiles.list.length; i++) {
            tmp.lid = upfiles.list[i].lid;
            tmp.filename = upfiles.list[i].filename;
            tmp.fd = upfiles.list[i].fd;
            this.filenames.push(tmp);
            tmp = new _upfile__WEBPACK_IMPORTED_MODULE_3__["Upfile"]();
        }
    };
    SresourceComponent.prototype.downloadfile = function (filename) {
        console.log('downloadfile start');
        this.restService.download(filename, '1', this.mapid);
    };
    SresourceComponent.prototype.getID1 = function () {
        var _this = this;
        var mapid = this.route.snapshot.paramMap.get('mapid');
        this.mapid = mapid;
        var lid = this.route.snapshot.paramMap.get('lid');
        console.log(lid);
        this.lid = lid;
        console.log(this.lid);
        var node_id = this.route.snapshot.paramMap.get('node_id');
        this.node_id = node_id;
        this.url = 'http://13.67.110.158:8080/mindmap/upload_resource/' + this.lid + "/" + this.node_id;
        console.log(this.url);
        var username = this.route.snapshot.paramMap.get('username');
        this.username = username;
        this.userService.examineLogin(this.username)
            .subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_7__["Response"]();
            re = data;
            console.log(re.status);
            if (re.status == "online") {
            }
            else {
                alert("登录失效，请重新登录！");
                _this.router.navigateByUrl('login');
            }
        });
    };
    SresourceComponent.prototype.ngOnInit = function () {
        this.getID1();
        this.showFile();
        this.showLink();
    };
    SresourceComponent.prototype.afterAddingFile = function (fileitem) {
        fileitem.withCredentials = false;
        console.log(fileitem);
    };
    SresourceComponent.prototype.showList1 = function () {
        this.show_hide_val1 = !this.show_hide_val1;
    };
    SresourceComponent.prototype.exitLogin6 = function () {
        var _this = this;
        this.userService.exitLogin(this.username)
            .subscribe(function (data) {
            alert("已登出！");
            _this.router.navigateByUrl('login');
        });
    };
    SresourceComponent.prototype.jump = function (data) {
        console.log(data);
        window.open(data);
    };
    SresourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sresource',
            template: __webpack_require__(/*! ./sresource.component.html */ "./src/app/student/sresource/sresource.component.html"),
            styles: [__webpack_require__(/*! ./sresource.component.css */ "./src/app/student/sresource/sresource.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _download_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SresourceComponent);
    return SresourceComponent;
}());



/***/ }),

/***/ "./src/app/student/studentmap/studentmap.component.css":
/*!*************************************************************!*\
  !*** ./src/app/student/studentmap/studentmap.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#jsmind_container {\n    float: left;\n    width: 100%;\n    height: 100%;\n}\n\n\n*{ margin:0; padding: 0; }\n\n\n#left-nav{\n    position:fixed;\n    top:0;\n    left:0;\n    width:7cm;\n    height:100%;\n    background-color:#373737;z-index:9999;\n}\n\n\n#right-part{\n    top:0;\n    left: 2cm;\n    min-height: 600px;\n}\n\n\na:hover ,a:focus{text-decoration:none}\n\n\n.nav-total{\n    float: left;\n}\n\n\n.nav-tabs {\n    font-size: 15px;\n}\n\n\n.nav-tabs li a {\n    cursor: pointer;\n}\n\n\n.nav-collapse li{\n    /* float: left; */\n    padding:5% 0;  \n    position: relative;\n    display: block;\n}\n\n\n.nav-collapse li a {\n    color:gray;\n    display:block;\n    padding:5% 5%;    \n    /* border-top:1px solid #4f4f4f;\n    border-bottom:1px solid #292929; */\n    transition:all 0.2s ease-out;\n    cursor:pointer;\n}\n\n\n.nav-collapse li a:hover {\n    background-color: #4f4f4f;\n    color: #ffffff;\n}\n\n\n.nav-collapse li a:focus {\n    background-color: #4f4f4f;\n    color: #ffffff;\n}\n\n\n#left-bottom {\n    position: absolute;\n    bottom: 0px;\n}\n\n\n/* .btn{\n    margin: 2% 0 0 5%;\n} */\n\n\n/* .btn-group{\n    margin: 2% 0 0 5%;\n} */\n\n\n.childList{\n    padding-left: 10px;\n}\n\n\n/* .dropdown-menu li a {\n    cursor: pointer;\n} */\n"

/***/ }),

/***/ "./src/app/student/studentmap/studentmap.component.html":
/*!**************************************************************!*\
  !*** ./src/app/student/studentmap/studentmap.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head> \n    <meta charset=\"utf-8\"> \n    <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">  \n  </head>\n  \n  <body>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div id=\"left-nav\" class=\"col-xs-2 col-sm-2\">\n          <ul class=\"nav-collapse\">\n            <li><a (click)=\"showList1()\">思维导图  <span class=\"glyphicon glyphicon-chevron-down\"></span></a></li>\n            <ul class=\"childList\" *ngIf=\"show_hide_val1\">\n              <li><a (click)=\"showList2()\">思维导图操作  <span class=\"glyphicon glyphicon-chevron-down\"></span></a>\n              </li>\n              <ul class=\"childList\" *ngIf=\"show_hide_val2\">\n                <li><a (click)=\"showList3()\">切换思维导图  <span class=\"glyphicon glyphicon-chevron-down\"></span></a></li>\n                <ul class=\"childList\" *ngIf=\"show_hide_val3\">\n                  <li *ngFor=\"let id of ids; let i = index\"><a (click)=\"changeMap(i)\">{{id}}</a></li>\n                </ul>\n                <li><a (click)=\"mapShoot()\">思维导图截图</a></li>\n              </ul>\n            </ul>\n            <ul id=\"left-bottom\">\n              <li><a>课程首页</a></li>\n              <li><a (click)=\"this.exitLogin5()\">退出登录</a></li>\n            </ul>\n        </ul>\n        </div>\n  \n        <div id=\"right-part\" class=\"col-xs-6 col-sm-10\">\n          <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">思维导图{{currentMap + 1}}</a></li>\n            <li *ngIf=\"mindMap.get_selected_node()\"><a routerLink=\"/shomework/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{mindMap.get_selected_node().id}}\">作业</a></li>\n            <li *ngIf=\"mindMap.get_selected_node()\"><a routerLink=\"/sresource/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{mindMap.get_selected_node().id}}\">资源</a></li>\n            <li *ngIf=\"mindMap.get_selected_node()\"><a routerLink=\"/scourseware/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{mindMap.get_selected_node().id}}\">课件</a></li>\n          </ul>\n        \n        <div id=\"jsmind_container\"></div> \n        </div>\n      </div>\n    </div>\n    <script type=\"text/javascript\" src=\"../../jsmind/js/jsmind.screenshot.js\"></script>\n  </body>\n  "

/***/ }),

/***/ "./src/app/student/studentmap/studentmap.component.ts":
/*!************************************************************!*\
  !*** ./src/app/student/studentmap/studentmap.component.ts ***!
  \************************************************************/
/*! exports provided: StudentmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentmapComponent", function() { return StudentmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jsmind_js_jsmind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsmind/js/jsmind.js */ "./src/app/jsmind/js/jsmind.js");
/* harmony import */ var _jsmind_js_jsmind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jsmind_js_jsmind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jsmind_js_jsmind_screenshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsmind/js/jsmind.screenshot.js */ "./src/app/jsmind/js/jsmind.screenshot.js");
/* harmony import */ var _jsmind_js_jsmind_screenshot_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jsmind_js_jsmind_screenshot_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lesson__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lesson */ "./src/app/lesson.ts");
/* harmony import */ var _mindmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mindmap */ "./src/app/mindmap.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../number */ "./src/app/number.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../response */ "./src/app/response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { UserService } from '../../services/user.service';








var options = {
    container: 'jsmind_container',
    theme: 'orange',
    editable: false,
    mode: 'side',
};
var StudentmapComponent = /** @class */ (function () {
    function StudentmapComponent(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.title = '课程思维导图';
        this.mindMap = null;
        this.currentMap = 0;
        this.show_hide_val1 = false;
        this.show_hide_val2 = false;
        this.show_hide_val3 = false;
        this.items = [];
        this.ids = [];
    }
    StudentmapComponent.prototype.getID1 = function () {
        var _this = this;
        var lid = this.route.snapshot.paramMap.get('id');
        console.log(lid);
        this.lid = lid;
        console.log(this.lid);
        var username = this.route.snapshot.paramMap.get('username');
        this.username = username;
        this.userService.examineLogin(this.username)
            .subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_8__["Response"]();
            re = data;
            console.log(re.status);
            if (re.status == "online") {
            }
            else {
                alert("登录失效，请重新登录！");
                _this.router.navigateByUrl('login');
            }
        });
    };
    StudentmapComponent.prototype.getMindMap = function () {
        var _this = this;
        var lesson = new _lesson__WEBPACK_IMPORTED_MODULE_4__["Lesson"]();
        lesson.id = this.lid;
        this.userService.getMindMap(lesson)
            .subscribe(function (data) {
            console.log(data);
            if (data == null) {
            }
            else {
                var mindmap = new _mindmap__WEBPACK_IMPORTED_MODULE_5__["MindMap"]();
                mindmap = data;
                _this.items = mindmap.items;
            }
        });
        this.userService.getNum(lesson)
            .subscribe(function (data) {
            console.log(data);
            if (data == null) {
            }
            else {
                var number = new _number__WEBPACK_IMPORTED_MODULE_7__["Number"]();
                number = data;
                _this.ids = number.ids;
            }
        });
    };
    StudentmapComponent.prototype.ngOnInit = function () {
        this.getID1();
        this.mindMap = new _jsmind_js_jsmind_js__WEBPACK_IMPORTED_MODULE_1__(options);
        this.getMindMap();
        // const mind1 = {
        //       "meta":{
        //         "name":"jsMind mindMap",
        //         "author":"zhang junjie",
        //         "version":"0.2"
        //       },
        //       "format":"node_tree",
        //       "data":{"id":"root","topic":"课程名称","children":[
        //             {"id":"part","topic":"组成","direction":"right","children":[
        //             ]},
        //             {"id":"part2","topic":"组成","direction":"right","children":[
        //             ]},
        //       ]}
        // }
        // this.items.push(mind1);
        // this.changeMap(this.items.length - 1);
    };
    // creatMap() {
    //   const mind1 = {
    //     "meta":{
    //       "name":"jsMind mindMap",
    //       "author":"zhang junjie",
    //       "version":"0.2"
    //     },
    //     "format":"node_tree",
    //     "data":{"id":"root","topic":"课程名称","children":[
    //           {"id":"part","topic":"组成","direction":"right","children":[
    //           ]},
    //           {"id":"part2","topic":"组成","direction":"right","children":[
    //           ]},
    //     ]}
    //   }
    //   this.items.push(mind1);
    //   this.changeMap(this.items.length - 1);
    // }
    StudentmapComponent.prototype.changeMap = function (e) {
        this.mapid = this.ids[e];
        this.currentMap = e;
        this.mindMap.show(this.items[e]);
    };
    StudentmapComponent.prototype.mapShoot = function () {
        // this.mindMap.show(this.currentMap);
        this.mindMap.screenshot.shootDownload();
    };
    // removeNode() {
    //   const selected_id = this.mindMap.get_selected_node();
    //   if(!selected_id){
    //   alert('请先选择一个节点！');
    //   return;
    //   }
    //   if(!selected_id.parent) {
    //     window.alert('根节点无法被删除！');
    //     return;
    //   }
    //   this.mindMap.remove_node(selected_id);
    //   this.items[this.currentMap] = this.mindMap.get_data("node_tree");
    // }
    // addChildNode() {
    //   const selected_node = this.mindMap.get_selected_node(); 
    //   if(!selected_node){
    //   alert('请先选择一个节点！');
    //   return;
    //   }
    //   const nodeid = jsMind.util.uuid.newid();
    //   const topic = '新节点';
    //   const node = this.mindMap.add_node(selected_node, nodeid, topic);
    //   this.items[this.currentMap] = this.mindMap.get_data("node_tree");
    // }
    // addBrotherNode(e) {
    //   console.log(e)
    //   const selected_node = this.mindMap.get_selected_node(); 
    //   if(!selected_node){
    //   alert('请先选择一个节点！');
    //   return;
    //   }
    //   if(!selected_node.parent){
    //     alert('根节点无法被添加兄弟节点！');
    //     return;
    //   }
    //   const nodeid = jsMind.util.uuid.newid();
    //   const topic = '新节点';
    //   const node = this.mindMap.add_node(selected_node.parent, nodeid, topic);
    //   this.items[this.currentMap] = this.mindMap.get_data("node_tree");
    // }
    // changeNodeColor(e) {
    //   const selected_node = this.mindMap.get_selected_node();
    //   if(!selected_node){
    //   alert('请先选择一个节点！');
    //   return;
    //   }
    //   this.mindMap.set_node_color(selected_node.id, e.toElement.id, "#fff");
    //   this.items[this.currentMap] = this.mindMap.get_data("node_tree");
    // }
    StudentmapComponent.prototype.showList1 = function () {
        this.show_hide_val1 = !this.show_hide_val1;
    };
    StudentmapComponent.prototype.showList2 = function () {
        this.show_hide_val2 = !this.show_hide_val2;
    };
    StudentmapComponent.prototype.showList3 = function () {
        this.show_hide_val3 = !this.show_hide_val3;
    };
    StudentmapComponent.prototype.exitLogin5 = function () {
        var _this = this;
        this.userService.exitLogin(this.username)
            .subscribe(function (data) {
            alert("已登出！");
            _this.router.navigateByUrl('login');
        });
    };
    StudentmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-studentmap',
            template: __webpack_require__(/*! ./studentmap.component.html */ "./src/app/student/studentmap/studentmap.component.html"),
            styles: [__webpack_require__(/*! ./studentmap.component.css */ "./src/app/student/studentmap/studentmap.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], StudentmapComponent);
    return StudentmapComponent;
}());



/***/ }),

/***/ "./src/app/teacher/lessons/lessons.component.css":
/*!*******************************************************!*\
  !*** ./src/app/teacher/lessons/lessons.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    margin: 5% 0 0 3%;\n}\n\n.card{\n    width: 24%;\n    float: left;\n    margin: 1% 1% 0 0;\n    \n}\n\n.lesson-enter{\n    float: right;\n}\n\n/* #myModal{\n    width: 300px;\n} */\n\n.form-control{\n    width: 100%;\n    margin-top: 5%;\n}"

/***/ }),

/***/ "./src/app/teacher/lessons/lessons.component.html":
/*!********************************************************!*\
  !*** ./src/app/teacher/lessons/lessons.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <meta charset=\"utf-8\">\n    <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n</head>\n\n\n<div class=\"container\">\n    <div>\n        <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal1\">添加课程</button>\n        <div class=\"modal fade\" id=\"myModal1\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n\n                    <!-- 模态框头部 -->\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">添加课程</h4>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n\n                    <!-- 模态框主体 -->\n                    <div class=\"modal-body\">\n\n                        <input type=\"text\" [(ngModel)]=\"addLessonId\" placeholder=\"课程id\" name=\"lessonid\" class=\"form-control\">\n                        <input type=\"text\" [(ngModel)]=\"addLessonName\" placeholder=\"课程名称\" name=\"lessonname\" class=\"form-control\">\n\n                    </div>\n\n                    <!-- 模态框底部 -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"addLesson()\">确定</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n        <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal2\">修改密码</button>\n            \n        <div class=\"modal fade\" id=\"myModal2\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n\n                    <!-- 模态框头部 -->\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">修改密码</h4>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n\n                    <!-- 模态框主体 -->\n                    <div class=\"modal-body\">\n\n                        <input type=\"password\" [(ngModel)]=\"password1\" placeholder=\"新密码\" name=\"password1\" class=\"form-control\">\n                        <input type=\"password\" [(ngModel)]=\"password2\" placeholder=\"确认密码\" name=\"password2\" class=\"form-control\">\n\n                    </div>\n\n                    <!-- 模态框底部 -->\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\n                        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"changePassword()\">确定</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\" *ngFor=\"let item of lessons\">\n        <div class=\"card-header\">No.{{item[0]}}<a class=\"lesson-enter\" routerLink=\"/mindmap/{{this.user.username}}/{{item[0]}}\">进入课程 <span class=\"glyphicon glyphicon-chevron-right\"></span></a></div>\n        <div class=\"card-body\">课程名称: {{item[1]}}<br>课程人数: {{item[2]}}</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/teacher/lessons/lessons.component.ts":
/*!******************************************************!*\
  !*** ./src/app/teacher/lessons/lessons.component.ts ***!
  \******************************************************/
/*! exports provided: LessonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsComponent", function() { return LessonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../person */ "./src/app/person.ts");
/* harmony import */ var _lessons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lessons */ "./src/app/lessons.ts");
/* harmony import */ var _lesson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lesson */ "./src/app/lesson.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../response */ "./src/app/response.ts");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../account */ "./src/app/account.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LessonsComponent = /** @class */ (function () {
    function LessonsComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.lesson = new _lessons__WEBPACK_IMPORTED_MODULE_4__["Lessons"]();
        this.user = new _person__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.ls = new _lesson__WEBPACK_IMPORTED_MODULE_5__["Lesson"]();
        this.response = new _response__WEBPACK_IMPORTED_MODULE_6__["Response"]();
    }
    LessonsComponent.prototype.ngOnInit = function () {
        this.getLessons();
        this.lessons = [];
        this.addLessonName = '';
        this.addLessonId = '';
    };
    LessonsComponent.prototype.getLessons = function () {
        var _this = this;
        var username = this.route.snapshot.paramMap.get('username');
        console.log(username);
        this.user.username = username;
        this.userService.examineLogin(this.user.username)
            .subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_6__["Response"]();
            re = data;
            console.log(re.status);
            if (re.status == "online") {
                _this.userService.getLessons(_this.user)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.lesson.list = data;
                    console.log(_this.lesson.list);
                    _this.updateLesson(_this.lesson);
                });
            }
            else {
                alert("登录失效，请重新登录！");
                _this.router.navigateByUrl('login');
            }
        });
    };
    LessonsComponent.prototype.addLesson = function () {
        var _this = this;
        console.log(this.addLessonName);
        if (this.addLessonId === '') {
            alert('课程ID不能为空');
        }
        else if (this.addLessonName === '') {
            alert('课程名字不能为空');
        }
        else {
            this.ls.id = this.addLessonId;
            this.ls.name = this.addLessonName;
            this.ls.teacher = this.user.username;
            this.userService.addLessons(this.ls).subscribe(function (data) {
                console.log(data);
                _this.response = data;
                console.log(_this.response);
                if (_this.response.status === 'yes') {
                    _this.updateAll();
                }
                else {
                    alert('该id的课程已经被添加过了！');
                }
            });
        }
    };
    LessonsComponent.prototype.updateLesson = function (lesson) {
        var tmp = [];
        this.lessons = [];
        for (var i = 0; i < lesson.list.length; i++) {
            tmp.push(lesson.list[i].id);
            tmp.push(lesson.list[i].name);
            tmp.push(lesson.list[i].people_num);
            this.lessons.push(tmp);
            tmp = [];
        }
    };
    LessonsComponent.prototype.updateAll = function () {
        var _this = this;
        this.userService.getLessons(this.user)
            .subscribe(function (data) {
            console.log(data);
            _this.lesson.list = data;
            console.log(_this.lesson.list);
            _this.updateLesson(_this.lesson);
        });
    };
    LessonsComponent.prototype.changePassword = function () {
        if (this.password1 != this.password2) {
            alert("两次密码输入不一致，修改失败！");
            return;
        }
        var account = new _account__WEBPACK_IMPORTED_MODULE_7__["Account"]();
        account.username = this.user.username;
        account.password = this.password1;
        this.userService.changePass(account).subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_6__["Response"]();
            re = data;
            if (re.status == "same") {
                alert("新旧密码一致");
            }
            else if (re.status == "yes") {
                alert("修改成功");
            }
            else {
                alert("修改失败");
            }
        });
    };
    LessonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lessons',
            template: __webpack_require__(/*! ./lessons.component.html */ "./src/app/teacher/lessons/lessons.component.html"),
            styles: [__webpack_require__(/*! ./lessons.component.css */ "./src/app/teacher/lessons/lessons.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LessonsComponent);
    return LessonsComponent;
}());



/***/ }),

/***/ "./src/app/teacher/mindmap/mindmap.component.css":
/*!*******************************************************!*\
  !*** ./src/app/teacher/mindmap/mindmap.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#jsmind_container {\n    /* float: left; */\n    width: 80%;\n    height: 80%;\n}\n\n\n*{ margin:0; padding: 0; }\n\n\n#left-nav{\n    position:fixed;\n    top:0;\n    left:0;\n    width: 7cm;\n    height:100%;\n    background-color:#373737;z-index:9999;\n}\n\n\n#right-part{\n    top:0;\n    left: 2cm;\n    min-height: 600px;\n}\n\n\na:hover ,a:focus{text-decoration:none}\n\n\n.nav-total{\n    float: left;\n}\n\n\n.nav-tabs {\n    font-size: 15px;\n}\n\n\n.nav-tabs li a {\n    cursor: pointer;\n}\n\n\n.nav-collapse li{\n    /* float: left; */\n    padding:5% 0;  \n    position: relative;\n    display: block;\n}\n\n\n.nav-collapse li a {\n    color:gray;\n    display:block;\n    padding:5% 5%;    \n    /* border-top:1px solid #4f4f4f;\n    border-bottom:1px solid #292929; */\n    transition:all 0.2s ease-out;\n    cursor:pointer;\n}\n\n\n.nav-collapse li a:hover {\n    background-color: #4f4f4f;\n    color: #ffffff;\n}\n\n\n.nav-collapse li a:focus {\n    background-color: #4f4f4f;\n    color: #ffffff;\n}\n\n\n#left-bottom {\n    position: absolute;\n    bottom: 0px;\n}\n\n\n.btn{\n    margin: 2% 0 0 5%;\n}\n\n\n.btn-group{\n    margin: 2% 0 0 5%;\n}\n\n\n.childList{\n    padding-left: 10px;\n}\n\n\n.dropdown-menu li a {\n    cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/teacher/mindmap/mindmap.component.html":
/*!********************************************************!*\
  !*** ./src/app/teacher/mindmap/mindmap.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <meta charset=\"utf-8\">\n  <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n</head>\n\n<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div id=\"left-nav\" class=\"col-xs-6 col-sm-2\">\n        <ul class=\"nav-collapse\">\n          <li>\n            <a (click)=\"showList1()\">思维导图\n              <span class=\"glyphicon glyphicon-chevron-down\"></span>\n            </a>\n          </li>\n          <ul class=\"childList\" *ngIf=\"show_hide_val1\">\n            <li>\n              <a (click)=\"showList2()\">思维导图操作\n                <span class=\"glyphicon glyphicon-chevron-down\"></span>\n              </a>\n            </li>\n            <ul class=\"childList\" *ngIf=\"show_hide_val2\">\n              <li>\n                <a (click)=\"showList3()\">切换思维导图\n                  <span class=\"glyphicon glyphicon-chevron-down\"></span>\n                </a>\n              </li>\n              <ul class=\"childList\" *ngIf=\"show_hide_val3\">\n                <li *ngFor=\"let id of ids; let i = index\">\n                  <a (click)=\"changeMap(i)\">{{id}}</a>\n                </li>\n              </ul>\n              <li>\n                <a (click)=\"mapShoot()\">思维导图截图</a>\n              </li>\n              <li>\n                <a data-toggle=\"modal\" data-target=\"#myModal1\">创建思维导图</a>\n              </li>\n              <div class=\"modal fade\" id=\"myModal1\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\">创建思维导图</h4>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <input type=\"text\" placeholder=\"新导图id\" [(ngModel)]=\"createId\" name=\"mapid\" class=\"form-control\">\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\n                      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"creatMap()\">确定</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ul>\n            <li>\n              <a>作业正确率</a>\n            </li>\n          </ul>\n          <ul id=\"left-bottom\">\n            <li><a routerLink=\"/teacher/{{this.username}}\">课程首页</a></li>\n            <li><a (click)=\"this.exitLogin4()\">退出登录</a></li>\n          </ul>\n        </ul>\n      </div>\n\n      <div id=\"right-part\" class=\"col-xs-6 col-sm-10\">\n        <ul class=\"nav nav-tabs\">\n          <li class=\"active\"><a routerLink=\"/mindmap\">思维导图</a></li>\n          <li *ngIf=\"mindMap.get_selected_node()\"><a routerLink=\"/thomework/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.get_selected_nodeid()}}\">作业</a></li>\n          <li *ngIf=\"mindMap.get_selected_node()\"><a routerLink=\"/tresource/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.get_selected_nodeid()}}\">资源</a></li>\n          <li *ngIf=\"mindMap.get_selected_node()\"><a routerLink=\"/tcourseware/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{mindMap.get_selected_node().id}}\">课件</a></li>\n          <!-- <li class=\"active\">\n            <a routerLink=\"/mindmap\">思维导图</a>\n          </li>\n          <li *ngIf=\"mindMap.get_selected_node()\">\n            <a routerLink=\"/thomework/{{this.lid}}/{{mindMap.get_selected_node().id}}\">作业</a>\n          </li>\n          <li *ngIf=\"mindMap.get_selected_node()\">\n            <a routerLink=\"/tresource/{{this.lid}}/{{mindMap.get_selected_node().id}}\">资源</a>\n          </li>\n          <li *ngIf=\"mindMap.get_selected_node()\">\n            <a routerLink=\"/tcourseware/{{this.lid}}/{{mindMap.get_selected_node().id}}\">课件</a>\n          </li> -->\n        </ul>\n\n        <div id=\"node-edit\" *ngIf=\"mindMap.get_selected_node()\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n              新增节点\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li>\n                <a (click)=\"addBrotherNode()\">新增兄弟节点</a>\n              </li>\n\n              <li>\n                <a (click)=\"addChildNode()\">新增子节点</a>\n              </li>\n            </ul>\n          </div>\n\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"removeNode()\">删除</button>\n\n          <div class=\"btn-group\">\n            节点颜色 <input type=\"color\" value=\"value\" [(ngModel)]=\"nodeColor\" (ngModelChange)=\"changeNodeColor()\">\n            字体颜色 <input type=\"color\" value=\"value\" [(ngModel)]=\"fontColor\" (ngModelChange)=\"changeFontColor()\">\n            <!-- <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n              修改颜色\n            </button>\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li>\n                <a id=\"red\" (click)=\"changeNodeColor($event)\">红色</a>\n              </li>\n              <li>\n                <a id=\"orange\" (click)=\"changeNodeColor($event)\">橙色</a>\n              </li>\n              <li>\n                <a id=\"green\" (click)=\"changeNodeColor($event)\">绿色</a>\n              </li>\n              <li>\n                <a id=\"gray\" (click)=\"changeNodeColor($event)\">灰色</a>\n              </li>\n              <li>\n                <a id=\"black\" (click)=\"changeNodeColor($event)\">黑色</a>\n              </li>\n            </ul> -->\n          </div>\n          \n        </div>\n        <div id=\"jsmind_container\"></div> \n      </div>\n    </div>\n  </div>\n\n  <script type=\"text/javascript\" src=\"../../jsmind/js/jsmind.screenshot.js\"></script>\n</body>"

/***/ }),

/***/ "./src/app/teacher/mindmap/mindmap.component.ts":
/*!******************************************************!*\
  !*** ./src/app/teacher/mindmap/mindmap.component.ts ***!
  \******************************************************/
/*! exports provided: MindmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MindmapComponent", function() { return MindmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jsmind_js_jsmind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsmind/js/jsmind.js */ "./src/app/jsmind/js/jsmind.js");
/* harmony import */ var _jsmind_js_jsmind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jsmind_js_jsmind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jsmind_js_jsmind_screenshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsmind/js/jsmind.screenshot.js */ "./src/app/jsmind/js/jsmind.screenshot.js");
/* harmony import */ var _jsmind_js_jsmind_screenshot_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jsmind_js_jsmind_screenshot_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mindmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mindmap */ "./src/app/mindmap.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _lesson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lesson */ "./src/app/lesson.ts");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../number */ "./src/app/number.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../response */ "./src/app/response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { UserService } from '../../services/user.service';








var options = {
    container: 'jsmind_container',
    theme: 'orange',
    editable: true,
    mode: 'side',
};
var MindmapComponent = /** @class */ (function () {
    function MindmapComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.title = '课程思维导图';
        this.mmp = new _mindmap__WEBPACK_IMPORTED_MODULE_4__["MindMap"]();
        this.mindMap = null;
        this.currentMap = 0;
        this.show_hide_val1 = false;
        this.show_hide_val2 = false;
        this.show_hide_val3 = false;
        this.items = [];
        this.ids = [];
        this.nodeColor = "#000000";
        this.fontColor = "#ffffff";
        // this.user = this.userService.getUser();
        // this.userId = this.user.userId;
        // this.userType = this.user.userType;
    }
    MindmapComponent.prototype.ngOnInit = function () {
        this.mindMap = new _jsmind_js_jsmind_js__WEBPACK_IMPORTED_MODULE_1__(options);
        this.getID1();
        this.getMindMap();
    };
    MindmapComponent.prototype.getID1 = function () {
        var _this = this;
        var lid = this.route.snapshot.paramMap.get('id');
        console.log(lid);
        this.lid = lid;
        console.log(this.lid);
        var username = this.route.snapshot.paramMap.get('username');
        this.username = username;
        this.userService.examineLogin(this.username)
            .subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_8__["Response"]();
            re = data;
            console.log(re.status);
            if (re.status == "online") {
            }
            else {
                alert("登录失效，请重新登录！");
                _this.router.navigateByUrl('login');
            }
        });
    };
    MindmapComponent.prototype.creatMap = function () {
        var mind1 = {
            "meta": {
                "name": "jsMind mindMap",
                "author": "zhang junjie",
                "version": "0.2"
            },
            "format": "node_tree",
            "data": { "id": "root", "topic": "课程名称", "children": [
                    { "id": "part", "topic": "组成", "direction": "right", "children": [] },
                    { "id": "part2", "topic": "组成", "direction": "right", "children": [] },
                ] }
        };
        if (this.ids.includes(this.createId)) {
            alert("该id已存在，请重新创建！");
            this.createId = null;
            return;
        }
        this.ids.push(this.createId);
        this.items.push(mind1);
        this.changeMap(this.items.length - 1);
        this.createId = null;
        this.saveMindMap();
        this.getMindMap();
    };
    MindmapComponent.prototype.changeMap = function (e) {
        this.mapid = this.ids[e];
        console.log(this.mapid);
        this.currentMap = e;
        this.mindMap.show(this.items[e]);
    };
    MindmapComponent.prototype.mapShoot = function () {
        // this.mindMap.show(this.currentMap);
        this.mindMap.screenshot.shootDownload();
    };
    MindmapComponent.prototype.removeNode = function () {
        var selected_id = this.mindMap.get_selected_node();
        if (!selected_id) {
            alert('请先选择一个节点！');
            return;
        }
        if (!selected_id.parent) {
            window.alert('根节点无法被删除！');
            return;
        }
        this.mindMap.remove_node(selected_id);
        this.items[this.currentMap] = this.mindMap.get_data("node_tree");
        this.saveMindMap();
    };
    MindmapComponent.prototype.get_selected_nodeid = function () {
        var selected_node = this.mindMap.get_selected_node();
        if (!!selected_node) {
            console.log(selected_node.id);
            return selected_node.id;
        }
    };
    MindmapComponent.prototype.addChildNode = function () {
        var selected_node = this.mindMap.get_selected_node();
        if (!selected_node) {
            alert('请先选择一个节点！');
            return;
        }
        var nodeid = _jsmind_js_jsmind_js__WEBPACK_IMPORTED_MODULE_1__["util"].uuid.newid();
        var topic = '新节点';
        var node = this.mindMap.add_node(selected_node, nodeid, topic);
        this.items[this.currentMap] = this.mindMap.get_data("node_tree");
        this.saveMindMap();
    };
    MindmapComponent.prototype.addBrotherNode = function (e) {
        console.log(e);
        var selected_node = this.mindMap.get_selected_node();
        if (!selected_node) {
            alert('请先选择一个节点！');
            return;
        }
        if (!selected_node.parent) {
            alert('根节点无法被添加兄弟节点！');
            return;
        }
        var nodeid = _jsmind_js_jsmind_js__WEBPACK_IMPORTED_MODULE_1__["util"].uuid.newid();
        var topic = '新节点';
        var node = this.mindMap.add_node(selected_node.parent, nodeid, topic);
        this.items[this.currentMap] = this.mindMap.get_data("node_tree");
        this.saveMindMap();
    };
    MindmapComponent.prototype.changeNodeColor = function () {
        var selected_node = this.mindMap.get_selected_node();
        console.log(selected_node);
        console.log(this.nodeColor);
        if (!selected_node) {
            alert('请先选择一个节点！');
            return;
        }
        this.mindMap.set_node_color(selected_node.id, this.nodeColor, null);
        this.items[this.currentMap] = this.mindMap.get_data("node_tree");
        this.saveMindMap();
    };
    MindmapComponent.prototype.changeFontColor = function () {
        var selected_node = this.mindMap.get_selected_node();
        console.log(selected_node);
        console.log(this.fontColor);
        if (!selected_node) {
            alert('请先选择一个节点！');
            return;
        }
        this.mindMap.set_node_color(selected_node.id, null, this.fontColor);
        this.items[this.currentMap] = this.mindMap.get_data("node_tree");
        this.saveMindMap();
    };
    MindmapComponent.prototype.showList1 = function () {
        this.show_hide_val1 = !this.show_hide_val1;
    };
    MindmapComponent.prototype.showList2 = function () {
        this.show_hide_val2 = !this.show_hide_val2;
    };
    MindmapComponent.prototype.showList3 = function () {
        this.show_hide_val3 = !this.show_hide_val3;
    };
    MindmapComponent.prototype.saveMindMap = function () {
        this.mmp.lid = this.lid;
        this.mmp.items = this.items;
        this.userService.saveMindMap(this.mmp)
            .subscribe(function (data) {
            console.log(data);
        });
        var num = new _number__WEBPACK_IMPORTED_MODULE_7__["Number"]();
        num.lid = this.lid;
        num.ids = this.ids;
        this.userService.saveNum(num)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    MindmapComponent.prototype.getMindMap = function () {
        var _this = this;
        var lesson = new _lesson__WEBPACK_IMPORTED_MODULE_6__["Lesson"]();
        lesson.id = this.lid;
        this.userService.getMindMap(lesson)
            .subscribe(function (data) {
            console.log(data);
            if (data == null) {
            }
            else {
                var mindmap = new _mindmap__WEBPACK_IMPORTED_MODULE_4__["MindMap"]();
                mindmap = data;
                _this.items = mindmap.items;
            }
        });
        this.userService.getNum(lesson)
            .subscribe(function (data) {
            console.log(data);
            if (data == null) {
            }
            else {
                var number = new _number__WEBPACK_IMPORTED_MODULE_7__["Number"]();
                number = data;
                _this.ids = number.ids;
            }
        });
    };
    MindmapComponent.prototype.exitLogin4 = function () {
        var _this = this;
        this.userService.exitLogin(this.username)
            .subscribe(function (data) {
            alert("已登出！");
            _this.router.navigateByUrl('login');
        });
    };
    MindmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mindmap',
            template: __webpack_require__(/*! ./mindmap.component.html */ "./src/app/teacher/mindmap/mindmap.component.html"),
            styles: [__webpack_require__(/*! ./mindmap.component.css */ "./src/app/teacher/mindmap/mindmap.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MindmapComponent);
    return MindmapComponent;
}());



/***/ }),

/***/ "./src/app/teacher/tcourseware/tcourseware.component.css":
/*!***************************************************************!*\
  !*** ./src/app/teacher/tcourseware/tcourseware.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#jsmind_container {\r\n    float: left;\r\n    width: 80%;\r\n    height: 80%;\r\n}\r\n\r\n\r\n*{ margin:0; padding: 0; }\r\n\r\n\r\n#left-nav{\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    width:7cm;\r\n    height:100%;\r\n    background-color:#373737;z-index:9999;\r\n}\r\n\r\n\r\n#right-part{\r\n    top:0;\r\n    left: 2cm;\r\n    min-height: 600px;\r\n}\r\n\r\n\r\na:hover ,a:focus{text-decoration:none}\r\n\r\n\r\n.nav-total{\r\n    float: left;\r\n}\r\n\r\n\r\n.nav-tabs {\r\n    font-size: 15px;\r\n}\r\n\r\n\r\n.nav-tabs li a {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.nav-collapse li{\r\n    /* float: left; */\r\n    padding:5% 0;  \r\n    position: relative;\r\n    display: block;\r\n}\r\n\r\n\r\n.nav-collapse li a {\r\n    color:gray;\r\n    display:block;\r\n    padding:5% 5%;    \r\n    /* border-top:1px solid #4f4f4f;\r\n    border-bottom:1px solid #292929; */\r\n    transition:all 0.2s ease-out;\r\n    cursor:pointer;\r\n}\r\n\r\n\r\n.nav-collapse li a:hover {\r\n    background-color: #4f4f4f;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n.nav-collapse li a:focus {\r\n    background-color: #4f4f4f;\r\n    color: #ffffff;\r\n}\r\n\r\n\r\n#left-bottom {\r\n    position: absolute;\r\n    bottom: 0px;\r\n}\r\n\r\n\r\n.btn{\r\n    margin: 2% 0 0 5%;\r\n}\r\n\r\n\r\n.btn-group{\r\n    margin: 2% 0 0 5%;\r\n}\r\n\r\n\r\n.childList{\r\n    padding-left: 10px;\r\n}\r\n\r\n\r\n.dropdown-menu li a {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.card{\r\n    width: 80%;\r\n    float: left;\r\n    margin: 2% 0 0 5%;\r\n}\r\n\r\n\r\n.card-header{\r\n    padding: 3% 2% 0% 2%;\r\n}\r\n\r\n\r\n.card-body{\r\n    padding: 1% 2% 1% 2%;\r\n}\r\n\r\n\r\n.delete{\r\n    float: right;\r\n    margin: 0 0 2% 0;\r\n}\r\n\r\n\r\n.panel-default{\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n}\r\n\r\n\r\ndiv.queue-operation button{\r\n  margin-left:2px;\r\n}\r\n\r\n\r\ntbody.upload-queue button{\r\n  margin: 2px;\r\n}\r\n\r\n\r\ntable td{word-break: keep-all;white-space:nowrap;}\r\n"

/***/ }),

/***/ "./src/app/teacher/tcourseware/tcourseware.component.html":
/*!****************************************************************!*\
  !*** ./src/app/teacher/tcourseware/tcourseware.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n</head>\r\n\r\n<body>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div id=\"left-nav\" class=\"col-xs-6 col-sm-2\">\r\n      <ul class=\"nav-collapse\">\r\n        <li><a (click)=\"showList1()\">课件  <span class=\"glyphicon glyphicon-chevron-down\"></span></a></li>\r\n        <ul class=\"childList\" *ngIf=\"show_hide_val1\">\r\n          <li style=\"color: gray\">新增课件</li>\r\n          <li><a data-toggle=\"modal\" data-target=\"#myModal2\">课件</a></li>\r\n\r\n          <div class=\"modal fade\" id=\"myModal2\">\r\n            <div class=\"modal-dialog\">\r\n              <div class=\"modal-content\">\r\n\r\n                <!-- 模态框头部 -->\r\n                <div class=\"modal-header\">\r\n                  <h4 class=\"modal-title\">新增课件</h4>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                </div>\r\n\r\n                <!-- 模态框主体 -->\r\n                <div class=\"modal-body\">\r\n                  <li><input type=\"file\" id = \"selectfile\" (change)=\"selectFile($event)\"></li>\r\n                  <li><input type=\"text\" id = \"fd\" placeholder=\"课件描述\" [(ngModel)]=\"linkcontent\" name=\"linkcontent\" class=\"form-control\"></li>\r\n                </div>\r\n\r\n                <!-- 模态框底部 -->\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\r\n                  <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"addFile()\">确定</button>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </ul>\r\n        <ul id=\"left-bottom\">\r\n          <li><a routerLink=\"/teacher/{{this.username}}\">课程首页</a></li>\r\n          <li><a (click)=\"this.exitLogin3()\">退出登录</a></li>\r\n        </ul>\r\n      </ul>\r\n      \r\n    </div>\r\n\r\n    <div id=\"right-part\" class=\"col-xs-6 col-sm-10\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li><a routerLink=\"/mindmap/{{this.username}}/{{this.lid}}\">思维导图</a></li>\r\n        <li><a routerLink=\"/thomework/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">作业</a></li>\r\n        <li><a routerLink=\"/tresource/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">资源</a></li>\r\n        <li class=\"active\"><a>课件</a></li>\r\n      </ul>\r\n\r\n      <div id=\"node-edit\" >\r\n          <span>\r\n            <div>\r\n              <div class=\"panel panel-default\">\r\n                <h3>上传队列</h3>\r\n                   <table class=\"table table-bordered table-striped\" >\r\n                    <thead>\r\n                    <tr>\r\n                      <th width=\"10%\">名称</th>\r\n                      <th width=\"5%\">大小</th>\r\n                      <th width=\"20%\">进度</th>\r\n                      <th width=\"20%\">状态</th>\r\n                      <th width=\"25%\">操作</th>\r\n                      <th width=\"20%\">描述</th>\r\n                    </tr>\r\n                    </thead>\r\n\r\n                    <tbody class = \"upload-queue\">\r\n                      <tr *ngFor=\"let item of uploader.queue\">\r\n                        <td width=\"10%\"><strong>{{ item?.file?.name }}</strong></td>\r\n                        <td width=\"5%\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                        <td width=\"20%\">\r\n                          <div [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                        </td>\r\n                        <td width=\"20%\">\r\n                          <span *ngIf=\"item.isSuccess\">OK</span>\r\n                          <span *ngIf=\"item.isCancel\">Cancel</span>\r\n                          <span *ngIf=\"item.isError\">Error</span>\r\n                        </td>\r\n                        <td width=\"25%\">\r\n                          <button type=\"button\" class=\"btn btn-default\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                            上传\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-default\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                            取消上传\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-default\" (click)=\"removeFile(item)\">\r\n                            移除\r\n                          </button>\r\n                        </td>\r\n                        <td width=\"20%\">\r\n                          {{filedescription.get(uploader.queue.indexOf(item))}}\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                 <div>\r\n                  <p>队列长度: {{ uploader?.queue?.length }}</p>\r\n                  队列上传进度:\r\n                  <div class=\"progress\" style=\"\">\r\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                  </div>\r\n                  <div class=\"panel panel-default queue-operation\">\r\n                    队列操作：\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                      上传所有\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                      取消所有\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"removeAll()\" [disabled]=\"!uploader.queue.length\">\r\n                      移除所有\r\n                    </button>\r\n                  </div>\r\n                 </div>\r\n              </div>\r\n              <div class=\"panel panel-default\">\r\n                <h3>已上传的课件</h3>\r\n                <table class=\"table table-bordered table-striped\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th width=\"25%\">名称</th>\r\n                      <th width=\"50%\">描述</th>\r\n                      <th width=\"25%\">下载</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of filenames\">\r\n                      <td width=\"25%\"><strong>{{ item.filename }}</strong></td>\r\n                      <td width=\"50%\">{{ item.fd }}</td>\r\n                      <td width=\"25%\">\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"this.downloadfile(item.filename)\">\r\n                          download\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </span>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<script type=\"text/javascript\" src=\"../../jsmind/js/jsmind.screenshot.js\"></script>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/teacher/tcourseware/tcourseware.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/teacher/tcourseware/tcourseware.component.ts ***!
  \**************************************************************/
/*! exports provided: TcoursewareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TcoursewareComponent", function() { return TcoursewareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../download.service */ "./src/app/download.service.ts");
/* harmony import */ var _upfiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../upfiles */ "./src/app/upfiles.ts");
/* harmony import */ var _upfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../upfile */ "./src/app/upfile.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _MPNode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../MPNode */ "./src/app/MPNode.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../response */ "./src/app/response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TcoursewareComponent = /** @class */ (function () {
    function TcoursewareComponent(router, route, restService, userService, elementRef) {
        this.router = router;
        this.route = route;
        this.restService = restService;
        this.userService = userService;
        this.elementRef = elementRef;
        this.show_hide_val1 = false;
        this.upfiles = new _upfiles__WEBPACK_IMPORTED_MODULE_3__["UpFiles"]();
        this.url = 'http://13.67.110.158:8080/mindmap/upload/';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: this.url });
        this.filedescription = new ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["LinkedList"]();
    }
    TcoursewareComponent.prototype.showFile = function () {
        var _this = this;
        var mpnode = new _MPNode__WEBPACK_IMPORTED_MODULE_8__["MPNode"]();
        mpnode.lid = this.lid;
        mpnode.node_id = this.node_id;
        console.log(mpnode);
        mpnode.mapid = this.mapid;
        this.userService.showWare(mpnode).subscribe(function (data) {
            console.log(data);
            if (data === null) {
            }
            else {
                _this.upfiles.list = data;
                _this.update(_this.upfiles);
            }
        });
    };
    TcoursewareComponent.prototype.getID1 = function () {
        var _this = this;
        var lid = this.route.snapshot.paramMap.get('lid');
        var mapid = this.route.snapshot.paramMap.get('mapid');
        this.mapid = mapid;
        console.log(lid);
        this.lid = lid;
        console.log(this.lid);
        var node_id = this.route.snapshot.paramMap.get('node_id');
        this.node_id = node_id;
        this.url = 'http://13.67.110.158:8080/mindmap/upload_ware/' + this.lid + "/" + this.node_id + "/" + this.mapid;
        console.log(this.url);
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: this.url });
        var username = this.route.snapshot.paramMap.get('username');
        this.username = username;
        this.userService.examineLogin(this.username)
            .subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_9__["Response"]();
            re = data;
            console.log(re.status);
            if (re.status == "online") {
            }
            else {
                alert("登录失效，请重新登录！");
                _this.router.navigateByUrl('login');
            }
        });
    };
    TcoursewareComponent.prototype.update = function (upfiles) {
        var tmp = new _upfile__WEBPACK_IMPORTED_MODULE_4__["Upfile"]();
        this.filenames = [];
        console.log(upfiles.list.length);
        for (var i = 0; i < upfiles.list.length; i++) {
            tmp.lid = upfiles.list[i].lid;
            tmp.filename = upfiles.list[i].filename;
            tmp.fd = upfiles.list[i].fd;
            this.filenames.push(tmp);
            tmp = new _upfile__WEBPACK_IMPORTED_MODULE_4__["Upfile"]();
        }
    };
    TcoursewareComponent.prototype.selectFile = function (event) {
        console.log('select file');
        this.selectedFiles = event.target.files;
    };
    TcoursewareComponent.prototype.addFile = function () {
        var file = [];
        file.push(this.selectedFiles.item(0));
        var filedescribe = this.elementRef.nativeElement.querySelector('#fd').value;
        console.log('filedescribe: ' + filedescribe);
        this.filedescription.push(filedescribe);
        console.log('filedescription: ');
        console.log(this.filedescription);
        this.uploader.addToQueue(file);
    };
    TcoursewareComponent.prototype.removeFile = function (item) {
        var index = this.uploader.queue.indexOf(item);
        this.filedescription.remove(index);
        item.remove();
    };
    TcoursewareComponent.prototype.removeAll = function () {
        var length = this.filedescription.length;
        for (var i = 0; i < length; i++) {
            this.filedescription.remove(0);
        }
        this.uploader.clearQueue();
    };
    TcoursewareComponent.prototype.ngOnInit = function () {
        this.getID1();
        this.showFile();
        this.uploader.onAfterAddingFile = this.afterAddingFile;
        this.uploader.onSuccessItem = this.afterSuccess.bind(this);
    };
    TcoursewareComponent.prototype.afterAddingFile = function (fileitem) {
        fileitem.withCredentials = false;
        console.log(fileitem);
    };
    TcoursewareComponent.prototype.afterSuccess = function (item, response, status, headers) {
        var _this = this;
        var index = this.uploader.queue.indexOf(item);
        var fd = this.filedescription.get(index);
        alert("上传资源成功！");
        console.log("开始upload fd");
        this.restService.uploadFileDescription1(item.file.name, fd, this.lid, this.node_id, this.mapid)
            .subscribe(function (data) {
            console.log(data);
            _this.showFile();
        });
    };
    TcoursewareComponent.prototype.showList1 = function () {
        this.show_hide_val1 = !this.show_hide_val1;
    };
    TcoursewareComponent.prototype.downloadfile = function (filename) {
        console.log('downloadfile start');
        this.restService.download1(filename, this.lid, this.mapid);
    };
    TcoursewareComponent.prototype.exitLogin3 = function () {
        var _this = this;
        this.userService.exitLogin(this.username)
            .subscribe(function (data) {
            alert("已登出！");
            _this.router.navigateByUrl('login');
        });
    };
    TcoursewareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tcourseware',
            template: __webpack_require__(/*! ./tcourseware.component.html */ "./src/app/teacher/tcourseware/tcourseware.component.html"),
            styles: [__webpack_require__(/*! ./tcourseware.component.css */ "./src/app/teacher/tcourseware/tcourseware.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _download_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TcoursewareComponent);
    return TcoursewareComponent;
}());



/***/ }),

/***/ "./src/app/teacher/thomework/thomework.component.css":
/*!***********************************************************!*\
  !*** ./src/app/teacher/thomework/thomework.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#jsmind_container {\n    float: left;\n    width: 100%;\n    height: 100%;\n}\n\n\n*{ margin:0; padding: 0; }\n\n\n#left-nav{\n    position:fixed;\n    top:0;\n    left:0;\n    width: 7cm;\n    height:100%;\n    background-color:#373737;z-index:9999;\n}\n\n\n#right-part{\n    top:0;\n    left: 2cm;\n    min-height: 600px;\n}\n\n\na:hover ,a:focus{text-decoration:none}\n\n\n.nav-total{\n    float: left;\n}\n\n\n.nav-tabs {\n    font-size: 15px;\n}\n\n\n.nav-tabs li a {\n    cursor: pointer;\n}\n\n\n.nav-collapse li{\n    /* float: left; */\n    padding:5% 0;  \n    position: relative;\n    display: block;\n}\n\n\n.nav-collapse li a {\n    color:gray;\n    display:block;\n    padding:5% 5%;    \n    /* border-top:1px solid #4f4f4f;\n    border-bottom:1px solid #292929; */\n    transition:all 0.2s ease-out;\n    cursor:pointer;\n}\n\n\n.nav-collapse li a:hover {\n    background-color: #4f4f4f;\n    color: #ffffff;\n}\n\n\n.nav-collapse li a:focus {\n    background-color: #4f4f4f;\n    color: #ffffff;\n}\n\n\n#left-bottom {\n    position: absolute;\n    bottom: 0px;\n}\n\n\n.btn{\n    float: right;\n    margin: 2% 0 0 5%;\n}\n\n\n.childList{\n    padding-left: 10px;\n}\n\n\n.dropdown-menu li a {\n    cursor: pointer;\n}\n\n\n.card{\n    width: 100%;\n    float: left;\n    margin: 2% 0 0 3%;   \n}\n\n\n.card-header{\n    padding: 3% 2% 0 2%;\n}\n\n\n.card-body{\n    padding: 1% 2% 1% 2%;\n}\n\n\n.card-body label {\n    float: right;\n    margin: 5% 0 0 0;\n}\n\n\n.delete{\n    float: right;\n    margin: 0 0 2% 0;\n}\n\n\n.modal-body {\n    text-align: right;\n}\n\n\n.modal-body div{\n    margin-bottom: 3%;\n}\n\n\n.checkbox label{\n    float: left;\n    margin: 0 0 0 3%;\n}\n\n\n.checkbox input[type=\"checkbox\"] {\n    cursor: pointer;\n}\n\n\n/* .row label{\n    margin-left: 5%;\n} */\n\n\n/* \n.modal-body label{\n    margin: 2% 0 0 2%;\n} */\n\n\n/* .form-control{\n    width: 100%;\n    margin-top: 2%;\n} */"

/***/ }),

/***/ "./src/app/teacher/thomework/thomework.component.html":
/*!************************************************************!*\
  !*** ./src/app/teacher/thomework/thomework.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head> \n  <meta charset=\"utf-8\"> \n  <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n</head>\n\n<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div id=\"left-nav\" class=\"col-xs-2 col-sm-2\">\n        <ul class=\"nav-collapse\">\n          <li><a (click)=\"showList1()\">作业  <span class=\"glyphicon glyphicon-chevron-down\"></span></a></li>\n          <ul class=\"childList\" *ngIf=\"show_hide_val1\">\n              <li style=\"color: gray\">新增作业</li>\n              <li><a data-toggle=\"modal\" data-target=\"#myModal1\">选择题</a></li>\n              <div class=\"modal fade\" id=\"myModal1\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n               \n                    <!-- 模态框头部 -->\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\">新增选择题</h4>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n               \n                    <!-- 模态框主体 -->\n                    <div class=\"modal-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <label>问题标题</label>\n                            </div>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" [(ngModel)]=\"this.selectQ.title\" name=\"lessonid\" class=\"form-control\">\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <label>选项A</label>\n                            </div>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" [(ngModel)]=\"this.selectQ.a1\" name=\"lessonid\" class=\"form-control\">\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <label>选项B</label>\n                            </div>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" [(ngModel)]=\"this.selectQ.a2\" name=\"lessonid\" class=\"form-control\">\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <label>选项C</label>\n                            </div>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" [(ngModel)]=\"this.selectQ.a3\" name=\"lessonid\" class=\"form-control\">\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <label>选项D</label>\n                            </div>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" [(ngModel)]=\"this.selectQ.a4\" name=\"lessonid\" class=\"form-control\">\n                            </div>\n                        </div>\n                        \n                        <div class=\"row\">\n                          <div class=\"col-md-3\">\n                              <label>答案</label>\n                          </div>\n                          <div class=\"col-md-9\">\n                              <div class=\"checkbox\">\n                                  <label class=\"answer\">\n                                      <input type=\"checkbox\" [(ngModel)]=\"answer1\">A \n                                  </label>\n                                  <label class=\"answer\">\n                                      <input type=\"checkbox\" [(ngModel)]=\"answer2\">B \n                                  </label>\n                                  <label class=\"answer\">\n                                      <input type=\"checkbox\" [(ngModel)]=\"answer3\">C \n                                  </label>\n                                  <label class=\"answer\">\n                                      <input type=\"checkbox\" [(ngModel)]=\"answer4\">D \n                                  </label> \n                              </div>\n                          </div>\n\n                        </div>\n                        \n                    </div>\n               \n                    <!-- 模态框底部 -->\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\n                      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"addQuestion0()\" ng-disabled=\"\">确定</button>\n                    </div>\n               \n                  </div>\n                </div>\n               </div>\n\n              <li><a data-toggle=\"modal\" data-target=\"#myModal2\">简答题</a></li>\n              <div class=\"modal fade\" id=\"myModal2\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n               \n                    <!-- 模态框头部 -->\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title\">新增简答题</h4>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n               \n                    <!-- 模态框主体 -->\n                    <div class=\"modal-body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <label>问题标题</label>\n                            </div>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" [(ngModel)]=\"this.descripQ.title\" name=\"lessonid\" class=\"form-control\">\n                            </div>\n                        </div>\n                    </div>\n               \n                    <!-- 模态框底部 -->\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\n                      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"addQuestion1()\">确定</button>\n                    </div>\n               \n                  </div>\n                </div>\n               </div>\n\n            </ul>\n            <ul id=\"left-bottom\">\n                <li><a routerLink=\"/teacher/{{this.username}}\">课程首页</a></li>\n                <li><a (click)=\"this.exitLogin2()\">退出登录</a></li>\n              </ul>\n      </ul>\n      \n      </div>\n\n      <div id=\"right-part\" class=\"col-xs-6 col-sm-10\">\n        <ul class=\"nav nav-tabs\">\n          <li><a routerLink=\"/mindmap/{{this.username}}/{{this.lid}}\">思维导图</a></li>\n          <li class=\"active\"><a routerLink=\"/thomework/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">作业</a></li>\n          <li><a routerLink=\"/tresource/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">资源</a></li>\n          <li><a routerLink=\"/tcourseware/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">课件</a></li>\n        </ul>\n   \n        <div class=\"card\" *ngFor=\"let item of homeworks\">\n            <div class=\"card-header\">{{item[1]}}<button type=\"button\" class=\"delete btn btn-default\" (click)=\"removeHomework(item)\">删除</button></div>\n            <div class=\"card-body\" *ngIf=\"item[0]==0\">\n                <div class=\"checkbox\" *ngFor=\"let question of item[2]\">\n                    <label>\n                      <input type=\"checkbox\" >{{question}}\n                    </label>\n                </div>\n                <label>\n                    答案：{{item[3]}} 正确率：{{item[4]}}\n                </label>\n            </div>\n            <div class=\"card-body\" *ngIf=\"item[0]==1\">\n                <textarea class=\"form-control\" rows=\"5\"></textarea>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <script type=\"text/javascript\" src=\"../../jsmind/js/jsmind.screenshot.js\"></script>\n</body>\n"

/***/ }),

/***/ "./src/app/teacher/thomework/thomework.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/teacher/thomework/thomework.component.ts ***!
  \**********************************************************/
/*! exports provided: ThomeworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThomeworkComponent", function() { return ThomeworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selectQ__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectQ */ "./src/app/selectQ.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _MPNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../MPNode */ "./src/app/MPNode.ts");
/* harmony import */ var _descripQ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../descripQ */ "./src/app/descripQ.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../response */ "./src/app/response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ThomeworkComponent = /** @class */ (function () {
    function ThomeworkComponent(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.show_hide_val1 = false;
        this.answer1 = false;
        this.answer2 = false;
        this.answer3 = false;
        this.answer4 = false;
        this.selectQ = new _selectQ__WEBPACK_IMPORTED_MODULE_2__["SelectQ"]();
        this.descripQ = new _descripQ__WEBPACK_IMPORTED_MODULE_5__["DescripQ1"]();
    }
    ThomeworkComponent.prototype.ngOnInit = function () {
        this.homeworks = [];
        this.getID1();
    };
    ThomeworkComponent.prototype.getID1 = function () {
        var _this = this;
        var mapid = this.route.snapshot.paramMap.get('mapid');
        this.mapid = mapid;
        var lid = this.route.snapshot.paramMap.get('lid');
        console.log(lid);
        this.lid = lid;
        console.log(this.lid);
        var node_id = this.route.snapshot.paramMap.get('node_id');
        this.node_id = node_id;
        console.log(this.node_id);
        var mpNode = new _MPNode__WEBPACK_IMPORTED_MODULE_4__["MPNode"]();
        mpNode.lid = this.lid;
        mpNode.node_id = this.node_id;
        mpNode.mapid = this.mapid;
        var username = this.route.snapshot.paramMap.get('username');
        this.username = username;
        this.userService.examineLogin(this.username)
            .subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_6__["Response"]();
            re = data;
            console.log(re.status);
            if (re.status == "online") {
            }
            else {
                alert("登录失效，请重新登录！");
                _this.router.navigateByUrl('login');
            }
            _this.userService.getQ0(mpNode)
                .subscribe(function (data) {
                console.log(data);
                if (data == null) {
                }
                else {
                    _this.Q0sum = data;
                    console.log(_this.Q0sum);
                    for (var i = 0; i < _this.Q0sum.length; i++) {
                        var tmp = [];
                        var choice = [];
                        choice.push(_this.Q0sum[i].a1, _this.Q0sum[i].a2, _this.Q0sum[i].a3, _this.Q0sum[i].a4);
                        tmp.push('0');
                        tmp.push(_this.Q0sum[i].title);
                        tmp.push(choice);
                        tmp.push(_this.Q0sum[i].trueA);
                        console.log(_this.Q0sum[i].rate);
                        tmp.push(_this.Q0sum[i].rate);
                        _this.homeworks.push(tmp);
                    }
                }
                _this.userService.getQ1(mpNode)
                    .subscribe(function (data) {
                    console.log(data);
                    if (data == null) {
                    }
                    else {
                        _this.Q1sum = data;
                        console.log(_this.Q1sum);
                        for (var i = 0; i < _this.Q1sum.length; i++) {
                            var tmp = [];
                            tmp.push('1');
                            tmp.push(_this.Q1sum[i].title);
                            tmp.push([]);
                            tmp.push([]);
                            _this.homeworks.push(tmp);
                        }
                    }
                });
            });
        });
    };
    ThomeworkComponent.prototype.showList1 = function () {
        this.show_hide_val1 = !this.show_hide_val1;
    };
    ThomeworkComponent.prototype.removeHomework = function (homework) {
        if (homework[0] === "0") {
            var sq = new _selectQ__WEBPACK_IMPORTED_MODULE_2__["SelectQ"]();
            sq.lid = this.lid;
            sq.node_id = this.node_id;
            sq.mapid = this.mapid;
            sq.title = homework[1];
            console.log(sq);
            this.userService.removeQ0(sq)
                .subscribe(function (data) {
                alert("选择题删除成功");
            });
        }
        else {
            var sq = new _descripQ__WEBPACK_IMPORTED_MODULE_5__["DescripQ1"]();
            sq.lid = this.lid;
            sq.node_id = this.node_id;
            sq.mapid = this.mapid;
            sq.title = homework[1];
            console.log(sq);
            this.userService.removeQ1(sq)
                .subscribe(function (data) {
                alert("简答题删除成功");
            });
        }
        this.homeworks.splice(this.homeworks.indexOf(homework, 0), 1);
    };
    ThomeworkComponent.prototype.addQuestion0 = function () {
        var _this = this;
        for (var i = 0; i < this.homeworks.length; i++) {
            if (this.homeworks[i][1] == this.selectQ.title) {
                alert("题目已存在，添加失败");
                return;
            }
        }
        var tmp = [];
        var choice = [];
        choice.push(this.selectQ.a1, this.selectQ.a2, this.selectQ.a3, this.selectQ.a4);
        var answer = [];
        if (this.answer1) {
            answer.push('A');
        }
        if (this.answer2) {
            answer.push('B');
        }
        if (this.answer3) {
            answer.push('C');
        }
        if (this.answer4) {
            answer.push('D');
        }
        this.selectQ.trueA = answer;
        tmp.push('0');
        tmp.push(this.selectQ.title);
        tmp.push(choice);
        tmp.push(answer);
        this.homeworks.push(tmp);
        this.answer1 = false;
        this.answer2 = false;
        this.answer3 = false;
        this.answer4 = false;
        this.selectQ.lid = this.lid;
        this.selectQ.node_id = this.node_id;
        this.selectQ.mapid = this.mapid;
        console.log(this.selectQ);
        this.userService.addQ0(this.selectQ)
            .subscribe(function (data) {
            alert("选择题添加成功");
            _this.selectQ = new _selectQ__WEBPACK_IMPORTED_MODULE_2__["SelectQ"]();
        });
    };
    ThomeworkComponent.prototype.addQuestion1 = function () {
        var _this = this;
        for (var i = 0; i < this.homeworks.length; i++) {
            if (this.homeworks[i][1] == this.descripQ.title) {
                alert("题目已存在，添加失败");
                return;
            }
        }
        var tmp = [];
        tmp.push('1');
        tmp.push(this.descripQ.title);
        tmp.push([]);
        tmp.push([]);
        this.homeworks.push(tmp);
        this.descripQ.lid = this.lid;
        this.descripQ.node_id = this.node_id;
        this.descripQ.mapid = this.mapid;
        this.userService.addQ1(this.descripQ)
            .subscribe(function (data) {
            alert("简单题添加成功");
            _this.descripQ = new _descripQ__WEBPACK_IMPORTED_MODULE_5__["DescripQ1"]();
        });
    };
    ThomeworkComponent.prototype.exitLogin2 = function () {
        var _this = this;
        this.userService.exitLogin(this.username)
            .subscribe(function (data) {
            alert("已登出！");
            _this.router.navigateByUrl('login');
        });
    };
    ThomeworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thomework',
            template: __webpack_require__(/*! ./thomework.component.html */ "./src/app/teacher/thomework/thomework.component.html"),
            styles: [__webpack_require__(/*! ./thomework.component.css */ "./src/app/teacher/thomework/thomework.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ThomeworkComponent);
    return ThomeworkComponent;
}());



/***/ }),

/***/ "./src/app/teacher/tresource/tresource.component.css":
/*!***********************************************************!*\
  !*** ./src/app/teacher/tresource/tresource.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{ margin:0; padding: 0; }\r\n\r\n#left-nav{\r\n  position:fixed;\r\n  top:0;\r\n  left:0;\r\n  width: 7cm;\r\n  height:100%;\r\n  background-color:#373737;z-index:9999;\r\n}\r\n\r\n#right-part{\r\n  top:0;\r\n  left: 2cm;\r\n  min-height: 600px;\r\n}\r\n\r\na:hover ,a:focus{text-decoration:none}\r\n\r\n.nav-total{\r\n  float: left;\r\n}\r\n\r\n.nav-tabs {\r\n  font-size: 15px;\r\n}\r\n\r\n.nav-tabs li a {\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-collapse li{\r\n  /* float: left; */\r\n  padding:5% 0;  \r\n  position: relative;\r\n  display: block;\r\n}\r\n\r\n.nav-collapse li a {\r\n  color:gray;\r\n  display:block;\r\n  padding:5% 5%;    \r\n  /* border-top:1px solid #4f4f4f;\r\n  border-bottom:1px solid #292929; */\r\n  transition:all 0.2s ease-out;\r\n  cursor:pointer;\r\n}\r\n\r\n.nav-collapse li a:hover {\r\n  background-color: #4f4f4f;\r\n  color: #ffffff;\r\n}\r\n\r\n.nav-collapse li a:focus {\r\n  background-color: #4f4f4f;\r\n  color: #ffffff;\r\n}\r\n\r\n#left-bottom {\r\n  position: absolute;\r\n  bottom: 0px;\r\n}\r\n\r\n.modal-body li{\r\n  margin-bottom: 3%;\r\n}\r\n\r\n.btn{\r\n  margin: 2% 0 0 5%;\r\n}\r\n\r\n.btn-group{\r\n  margin: 2% 0 0 5%;\r\n}\r\n\r\n.childList{\r\n  padding-left: 10px;\r\n}\r\n\r\n.dropdown-menu li a {\r\n  cursor: pointer;\r\n}\r\n\r\n.panel-default{\r\n  margin-top: 20px;\r\n  padding: 10px;\r\n}\r\n\r\ndiv.queue-operation button{\r\n  margin-left:2px;\r\n}\r\n\r\ntbody.upload-queue button{\r\n  margin: 2px;\r\n}\r\n\r\ntable td{word-break: keep-all;white-space:nowrap;}\r\n"

/***/ }),

/***/ "./src/app/teacher/tresource/tresource.component.html":
/*!************************************************************!*\
  !*** ./src/app/teacher/tresource/tresource.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <link rel=\"stylesheet\" href=\"https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  </head>\r\n\r\n  <body>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div id=\"left-nav\" class=\"col-xs-2 col-sm-2\">\r\n        <ul class=\"nav-collapse\">\r\n          <li>\r\n            <a (click)=\"showList1()\">资源\r\n            <span class=\"glyphicon glyphicon-chevron-down\">\r\n            </span>\r\n            </a>\r\n          </li>\r\n          <ul class=\"childList\" *ngIf=\"show_hide_val1\">\r\n            <li style=\"color: gray\">新增作业</li>\r\n            <li><a data-toggle=\"modal\" data-target=\"#myModal1\">链接</a></li>\r\n\r\n            <div class=\"modal fade\" id=\"myModal1\">\r\n                <div class=\"modal-dialog\">\r\n                  <div class=\"modal-content\">\r\n\r\n                    <!-- 模态框头部 -->\r\n                    <div class=\"modal-header\">\r\n                      <h4 class=\"modal-title\">新增链接</h4>\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    </div>\r\n\r\n                    <!-- 模态框主体 -->\r\n                    <div class=\"modal-body\">\r\n                        <li><input type=\"text\" placeholder=\"链接名称\" [(ngModel)]=\"linkname\" name=\"linkname\" class=\"form-control\"></li>\r\n                        <li><input type=\"text\" placeholder=\"链接描述\" [(ngModel)]=\"linkcontent\" name=\"linkcontent\" class=\"form-control\"></li>\r\n                    </div>\r\n\r\n                    <!-- 模态框底部 -->\r\n                    <div class=\"modal-footer\">\r\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\r\n                      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"uploadLink()\">确定</button>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <li><a data-toggle=\"modal\" data-target=\"#myModal2\">文件</a></li>\r\n\r\n            <div class=\"modal fade\" id=\"myModal2\">\r\n                <div class=\"modal-dialog\">\r\n                  <div class=\"modal-content\">\r\n\r\n                    <!-- 模态框头部 -->\r\n                    <div class=\"modal-header\">\r\n                      <h4 class=\"modal-title\">新增文件</h4>\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    </div>\r\n\r\n                    <!-- 模态框主体 -->\r\n                    <div class=\"modal-body\">\r\n                        <li><input type=\"file\" id = \"selectfile\" (change)=\"selectFile($event)\"></li>\r\n                        <li><input type=\"text\" id = \"fd\" placeholder=\"文件描述\" [(ngModel)]=\"linkcontent\" name=\"linkcontent\" class=\"form-control\"></li>\r\n                    </div>\r\n\r\n                    <!-- 模态框底部 -->\r\n                    <div class=\"modal-footer\">\r\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">取消</button>\r\n                      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"addFile()\">确定</button>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n          </ul>\r\n          <ul id=\"left-bottom\">\r\n            <li><a routerLink=\"/teacher/{{this.username}}\">课程首页</a></li>\r\n            <li><a (click)=\"this.exitLogin1()\">退出登录</a></li>\r\n          </ul>\r\n        </ul>\r\n        \r\n      </div>\r\n\r\n      <div id=\"right-part\" class=\"col-xs-6 col-sm-10\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li><a routerLink=\"/mindmap/{{this.username}}/{{this.lid}}\">思维导图</a></li>\r\n          <li><a routerLink=\"/thomework/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">作业</a></li>\r\n          <li class=\"active\"><a>资源</a></li>\r\n          <li><a routerLink=\"/tcourseware/{{this.username}}/{{this.mapid}}/{{this.lid}}/{{this.node_id}}\">课件</a></li>\r\n        </ul>\r\n\r\n        <div id=\"node-edit\" >\r\n          <span>\r\n            <div>\r\n              <div class=\"panel panel-default\">\r\n                <h3>上传队列</h3>\r\n                   <table class=\"table table-bordered table-striped\" >\r\n                    <thead>\r\n                    <tr>\r\n                      <th width=\"10%\">名称</th>\r\n                      <th width=\"5%\">大小</th>\r\n                      <th width=\"20%\">进度</th>\r\n                      <th width=\"20%\">状态</th>\r\n                      <th width=\"25%\">操作</th>\r\n                      <th width=\"20%\">描述</th>\r\n                    </tr>\r\n                    </thead>\r\n\r\n                    <tbody class = \"upload-queue\">\r\n                      <tr *ngFor=\"let item of uploader.queue\">\r\n                        <td width=\"10%\"><strong>{{ item?.file?.name }}</strong></td>\r\n                        <td width=\"5%\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                        <td width=\"20%\">\r\n                          <div [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                        </td>\r\n                        <td width=\"20%\">\r\n                          <span *ngIf=\"item.isSuccess\">OK</span>\r\n                          <span *ngIf=\"item.isCancel\">Cancel</span>\r\n                          <span *ngIf=\"item.isError\">Error</span>\r\n                        </td>\r\n                        <td width=\"25%\">\r\n                          <button type=\"button\" class=\"btn btn-default\" (click)=\"this.uploadFile(item)\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                            上传\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-default\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                            取消上传\r\n                          </button>\r\n                          <button type=\"button\" class=\"btn btn-default\" (click)=\"removeFile(item)\">\r\n                            移除\r\n                          </button>\r\n                        </td>\r\n                        <td width=\"20%\">\r\n                          {{filedescription.get(uploader.queue.indexOf(item))}}\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                 <div>\r\n                  <p>队列长度: {{ uploader?.queue?.length }}</p>\r\n                  队列上传进度:\r\n                  <div class=\"progress\" style=\"\">\r\n                          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                  </div>\r\n                  <div class=\"panel panel-default queue-operation\">\r\n                    队列操作：\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n                      上传所有\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n                      取消所有\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"removeAll()\" [disabled]=\"!uploader.queue.length\">\r\n                      移除所有\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"panel panel-default\">\r\n                <h3>已上传的资源</h3>\r\n                <div class=\"panel panel-default\">\r\n                  <h4>文件</h4>\r\n                  <table class=\"table table-bordered table-striped\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th width=\"25%\">名称</th>\r\n                        <th width=\"50%\">描述</th>\r\n                        <th width=\"25%\">下载</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of filenames\">\r\n                        <td width=\"25%\"><strong>{{ item.filename }}</strong></td>\r\n                        <td width=\"50%\">{{item.fd}}</td>\r\n                        <td width=\"25%\">\r\n                          <button type=\"button\" class=\"btn btn-default\" (click)=\"downloadfile(item.filename)\">\r\n                            download\r\n                          </button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                  <h4>链接</h4>\r\n                  <table class=\"table table-bordered table-striped\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th width=\"50%\">名称</th>\r\n                        <th width=\"50%\">描述</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of links\">\r\n                        <td width=\"50%\"><a target=\"_blank\" href=\"{{ item.linkname }}\">{{ item.linkname }}</a></td>\r\n                        <td width=\"50%\">\r\n                          {{ item.linkcontent }}\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </span>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <script type=\"text/javascript\" src=\"../../jsmind/js/jsmind.screenshot.js\"></script>\r\n  </body>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/teacher/tresource/tresource.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/teacher/tresource/tresource.component.ts ***!
  \**********************************************************/
/*! exports provided: TresourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TresourceComponent", function() { return TresourceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../download.service */ "./src/app/download.service.ts");
/* harmony import */ var _upfiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../upfiles */ "./src/app/upfiles.ts");
/* harmony import */ var _upfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../upfile */ "./src/app/upfile.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _MPNode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../MPNode */ "./src/app/MPNode.ts");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../response */ "./src/app/response.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TresourceComponent = /** @class */ (function () {
    function TresourceComponent(router, route, restService, userService, elementRef) {
        this.router = router;
        this.route = route;
        this.restService = restService;
        this.userService = userService;
        this.elementRef = elementRef;
        this.show_hide_val1 = false;
        this.upfiles = new _upfiles__WEBPACK_IMPORTED_MODULE_3__["UpFiles"]();
        this.url = 'http://13.67.110.158:8080/mindmap/upload/1';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: this.url });
        this.filedescription = new ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["LinkedList"]();
    }
    TresourceComponent.prototype.showFile = function () {
        var _this = this;
        var mpnode = new _MPNode__WEBPACK_IMPORTED_MODULE_8__["MPNode"]();
        mpnode.lid = this.lid;
        mpnode.node_id = this.node_id;
        mpnode.mapid = this.mapid;
        console.log(mpnode);
        this.userService.showResource(mpnode).subscribe(function (data) {
            console.log(data);
            if (data === null) {
            }
            else {
                _this.upfiles.list = data;
                _this.update(_this.upfiles);
            }
        });
    };
    TresourceComponent.prototype.update = function (upfiles) {
        var tmp = new _upfile__WEBPACK_IMPORTED_MODULE_4__["Upfile"]();
        this.filenames = [];
        console.log(upfiles.list.length);
        for (var i = 0; i < upfiles.list.length; i++) {
            tmp.lid = upfiles.list[i].lid;
            tmp.filename = upfiles.list[i].filename;
            tmp.fd = upfiles.list[i].fd;
            this.filenames.push(tmp);
            tmp = new _upfile__WEBPACK_IMPORTED_MODULE_4__["Upfile"]();
        }
    };
    TresourceComponent.prototype.selectFile = function (event) {
        console.log('select file');
        this.selectedFiles = event.target.files;
    };
    TresourceComponent.prototype.getID1 = function () {
        var _this = this;
        var mapid = this.route.snapshot.paramMap.get('mapid');
        this.mapid = mapid;
        var lid = this.route.snapshot.paramMap.get('lid');
        var username = this.route.snapshot.paramMap.get('username');
        this.username = username;
        this.userService.examineLogin(this.username)
            .subscribe(function (data) {
            var re = new _response__WEBPACK_IMPORTED_MODULE_9__["Response"]();
            re = data;
            console.log(re.status);
            if (re.status === "online") {
            }
            else {
                alert("登录失效，请重新登录！");
                _this.router.navigateByUrl('login');
            }
        });
        console.log(lid);
        this.lid = lid;
        console.log(this.lid);
        var node_id = this.route.snapshot.paramMap.get('node_id');
        this.node_id = node_id;
        this.url = 'http://13.67.110.158:8080/mindmap/upload_resource/' + this.lid + "/" + this.node_id + "/" + this.mapid;
        console.log(this.url);
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({ url: this.url });
    };
    TresourceComponent.prototype.addFile = function () {
        var file = [];
        file.push(this.selectedFiles.item(0));
        var filedescribe = this.elementRef.nativeElement.querySelector('#fd').value;
        console.log('filedescribe: ' + filedescribe);
        this.filedescription.push(filedescribe);
        console.log('filedescription: ');
        console.log(this.filedescription);
        this.uploader.addToQueue(file);
    };
    TresourceComponent.prototype.removeFile = function (item) {
        var index = this.uploader.queue.indexOf(item);
        this.filedescription.remove(index);
        item.remove();
    };
    TresourceComponent.prototype.removeAll = function () {
        var length = this.filedescription.length;
        for (var i = 0; i < length; i++) {
            this.filedescription.remove(0);
        }
        this.uploader.clearQueue();
    };
    TresourceComponent.prototype.uploadFile = function (item) {
        item.upload();
        // 发送请求传递文件描述
    };
    TresourceComponent.prototype.uploadLink = function () {
        var _this = this;
        this.restService.uploadLink(this.linkname, this.linkcontent, this.lid, this.node_id, this.mapid).subscribe(function (result) {
            // result返回上传结果 成功或失败
            console.log("upload link success");
            _this.showLink();
        });
    };
    TresourceComponent.prototype.showLink = function () {
        var _this = this;
        this.restService.showLink(this.lid, this.node_id, this.mapid).subscribe(function (data) {
            // 数据处理
            console.log("get link success");
            _this.links = data;
        });
    };
    TresourceComponent.prototype.ngOnInit = function () {
        this.getID1();
        this.showFile();
        this.showLink();
        this.uploader.onAfterAddingFile = this.afterAddingFile;
        this.uploader.onSuccessItem = this.afterSuccess.bind(this);
    };
    TresourceComponent.prototype.afterAddingFile = function (fileitem) {
        fileitem.withCredentials = false;
        console.log(fileitem);
    };
    TresourceComponent.prototype.afterSuccess = function (item, response, status, headers) {
        var _this = this;
        var index = this.uploader.queue.indexOf(item);
        var fd = this.filedescription.get(index);
        alert("上传资源成功！");
        console.log("开始upload fd");
        this.restService.uploadFileDescription(item.file.name, fd, this.lid, this.node_id, this.mapid)
            .subscribe(function (data) {
            console.log(data);
            _this.showFile();
        });
    };
    TresourceComponent.prototype.showList1 = function () {
        this.show_hide_val1 = !this.show_hide_val1;
    };
    TresourceComponent.prototype.downloadfile = function (filename) {
        console.log('downloadfile start');
        this.restService.download(filename, this.lid, this.mapid);
    };
    TresourceComponent.prototype.exitLogin1 = function () {
        var _this = this;
        this.userService.exitLogin(this.username)
            .subscribe(function (data) {
            alert("已登出！");
            _this.router.navigateByUrl('login');
        });
    };
    TresourceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tresource',
            template: __webpack_require__(/*! ./tresource.component.html */ "./src/app/teacher/tresource/tresource.component.html"),
            styles: [__webpack_require__(/*! ./tresource.component.css */ "./src/app/teacher/tresource/tresource.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _download_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TresourceComponent);
    return TresourceComponent;
}());



/***/ }),

/***/ "./src/app/upfile.ts":
/*!***************************!*\
  !*** ./src/app/upfile.ts ***!
  \***************************/
/*! exports provided: Upfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upfile", function() { return Upfile; });
/**
 * Created by sunlu on 2018/6/18.
 */
var Upfile = /** @class */ (function () {
    function Upfile() {
    }
    return Upfile;
}());



/***/ }),

/***/ "./src/app/upfiles.ts":
/*!****************************!*\
  !*** ./src/app/upfiles.ts ***!
  \****************************/
/*! exports provided: UpFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpFiles", function() { return UpFiles; });
var UpFiles = /** @class */ (function () {
    function UpFiles() {
    }
    return UpFiles;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.registerUrl = 'http://13.67.110.158:8080/mindmap/register';
        this.loginUrl = 'http://13.67.110.158:8080/mindmap/login';
        this.lessonUrl = 'http://13.67.110.158:8080/mindmap/teacher_lessons/';
        this.addUrl = 'http://13.67.110.158:8080/mindmap/teacher_add_lessons/';
        this.add2Url = 'http://13.67.110.158:8080/mindmap/student_add_lessons/';
        this.courseUrl = 'http://13.67.110.158:8080/mindmap/student_lessons/';
        this.addAllUrl = 'http://13.67.110.158:8080/mindmap/addAll';
        this.saveMindMapUrl = 'http://13.67.110.158:8080/mindmap/saveMindMap';
        this.getMindMapUrl = 'http://13.67.110.158:8080/mindmap/getMindMap';
        this.saveNumUrl = 'http://13.67.110.158:8080/mindmap/saveNum';
        this.getNumUrl = 'http://13.67.110.158:8080/mindmap/getNum';
        this.addQ0Url = 'http://13.67.110.158:8080/mindmap/addQ0';
        this.getQ0Url = 'http://13.67.110.158:8080/mindmap/getQ0';
        this.addQ1Url = 'http://13.67.110.158:8080/mindmap/addQ1';
        this.getQ1Url = 'http://13.67.110.158:8080/mindmap/getQ1';
        this.removeQ0Url = 'http://13.67.110.158:8080/mindmap/removeQ0';
        this.removeQ1Url = 'http://13.67.110.158:8080/mindmap/removeQ1';
        this.submitUrl = 'http://13.67.110.158:8080/mindmap/submit';
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.registerUrl, user);
    };
    UserService.prototype.login = function (user) {
        return this.http.post(this.loginUrl, user);
    };
    UserService.prototype.changePass = function (password) {
        var examineloginUrl = 'http://13.67.110.158:8080/mindmap/changePass';
        return this.http.post(examineloginUrl, password);
    };
    UserService.prototype.examineLogin = function (username) {
        var examineloginUrl = 'http://13.67.110.158:8080/mindmap/examinelogin/' + username;
        return this.http.post(examineloginUrl, []);
    };
    UserService.prototype.exitLogin = function (username) {
        var examineloginUrl = 'http://13.67.110.158:8080/mindmap/exitlogin/' + username;
        return this.http.post(examineloginUrl, []);
    };
    UserService.prototype.getLessons = function (user) {
        return this.http.post(this.lessonUrl, user);
    };
    UserService.prototype.addLessons = function (lesson) {
        return this.http.post(this.addUrl, lesson);
    };
    UserService.prototype.getCourses = function (user) {
        return this.http.post(this.courseUrl, user);
    };
    UserService.prototype.addAll = function (user) {
        return this.http.post(this.addAllUrl, user);
    };
    UserService.prototype.addCourses = function (lesson) {
        return this.http.post(this.add2Url, lesson);
    };
    UserService.prototype.showWare = function (mpnode) {
        var url = 'http://13.67.110.158:8080/mindmap/showWare';
        return this.http.post(url, mpnode);
    };
    UserService.prototype.showResource = function (mpnode) {
        var url = 'http://13.67.110.158:8080/mindmap/showResource';
        return this.http.post(url, mpnode);
    };
    UserService.prototype.saveMindMap = function (mmp) {
        return this.http.post(this.saveMindMapUrl, mmp);
    };
    UserService.prototype.getMindMap = function (lesson) {
        return this.http.post(this.getMindMapUrl, lesson);
    };
    UserService.prototype.saveNum = function (num) {
        return this.http.post(this.saveNumUrl, num);
    };
    UserService.prototype.getNum = function (lesson) {
        return this.http.post(this.getNumUrl, lesson);
    };
    UserService.prototype.addQ0 = function (selectQ) {
        return this.http.post(this.addQ0Url, selectQ);
    };
    UserService.prototype.getQ0 = function (mpNode) {
        return this.http.post(this.getQ0Url, mpNode);
    };
    UserService.prototype.addQ1 = function (descripQ) {
        return this.http.post(this.addQ1Url, descripQ);
    };
    UserService.prototype.getQ1 = function (mpNode) {
        return this.http.post(this.getQ1Url, mpNode);
    };
    UserService.prototype.removeQ0 = function (selectQ) {
        return this.http.post(this.removeQ0Url, selectQ);
    };
    UserService.prototype.removeQ1 = function (selectQ) {
        return this.http.post(this.removeQ1Url, selectQ);
    };
    UserService.prototype.submit = function (data) {
        return this.http.post(this.submitUrl, data);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sunlu/Downloads/高级web/Lab/mind-map/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map