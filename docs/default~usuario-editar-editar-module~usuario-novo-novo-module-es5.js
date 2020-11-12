(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~usuario-editar-editar-module~usuario-novo-novo-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"userData\">\r\n\r\n  <h2>Olá {{ userData.displayName }}!</h2>\r\n\r\n  <p>{{ paragraph }}</p>\r\n  <p class=\"ion-text-center\"><small>\r\n      <ion-text color=\"danger\">Preencha todos os campos.</ion-text>\r\n    </small></p>\r\n\r\n  <form [formGroup]=\"profileForm\" (ngSubmit)=\"profileSubmit()\">\r\n    <ion-input type=\"hidden\" id=\"id\" name=\"id\" formControlName=\"id\"></ion-input>\r\n\r\n    <ion-list lines=\"full\" id=\"profileList\" class=\"ion-no-padding\">\r\n\r\n      <div>Dados pessoais:</div>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"name\" position=\"floating\" color=\"primary\">\r\n          Nome completo:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.name.errors\">\r\n            <small *ngIf=\"profileForm.controls.name.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.name.errors.minlength\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"birth\" position=\"floating\" color=\"primary\">\r\n          Nascimento:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.birth.errors\">\r\n            <small *ngIf=\"profileForm.controls.birth.errors.under14years\">* Deve ter 14 anos ou mais</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"date\" id=\"birth\" name=\"birth\" formControlName=\"birth\" placeholder=\"Exemplo: 27/11/1998\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"cpf\" position=\"floating\" color=\"primary\">\r\n          CPF:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.cpf.errors\">\r\n            <small *ngIf=\"profileForm.controls.cpf.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.cpf.errors.pattern\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"cpf\" name=\"cpf\" formControlName=\"cpf\" placeholder=\"Somente números\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-list>\r\n        <ion-radio-group formControlName=\"gender\" id=\"gender\" name=\"gender\">\r\n          <ion-list-header>\r\n            <ion-label color=\"primary\" for=\"gender\">\r\n              Gênero:\r\n              <ion-text color=\"danger\" *ngIf=\"profileForm.controls.gender.errors\">\r\n                <small *ngIf=\"profileForm.controls.gender.errors.required\">* Obrigatório</small>\r\n              </ion-text>\r\n            </ion-label>\r\n          </ion-list-header>\r\n\r\n          <ion-item>\r\n            <ion-label>Não informar</ion-label>\r\n            <ion-radio slot=\"start\" value=\"Não informar\"></ion-radio>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>Feminino</ion-label>\r\n            <ion-radio slot=\"start\" value=\"Feminino\"></ion-radio>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>Masculino</ion-label>\r\n            <ion-radio slot=\"start\" value=\"Masculino\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n\r\n      <hr>\r\n      <div>Contatos:</div>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"email\" position=\"floating\" color=\"primary\">\r\n          E-mail:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.email.errors\">\r\n            <small *ngIf=\"profileForm.controls.email.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.email.errors.email\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"email\" name=\"email\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"homePhone\" position=\"floating\" color=\"primary\">\r\n          Tel. residencial:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.homePhone.errors\">\r\n            <small *ngIf=\"profileForm.controls.homePhone.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.homePhone.errors.pattern\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"homePhone\" name=\"homePhone\" formControlName=\"homePhone\"\r\n          placeholder=\"Exemplo: (21) 2345-6789\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"cellPhone\" position=\"floating\" color=\"primary\">\r\n          Tel. celular:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.cellPhone.errors\">\r\n            <small *ngIf=\"profileForm.controls.cellPhone.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.cellPhone.errors.pattern\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"cellPhone\" name=\"cellPhone\" formControlName=\"cellPhone\"\r\n          placeholder=\"Exemplo: (21) 98765-4321\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"whatsApp\" position=\"floating\" color=\"primary\">\r\n          WhatsApp:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.whatsApp.errors\">\r\n            <small *ngIf=\"profileForm.controls.whatsApp.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.whatsApp.errors.pattern\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"whatsApp\" name=\"whatsApp\" formControlName=\"whatsApp\"\r\n          placeholder=\"Exemplo: (21) 98765-4321\"></ion-input>\r\n      </ion-item>\r\n\r\n      <hr>\r\n      <div>Opções:</div>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"selectStatic\" position=\"floating\" color=\"primary\">\r\n          Seleção 1:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.selectStatic.errors\">\r\n            <small *ngIf=\"profileForm.controls.selectStatic.errors.required\">* Obrigatório</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-select cancelText=\"Cancela\" formControlName=\"selectStatic\" placeholder=\"Selecione\" id=\"selectStatic\"\r\n          name=\"selectStatic\">\r\n          <ion-select-option value=\"Opção 1\">Opção 1</ion-select-option>\r\n          <ion-select-option value=\"Opção 2\">Opção 2</ion-select-option>\r\n          <ion-select-option value=\"Opção 3\">Opção 3</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"selectDynamic\">\r\n        <ion-label for=\"selectDynamic\" position=\"floating\" color=\"primary\">\r\n          Seleção 2:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.selectDynamic.errors\">\r\n            <small *ngIf=\"profileForm.controls.selectDynamic.errors.required\">* Obrigatório</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-select cancelText=\"Cancela\" formControlName=\"selectDynamic\" placeholder=\"Selecione\" id=\"selectDynamic\"\r\n          name=\"selectDynamic\">\r\n          <ion-select-option *ngFor=\"let select of selectDynamic\" value=\"{{ select.option }}\">\r\n            {{ select.option }}\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-button type=\"submit\" expand=\"block\" class=\"ion-margin-vertical\" [disabled]=\"profileForm.invalid\">{{ btnText }}\r\n    </ion-button>\r\n\r\n    <!-- <div>{{ profileForm.value | json}}</div> -->\r\n    <!-- <div>{{ profileForm.valid | json }}</div> -->\r\n\r\n  </form>\r\n\r\n</div>";
      /***/
    },

    /***/
    "./src/app/components/profile/profile.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/profile/profile.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#profileList div {\n  padding: 1rem;\n  font-weight: bold;\n  background: #575717;\n}\n\n#profileList hr {\n  border: none;\n  padding: 0.5rem;\n  margin: 0;\n  background: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGVMaXN0IGRpdiB7XHJcbiAgICBwYWRkaW5nICAgIDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZCA6IHJnYig4NywgODcsIDIzKTtcclxufVxyXG5cclxuI3Byb2ZpbGVMaXN0IGhyIHtcclxuICAgIGJvcmRlciAgICA6IG5vbmU7XHJcbiAgICBwYWRkaW5nICAgOiAuNXJlbTtcclxuICAgIG1hcmdpbiAgICA6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/profile/profile.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/profile/profile.component.ts ***!
      \*********************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/app.service */
      "./src/app/services/app.service.ts"); // Importa dependências
      // Serviços de uso geral


      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent( // Injeta dependências
        formBuilder, storage, router, fbStore, app) {
          var _this = this;

          _classCallCheck(this, ProfileComponent);

          this.formBuilder = formBuilder;
          this.storage = storage;
          this.router = router;
          this.fbStore = fbStore;
          this.app = app; // Textos da View

          this.paragraph = "Voc\xEA precisa cadastrar seu perfil para ter acesso aos recursos do aplicativo de forma pesonalizada.";
          this.btnText = "Cadastrar perfil";
          this.redirectPage = "/"; // Obtém dados do usuário logado

          this.storage.get('userData', {
            type: 'string'
          }).subscribe(function (data) {
            // Se não logou, vai para a raiz
            if (!data) {
              _this.router.navigate(['/']);
            } // Dados do usuário logado


            _this.userData = JSON.parse(data); // Cria formulário

            _this.profileFormCreate(); // Obtém lista "select01" do Firestore de forma assíncrona


            _this.fbStore.collection('select01', function (ref) {
              return ref.orderBy('option');
            }).valueChanges().subscribe(function (selData) {
              _this.selectDynamic = selData; // Preenche o campo automaticamente com dados do perfil se estiver editando

              if (_this.selectDynamic && _this.userProfile) {
                _this.profileForm.controls.selectDynamic.setValue(_this.userProfile.selectDynamic);
              }
            });
          });
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // Define campos do formulário e validações

        }, {
          key: "profileFormCreate",
          value: function profileFormCreate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.profileForm = this.formBuilder.group({
                        id: [this.userData.uid],
                        name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
                        birth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.over14Years])],
                        cpf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\b\d{11}\b/g)])],
                        gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
                        homePhone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|8[1-9])[0-9]{3}\-?[0-9]{4}$/)])],
                        cellPhone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)])],
                        whatsApp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)])],
                        selectStatic: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        selectDynamic: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                        type: ['usuário'],
                        status: ['ativo']
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // Método que trata envio do formulário

        }, {
          key: "profileSubmit",
          value: function profileSubmit() {
            var _this2 = this;

            // console.log(this.profileForm.value);
            // Se formulário é inválido, sai sem fazer nada
            if (this.profileForm.invalid) {
              return false;
            } // Salva no Firestore


            this.fbStore.collection('users').doc(this.userData.uid).set(this.profileForm.value).then(function (docRef) {
              // Salva no armazenamento local
              _this2.storage.set('userProfile', JSON.stringify(_this2.profileForm.value)).subscribe(function () {
                // Feedback 'sucesso'
                _this2.app.myAlert(_this2.userData.displayName, "Seu perfil foi cadastrado com sucesso!"); // Limpa o formulário


                _this2.profileForm.reset(); // Vai para a raiz


                _this2.router.navigate([_this2.redirectPage]);
              });
            })["catch"]( // Tratamento de erros
            function (error) {
              console.error(error);

              _this2.app.myAlert(_this2.userData.displayName, "Ocorreu um erro ao cadastrar seu perfil. Por favor, tente mais tarde.");
            });
          } // Método que valida data de nascimento

        }, {
          key: "over14Years",
          value: function over14Years(control) {
            var birth = control.value;

            if (birth) {
              var _birth$split = birth.split('-'),
                  _birth$split2 = _slicedToArray(_birth$split, 3),
                  year = _birth$split2[0],
                  month = _birth$split2[1],
                  day = _birth$split2[2];

              var today = new Date();
              var dateBirth = new Date(year, month, day, 0, 0, 0);
              var timeToTest = 1000 * 60 * 60 * 24 * 365 * 14; // 14 anos em milissegundos...

              if (today.getTime() - dateBirth.getTime() >= timeToTest) {
                return null;
              }
            }

            return {
              under14years: true
            };
          } // Preenche campos do form, mas só quando a View estiver pronta

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            // Obtém dados do perfil do armazenamento local
            this.storage.get('userProfile', {
              type: 'string'
            }).subscribe(function (data) {
              // Se existem dados, é porque vai editar perfil
              if (data) {
                // Obtém dados
                _this3.userProfile = JSON.parse(data); // Atualiza campos do form com dados do perfil

                _this3.profileForm.controls.name.setValue(_this3.userProfile.name);

                _this3.profileForm.controls.birth.setValue(_this3.userProfile.birth);

                _this3.profileForm.controls.cpf.setValue(_this3.userProfile.cpf);

                _this3.profileForm.controls.gender.setValue(_this3.userProfile.gender);

                _this3.profileForm.controls.email.setValue(_this3.userProfile.email);

                _this3.profileForm.controls.homePhone.setValue(_this3.userProfile.homePhone);

                _this3.profileForm.controls.cellPhone.setValue(_this3.userProfile.cellPhone);

                _this3.profileForm.controls.whatsApp.setValue(_this3.userProfile.whatsApp);

                _this3.profileForm.controls.selectStatic.setValue(_this3.userProfile.selectStatic);

                _this3.profileForm.controls.type.setValue(_this3.userProfile.type);

                _this3.profileForm.controls.status.setValue(_this3.userProfile.status); // OBS: Campos dinâmicos devem ser pré-preenchidos na carga de seus valores (ver 9.4)
                // Atualiza a View


                _this3.paragraph = "Altere os campos abaixo com aten\xE7\xE3o, para editar seu perfil.";
                _this3.btnText = "Salvar perfil";
                _this3.redirectPage = "/usuario/perfil"; // Se não existem dado de perfil, é um novo perfil
              } else {
                // Preenche campos com valor do login
                _this3.profileForm.controls.name.setValue(_this3.userData.displayName);

                _this3.profileForm.controls.email.setValue(_this3.userData.email);
              }
            });
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__["StorageMap"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]
        }];
      };

      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.component.scss */
        "./src/app/components/profile/profile.component.scss"))["default"]]
      })], ProfileComponent);
      /***/
    },

    /***/
    "./src/app/services/app.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/app.service.ts ***!
      \*****************************************/

    /*! exports provided: AppService */

    /***/
    function srcAppServicesAppServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js"); // Importa dependências


      var AppService = /*#__PURE__*/function () {
        function AppService(router, alertController, // Injeção das dependências
        storage) {
          _classCallCheck(this, AppService);

          this.router = router;
          this.alertController = alertController;
          this.storage = storage;
        }

        _createClass(AppService, [{
          key: "myAlert",
          value: function myAlert(title, text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: title,
                        message: text,
                        buttons: [{
                          text: 'Ok',
                          handler: function handler() {
                            return true;
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // Método que detecta a presença do perfil local

        }, {
          key: "isProfile",
          value: function isProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", new Promise(function (resolve, reject) {
                        // Lê o armazenamento local
                        _this4.storage.get('userProfile', {
                          type: 'string'
                        }).subscribe({
                          next: function next(data) {
                            // Se perfil, retorna 'true'
                            if (data) resolve(true); // Se não tem perfil, retorna 'false'
                            else resolve(false);
                          },
                          // Em caso de erro ao tentar acessar 'storage'
                          error: function error(_error) {
                            return console.error(_error);
                          }
                        });
                      }));

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }
        }]);

        return AppService;
      }();

      AppService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"]
        }];
      };

      AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AppService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~usuario-editar-editar-module~usuario-novo-novo-module-es5.js.map