(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-entrar-entrar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/entrar/entrar.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/entrar/entrar.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Entrar</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Olá!</h2>\r\n\r\n    <p>Para que você possa acessar os serviços deste aplicativo, é necessário estar logado(a)...</p>\r\n    <p>Escolha um método de entrada clicando no botão.</p>\r\n\r\n    <div class=\"login-table\">\r\n\r\n      <p>Entrar com:</p>\r\n\r\n      <!-- Botões de login com redes sociais -->\r\n\r\n      <ion-button expand=\"block\" (click)=\"login('google')\">\r\n        <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\r\n        <ion-label>Google</ion-label>\r\n      </ion-button>\r\n\r\n      <ion-button class=\"ion-margin-top\" expand=\"block\" (click)=\"login('facebook')\" disabled=\"true\">\r\n        <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\r\n        <ion-label>Facebook</ion-label>\r\n      </ion-button>\r\n\r\n      <ion-button class=\"ion-margin-top\" expand=\"block\" (click)=\"login('twitter')\" disabled=\"true\">\r\n        <ion-icon name=\"logo-twitter\" slot=\"start\"></ion-icon>\r\n        <ion-label>Twitter</ion-label>\r\n      </ion-button>\r\n\r\n      <ion-button class=\"ion-margin-top\" expand=\"block\" (click)=\"login('github')\" disabled=\"true\">\r\n        <ion-icon name=\"logo-github\" slot=\"start\"></ion-icon>\r\n        <ion-label>GitHub</ion-label>\r\n      </ion-button>\r\n\r\n      <!-- ... -->\r\n\r\n    </div>\r\n\r\n    <pre>\r\nLogin do usuário no aplicativo.\r\n\r\n[ ] Usuário logado\r\n[x] Usuário não logado\r\n[ ] Menu lateral\r\n[ ] Menu inferior\r\n[x] Seta de retorno\r\nLocal: 'app/usuario/entrar/entrar.page'\r\nRota: /usuario/entrar\r\nRoteamento: app/app-routing.module.ts\r\n    </pre>\r\n\r\n  </div>\r\n\r\n</ion-content>");

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

/***/ "./src/app/usuario/entrar/entrar-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/usuario/entrar/entrar-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EntrarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrarPageRoutingModule", function() { return EntrarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _entrar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entrar.page */ "./src/app/usuario/entrar/entrar.page.ts");




const routes = [
    {
        path: '',
        component: _entrar_page__WEBPACK_IMPORTED_MODULE_3__["EntrarPage"]
    }
];
let EntrarPageRoutingModule = class EntrarPageRoutingModule {
};
EntrarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EntrarPageRoutingModule);



/***/ }),

/***/ "./src/app/usuario/entrar/entrar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/usuario/entrar/entrar.module.ts ***!
  \*************************************************/
/*! exports provided: EntrarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrarPageModule", function() { return EntrarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _entrar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entrar-routing.module */ "./src/app/usuario/entrar/entrar-routing.module.ts");
/* harmony import */ var _entrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entrar.page */ "./src/app/usuario/entrar/entrar.page.ts");







let EntrarPageModule = class EntrarPageModule {
};
EntrarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _entrar_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntrarPageRoutingModule"]
        ],
        declarations: [_entrar_page__WEBPACK_IMPORTED_MODULE_6__["EntrarPage"]]
    })
], EntrarPageModule);



/***/ }),

/***/ "./src/app/usuario/entrar/entrar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/usuario/entrar/entrar.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/* 3.1) Formata lista de botões */\n.login-table {\n  display: table;\n  margin: auto;\n  width: 220px;\n}\n.login-table ion-label {\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXN1YXJpby9lbnRyYXIvZW50cmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsaUNBQUE7QUFDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQ0E7RUFDSSxvQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvdXN1YXJpby9lbnRyYXIvZW50cmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIDMuMSkgRm9ybWF0YSBsaXN0YSBkZSBib3TDtWVzICovXG4ubG9naW4tdGFibGUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMjIwcHg7XG59XG5cbi5sb2dpbi10YWJsZSBpb24tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/usuario/entrar/entrar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/usuario/entrar/entrar.page.ts ***!
  \***********************************************/
