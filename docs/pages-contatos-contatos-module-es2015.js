(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contatos-contatos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contatos/contatos.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contatos/contatos.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Faça Contato</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Faça Contato</h2>\r\n\r\n    <pre>\r\nFormulário e informações de contato.\r\n\r\n[x] Usuário logado\r\n[x] Usuário não logado\r\n[x] Menu lateral\r\n[x] Menu inferior\r\n[ ] Seta de retorno\r\nLocal: 'app/pages/contatos/contatos.page'\r\nRota: /app/contatos\r\nRoteamento: app/tabs/tabs-routing.module.ts\r\n</pre>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/contatos/contatos-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/contatos/contatos-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ContatosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosPageRoutingModule", function() { return ContatosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contatos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contatos.page */ "./src/app/pages/contatos/contatos.page.ts");




const routes = [
    {
        path: '',
        component: _contatos_page__WEBPACK_IMPORTED_MODULE_3__["ContatosPage"]
    }
];
let ContatosPageRoutingModule = class ContatosPageRoutingModule {
};
ContatosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContatosPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/contatos/contatos.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/contatos/contatos.module.ts ***!
  \***************************************************/
/*! exports provided: ContatosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosPageModule", function() { return ContatosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contatos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contatos-routing.module */ "./src/app/pages/contatos/contatos-routing.module.ts");
/* harmony import */ var _contatos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contatos.page */ "./src/app/pages/contatos/contatos.page.ts");







let ContatosPageModule = class ContatosPageModule {
};
ContatosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contatos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContatosPageRoutingModule"]
        ],
        declarations: [_contatos_page__WEBPACK_IMPORTED_MODULE_6__["ContatosPage"]]
    })
], ContatosPageModule);



/***/ }),

/***/ "./src/app/pages/contatos/contatos.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/contatos/contatos.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhdG9zL2NvbnRhdG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/contatos/contatos.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contatos/contatos.page.ts ***!
  \*************************************************/
/*! exports provided: ContatosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatosPage", function() { return ContatosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ContatosPage = class ContatosPage {
    constructor() { }
    ngOnInit() {
    }
};
ContatosPage.ctorParameters = () => [];
ContatosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contatos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contatos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contatos/contatos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contatos.page.scss */ "./src/app/pages/contatos/contatos.page.scss")).default]
    })
], ContatosPage);



/***/ })

}]);
//# sourceMappingURL=pages-contatos-contatos-module-es2015.js.map