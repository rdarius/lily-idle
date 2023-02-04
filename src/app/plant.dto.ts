import {FarmerDto} from "./farmer.dto";

export type PlantDto = {
  id: number,
  name: string,
  level: number,
  basePrice: number,
  growthRate: number,
  timeToGrow: number,
  timePassed: number,
  reward: number,
  farmer: FarmerDto,
}
