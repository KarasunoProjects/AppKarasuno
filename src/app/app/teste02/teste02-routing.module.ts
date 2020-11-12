import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Teste02Page } from './teste02.page';

const routes: Routes = [
  {
    path: '',
    component: Teste02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Teste02PageRoutingModule {}
