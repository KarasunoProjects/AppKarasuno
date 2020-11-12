import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Teste03Page } from './teste03.page';

const routes: Routes = [
  {
    path: '',
    component: Teste03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Teste03PageRoutingModule {}
