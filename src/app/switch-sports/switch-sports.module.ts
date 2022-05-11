import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwitchSportsPageRoutingModule } from './switch-sports-routing.module';

import { SwitchSportsPage } from './switch-sports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwitchSportsPageRoutingModule
  ],
  declarations: [SwitchSportsPage]
})
export class SwitchSportsPageModule {}
