import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PlayerService} from "../player.service";
import {FormulasService} from "../formulas.service";
import {UtilitiesService} from "../utilities.service";
import {PlantDto} from "../plant.dto";
import {PlayerPlantDto} from "../playerPlant.dto";
import Plant from "../Plant";
import {ConfigService} from "../config.service";

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
    private formulasService: FormulasService,
    private readonly configService: ConfigService,
    private readonly utilitiesService: UtilitiesService,
  ) {
    this.gameLoop();
  }

  getSeeds(): string {
    return this.utilitiesService.formatNumber(this.playerService.seeds);
  }

  getPlants(): Plant[] {
    return this.playerService.plants;
  }

  getAllHats() {
    return this.configService.getHats();
  }

  getAllGlasses() {
    return this.configService.getGlasses();
  }

  getAllHoodies() {
    return this.configService.getHoodies();
  }

  getAllPants() {
    return this.configService.getPants();
  }

  getAllShoes() {
    return this.configService.getShoes();
  }

  setHat(index: number) {
    this.playerService.profilePicture.hat = index;
  }

  setGlasses(index: number) {
    this.playerService.profilePicture.glasses = index;
  }

  setHoodie(index: number) {
    this.playerService.profilePicture.hoodie = index;
  }

  setPants(index: number) {
    this.playerService.profilePicture.pants = index;
  }

  setShoes(index: number) {
    this.playerService.profilePicture.shoes = index;
  }

  gameLoop() {

    const currentTime = Date.now();
    const dt = currentTime - this.playerService.lastTime;
    this.playerService.lastTime = currentTime;

    for(let plant of this.playerService.plants) {
      if (plant.getLevel() > 0) {
        plant.addTimePassed(dt);

        if (plant.getFarberBought()) {
          while (plant.getTimePassed() >= plant.getTimeToGrow()) {
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
