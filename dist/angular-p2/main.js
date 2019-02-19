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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-edit/article-edit.component */ "./src/app/article-edit/article-edit.component.ts");
/* harmony import */ var _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-create/article-create.component */ "./src/app/article-create/article-create.component.ts");






var routes = [
    { path: 'news', component: _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__["ArticleListComponent"] },
    { path: 'news/:id', component: _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_4__["ArticleEditComponent"] },
    { path: 'news/edit/:id', component: _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_4__["ArticleEditComponent"] },
    { path: 'create', component: _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_5__["ArticleCreateComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"container\">\n <app-layout></app-layout>  <!--[sourcename]=\"name\" [isMynews]=\"isMynewsavailable\"-->\n  <!--<app-article-list (name)=\"hadleSourcename($event)\" (isMynewsavailable)=\"hadleMyNews($event)\"></app-article-list>-->\n</div>\n<div id=\"content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.hadleSourcename = function (event) {
        this.name = event;
        //console.log(this.name);
    };
    AppComponent.prototype.hadleMyNews = function (event) {
        this.isMynewsavailable = event;
        //console.log(this.isMynewsavailable);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-list/article-list.component */ "./src/app/article-list/article-list.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article-edit/article-edit.component */ "./src/app/article-edit/article-edit.component.ts");
/* harmony import */ var _my_news_checkbox_my_news_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-news-checkbox/my-news-checkbox.component */ "./src/app/my-news-checkbox/my-news-checkbox.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article-create/article-create.component */ "./src/app/article-create/article-create.component.ts");
/* harmony import */ var _newsfilter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./newsfilter.pipe */ "./src/app/newsfilter.pipe.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_7__["ArticleListComponent"],
                _article_article_component__WEBPACK_IMPORTED_MODULE_8__["ArticleComponent"],
                _article_edit_article_edit_component__WEBPACK_IMPORTED_MODULE_9__["ArticleEditComponent"],
                _my_news_checkbox_my_news_checkbox_component__WEBPACK_IMPORTED_MODULE_10__["MyNewsCheckboxComponent"],
                _article_create_article_create_component__WEBPACK_IMPORTED_MODULE_12__["ArticleCreateComponent"],
                _newsfilter_pipe__WEBPACK_IMPORTED_MODULE_13__["NewsfilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-create/article-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/article-create/article-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"articleForm\" (ngSubmit)=\"onSubmit()\" style=\"display: flex; justify-content: center\" class=\"form container\" newsTitle.value=''>\n<div style=\"margin: 5px\">\n  <div class=\"form-group\">\n    <label for=\"title\">Heading\n    <input formControlName=\"title\" #newsTitle class=\"form-control\" id=\"title\" placeholder=\"News Name\" >\n      <div *ngIf=\"submitted && articleForm.controls.title.errors\" class=\"error\">\n        <div *ngIf=\"submitted && articleForm.controls.title.errors.required\" class=\"text-danger\">title is required</div>\n      </div>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"newsDescription\">short Description\n    <input formControlName=\"description\" #newsDescription class=\"form-control\" id=\"newsDescription\" placeholder=\"News Description\">\n      <div *ngIf=\"submitted && articleForm.controls.description.errors\" class=\"error\">\n        <div *ngIf=\"submitted && articleForm.controls.description.errors.required\" class=\"text-danger\">description is required</div>\n      </div>\n    </label>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"newsContent\">content\n    <textarea formControlName=\"content\" class=\"form-control\" id=\"newsContent\" placeholder=\"News Description\"></textarea>\n      <div *ngIf=\"submitted && articleForm.controls.content.errors\" class=\"warning\">\n        <div *ngIf=\"submitted && articleForm.controls.content.errors.required\" class=\"text-danger\">content is required</div>\n      </div>\n    </label>\n  </div>\n</div>\n<div style=\"margin: 5px\">\n  <div class=\"form-group\">\n    <label for=\"inputImage\">image\n    <input class=\"form-control\" id=\"inputImage\" placeholder=\"image\">\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputDate\">Date\n    <input type=\"password\" class=\"form-control\" id=\"inputDate\" placeholder=\"date\">\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputUrl\">Source Url\n    <input class=\"form-control\" id=\"inputUrl\" placeholder=\"Url\">\n    </label>\n  </div>\n  <input [disabled]=\"articleForm.invalid\" routerLink=\"/news\" type=\"submit\" value=\"Save\" class=\"btn btn-success\">\n  <button routerLink=\"/news\" class=\"btn btn-warning\">Cancel</button>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/article-create/article-create.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/article-create/article-create.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtY3JlYXRlL2FydGljbGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/article-create/article-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/article-create/article-create.component.ts ***!
  \************************************************************/
/*! exports provided: ArticleCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCreateComponent", function() { return ArticleCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ArticleCreateComponent = /** @class */ (function () {
    function ArticleCreateComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.articleForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ArticleCreateComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.articleForm.invalid) {
            return;
        }
        this.success = true;
    };
    ArticleCreateComponent.prototype.ngOnInit = function () {
    };
    ArticleCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-create',
            template: __webpack_require__(/*! ./article-create.component.html */ "./src/app/article-create/article-create.component.html"),
            styles: [__webpack_require__(/*! ./article-create.component.scss */ "./src/app/article-create/article-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ArticleCreateComponent);
    return ArticleCreateComponent;
}());



/***/ }),

/***/ "./src/app/article-edit/article-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article-edit/article-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"container \">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" style=\"margin: 5px 0; display: flex; justify-content: space-between; align-items: center\">\n      <div class=\"text-left\" style=\"overflow: hidden;\">\n        <img [src]=\"'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png'\" style=\"height: 50px; float: left\">\n        <h4>{{article.title | titlecase }}</h4>\n        <i>{{article.author | uppercase}}</i>\n        <p>{{article.description | lowercase}}</p>\n        <div>Date:{{article.publishedAt | date}}</div>\n      </div>\n      <div class=\"text-right\">\n       <button (click)=\"reRoute('create')\" class=\"btn btn-info\" title=\"edit article\">Update</button>  <!--(click)=\"update(article._id, article)\"-->\n        <button (click)=\"reRoute('news')\" class=\"btn btn-danger\" title=\"delete article\" (click)=\"delete(article._id)\">Delete</button>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/article-edit/article-edit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/article-edit/article-edit.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtZWRpdC9hcnRpY2xlLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/article-edit/article-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-edit/article-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEditComponent", function() { return ArticleEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_news_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-news-api.service */ "./src/app/my-news-api.service.ts");




var ArticleEditComponent = /** @class */ (function () {
    function ArticleEditComponent(route, data, router) {
        var _this = this;
        this.route = route;
        this.data = data;
        this.router = router;
        this.article = {
            _id: '1',
            author: 'BBC News',
            title: 'Aeal reached to avert new US shutdown',
            description: 'The tentative agreement on border security breaks a longstanding stalemate in Congress.',
            url: 'http://www.bbc.co.uk/news/world-us-canada-47207411',
            urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png',
            publishedAt: '2019-02-12T02:06:04Z'
        };
        this.route.params.subscribe(function (params) {
            _this.articleId = params['id'];
        });
    }
    ArticleEditComponent.prototype.ngOnInit = function () {
        //this.data.getArticle(this.article).subscribe(data => this.articleId = data);
    };
    ArticleEditComponent.prototype.reRoute = function (url) {
        this.router.navigate([url]);
    };
    ArticleEditComponent.prototype.delete = function (id) {
        console.log('delete');
        // this.data.deleteArticle(id).subscribe(data => id = data);
    };
    ArticleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-edit',
            template: __webpack_require__(/*! ./article-edit.component.html */ "./src/app/article-edit/article-edit.component.html"),
            styles: [__webpack_require__(/*! ./article-edit.component.scss */ "./src/app/article-edit/article-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _my_news_api_service__WEBPACK_IMPORTED_MODULE_3__["MyNewsApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArticleEditComponent);
    return ArticleEditComponent;
}());



/***/ }),

/***/ "./src/app/article-list/article-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/article-list/article-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n  <div style=\"margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;\">\r\n    <div>\r\n      <select *ngIf=\"!isMynews\" (change)=\"onGetWorldNews($event.target.value)\">\r\n        <option  *ngFor=\"let i of chanels\">{{i}}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"checkbox\">\r\n      <label><input type=\"checkbox\" id=\"1\" (change)=\"onFilterChange($event)\"/>only created by me</label>\r\n    </div>\r\n    <div class=\"addbutton\">\r\n      <button class=\"btn btn-info\" (click)=\"reRoute('create')\">Add article</button>\r\n    </div>\r\n  </div>\r\n    <app-article *ngIf=\"!isMynews\" [isMynews]=\"isMynews\" [articles]=\"articles\" [isRenderButtons]=\"isMynews\"></app-article>\r\n    <app-article *ngIf=\"isMynews\" [isMynews]=\"isMynews\" [articles]=\"myArticles\" [isRenderButtons]=\"isMynews\"></app-article>\r\n  <div style=\"display: flex; align-content: center; justify-content: center;\" >\r\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addArticles()\">Load more</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/article-list/article-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/article-list/article-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtbGlzdC9hcnRpY2xlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/article-list/article-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-list/article-list.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _world_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world-news-api.service */ "./src/app/world-news-api.service.ts");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news */ "./src/app/news.ts");
/* harmony import */ var _my_news_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../my-news-api.service */ "./src/app/my-news-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(apiService, myNewsApi, router) {
        this.apiService = apiService;
        this.myNewsApi = myNewsApi;
        this.router = router;
        this.name = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMynewsavailable = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chanels = [
            'cnn',
            'bbc-news',
            'daily-mail',
            'business-insider',
            'mtv-news',
            'hacker-news',
            'the-guardian-uk',
            'google-news',
            'Bad Request!'
        ];
        this.isMynews = false;
        this.articlesCount = 4;
        this.myArticles = _news__WEBPACK_IMPORTED_MODULE_3__["myArticles"].slice(0, this.articlesCount); //and see onGetMyNews
        this.newsapifilerrender = false;
        this.myapifilerrender = false;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        if (!this.isMynews) {
            this.onGetWorldNews(this.chanels[0]);
        }
    };
    ArticleListComponent.prototype.reRoute = function (url) {
        this.router.navigate([url]);
    };
    ArticleListComponent.prototype.selectAttribute = function (data) {
        this.name.emit(data);
    };
    ArticleListComponent.prototype.isMyNewsAvailable = function (data) {
        this.isMynewsavailable.emit(data);
    };
    ArticleListComponent.prototype.onGetWorldNews = function (chanel) {
        var _this = this;
        this.newsapifilerrender = true;
        this.myapifilerrender = false;
        if (this.sourceChanel === chanel) {
            this.apiService.getWorldNews(chanel).subscribe(function (articles) {
                _this.articles = articles.slice(0, _this.articlesCount);
            }, function (error) { return console.log(error); });
        }
        else {
            this.sourceChanel = chanel;
            this.selectAttribute(chanel);
            this.apiService.getWorldNews(chanel).subscribe(function (articles) {
                _this.articlesCount = 4;
                _this.articles = articles.slice(0, _this.articlesCount);
            }, function (error) { return console.log(error); });
        }
    };
    ArticleListComponent.prototype.onGetMyNews = function () {
        // this.myNewsApi.getNews().subscribe(
        //   (articles: News[]) => {
        //     this.articles = articles.slice(0, this.articlesCount);
        //   },
        //   (error) => console.log(error)
        // );
        this.myArticles = _news__WEBPACK_IMPORTED_MODULE_3__["myArticles"].slice(0, this.articlesCount);
    };
    ArticleListComponent.prototype.onFilterChange = function (eve) {
        this.isMynews = !this.isMynews;
        this.isMyNewsAvailable(this.isMynews);
        if (this.isMynews) {
            this.onGetMyNews();
            console.log('This is my news');
        }
    };
    ArticleListComponent.prototype.addArticles = function () {
        this.articlesCount += 4;
        if (!this.isMynews) {
            this.onGetWorldNews(this.sourceChanel);
        }
        else {
            this.onGetMyNews();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleListComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleListComponent.prototype, "isMynewsavailable", void 0);
    ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-list',
            template: __webpack_require__(/*! ./article-list.component.html */ "./src/app/article-list/article-list.component.html"),
            styles: [__webpack_require__(/*! ./article-list.component.scss */ "./src/app/article-list/article-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_world_news_api_service__WEBPACK_IMPORTED_MODULE_2__["WorldNewsApiService"], _my_news_api_service__WEBPACK_IMPORTED_MODULE_4__["MyNewsApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "./src/app/article/article.component.html":
/*!************************************************!*\
  !*** ./src/app/article/article.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input  type=\"text\" #newsInput maxlength=\"1\">\r\n<button (click)=\"changeFilter(newsInput.value)\">Filter</button>\r\n<div class=\"container \">\r\n<ul class=\"list-group\" *ngFor=\"let article of articles | newsfilter: char\">\r\n  <li class=\"list-group-item\" style=\"margin: 5px 0; display: flex; justify-content: space-between; align-items: center\">\r\n    <div class=\"text-left\" style=\"overflow: hidden;\">\r\n      <img [src]=\"article.urlToImage || article.title\" style=\"height: 50px; float: left\">\r\n      <h4>{{article.title | titlecase }}</h4>\r\n      <i>{{article.author | uppercase}}</i>\r\n      <p>{{article.description | lowercase}}</p>\r\n      <div>Date:{{article.publishedAt | date}}</div>\r\n    </div>\r\n    <div *ngIf=\"isRenderButtons\" class=\"text-right\">\r\n      <button routerLink=\"news/edit/{{article._id}}\" class=\"btn btn-info\" title=\"edit article\" (click)=\"update(article._id)\">Update</button>\r\n      <button class=\"btn btn-danger\" title=\"delete article\" (click)=\"delete(article)\">Delete</button>\r\n      <button (click)=\"reRoute('news/edit/1')\">go to edit article</button>\r\n    </div>\r\n  </li>\r\n</ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/article/article.component.scss":
/*!************************************************!*\
  !*** ./src/app/article/article.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(router) {
        this.router = router;
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.reRoute = function (url) {
        this.router.navigate([url]);
    };
    ArticleComponent.prototype.changeFilter = function (char) {
        this.char = char;
    };
    ArticleComponent.prototype.delete = function (article) {
        console.log('delete');
        this.articles = this.articles.filter(function (h) { return h !== article; });
        // this.newsService.deleteNews(article._id).subscribe();
    };
    ArticleComponent.prototype.update = function (index) {
        var _this = this;
        index = index - 1;
        console.log('update');
        var ix = this.articles ? this.articles.findIndex(function (h) { return h._id === _this.articles[index]._id; }) : -1;
        if (ix > -1) {
            this.articles[ix] = {
                _id: '1',
                author: 'News',
                title: 'News',
                description: 'News',
                url: 'News',
                urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png',
                publishedAt: '2019-02-12T02:06:04Z'
            };
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ArticleComponent.prototype, "articles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ArticleComponent.prototype, "isMynews", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ArticleComponent.prototype, "isRenderButtons", void 0);
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.scss */ "./src/app/article/article.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\n<div>\n  <div class=\"container\">\n    <label>\n      <input type=\"checkbox\" name=\"remember\"> Aggregator Logo\n    </label>\n    <button class=\"authbutton\" type=\"submit\">User login</button>\n    <button class=\"authbutton\" type=\"submit\">Log out</button>\n  </div>\n</div>\n  <h1 class=\"sourcename\">\n    {{sourcenameTitle}}\n  </h1>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout .container {\n  margin: 20px 0; }\n  .layout .container .authbutton {\n    float: right; }\n  .layout .sourcename {\n  height: 50px;\n  background-color: lightgray;\n  text-align: center;\n  border: 1px solid grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0M6XFxVc2Vyc1xcT0xHQVxcRGVza3RvcFxcYW5ndWxhci1wYXJ0Mi9zcmNcXGFwcFxcbGF5b3V0XFxsYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxjQUFjLEVBQUE7RUFIbEI7SUFLTSxZQUFZLEVBQUE7RUFMbEI7RUFTSSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIC5hdXRoYnV0dG9uIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc291cmNlbmFtZSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.sourcenameTitle = 'edit';
    };
    LayoutComponent.prototype.ngOnChanges = function () {
        // if (this.sourcename && !this.isMynews) {
        //   this.sourcenameTitle = this.sourcename;
        // } else {
        //   this.sourcenameTitle = 'my news';
        // }
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/my-news-api.service.ts":
/*!****************************************!*\
  !*** ./src/app/my-news-api.service.ts ***!
  \****************************************/
/*! exports provided: MyNewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNewsApiService", function() { return MyNewsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MyNewsApiService = /** @class */ (function () {
    function MyNewsApiService(http) {
        this.http = http;
    }
    MyNewsApiService.prototype.getNews = function () {
        return this.http
            .get("api/news");
    };
    MyNewsApiService.prototype.getArticle = function (id) {
        return this.http
            .get("api/news/" + id);
    };
    MyNewsApiService.prototype.addArticle = function (article) {
        return this.http
            .post("api/news", article);
    };
    MyNewsApiService.prototype.deleteArticle = function (id) {
        var url = "api/news/" + id;
        return this.http
            .delete(url);
    };
    MyNewsApiService.prototype.updateArticle = function (id, article) {
        return this.http
            .put("api/news/" + id, article);
    };
    MyNewsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MyNewsApiService);
    return MyNewsApiService;
}());



/***/ }),