/*! exports provided: EntrarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrarPage", function() { return EntrarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/events.service */ "./src/app/services/events.service.ts");


// Importa dependências






// Dispara eventos globais

let EntrarPage = class EntrarPage {
    constructor(
    // Injeção de dependências
    fbAuth, fbStore, storage, app, router, 
    // Dispara eventos globais
    events) {
        this.fbAuth = fbAuth;
        this.fbStore = fbStore;
        this.storage = storage;
        this.app = app;
        this.router = router;
        this.events = events;
    }
    ngOnInit() { }
    // Ação do botão de login
    login(provider) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Seleciona provedor de login social
            // - Adicione outros provedores conforme a configuração do Firebase Authentication
            switch (provider) {
                case 'google':
                    this.authProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.GoogleAuthProvider();
                    break;
                case 'facebook':
                    alert('Você precisa implementar isso no Firebase Authentication!');
                    return false;
                    // this.authProvider = new firebase.auth.FacebookAuthProvider();
                    break;
                case 'twitter':
                    alert('Você precisa implementar isso no Firebase Authentication!');
                    return false;
                    // this.authProvider = new firebase.auth.TwitterAuthProvider();
                    break;
                case 'github':
                    alert('Você precisa implementar isso no Firebase Authentication!');
                    return false;
                    // this.authProvider = new firebase.auth.GithubAuthProvider();
                    break;
                // case ....
            }
            // Login com popup no Firebase Auth
            this.fbAuth.signInWithPopup(this.authProvider)
                // Se logou
                .then((uData) => {
                // Formata dados do usuário
                this.userData = {
                    uid: uData.user.uid,
                    displayName: uData.user.displayName,
                    email: uData.user.email,
                    photoURL: uData.user.photoURL,
                    provider
                };
                // Salva no armazenamento local
                this.storage.set('userData', JSON.stringify(this.userData)).subscribe({
                    next: () => {
                        // 3.6) Atualiza 'userData' no menu principal também (app.component.ts)
                        this.events.publish('userData', this.userData);
                        // Verifica se tem perfil no Firestore
                        this.fbStore.firestore.collection('users').doc(this.userData.uid).get()
                            .then((data) => {
                            // Se tem perfil
                            if (data.exists) {
                                // Obtém dados do perfil
                                this.userProfile = data.data();
                                this.userProfile.uid = data.id;
                                // Grava perfil no armazenamento local
                                this.storage.set('userProfile', JSON.stringify(this.userProfile)).subscribe({
                                    next: () => {
                                        // Exibe alerta
                                        this.app.myAlert(`Olá ${this.userData.displayName}`, `Você já pode acessar todos os recursos do aplicativo.`);
                                        // Vai para a raiz
                                        this.router.navigate(['/']);
                                    },
                                    error: (error) => { console.error(error); }
                                });
                                // Se não tem perfil
                            }
                            else {
                                // Exibe alerta e vai para a rota '/usuario/novo'
                                this.app.myAlert(`Olá ${this.userData.displayName}`, `Você precisa completar seu cadastro para usar todos os recursos do aplicativo.`);
                                // Vai para o cadatro de novo perfil
                                this.router.navigate(['/usuario/novo']);
                            }
                        })
                            .catch((error) => { console.error(error); });
                    },
                    error: (error) => { console.error(error); }
                });
            })
                .catch((error) => { console.log(error); });
        });
    }
};
EntrarPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"] }
];
EntrarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entrar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entrar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/entrar/entrar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./entrar.page.scss */ "./src/app/usuario/entrar/entrar.page.scss")).default]
    })
], EntrarPage);



/***/ })

}]);
//# sourceMappingURL=usuario-entrar-entrar-module-es2015.js.map