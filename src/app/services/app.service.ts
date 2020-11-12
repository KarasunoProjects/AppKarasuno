import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

// Importa dependências
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    public router: Router,
    public alertController: AlertController,

    // Injeção das dependências
    private storage: StorageMap,
  ) { }

  async myAlert(title: string, text: string) {
    const alert = await this.alertController.create({
      header: title,
      message: text,
      buttons: [{
        text: 'Ok',
        handler: () => { return true; }
      }]
    });
    await alert.present();
  }

  // Método que detecta a presença do perfil local
  async isProfile() {

    // Constrói a promise
    return new Promise<any>((resolve, reject) => {

      // Lê o armazenamento local
      this.storage.get('userProfile', { type: 'string' }).subscribe({
        next: (data) => {

          // Se perfil, retorna 'true'
          if (data) resolve(true);

          // Se não tem perfil, retorna 'false'
          else resolve(false);
        },

        // Em caso de erro ao tentar acessar 'storage'
        error: (error) => console.error(error)
      });
    });
  }
}
