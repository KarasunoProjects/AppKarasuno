import { Component, OnInit } from '@angular/core';

// Importa dependências
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.page.html',
  styleUrls: ['./sair.page.scss'],
})
export class SairPage implements OnInit {

  constructor(

    // Injeção de dependências
    public fbAuth: AngularFireAuth,
    private storage: StorageMap,
    private router: Router,

    public events: EventsService,
  ) { }

  ngOnInit() { }


  // Ação do botão [Sair]
  logout() {

    // Lougout no Firebase Auth
    this.fbAuth.signOut()
      .then(() => {

        // Apaga perfil local
        this.storage.delete('userProfile').subscribe({
          next: (() => {

            // Apaga login local
            this.storage.delete('userData').subscribe({
              next: (() => {

                // 3.4) Atualiza 'userData' no menu principal também (app.component.ts)
                this.events.publish('userData', null);

                // Rota para a página inicial
                this.router.navigate(['/']);
              }),
              error: ((error) => { console.error(error); })
            });
          }),
          error: ((error) => { console.error(error); })
        });
      })
      .catch((error) => { console.error(error); });
  }



}
