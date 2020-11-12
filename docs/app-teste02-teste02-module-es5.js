(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-teste02-teste02-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app/teste02/teste02.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/teste02/teste02.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppTeste02Teste02PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Funcionalidade 2</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Fazendo Algo</h2>\r\n\r\n    <pre>\r\nFaz algma coisa no aplicativo.\r\n\r\n[ ] Usuário logado\r\n[x] Usuário não logado\r\n[ ] Menu lateral\r\n[x] Menu inferior\r\n[x] Seta de retorno\r\nLocal: 'app/app/teste02/teste02.page'\r\nRota: /app/teste02\r\nRoteamento: app/tabs/tabs-routing.module.ts\r\n    </pre>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/app/teste02/teste02-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/app/teste02/teste02-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: Teste02PageRoutingModule */

    /***/
    function srcAppAppTeste02Teste02RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Teste02PageRoutingModule", function () {
        return Teste02PageRoutingModule;
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


      var _teste02_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./teste02.page */
      "./src/app/app/teste02/teste02.page.ts");

      var routes = [{
        path: '',
        component: _teste02_page__WEBPACK_IMPORTED_MODULE_3__["Teste02Page"]
      }];

      var Teste02PageRoutingModule = function Teste02PageRoutingModule() {
        _classCallCheck(this, Teste02PageRoutingModule);
      };

      Teste02PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Teste02PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/app/teste02/teste02.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/app/teste02/teste02.module.ts ***!
      \***********************************************/

    /*! exports provided: Teste02PageModule */

    /***/
    function srcAppAppTeste02Teste02ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Teste02PageModule", function () {
        return Teste02PageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _teste02_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./teste02-routing.module */
      "./src/app/app/teste02/teste02-routing.module.ts");
      /* harmony import */


      var _teste02_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./teste02.page */
      "./src/app/app/teste02/teste02.page.ts");

      var Teste02PageModule = function Teste02PageModule() {
        _classCallCheck(this, Teste02PageModule);
      };

      Teste02PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _teste02_routing_module__WEBPACK_IMPORTED_MODULE_5__["Teste02PageRoutingModule"]],
        declarations: [_teste02_page__WEBPACK_IMPORTED_MODULE_6__["Teste02Page"]]
      })], Teste02PageModule);
      /***/
    },

    /***/
    "./src/app/app/teste02/teste02.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/app/teste02/teste02.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppTeste02Teste02PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC90ZXN0ZTAyL3Rlc3RlMDIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/app/teste02/teste02.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/app/teste02/teste02.page.ts ***!
      \*********************************************/

    /*! exports provided: Teste02Page */

    /***/
    function srcAppAppTeste02Teste02PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Teste02Page", function () {
        return Teste02Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Teste02Page = /*#__PURE__*/function () {
        function Teste02Page() {
          _classCallCheck(this, Teste02Page);
        }

        _createClass(Teste02Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Teste02Page;
      }();

      Teste02Page.ctorParameters = function () {
        return [];
      };

      Teste02Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teste02',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./teste02.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app/teste02/teste02.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./teste02.page.scss */
        "./src/app/app/teste02/teste02.page.scss"))["default"]]
      })], Teste02Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=app-teste02-teste02-module-es5.js.map