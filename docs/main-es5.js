(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n\r\n          <ion-list-header>Hora do Salão</ion-list-header>\r\n          <ion-note>Primeiro a Satisfação</ion-note>\r\n\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n\r\n            <!-- Perfil do logado -->\r\n            <div *ngIf=\"userData\">\r\n\r\n              <hr>\r\n\r\n              <ion-item routerDirection=\"root\" routerLink=\"/user/profile\" lines=\"none\" detail=\"false\">\r\n                <ion-avatar slot=\"start\"><img src=\"{{ userData.photoURL }}\" alt=\"{{ userData.displayName }}\">\r\n                </ion-avatar>\r\n                <ion-label>\r\n                  <h3>{{ userData.displayName }}</h3>\r\n                  <small>{{ userData.email }}</small>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <hr>\r\n\r\n            </div>\r\n\r\n            <hr>\r\n\r\n            <!-- Para logados ou não -->\r\n            <ion-item routerDirection=\"root\" routerLink=\"/\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"home\"></ion-icon>\r\n              <ion-label>Início</ion-label>\r\n            </ion-item>\r\n\r\n            <hr>\r\n\r\n            <!-- Somente para logados -->\r\n            <ion-item *ngIf=\"userData\" routerDirection=\"root\" routerLink=\"/app/teste01\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"cog\"></ion-icon>\r\n              <ion-label>Funcionalidade 01</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Somente para não logados -->\r\n            <ion-item *ngIf=\"!userData\" routerDirection=\"root\" routerLink=\"/app/teste02\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"cog\"></ion-icon>\r\n              <ion-label>Funcionalidade 02</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Para logados ou não -->\r\n            <ion-item routerDirection=\"root\" routerLink=\"/app/teste03\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"cog\"></ion-icon>\r\n              <ion-label>Funcionalidade 03</ion-label>\r\n            </ion-item>\r\n\r\n            <hr>\r\n\r\n            <!-- Somente para não logados -->\r\n            <ion-item *ngIf=\"!userData\" routerDirection=\"root\" routerLink=\"/usuario/entrar\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\r\n              <ion-label>Login / Entrar</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Somente para logados -->\r\n            <ion-item *ngIf=\"userData\" routerDirection=\"root\" routerLink=\"/usuario/perfil\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n              <ion-label>Seu perfil</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Somente para logados -->\r\n            <ion-item *ngIf=\"userData\" routerDirection=\"root\" routerLink=\"/usuario/sair\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\r\n              <ion-label>Logout / Sair</ion-label>\r\n            </ion-item>\r\n\r\n            <hr>\r\n\r\n            <!-- Para logados ou não -->\r\n            <ion-item routerDirection=\"root\" routerLink=\"app/contatos\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"chatbubbles\"></ion-icon>\r\n              <ion-label>Faça contato</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Para logados ou não -->\r\n            <ion-item routerDirection=\"root\" routerLink=\"app/sobre\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"information-circle\"></ion-icon>\r\n              <ion-label>Informações</ion-label>\r\n            </ion-item>\r\n\r\n            <hr>\r\n\r\n            <!-- Somente para logados -->\r\n            <ion-item *ngIf=\"userData\" routerDirection=\"root\" routerLink=\"/app/config\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"cog\"></ion-icon>\r\n              <ion-label>Configurações</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Para logados ou não -->\r\n            <ion-item routerDirection=\"root\" routerLink=\"/app/sobre\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" name=\"information-circle\"></ion-icon>\r\n              <ion-label>Sobre...</ion-label>\r\n            </ion-item>\r\n\r\n          </ion-menu-toggle>\r\n\r\n        </ion-list>\r\n\r\n      </ion-content>\r\n\r\n      <div class=\"copyright\">&copy; Copyright 2020 Equipe Karasuno.</div>\r\n\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js"); // Importando dependências
      // Se não está logado, roteia para 'login'


      var toLogin = function toLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectUnauthorizedTo"])(['/usuario/entrar']);
      }; // Se está logado, roteia para a 'raiz'


      var isLogged = function isLogged() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectLoggedInTo"])(['/']);
      };

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | tabs-tabs-module */
          "tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./tabs/tabs.module */
          "./src/app/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        // Acessível somente para usuário não logado
        path: 'usuario/entrar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | usuario-entrar-entrar-module */
          "usuario-entrar-entrar-module").then(__webpack_require__.bind(null,
          /*! ./usuario/entrar/entrar.module */
          "./src/app/usuario/entrar/entrar.module.ts")).then(function (m) {
            return m.EntrarPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: isLogged
        }
      }, {
        // Acessível somente para usuário logado
        path: 'usuario/sair',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | usuario-sair-sair-module */
          "usuario-sair-sair-module").then(__webpack_require__.bind(null,
          /*! ./usuario/sair/sair.module */
          "./src/app/usuario/sair/sair.module.ts")).then(function (m) {
            return m.SairPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, {
        // Acessível somente para usuário logado
        path: 'usuario/perfil',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | usuario-perfil-perfil-module */
          "usuario-perfil-perfil-module").then(__webpack_require__.bind(null,
          /*! ./usuario/perfil/perfil.module */
          "./src/app/usuario/perfil/perfil.module.ts")).then(function (m) {
            return m.PerfilPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, {
        // Acessível somente para usuário logado
        path: 'usuario/novo',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | usuario-novo-novo-module */
          [__webpack_require__.e("default~usuario-editar-editar-module~usuario-novo-novo-module"), __webpack_require__.e("usuario-novo-novo-module")]).then(__webpack_require__.bind(null,
          /*! ./usuario/novo/novo.module */
          "./src/app/usuario/novo/novo.module.ts")).then(function (m) {
            return m.NovoPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }, {
        // Acessível somente para usuário logado
        path: 'usuario/editar',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | usuario-editar-editar-module */
          [__webpack_require__.e("default~usuario-editar-editar-module~usuario-novo-novo-module"), __webpack_require__.e("usuario-editar-editar-module")]).then(__webpack_require__.bind(null,
          /*! ./usuario/editar/editar.module */
          "./src/app/usuario/editar/editar.module.ts")).then(function (m) {
            return m.EditarPageModule;
          });
        },
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: toLogin
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* 1.2) Separador (<hr>) */\nion-menu-toggle hr {\n  margin: 0;\n  display: block;\n  border: none;\n  border-top: 1px dotted grey;\n}\n/* 1.3) Subtítulo do menu (<ion-note>) */\nion-menu ion-note {\n  display: block;\n  font-size: small;\n  padding: 0;\n  margin: -0.4rem 0 1rem 1rem;\n}\nion-list-header {\n  display: block;\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-align: center;\n}\n/* 1.4) Copyright */\n.copyright {\n  padding: 0.4rem 0;\n  font-size: small;\n  text-align: center;\n  color: var(--ion-color-medium-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQiwwQkFBQTtBQUNBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFFSjtBQUNBLHdDQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFFSjtBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0EsbUJBQUE7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiAxLjIpIFNlcGFyYWRvciAoPGhyPikgKi9cbmlvbi1tZW51LXRvZ2dsZSBociB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCBncmV5O1xufVxuXG4vKiAxLjMpIFN1YnTDrXR1bG8gZG8gbWVudSAoPGlvbi1ub3RlPikgKi9cbmlvbi1tZW51IGlvbi1ub3RlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogLTAuNHJlbSAwIDFyZW0gMXJlbTtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiAxLjQpIENvcHlyaWdodCAqL1xuLmNvcHlyaWdodCB7XG4gIHBhZGRpbmc6IDAuNHJlbSAwO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/events.service */
      "./src/app/services/events.service.ts"); // Importa dependências


      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, // Injeta dependências
        events, storage) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.events = events;
          this.storage = storage;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();
            }); // Lê login no armazenamento local

            this.storage.get('userData', {
              type: 'string'
            }).subscribe({
              next: function next(data) {
                // Se esta logago
                if (data) {
                  // Atualiza view
                  _this.userData = JSON.parse(data);
                }
              }
            }); // Altera dados do usuário sem recarga do script (assíncrono)

            this.events.subscribe('userData', function (data) {
              _this.userData = data;
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_5__["StorageMap"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts"); // Importar dependências


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], // Inicializar Firebase e API's
        _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/services/events.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/events.service.ts ***!
      \********************************************/

    /*! exports provided: EventsService */

    /***/
    function srcAppServicesEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsService", function () {
        return EventsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /**
      * Service que publica alterações nas variáveis de outros scripts
      *    Fonte: https://medium.com/wizpanda/dealing-with-breaking-change-in-ionic-5-db3ba711dfcd
      *
      * @author Shashank Agrawal
      */
      // 3.1) Importa dependências necessárias


      var EventsService = /*#__PURE__*/function () {
        function EventsService() {
          _classCallCheck(this, EventsService);

          this.channels = {};
        } // 3.2) Lê alterações em outros scripts


        _createClass(EventsService, [{
          key: "subscribe",
          value: function subscribe(topic, observer) {
            if (!this.channels[topic]) {
              this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            }

            return this.channels[topic].subscribe(observer);
          } // 3.3) Salva alterações para outros scripts

        }, {
          key: "publish",
          value: function publish(topic, data) {
            var subject = this.channels[topic];

            if (!subject) {
              return;
            }

            subject.next(data);
          } // 3.4) Destroi alterações entre scripts

        }, {
          key: "destroy",
          value: function destroy(topic) {
            var subject = this.channels[topic];

            if (!subject) {
              return;
            }

            subject.complete();
            delete this.channels[topic];
          }
        }]);

        return EventsService;
      }();

      EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EventsService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // 2.1) Altere os dados abaixo, conforme seu aplicativo do Firebase
        firebase: {
          apiKey: 'AIzaSyDDBcmSyAJBz0LxhDQM4EZ92hdhNQkGu2I',
          authDomain: 'ionic-firebase-exemplo-02.firebaseapp.com',
          databaseURL: 'https://ionic-firebase-exemplo-02.firebaseio.com',
          projectId: 'ionic-firebase-exemplo-02',
          storageBucket: 'ionic-firebase-exemplo-02.appspot.com',
          messagingSenderId: '674636848625',
          appId: '1:674636848625:web:36ed96e17e7a82b4c07850'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! J:\Projetos\Ionic\karasuno01\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map