/***/ "./src/app/my-news-checkbox/my-news-checkbox.component.html":
/*!******************************************************************!*\
  !*** ./src/app/my-news-checkbox/my-news-checkbox.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-news-checkbox works!\n</p>\n"

/***/ }),

/***/ "./src/app/my-news-checkbox/my-news-checkbox.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/my-news-checkbox/my-news-checkbox.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LW5ld3MtY2hlY2tib3gvbXktbmV3cy1jaGVja2JveC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/my-news-checkbox/my-news-checkbox.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/my-news-checkbox/my-news-checkbox.component.ts ***!
  \****************************************************************/
/*! exports provided: MyNewsCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNewsCheckboxComponent", function() { return MyNewsCheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyNewsCheckboxComponent = /** @class */ (function () {
    function MyNewsCheckboxComponent() {
    }
    MyNewsCheckboxComponent.prototype.ngOnInit = function () {
    };
    MyNewsCheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-news-checkbox',
            template: __webpack_require__(/*! ./my-news-checkbox.component.html */ "./src/app/my-news-checkbox/my-news-checkbox.component.html"),
            styles: [__webpack_require__(/*! ./my-news-checkbox.component.scss */ "./src/app/my-news-checkbox/my-news-checkbox.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyNewsCheckboxComponent);
    return MyNewsCheckboxComponent;
}());



/***/ }),

