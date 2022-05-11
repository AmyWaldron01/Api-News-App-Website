import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F1playersPage } from './f1players.page';

const routes: Routes = [
  {
    path: '',
    component: F1playersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F1playersPageRoutingModule {}
