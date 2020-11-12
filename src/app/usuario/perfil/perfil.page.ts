import { Component, OnInit } from '@angular/core';

// Importa dependências
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  // Variáveis para dados do usuário
  userData: any;
  userProfile: any;

  constructor(

    // Injeta dependências
    public router: Router,
    public app: AppService,
    public storage: StorageMap,
  ) { }

  ngOnInit() { }

  // 'ionViewWillEnter' é executado SEMPRE que a página (re)carrega
  ionViewWillEnter() {

    // Testa o perfil local
    this.app.isProfile().then(
      (data) => {

        // Se existe, faz as ações da página
        if (data) {

          // Obtém dados do login local e armazena em 'userData'
          this.storage.get('userData', { type: 'string' }).subscribe(
            (uData) => {
              this.userData = JSON.parse(uData);

              // Obtém dados do perfil local e armazena em 'userProfile'
              this.storage.get('userProfile', { type: 'string' }).subscribe(
                (pData) => {
                  this.userProfile = JSON.parse(pData);
                }
              );
            }
          );

          // Se não existe perfil, vai para o cadastro de perfil
        } else {
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
}
