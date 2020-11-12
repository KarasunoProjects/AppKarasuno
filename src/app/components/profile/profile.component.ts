import { Component, OnInit } from '@angular/core';

// Importa dependências
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppService } from '../../services/app.service'; // Serviços de uso geral

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  // Cria formulário
  public profileForm: FormGroup;

  // Variável com dados do usuário logado
  userData: any;

  // Variável com a lista "select01"
  selectDynamic: any;

  // Variável com perfil do usuário
  userProfile: any;

  // Textos da View
  paragraph = `Você precisa cadastrar seu perfil para ter acesso aos recursos do aplicativo de forma pesonalizada.`;
  btnText = `Cadastrar perfil`;
  redirectPage = `/`;

  constructor(

    // Injeta dependências
    private formBuilder: FormBuilder,
    public storage: StorageMap,
    public router: Router,
    public fbStore: AngularFirestore,
    public app: AppService,
  ) {

    // Obtém dados do usuário logado
    this.storage.get('userData', { type: 'string' }).subscribe((data) => {

      // Se não logou, vai para a raiz
      if (!data) { this.router.navigate(['/']); }

      // Dados do usuário logado
      this.userData = JSON.parse(data);

      // Cria formulário
      this.profileFormCreate();

      // Obtém lista "select01" do Firestore de forma assíncrona
      this.fbStore.collection('select01', ref => ref.orderBy('option')).valueChanges().subscribe(
        (selData) => {
          this.selectDynamic = selData;

          // Preenche o campo automaticamente com dados do perfil se estiver editando
          if (this.selectDynamic && this.userProfile) {
            this.profileForm.controls.selectDynamic.setValue(this.userProfile.selectDynamic);
          }
        }
      );
    });
  }

  ngOnInit() { }

  // Define campos do formulário e validações
  async profileFormCreate() {

    this.profileForm = this.formBuilder.group({

      id: [
        this.userData.uid
      ],

      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])
      ],
      birth: [
        null,
        Validators.compose([
          Validators.required,
          this.over14Years
        ])
      ],
      cpf: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\b\d{11}\b/g)
        ])
      ],

      gender: [
        null,
        Validators.compose([
          Validators.required
        ])
      ],

      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      homePhone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|8[1-9])[0-9]{3}\-?[0-9]{4}$/)
        ])
      ],
      cellPhone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)
        ])
      ],
      whatsApp: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)
        ])
      ],

      selectStatic: [
        null,
        Validators.compose([
          Validators.required
        ])
      ],

      selectDynamic: [
        null,
        Validators.compose([
          Validators.required
        ])
      ],

      type: ['usuário'],
      status: ['ativo']

    });
  }

  // Método que trata envio do formulário
  profileSubmit() {
    // console.log(this.profileForm.value);

    // Se formulário é inválido, sai sem fazer nada
    if (this.profileForm.invalid) { return false; }

    // Salva no Firestore
    this.fbStore.collection('users').doc(this.userData.uid).set(this.profileForm.value)
      .then((docRef) => {

        // Salva no armazenamento local
        this.storage.set('userProfile', JSON.stringify(this.profileForm.value)).subscribe(
          () => {

            // Feedback 'sucesso'
            this.app.myAlert(this.userData.displayName, `Seu perfil foi cadastrado com sucesso!`);

            // Limpa o formulário
            this.profileForm.reset();

            // Vai para a raiz
            this.router.navigate([this.redirectPage]);
          }
        );
      })
      .catch(

        // Tratamento de erros
        (error) => {
          console.error(error);
          this.app.myAlert(this.userData.displayName, `Ocorreu um erro ao cadastrar seu perfil. Por favor, tente mais tarde.`);
        }
      );
  }

  // Método que valida data de nascimento
  over14Years(control: AbstractControl) {
    const birth = control.value;
    if (birth) {
      const [year, month, day] = birth.split('-');
      const today = new Date();
      const dateBirth = new Date(year, month, day, 0, 0, 0);
      const timeToTest = 1000 * 60 * 60 * 24 * 365 * 14; // 14 anos em milissegundos...
      if (today.getTime() - dateBirth.getTime() >= timeToTest) { return null; }
    }
    return { under14years: true };
  }

  // Preenche campos do form, mas só quando a View estiver pronta
  ngAfterViewInit() {

    // Obtém dados do perfil do armazenamento local
    this.storage.get('userProfile', { type: 'string' }).subscribe(
      (data) => {

        // Se existem dados, é porque vai editar perfil
        if (data) {

          // Obtém dados
          this.userProfile = JSON.parse(data);

          // Atualiza campos do form com dados do perfil
          this.profileForm.controls.name.setValue(this.userProfile.name);
          this.profileForm.controls.birth.setValue(this.userProfile.birth);
          this.profileForm.controls.cpf.setValue(this.userProfile.cpf);
          this.profileForm.controls.gender.setValue(this.userProfile.gender);
          this.profileForm.controls.email.setValue(this.userProfile.email);
          this.profileForm.controls.homePhone.setValue(this.userProfile.homePhone);
          this.profileForm.controls.cellPhone.setValue(this.userProfile.cellPhone);
          this.profileForm.controls.whatsApp.setValue(this.userProfile.whatsApp);
          this.profileForm.controls.selectStatic.setValue(this.userProfile.selectStatic);
          this.profileForm.controls.type.setValue(this.userProfile.type);
          this.profileForm.controls.status.setValue(this.userProfile.status);

          // OBS: Campos dinâmicos devem ser pré-preenchidos na carga de seus valores (ver 9.4)

          // Atualiza a View
          this.paragraph = `Altere os campos abaixo com atenção, para editar seu perfil.`;
          this.btnText = `Salvar perfil`;
          this.redirectPage = `/usuario/perfil`;

          // Se não existem dado de perfil, é um novo perfil
        } else {

          // Preenche campos com valor do login
          this.profileForm.controls.name.setValue(this.userData.displayName);
          this.profileForm.controls.email.setValue(this.userData.email);
        }
      }
    );
  }
}
