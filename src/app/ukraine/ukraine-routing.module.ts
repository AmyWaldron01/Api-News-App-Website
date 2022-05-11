import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UkrainePage } from './ukraine.page';

const routes: Routes = [
  {
    path: '',
    component: UkrainePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UkrainePageRoutingModule {}
