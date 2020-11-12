import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // Variável com dados do usuário logado
  userData: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

    // Injeta dependências
    public events: EventsService,
    public storage: StorageMap,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // Lê login no armazenamento local
    this.storage.get('userData', { type: 'string' }).subscribe({
      next: ((data) => {

        // Se esta logago
        if (data) {

          // Atualiza view
          this.userData = JSON.parse(data);
        }
      })
    });

    // Altera dados do usuário sem recarga do script (assíncrono)
    this.events.subscribe('userData', (data: any) => {
      this.userData = data;
    });
  }
}
