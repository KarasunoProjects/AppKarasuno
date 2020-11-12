(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-perfil-perfil-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/perfil/perfil.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/perfil/perfil.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"/\" routerLink=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Seu Perfil</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\" *ngIf=\"userData && userProfile\">\r\n\r\n    <ion-card>\r\n\r\n      <ion-card-header>\r\n        <ion-card-title>Perfil do Login</ion-card-title>\r\n      </ion-card-header>\r\n      <img [src]=\"[userData.photoURL]\" [alt]=\"[userData.displayName]\">\r\n      <ion-card-content>\r\n        <h3 style=\"font-size: 1.2rem; font-weight: bold;\">{{ userData.displayName }}</h3>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>{{ userData.email }}</ion-col>\r\n            <ion-col class=\"ion-text-end\">\r\n\r\n              <!-- Editar perfil da rede social -->\r\n              <ion-button size=\"small\" fill=\"clear\" (click)=\"editProviderProfile()\">\r\n                <ion-icon name=\"create\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n\r\n      <hr>\r\n      <ion-card-header>\r\n        <ion-card-title>Dados Pessoais</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ul>\r\n          <li>\r\n            <ion-text color=\"primary\">Nome:</ion-text>{{ userProfile.name }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">CPF:</ion-text>{{ userProfile.cpf }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Nascimento:</ion-text>{{ userProfile.birth | date: 'dd/MM/yyyy' }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Gênero:</ion-text>{{ userProfile.gender }}\r\n          </li>\r\n        </ul>\r\n      </ion-card-content>\r\n\r\n      <hr>\r\n      <ion-card-header>\r\n        <ion-card-title>Dados de Contato</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ul>\r\n          <li>\r\n            <ion-text color=\"primary\">E-mail:</ion-text>\r\n            {{ userProfile.email }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Telefone Residêncial:</ion-text>\r\n            {{ userProfile.homePhone }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Telefone Celular:</ion-text>\r\n            {{ userProfile.cellPhone }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">WhatsApp</ion-text>\r\n            {{ userProfile.whatsApp }}\r\n          </li>\r\n        </ul>\r\n      </ion-card-content>\r\n\r\n      <hr>\r\n      <ion-card-header>\r\n        <ion-card-title>Outras Informações</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ul>\r\n          <li>\r\n            <ion-text color=\"primary\">Seleção 1:</ion-text>\r\n            {{ userProfile.selectStatic }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Seleção 2:</ion-text>\r\n            {{ userProfile.selectDynamic }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Nível de Acesso:</ion-text>\r\n            {{ userProfile.type }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Status:</ion-text>\r\n            {{ userProfile.status }}\r\n          </li>\r\n        </ul>\r\n      </ion-card-content>\r\n\r\n    </ion-card>\r\n\r\n    <ion-button expand=\"block\" class=\"ion-no-margin ion-margin-vertical\" routerLink=\"/usuario/editar\">\r\n      <ion-icon name=\"create\"></ion-icon>&nbsp;\r\n      Editar Perfil\r\n    </ion-button>\r\n\r\n  </div>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <pre>\r\nVer o perfil para a o usuário logado.\r\n\r\n[x] Usuário logado\r\n[ ] Usuário não logado\r\n[ ] Menu lateral\r\n[ ] Menu inferior\r\n[x] Seta de retorno\r\nLocal: 'app/usuario/perfil/perfil.page'\r\nRota: /usuario/perfil\r\nRoteamento: app/app-routing.module.ts\r\n    </pre>\r\n\r\n  </div>\r\n\r\n</ion-content>");

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



/***/ }),

