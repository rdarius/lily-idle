import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PlayerService} from "../player.service";
import {FormulasService} from "../formulas.service";
import {UtilitiesService} from "../utilities.service";
import {PlantDto} from "../plant.dto";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  constructor(
    private playerService: PlayerService,
    private formulasService: FormulasService
  ) {
    this.gameLoop();
  }

  getSeeds(): number {
    return this.playerService.seeds;
  }

  getPlants(): PlantDto[] {
    return this.playerService.plants;
  }

  onBuy(plant: PlantDto) {
    const price = this.formulasService.getPrice(plant.basePrice, plant.growthRate, plant.level);
    if (price <= this.playerService.seeds) {
      plant.level += 1;
      this.playerService.seeds -= price;
    }
  }

  gameLoop() {

    const currentTime = Date.now();
    const dt = currentTime - this.playerService.lastTime;
    this.playerService.lastTime = currentTime;

    for(let plant of this.playerService.plants) {
      if (plant.level > 0) {
        plant.timePassed += dt;

        while (plant.timePassed >= plant.timeToGrow) {
          this.playerService.seeds += plant.reward * plant.level;
          plant.timePassed -= plant.timeToGrow;
        }
      }
    }
    this.playerService.save();
    requestAnimationFrame(() => this.gameLoop());
  }

}
