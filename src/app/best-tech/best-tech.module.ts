import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BestTechPageRoutingModule } from './best-tech-routing.module';

import { BestTechPage } from './best-tech.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestTechPageRoutingModule
  ],
  declarations: [BestTechPage]
})
export class BestTechPageModule {}
