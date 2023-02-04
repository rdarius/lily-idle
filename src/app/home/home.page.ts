import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PlayerService} from "../player.service";
import {FormulasService} from "../formulas.service";
import {UtilitiesService} from "../utilities.service";
import {PlantDto} from "../plant.dto";
import {PlayerPlantDto} from "../playerPlant.dto";
import Plant from "../Plant";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  public activeTab: number = 0;

  constructor(
    private playerService: PlayerService,
    private formulasService: FormulasService
  ) {
    this.gameLoop();
  }

  getSeeds(): number {
    return this.playerService.seeds;
  }

  getPlants(): Plant[] {
    return this.playerService.plants;
  }

  gameLoop() {

    const currentTime = Date.now();
    const dt = currentTime - this.playerService.lastTime;
    this.playerService.lastTime = currentTime;

    for(let plant of this.playerService.plants) {
      if (plant.getLevel() > 0) {
        plant.addTimePassed(dt);

        if (plant.getFarberBought()) {
          while (plant.getTimePassed() >= plant.getPlantData().timeToGrow) {
            this.playerService.seeds += plant.getRewardTotal();
            plant.addTimePassed(-plant.getTimeToGrow());
          }
        }
      }
    }
    this.playerService.save();
    requestAnimationFrame(() => this.gameLoop());
  }

}
