(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-teste03-teste03-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app/teste03/teste03.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/teste03/teste03.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppTeste03Teste03PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Funcionalidade 3</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Fazendo Algo</h2>\r\n\r\n    <pre>\r\nFaz algma coisa no aplicativo.\r\n\r\n[x] Usuário logado\r\n[x] Usuário não logado\r\n[ ] Menu lateral\r\n[x] Menu inferior\r\n[x] Seta de retorno\r\nLocal: 'app/app/teste03/teste03.page'\r\nRota: /app/teste03\r\nRoteamento: app/tabs/tabs-routing.module.ts\r\n    </pre>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/app/teste03/teste03-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/app/teste03/teste03-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: Teste03PageRoutingModule */

    /***/
    function srcAppAppTeste03Teste03RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Teste03PageRoutingModule", function () {
        return Teste03PageRoutingModule;
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


      var _teste03_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./teste03.page */
      "./src/app/app/teste03/teste03.page.ts");

      var routes = [{
        path: '',
        component: _teste03_page__WEBPACK_IMPORTED_MODULE_3__["Teste03Page"]
      }];

      var Teste03PageRoutingModule = function Teste03PageRoutingModule() {
        _classCallCheck(this, Teste03PageRoutingModule);
      };

      Teste03PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Teste03PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/app/teste03/teste03.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/app/teste03/teste03.module.ts ***!
      \***********************************************/

    /*! exports provided: Teste03PageModule */

    /***/
    function srcAppAppTeste03Teste03ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Teste03PageModule", function () {
        return Teste03PageModule;
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


      var _teste03_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./teste03-routing.module */
      "./src/app/app/teste03/teste03-routing.module.ts");
      /* harmony import */


      var _teste03_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./teste03.page */
      "./src/app/app/teste03/teste03.page.ts");

      var Teste03PageModule = function Teste03PageModule() {
        _classCallCheck(this, Teste03PageModule);
      };

      Teste03PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _teste03_routing_module__WEBPACK_IMPORTED_MODULE_5__["Teste03PageRoutingModule"]],
        declarations: [_teste03_page__WEBPACK_IMPORTED_MODULE_6__["Teste03Page"]]
      })], Teste03PageModule);
      /***/
    },

    /***/
    "./src/app/app/teste03/teste03.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/app/teste03/teste03.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppTeste03Teste03PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC90ZXN0ZTAzL3Rlc3RlMDMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/app/teste03/teste03.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/app/teste03/teste03.page.ts ***!
      \*********************************************/

    /*! exports provided: Teste03Page */

    /***/
    function srcAppAppTeste03Teste03PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Teste03Page", function () {
        return Teste03Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Teste03Page = /*#__PURE__*/function () {
        function Teste03Page() {
          _classCallCheck(this, Teste03Page);
        }

        _createClass(Teste03Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Teste03Page;
      }();

      Teste03Page.ctorParameters = function () {
        return [];
      };

      Teste03Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teste03',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./teste03.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app/teste03/teste03.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./teste03.page.scss */
        "./src/app/app/teste03/teste03.page.scss"))["default"]]
      })], Teste03Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=app-teste03-teste03-module-es5.js.map