import { Component, OnInit } from '@angular/core';

// Importa dependências
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

// Dispara eventos globais
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  // Variáveis locais
  authProvider: any; // Provedor de login social
  userData: any; // Dados do login do usuário
  userProfile: any; // Dados do perfil do usuário

  constructor(

    // Injeção de dependências
    public fbAuth: AngularFireAuth,
    public fbStore: AngularFirestore,
    private storage: StorageMap,
    public app: AppService,
    public router: Router,

    // Dispara eventos globais
    public events: EventsService,
  ) { }

  ngOnInit() { }

  // Ação do botão de login
  async login(provider: string) {

    // Seleciona provedor de login social
    // - Adicione outros provedores conforme a configuração do Firebase Authentication
    switch (provider) {

      case 'google':
        this.authProvider = new firebase.auth.GoogleAuthProvider();
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
                      this.app.myAlert(
                        `Olá ${this.userData.displayName}`,
                        `Você já pode acessar todos os recursos do aplicativo.`
                      );

                      // Vai para a raiz
                      this.router.navigate(['/']);
                    },
                    error: (error) => { console.error(error); }
                  });

                  // Se não tem perfil
                } else {

                  // Exibe alerta e vai para a rota '/usuario/novo'
                  this.app.myAlert(
                    `Olá ${this.userData.displayName}`,
                    `Você precisa completar seu cadastro para usar todos os recursos do aplicativo.`
                  );

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
  }
}
