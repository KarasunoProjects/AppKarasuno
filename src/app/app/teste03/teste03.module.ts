import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Teste03PageRoutingModule } from './teste03-routing.module';

import { Teste03Page } from './teste03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Teste03PageRoutingModule
  ],
  declarations: [Teste03Page]
})
export class Teste03PageModule {}
