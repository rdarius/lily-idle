import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {PlantContainerComponent} from "../plant-container/plant-container.component";
import {ProgressBarComponent} from "../progress-bar/progress-bar.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PlantContainerComponent, ProgressBarComponent]
})
export class HomePageModule {}
