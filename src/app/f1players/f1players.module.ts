import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F1playersPageRoutingModule } from './f1players-routing.module';

import { F1playersPage } from './f1players.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    F1playersPageRoutingModule,
  ],
  exports:[F1playersPage],
  declarations: [F1playersPage]
})
export class F1playersPageModule {}
