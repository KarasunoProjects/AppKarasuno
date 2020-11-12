import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoPageRoutingModule } from './novo-routing.module';

import { NovoPage } from './novo.page';

// Importa dependências
import { ProfileComponent } from '../../components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovoPageRoutingModule,

    // Injeta dependências
    ReactiveFormsModule,
  ],
  declarations: [
    NovoPage,

    // Declara componente importado
    ProfileComponent,
  ]
})
export class NovoPageModule { }
