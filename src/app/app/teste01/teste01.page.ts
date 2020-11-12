/**
 * É necessário ter o "perfil" cadastrado para ver esta página.
 */

import { Component, OnInit } from '@angular/core';

// Importa dependências
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-teste01',
  templateUrl: './teste01.page.html',
  styleUrls: ['./teste01.page.scss'],
})
export class Teste01Page implements OnInit {

  constructor(

    // Injeta dependências
    public router: Router,
    public app: AppService,
  ) { }

  ngOnInit() { }

  // Detecta a presença do perfil
  ionViewWillEnter() {

    // Testa o perfil local
    this.app.isProfile().then(
      (data) => {

        // Se existe, faz as ações da página
        if (data) {

          // Coloque o que essa página faz aqui
          console.log('bla bla bla');

          // Se não existe, vai para o cadastro de perfil
        } else {
          this.router.navigate(['/usuario/novo']);
        }
      });
  }

}
