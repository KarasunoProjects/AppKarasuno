import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Teste02PageRoutingModule } from './teste02-routing.module';

import { Teste02Page } from './teste02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Teste02PageRoutingModule
  ],
  declarations: [Teste02Page]
})
export class Teste02PageModule {}
