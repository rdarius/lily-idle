import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormulasService} from "../formulas.service";
import {UtilitiesService} from "../utilities.service";
import {PlantDto} from "../plant.dto";

@Component({
  selector: 'app-plant-container',
  templateUrl: './plant-container.component.html',
  styleUrls: ['./plant-container.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantContainerComponent implements OnInit {

  @Input('plant') plant: PlantDto | undefined;
  @Output('onBuy') onBuy = new EventEmitter<PlantDto>();

  constructor(
    private formulasService: FormulasService,
    private utilitiesService: UtilitiesService
  ) { }

  ngOnInit() {}

  buy() {
    this.onBuy.emit(this.plant);
  }

  getPrice() {
    if (!this.plant) return 0;
    return this.formulasService.getPrice(this.plant.basePrice, this.plant.growthRate, this.plant.level);
  }

  getReward() {
    if (!this.plant) return 0;
    return this.plant.reward;
  }

  getRewardTotal() {
    if (!this.plant) return 0;
    return this.plant.level * this.plant.reward;
  }

  progress(): number {
    if (!this.plant) return 0;
    return this.plant.timePassed / this.plant.timeToGrow * 100;
  }

  timeLeft(): string {
    if (!this.plant) return '';
    return this.utilitiesService.convertToTime(this.plant.timeToGrow - this.plant.timePassed);
  }

}
