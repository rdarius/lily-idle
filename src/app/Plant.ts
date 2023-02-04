import {FarmerDto} from "./farmer.dto";
import {FormulasService} from "./formulas.service";
import {PlayerService} from "./player.service";
import {UtilitiesService} from "./utilities.service";
import Plants from "./Plants";
import {PlantDto} from "./plant.dto";

export default class Plant {

  id: number = 0;
  private level: number = 0;
  private timePassed: number = 0;
  farmerBough: boolean = false;

  private readonly plant: PlantDto | null;

  public constructor(
    data: any,
    private readonly formulasService: FormulasService,
    private readonly playerService: PlayerService,
    private readonly utilitiesService: UtilitiesService,
    ) {
    this.id = data.id ?? 0;
    this.level = data.level ?? 0;
    this.timePassed = data.timePassed ?? 0;
    this.farmerBough = data.farmerBough ?? false;
    this.plant = Plants.getPlant(this.id);
  }

  public isFarmerBought(): boolean {
    return this.farmerBough;
  }

  public getLevel(): number {
    return this.level;
  }
  public getFarberBought(): boolean {
    return this.farmerBough;
  }
  public getTimePassed(): number {
    return this.timePassed;
  }
  public addTimePassed(time: number): number {
    return this.timePassed += time;
  }

  public getPlantData(): PlantDto {
    return this.plant!;
  }

  public getSaveData(): any {
    return {
      id: this.id,
      level: this.level,
      timePassed: this.timePassed,
      farmerBough: this.farmerBough,
    };
  }

  public getTimeToGrow(): number {
    if (!this.plant) return 0;
    return this.plant.timeToGrow;
  }
  getPrice() {
    if (!this.plant) return 0;
    return this.formulasService.getPrice(this.plant.basePrice, this.plant.growthRate, this.level);
  }

  buy() {
    if (this.playerService.seeds >= this.getPrice()) {
      this.playerService.seeds -= this.getPrice();
      this.level += 1
    }
  }

  harvest() {
    if (this.getTimeToGrow() < this.timePassed) {
      this.timePassed = 0;
      this.playerService.seeds += this.getReward() * this.level;
    }
  }

  getReward() {
    if (!this.plant) return 0;
    return this.plant.reward;
  }

  getRewardTotal() {
    return this.level * this.getReward();
  }

  progress(): number {
    return this.timePassed / this.getTimeToGrow() * 100;
  }

  timeLeft(): string {
    return this.utilitiesService.convertToTime(this.getTimeToGrow() - this.timePassed);
  }

  canAfford(): boolean {
    return this.playerService.seeds >= this.getPrice();
  }

}