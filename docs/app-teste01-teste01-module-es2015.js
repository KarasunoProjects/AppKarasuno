(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-teste01-teste01-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/teste01/teste01.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/teste01/teste01.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Funcionalidade 1</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Fazendo Algo</h2>\r\n\r\n    <pre>\r\nFaz algma coisa no aplicativo.\r\n\r\n[x] Usuário logado\r\n[ ] Usuário não logado\r\n[ ] Menu lateral\r\n[x] Menu inferior\r\n[x] Seta de retorno\r\nLocal: 'app/app/teste01/teste01.page'\r\nRota: /app/teste01\r\nRoteamento: app/tabs/tabs-routing.module.ts\r\n    </pre>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/app/teste01/teste01-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app/teste01/teste01-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: Teste01PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teste01PageRoutingModule", function() { return Teste01PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _teste01_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teste01.page */ "./src/app/app/teste01/teste01.page.ts");




const routes = [
    {
        path: '',
        component: _teste01_page__WEBPACK_IMPORTED_MODULE_3__["Teste01Page"]
    }
];
let Teste01PageRoutingModule = class Teste01PageRoutingModule {
};
Teste01PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Teste01PageRoutingModule);



/***/ }),

/***/ "./src/app/app/teste01/teste01.module.ts":
/*!***********************************************!*\
  !*** ./src/app/app/teste01/teste01.module.ts ***!
  \***********************************************/
/*! exports provided: Teste01PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teste01PageModule", function() { return Teste01PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _teste01_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teste01-routing.module */ "./src/app/app/teste01/teste01-routing.module.ts");
/* harmony import */ var _teste01_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teste01.page */ "./src/app/app/teste01/teste01.page.ts");







let Teste01PageModule = class Teste01PageModule {
};
Teste01PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _teste01_routing_module__WEBPACK_IMPORTED_MODULE_5__["Teste01PageRoutingModule"]
        ],
        declarations: [_teste01_page__WEBPACK_IMPORTED_MODULE_6__["Teste01Page"]]
    })
], Teste01PageModule);



/***/ }),

/***/ "./src/app/app/teste01/teste01.page.scss":
/*!***********************************************!*\
  !*** ./src/app/app/teste01/teste01.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC90ZXN0ZTAxL3Rlc3RlMDEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/app/teste01/teste01.page.ts":
/*!*********************************************!*\
  !*** ./src/app/app/teste01/teste01.page.ts ***!
  \*********************************************/
/*! exports provided: Teste01Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teste01Page", function() { return Teste01Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/**
 * É necessário ter o "perfil" cadastrado para ver esta página.
 */


// Importa dependências


let Teste01Page = class Teste01Page {
    constructor(
    // Injeta dependências
    router, app) {
        this.router = router;
        this.app = app;
    }
    ngOnInit() { }
    // Detecta a presença do perfil
    ionViewWillEnter() {
        // Testa o perfil local
        this.app.isProfile().then((data) => {
            // Se existe, faz as ações da página
            if (data) {
                // Coloque o que essa página faz aqui
                console.log('bla bla bla');
                // Se não existe, vai para o cadastro de perfil
            }
            else {
                this.router.navigate(['/usuario/novo']);
            }
        });
    }
};
Teste01Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
];
Teste01Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teste01',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./teste01.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/teste01/teste01.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./teste01.page.scss */ "./src/app/app/teste01/teste01.page.scss")).default]
    })
], Teste01Page);



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");




// Importa dependências

let AppService = class AppService {
    constructor(router, alertController, 
    // Injeção das dependências
    storage) {
        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
    }
    myAlert(title, text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: title,
                message: text,
                buttons: [{
                        text: 'Ok',
                        handler: () => { return true; }
                    }]
            });
            yield alert.present();
        });
    }
    // Método que detecta a presença do perfil local
    isProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Constrói a promise
            return new Promise((resolve, reject) => {
                // Lê o armazenamento local
                this.storage.get('userProfile', { type: 'string' }).subscribe({
                    next: (data) => {
                        // Se perfil, retorna 'true'
                        if (data)
                            resolve(true);
                        // Se não tem perfil, retorna 'false'
                        else
                            resolve(false);
                    },
                    // Em caso de erro ao tentar acessar 'storage'
                    error: (error) => console.error(error)
                });
            });
        });
    }
};
AppService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"] }
];
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ })

}]);
//# sourceMappingURL=app-teste01-teste01-module-es2015.js.map