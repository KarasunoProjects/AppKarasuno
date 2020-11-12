(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-sair-sair-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/sair/sair.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/sair/sair.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Sair</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <!-- Mostra botão de logout -->\r\n    <h2>Olá!</h2>\r\n    <p class=\"ion-text-justify\">Clique no botão abaixo para confirmar a saída do aplicativo.</p>\r\n    <p class=\"ion-text-center\">\r\n      <ion-button (click)=\"logout()\">Sair do Aplicativo</ion-button>\r\n    </p>\r\n\r\n    <pre>\r\nSair do aplicativo.\r\n\r\n[x] Usuário logado\r\n[ ] Usuário não logado\r\n[ ] Menu lateral\r\n[ ] Menu inferior\r\n[x] Seta de retorno\r\nLocal: 'app/usuario/sair/sair.page'\r\nRota: /usuario/sair\r\nRoteamento: app/app-routing.module.ts\r\n    </pre>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/usuario/sair/sair-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/usuario/sair/sair-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SairPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SairPageRoutingModule", function() { return SairPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sair_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sair.page */ "./src/app/usuario/sair/sair.page.ts");




const routes = [
    {
        path: '',
        component: _sair_page__WEBPACK_IMPORTED_MODULE_3__["SairPage"]
    }
];
let SairPageRoutingModule = class SairPageRoutingModule {
};
SairPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SairPageRoutingModule);



/***/ }),

/***/ "./src/app/usuario/sair/sair.module.ts":
/*!*********************************************!*\
  !*** ./src/app/usuario/sair/sair.module.ts ***!
  \*********************************************/
/*! exports provided: SairPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SairPageModule", function() { return SairPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sair_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sair-routing.module */ "./src/app/usuario/sair/sair-routing.module.ts");
/* harmony import */ var _sair_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sair.page */ "./src/app/usuario/sair/sair.page.ts");







let SairPageModule = class SairPageModule {
};
SairPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sair_routing_module__WEBPACK_IMPORTED_MODULE_5__["SairPageRoutingModule"]
        ],
        declarations: [_sair_page__WEBPACK_IMPORTED_MODULE_6__["SairPage"]]
    })
], SairPageModule);



/***/ }),

/***/ "./src/app/usuario/sair/sair.page.scss":
/*!*********************************************!*\
  !*** ./src/app/usuario/sair/sair.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vc2Fpci9zYWlyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/usuario/sair/sair.page.ts":
/*!*******************************************!*\
  !*** ./src/app/usuario/sair/sair.page.ts ***!
  \*******************************************/
/*! exports provided: SairPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SairPage", function() { return SairPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");


// Importa dependências




let SairPage = class SairPage {
    constructor(
    // Injeção de dependências
    fbAuth, storage, router, events) {
        this.fbAuth = fbAuth;
        this.storage = storage;
        this.router = router;
        this.events = events;
    }
    ngOnInit() { }
    // Ação do botão [Sair]
    logout() {
        // Lougout no Firebase Auth
        this.fbAuth.signOut()
            .then(() => {
            // Apaga perfil local
            this.storage.delete('userProfile').subscribe({
                next: (() => {
                    // Apaga login local
                    this.storage.delete('userData').subscribe({
                        next: (() => {
                            // 3.4) Atualiza 'userData' no menu principal também (app.component.ts)
                            this.events.publish('userData', null);
                            // Rota para a página inicial
                            this.router.navigate(['/']);
                        }),
                        error: ((error) => { console.error(error); })
                    });
                }),
                error: ((error) => { console.error(error); })
            });
        })
            .catch((error) => { console.error(error); });
    }
};
SairPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__["StorageMap"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"] }
];
SairPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sair',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sair.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/sair/sair.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sair.page.scss */ "./src/app/usuario/sair/sair.page.scss")).default]
    })
], SairPage);



/***/ })

}]);
//# sourceMappingURL=usuario-sair-sair-module-es2015.js.map