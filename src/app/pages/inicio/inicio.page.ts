import { Component, OnInit } from '@angular/core';

// Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // Dados do login do usuário
  userData: any;

  constructor(

    // Injeção de dependências
    private storage: StorageMap,
    public events: EventsService,
  ) { }

  ngOnInit() {

    // Obtém dados do usuário
    this.storage.get('userData', { type: 'string' }).subscribe(
      (data) => {
        if (data) {
          this.userData = JSON.parse(data);
        }
      }
    );

    // Altera dados do usuário sem recarga do script (assíncrono)
    this.events.subscribe('userData', (data: any) => {
      this.userData = data;
    });
  }
}
