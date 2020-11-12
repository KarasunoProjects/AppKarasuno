import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Teste01PageRoutingModule } from './teste01-routing.module';

import { Teste01Page } from './teste01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Teste01PageRoutingModule
  ],
  declarations: [Teste01Page]
})
export class Teste01PageModule {}
