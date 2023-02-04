import { Injectable } from '@angular/core';
import {PlantDto} from "./plant.dto";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public lastTime = Date.now();
  public seeds: number = 0;
  public plants: PlantDto[] = [
    {
      name: 'Plant 1',
      level: 1,
      basePrice: 4,
      growthRate: 1.07,
      timeToGrow: 600,
      timePassed: 0,
      reward: 1,
    },
    {
      name: 'Plant 2',
      level: 0,
      basePrice: 60,
      growthRate: 1.15,
      timeToGrow: 3000,
      timePassed: 0,
      reward: 60,
    },
    {
      name: 'Plant 3',
      level: 0,
      basePrice: 720,
      growthRate: 1.14,
      timeToGrow: 6000,
      timePassed: 0,
      reward: 540,
    },
    {
      name: 'Plant 4',
      level: 0,
      basePrice: 8640,
      growthRate: 1.13,
      timeToGrow: 12000,
      timePassed: 0,
      reward: 4320,
    },
    {
      name: 'Plant 5',
      level: 0,
      basePrice: 103680,
      growthRate: 1.12,
      timeToGrow: 24000,
      timePassed: 0,
      reward: 51840,
    },
    {
      name: 'Plant 6',
      level: 0,
      basePrice: 51200,
      growthRate: 1.11,
      timeToGrow: 45000,
      timePassed: 0,
      reward: 102400,
    },
    {
      name: 'Plant 7',
      level: 0,
      basePrice: 1000000,
      growthRate: 1.106,
      timeToGrow: 60000,
      timePassed: 0,
      reward: 204800,
    },
    {
      name: 'Plant 8',
      level: 0,
      basePrice: 5000000,
      growthRate: 1.10,
      timeToGrow: 60000,
      timePassed: 0,
      reward: 614150,
    }
  ];
  constructor() {
    const data = localStorage.getItem('PlayerSave');
    if (data) {
      const parsed = JSON.parse(data);
      this.plants = parsed.plants;
      this.seeds = parsed.seeds;
      this.lastTime = parsed.lastTime ? parsed.lastTime : Date.now();
    }
  }

  save() {
    localStorage.setItem('PlayerSave', JSON.stringify({
      seeds: this.seeds,
      plants: this.plants,
      lastTime: this.lastTime
    }));
  }
}
