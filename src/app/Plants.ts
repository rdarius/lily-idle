import {PlantDto} from "./plant.dto";
import Farmers from "./Farmers";

export default class Plants {

  private static plantList: PlantDto[] = [
    {
      id: 1,
      name: 'Plant 1',
      level: 1,
      basePrice: 4,
      growthRate: 1.07,
      timeToGrow: 600,
      timePassed: 0,
      reward: 1,
      farmer: Farmers.getFarmer(1)!,
    },
    {
      id: 2,
      name: 'Plant 2',
      level: 0,
      basePrice: 60,
      growthRate: 1.15,
      timeToGrow: 3000,
      timePassed: 0,
      reward: 60,
      farmer: Farmers.getFarmer(2)!,
    },
    {
      id: 3,
      name: 'Plant 3',
      level: 0,
      basePrice: 720,
      growthRate: 1.14,
      timeToGrow: 6000,
      timePassed: 0,
      reward: 540,
      farmer: Farmers.getFarmer(3)!,
    },
    {
      id: 4,
      name: 'Plant 4',
      level: 0,
      basePrice: 8640,
      growthRate: 1.13,
      timeToGrow: 12000,
      timePassed: 0,
      reward: 4320,
      farmer: Farmers.getFarmer(4)!,
    },
    {
      id: 5,
      name: 'Plant 5',
      level: 0,
      basePrice: 103680,
      growthRate: 1.12,
      timeToGrow: 24000,
      timePassed: 0,
      reward: 51840,
      farmer: Farmers.getFarmer(5)!,
    },
    {
      id: 6,
      name: 'Plant 6',
      level: 0,
      basePrice: 51200,
      growthRate: 1.11,
      timeToGrow: 45000,
      timePassed: 0,
      reward: 102400,
      farmer: Farmers.getFarmer(6)!,
    },
    {
      id: 7,
      name: 'Plant 7',
      level: 0,
      basePrice: 1000000,
      growthRate: 1.106,
      timeToGrow: 60000,
      timePassed: 0,
      reward: 204800,
      farmer: Farmers.getFarmer(7)!,
    },
    {
      id: 8,
      name: 'Plant 8',
      level: 0,
      basePrice: 5000000,
      growthRate: 1.10,
      timeToGrow: 60000,
      timePassed: 0,
      reward: 614150,
      farmer: Farmers.getFarmer(8)!,
    }
  ]

  public static getPlantCount() {
    return this.plantList.length;
  }

  public static getPlant(id: number): PlantDto | null {
    return this.plantList.find(x => x.id === id) ?? null;
  }

}
