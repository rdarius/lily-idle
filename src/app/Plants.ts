import {PlantDto} from "./plant.dto";
import Farmers from "./Farmers";

export default class Plants {

  private static plantList: PlantDto[] = [
    {
      id: 1,
      name: 'Lily',
      level: 1,
      basePrice: 4,
      growthRate: 1.07,
      timeToGrow: 600,
      timePassed: 0,
      reward: 1,
      farmer: Farmers.getFarmer(1)!,
      image: '/assets/Lily.png',
    },
    {
      id: 2,
      name: 'Tulip',
      level: 0,
      basePrice: 60,
      growthRate: 1.15,
      timeToGrow: 3000,
      timePassed: 0,
      reward: 60,
      farmer: Farmers.getFarmer(2)!,
      image: '/assets/Tulip.png',
    },
    {
      id: 3,
      name: 'Rose',
      level: 0,
      basePrice: 720,
      growthRate: 1.14,
      timeToGrow: 6000,
      timePassed: 0,
      reward: 540,
      farmer: Farmers.getFarmer(3)!,
      image: '/assets/Rose.png',
    },
    {
      id: 4,
      name: 'Jasmine',
      level: 0,
      basePrice: 8640,
      growthRate: 1.13,
      timeToGrow: 12000,
      timePassed: 0,
      reward: 4320,
      farmer: Farmers.getFarmer(4)!,
      image: '/assets/Jasmine.png',
    },
    {
      id: 5,
      name: 'Lotus',
      level: 0,
      basePrice: 103680,
      growthRate: 1.12,
      timeToGrow: 24000,
      timePassed: 0,
      reward: 51840,
      farmer: Farmers.getFarmer(5)!,
      image: '/assets/Lotus.png',
    },
    {
      id: 6,
      name: 'Sunflower',
      level: 0,
      basePrice: 51200,
      growthRate: 1.11,
      timeToGrow: 45000,
      timePassed: 0,
      reward: 102400,
      farmer: Farmers.getFarmer(6)!,
      image: '/assets/Sunflower.png',
    },
    {
      id: 7,
      name: 'Narcissus',
      level: 0,
      basePrice: 1000000,
      growthRate: 1.106,
      timeToGrow: 60000,
      timePassed: 0,
      reward: 204800,
      farmer: Farmers.getFarmer(7)!,
      image: '/assets/Narcissus.png',
    },
    {
      id: 8,
      name: 'Flax',
      level: 0,
      basePrice: 5000000,
      growthRate: 1.10,
      timeToGrow: 120000,
      timePassed: 0,
      reward: 614150,
      farmer: Farmers.getFarmer(8)!,
      image: '/assets/Flax.png',
    }
  ]

  public static getPlantCount() {
    return this.plantList.length;
  }

  public static getPlant(id: number): PlantDto | null {
    return this.plantList.find(x => x.id === id) ?? null;
  }

}
