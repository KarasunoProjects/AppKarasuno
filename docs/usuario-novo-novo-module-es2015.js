(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-novo-novo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/novo/novo.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/novo/novo.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n\r\n      <!-- Dica: para 'travar' o usuário nesta página, remova 'routerLink=\"/\"' abaixo. -->\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"/\" routerLink=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Novo Perfil</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <!-- Inclui seletor do componente do formulário de perfil -->\r\n    <app-profile></app-profile>\r\n\r\n    <pre>\r\nCadastrar um perfil para a o usuário logado.\r\n\r\n[x] Usuário logado\r\n[ ] Usuário não logado\r\n[ ] Menu lateral\r\n[ ] Menu inferior\r\n[x] Seta de retorno\r\nLocal: 'app/usuario/novo/novo.page'\r\nRota: /usuario/novo\r\nRoteamento: app/app-routing.module.ts\r\n\r\n    </pre>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/usuario/novo/novo-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/usuario/novo/novo-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NovoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoPageRoutingModule", function() { return NovoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _novo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./novo.page */ "./src/app/usuario/novo/novo.page.ts");




const routes = [
    {
        path: '',
        component: _novo_page__WEBPACK_IMPORTED_MODULE_3__["NovoPage"]
    }
];
let NovoPageRoutingModule = class NovoPageRoutingModule {
};
NovoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NovoPageRoutingModule);



/***/ }),

/***/ "./src/app/usuario/novo/novo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/usuario/novo/novo.module.ts ***!
  \*********************************************/
/*! exports provided: NovoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoPageModule", function() { return NovoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _novo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./novo-routing.module */ "./src/app/usuario/novo/novo-routing.module.ts");
/* harmony import */ var _novo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./novo.page */ "./src/app/usuario/novo/novo.page.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");







// Importa dependências


let NovoPageModule = class NovoPageModule {
};
NovoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _novo_routing_module__WEBPACK_IMPORTED_MODULE_5__["NovoPageRoutingModule"],
            // Injeta dependências
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [
            _novo_page__WEBPACK_IMPORTED_MODULE_6__["NovoPage"],
            // Declara componente importado
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        ]
    })
], NovoPageModule);



/***/ }),

/***/ "./src/app/usuario/novo/novo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/usuario/novo/novo.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vbm92by9ub3ZvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/usuario/novo/novo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/usuario/novo/novo.page.ts ***!
  \*******************************************/
/*! exports provided: NovoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NovoPage", function() { return NovoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NovoPage = class NovoPage {
    constructor() { }
    ngOnInit() { }
};
NovoPage.ctorParameters = () => [];
NovoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-novo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./novo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/novo/novo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./novo.page.scss */ "./src/app/usuario/novo/novo.page.scss")).default]
    })
], NovoPage);



/***/ })

}]);
//# sourceMappingURL=usuario-novo-novo-module-es2015.js.map