import { Injectable } from '@angular/core';
import {PlantDto} from "./plant.dto";
import Plant from "./Plant";
import Plants from "./Plants";
import {FormulasService} from "./formulas.service";
import {UtilitiesService} from "./utilities.service";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private lastSaved = Date.now();
  public lastTime = Date.now();
  public seeds: number = 0;
  public plants: Plant[] = [];
  constructor(
    private readonly formulasService: FormulasService,
    private readonly utilitiesService: UtilitiesService,
  ) {
    const data = localStorage.getItem('PlayerSave');
    if (data) {
      const parsed = JSON.parse(data);

      for (let index = 1; index < Plants.getPlantCount(); index++) {
        this.plants.push(new Plant({...(parsed.plants.find((x: any) => x.id === index) ?? {}), id: index}, formulasService, this, utilitiesService));
      }

      // this.plants = parsed.plants.map((plant: PlantDto) => ({...this.BlankPlant, ...plant}));
      this.seeds = parsed.seeds;
      this.lastTime = parsed.lastTime ? parsed.lastTime : Date.now();
    } else {
      // add default plants
    }
  }

  save() {
    if (this.lastSaved + 1000 > Date.now()) return;
    this.lastSaved = Date.now();
    localStorage.setItem('PlayerSave', JSON.stringify({
      seeds: this.seeds,
      plants: this.plants.map(plant => plant.getSaveData()),
      lastTime: this.lastTime
    }));
  }



  public canAffordFarmer(id: number): boolean {
    const plant = this.plants.find(x => x.id === id);
    if (!plant) return false;
    return this.seeds >= plant.getPlantData().farmer.price;
  }

  public buyFarmer(id: number) {
    const plant = this.plants.find(x => x.id === id);
    if (!plant) return;
    if (!this.canAffordFarmer(id)) return;
    if (plant.isFarmerBought()) return;
    this.seeds -= plant.getPlantData().farmer.price;
    plant.farmerBough = true;
  }
}
