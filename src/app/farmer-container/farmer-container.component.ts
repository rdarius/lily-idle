import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlantDto} from "../plant.dto";
import {PlayerService} from "../player.service";
import Plant from "../Plant";

@Component({
  selector: 'app-farmer-container',
  templateUrl: './farmer-container.component.html',
  styleUrls: ['./farmer-container.component.scss'],
})
export class FarmerContainerComponent implements OnInit {

  @Input('plant') plant!: Plant;
  constructor(private playerService: PlayerService) { }

  getPrice() {
    if (!this.plant) return 0;
    return this.plant.getPlantData().farmer.price;
  }
  buy() {
    this.playerService.buyFarmer(this.plant.id);
  }

  canAfford(): boolean {
    return this.playerService.canAffordFarmer(this.plant.id);
  }

  ngOnInit() {}

}