/***/ "./src/app/usuario/perfil/perfil-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/usuario/perfil/perfil-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PerfilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageRoutingModule", function() { return PerfilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ "./src/app/usuario/perfil/perfil.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_3__["PerfilPage"]
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ "./src/app/usuario/perfil/perfil.module.ts":
/*!*************************************************!*\
  !*** ./src/app/usuario/perfil/perfil.module.ts ***!
  \*************************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/usuario/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil.page */ "./src/app/usuario/perfil/perfil.page.ts");







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilPageRoutingModule"]
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_6__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "./src/app/usuario/perfil/perfil.page.scss":
/*!*************************************************!*\
  !*** ./src/app/usuario/perfil/perfil.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: 1rem 0 auto 0;\n}\n\nion-card img {\n  margin: auto;\n  display: block;\n  width: 100%;\n  max-width: 320px;\n}\n\nion-card ion-grid,\nion-card ion-row,\nion-card ion-col {\n  margin: 0;\n  padding: 0;\n}\n\nion-card-content ul {\n  padding: 0;\n  list-style: none;\n}\n\nion-card-content ul li {\n  margin-bottom: 0.5rem;\n}\n\nion-card-content ul li ion-text {\n  font-weight: bold;\n  display: block;\n  font-size: small;\n}\n\nion-card hr {\n  border-bottom: 1px dotted grey;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXN1YXJpby9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBOzs7RUFHSSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0VBQ0EsU0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvdXN1YXJpby9wZXJmaWwvcGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIG1hcmdpbjogMXJlbSAwIGF1dG8gMDtcclxufVxyXG5cclxuaW9uLWNhcmQgaW1nIHtcclxuICAgIG1hcmdpbiAgIDogYXV0bztcclxuICAgIGRpc3BsYXkgIDogYmxvY2s7XHJcbiAgICB3aWR0aCAgICA6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24tZ3JpZCxcclxuaW9uLWNhcmQgaW9uLXJvdyxcclxuaW9uLWNhcmQgaW9uLWNvbCB7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB1bCB7XHJcbiAgICBwYWRkaW5nICAgOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB1bCBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB1bCBsaSBpb24tdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXkgICAgOiBibG9jaztcclxuICAgIGZvbnQtc2l6ZSAgOiBzbWFsbDtcclxufVxyXG5cclxuaW9uLWNhcmQgaHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBncmV5O1xyXG4gICAgbWFyZ2luICAgICAgIDogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/usuario/perfil/perfil.page.ts":
/*!***********************************************!*\
  !*** ./src/app/usuario/perfil/perfil.page.ts ***!
  \***********************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");


// Importa dependências



let PerfilPage = class PerfilPage {
    constructor(
    // Injeta dependências
    router, app, storage) {
        this.router = router;
        this.app = app;
        this.storage = storage;
    }
    ngOnInit() { }
    // 'ionViewWillEnter' é executado SEMPRE que a página (re)carrega
    ionViewWillEnter() {
        // Testa o perfil local
        this.app.isProfile().then((data) => {
            // Se existe, faz as ações da página
            if (data) {
                // Obtém dados do login local e armazena em 'userData'
                this.storage.get('userData', { type: 'string' }).subscribe((uData) => {
                    this.userData = JSON.parse(uData);
                    // Obtém dados do perfil local e armazena em 'userProfile'
                    this.storage.get('userProfile', { type: 'string' }).subscribe((pData) => {
                        this.userProfile = JSON.parse(pData);
                    });
                });
                // Se não existe perfil, vai para o cadastro de perfil
            }
            else {
                this.router.navigate(['/user/new']);
            }
        });
    }
    // Ação do botão para editar perfil do provedor de login
    editProviderProfile() {
        // Variável com URL do perfil, de acordo com o provedor
        let profileURL = '';
        // Seleciona o URL, de acordo com o provedor
        switch (this.userData.provider) {
            case 'google':
                profileURL = 'https://myaccount.google.com/profile';
                break;
            case 'facebook':
                // profileURL = '';
                break;
            case 'twitter':
                // profileURL = '';
                break;
            case 'github':
                // profileURL = '';
                break;
            // case ....
        }
        // Aviso de redirecionamento
        if (this.app.myAlert(this.userData.displayName, `Atenção! Você será redirecionado para a página de perfil no provedor`)) {
            // Redireciona para o perfil do usuário no provedor
            window.open(profileURL);
        }
    }
};
PerfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./perfil.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/perfil/perfil.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./perfil.page.scss */ "./src/app/usuario/perfil/perfil.page.scss")).default]
    })
], PerfilPage);



/***/ })

}]);
//# sourceMappingURL=usuario-perfil-perfil-module-es2015.js.map