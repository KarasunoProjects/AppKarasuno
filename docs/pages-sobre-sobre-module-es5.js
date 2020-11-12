(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sobre-sobre-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sobre/sobre.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sobre/sobre.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSobreSobrePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Sobre...</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Sobre o Aplicativo</h2>\r\n\r\n    <pre>\r\nInformações sobre o aplicativo e políticas de privacidade.\r\n\r\n[x] Usuário logado\r\n[x] Usuário não logado\r\n[x] Menu lateral\r\n[x] Menu inferior\r\n[ ] Seta de retorno\r\nLocal: 'app/pages/sobre/sobre.page'\r\nRota: /app/sobre\r\nRoteamento: app/tabs/tabs-routing.module.ts\r\n    </pre>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/sobre/sobre-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/sobre/sobre-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SobrePageRoutingModule */

    /***/
    function srcAppPagesSobreSobreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SobrePageRoutingModule", function () {
        return SobrePageRoutingModule;
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


      var _sobre_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sobre.page */
      "./src/app/pages/sobre/sobre.page.ts");

      var routes = [{
        path: '',
        component: _sobre_page__WEBPACK_IMPORTED_MODULE_3__["SobrePage"]
      }];

      var SobrePageRoutingModule = function SobrePageRoutingModule() {
        _classCallCheck(this, SobrePageRoutingModule);
      };

      SobrePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SobrePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/sobre/sobre.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/sobre/sobre.module.ts ***!
      \*********************************************/

    /*! exports provided: SobrePageModule */

    /***/
    function srcAppPagesSobreSobreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SobrePageModule", function () {
        return SobrePageModule;
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


      var _sobre_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sobre-routing.module */
      "./src/app/pages/sobre/sobre-routing.module.ts");
      /* harmony import */


      var _sobre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sobre.page */
      "./src/app/pages/sobre/sobre.page.ts");

      var SobrePageModule = function SobrePageModule() {
        _classCallCheck(this, SobrePageModule);
      };

      SobrePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sobre_routing_module__WEBPACK_IMPORTED_MODULE_5__["SobrePageRoutingModule"]],
        declarations: [_sobre_page__WEBPACK_IMPORTED_MODULE_6__["SobrePage"]]
      })], SobrePageModule);
      /***/
    },

    /***/
    "./src/app/pages/sobre/sobre.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/sobre/sobre.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSobreSobrePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvYnJlL3NvYnJlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/sobre/sobre.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/sobre/sobre.page.ts ***!
      \*******************************************/

    /*! exports provided: SobrePage */

    /***/
    function srcAppPagesSobreSobrePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SobrePage", function () {
        return SobrePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SobrePage = /*#__PURE__*/function () {
        function SobrePage() {
          _classCallCheck(this, SobrePage);
        }

        _createClass(SobrePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SobrePage;
      }();

      SobrePage.ctorParameters = function () {
        return [];
      };

      SobrePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sobre',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./sobre.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sobre/sobre.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./sobre.page.scss */
        "./src/app/pages/sobre/sobre.page.scss"))["default"]]
      })], SobrePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-sobre-sobre-module-es5.js.map