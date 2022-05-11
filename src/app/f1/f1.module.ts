import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { F1PageRoutingModule } from './f1-routing.module';

import { F1Page } from './f1.page';
import { F1playersPageModule } from '../f1players/f1players.module';
import { F1playersPage } from '../f1players/f1players.page';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    F1PageRoutingModule,
    F1playersPageModule
  ],
  exports:[F1playersPage],
  declarations: [F1Page]
})
export class F1PageModule {}