/***/ "./src/app/news.ts":
/*!*************************!*\
  !*** ./src/app/news.ts ***!
  \*************************/
/*! exports provided: myArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myArticles", function() { return myArticles; });
var myArticles = [{
        _id: '1',
        author: 'BBC News',
        title: 'Aeal reached to avert new US shutdown',
        description: 'The tentative agreement on border security breaks a longstanding stalemate in Congress.',
        url: 'http://www.bbc.co.uk/news/world-us-canada-47207411',
        urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png',
        publishedAt: '2019-02-12T02:06:04Z'
    },
    {
        _id: '2',
        author: 'BBC News',
        title: 'Beal reached to avert new US shutdown',
        description: 'The tentative agreement on border security breaks a longstanding stalemate in Congress.',
        url: 'http://www.bbc.co.uk/news/world-us-canada-47207411',
        urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png',
        publishedAt: '2019-02-12T02:06:04Z'
    },
    {
        _id: '3',
        author: 'BBC News',
        title: 'Ceal reached to avert new US shutdown',
        description: 'The tentative agreement on border security breaks a longstanding stalemate in Congress.',
        url: 'http://www.bbc.co.uk/news/world-us-canada-47207411',
        urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png',
        publishedAt: '2019-02-12T02:06:04Z'
    },
    {
        _id: '4',
        author: 'BBC News',
        title: 'Deal reached to avert new US shutdown',
        description: 'The tentative agreement on border security breaks a longstanding stalemate in Congress.',
        url: 'http://www.bbc.co.uk/news/world-us-canada-47207411',
        urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png',
        publishedAt: '2019-02-12T02:06:04Z'
    },
    {
        _id: '5',
        author: 'BBC News',
        title: 'Eeal reached to avert new US shutdown',
        description: 'The tentative agreement on border security breaks a longstanding stalemate in Congress.',
        url: 'http://www.bbc.co.uk/news/world-us-canada-47207411',
        urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png',
        publishedAt: '2019-02-12T02:06:04Z'
    },
    {
        _id: '6',
        author: 'BBC News',
        title: 'Feal reached to avert new US shutdown',
        description: 'The tentative agreement on border security breaks a longstanding stalemate in Congress.',
        url: 'http://www.bbc.co.uk/news/world-us-canada-47207411',
        urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png',
        publishedAt: '2019-02-12T02:06:04Z'
    }];


/***/ }),

