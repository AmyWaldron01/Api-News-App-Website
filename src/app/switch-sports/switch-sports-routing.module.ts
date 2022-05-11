import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwitchSportsPage } from './switch-sports.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchSportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwitchSportsPageRoutingModule {}
