(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-editar-editar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/editar/editar.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/editar/editar.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"/\" routerLink=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Editar Perfil</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <!-- Inclui seletor do componente do formulário de perfil -->\r\n    <app-profile></app-profile>\r\n\r\n    <pre>\r\nVer o perfil para a o usuário logado.\r\n\r\n[x] Usuário logado\r\n[ ] Usuário não logado\r\n[ ] Menu lateral\r\n[ ] Menu inferior\r\n[x] Seta de retorno\r\nLocal: 'app/usuario/editar/editar.page'\r\nRota: /usuario/editar\r\nRoteamento: app/app-routing.module.ts\r\n    </pre>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/usuario/editar/editar-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/usuario/editar/editar-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EditarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPageRoutingModule", function() { return EditarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar.page */ "./src/app/usuario/editar/editar.page.ts");




const routes = [
    {
        path: '',
        component: _editar_page__WEBPACK_IMPORTED_MODULE_3__["EditarPage"]
    }
];
let EditarPageRoutingModule = class EditarPageRoutingModule {
};
EditarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarPageRoutingModule);



/***/ }),

/***/ "./src/app/usuario/editar/editar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/usuario/editar/editar.module.ts ***!
  \*************************************************/
/*! exports provided: EditarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPageModule", function() { return EditarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _editar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-routing.module */ "./src/app/usuario/editar/editar-routing.module.ts");
/* harmony import */ var _editar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar.page */ "./src/app/usuario/editar/editar.page.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");







// Importa dependências


let EditarPageModule = class EditarPageModule {
};
EditarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editar_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarPageRoutingModule"],
            // Injeta dependências
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [
            _editar_page__WEBPACK_IMPORTED_MODULE_6__["EditarPage"],
            // Declara componente importado
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
        ]
    })
], EditarPageModule);



/***/ }),

/***/ "./src/app/usuario/editar/editar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/usuario/editar/editar.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vZWRpdGFyL2VkaXRhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/usuario/editar/editar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/usuario/editar/editar.page.ts ***!
  \***********************************************/
/*! exports provided: EditarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarPage", function() { return EditarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EditarPage = class EditarPage {
    constructor() { }
    ngOnInit() {
    }
};
EditarPage.ctorParameters = () => [];
EditarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/editar/editar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editar.page.scss */ "./src/app/usuario/editar/editar.page.scss")).default]
    })
], EditarPage);



/***/ })

}]);
//# sourceMappingURL=usuario-editar-editar-module-es2015.js.map