/***/ "./src/app/newsfilter.pipe.ts":
/*!************************************!*\
  !*** ./src/app/newsfilter.pipe.ts ***!
  \************************************/
/*! exports provided: NewsfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfilterPipe", function() { return NewsfilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsfilterPipe = /** @class */ (function () {
    function NewsfilterPipe() {
    }
    NewsfilterPipe.prototype.transform = function (value, letter) {
        if (letter && value) {
            return value.filter(function (value) {
                console.log(value.title[0] === letter, 'value');
                return value.title[0] === letter;
            });
        }
        return value;
    };
    NewsfilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'newsfilter'
        })
    ], NewsfilterPipe);
    return NewsfilterPipe;
}());



/***/ }),

/***/ "./src/app/world-news-api.service.ts":
/*!*******************************************!*\
  !*** ./src/app/world-news-api.service.ts ***!
  \*******************************************/
/*! exports provided: WorldNewsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldNewsApiService", function() { return WorldNewsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var WorldNewsApiService = /** @class */ (function () {
    function WorldNewsApiService(http) {
        this.http = http;
    }
    WorldNewsApiService.prototype.getWorldNews = function (channel) {
        return this.http.get("https://newsapi.org/v1/articles?source=" + channel + "&apiKey=554109c975e14549b32eb8b2f41fe8f8")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log('response', response);
            // const data = response.json();
            return response.articles;
        }));
    };
    WorldNewsApiService.prototype.getMyArticles = function (articles) {
        console.log(articles);
        return this.http.get('news');
    };
    WorldNewsApiService.prototype.getMyArticle = function (id) {
        console.log(id);
        return this.http.get('news/:id');
    };
    WorldNewsApiService.prototype.updateMyArticle = function (id) {
        console.log(id);
        return this.http.put('news/edit/:id', id);
    };
    WorldNewsApiService.prototype.deleteMyArticle = function (id) {
        console.log(id);
        return this.http.delete('news/delete/:id', id);
    };
    WorldNewsApiService.prototype.addMyArticle = function (article) {
        console.log(article);
        return this.http.post('news/create', article);
    };
    WorldNewsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WorldNewsApiService);
    return WorldNewsApiService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\OLGA\Desktop\angular-part2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map