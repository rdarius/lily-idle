import {FarmerDto} from "./farmer.dto";

export default class Farmers {

  private static farmerList: FarmerDto[] = [
    {
      id: 1,
      name: "Farmer 1",
      price: 1000,
    },
    {
      id: 2,
      name: "Farmer 2",
      price: 10000,
    },
    {
      id: 3,
      name: "Farmer 3",
      price: 100000,
    },
    {
      id: 4,
      name: "Farmer 4",
      price: 1000000,
    },
    {
      id: 5,
      name: "Farmer 5",
      price: 10000000,
    },
    {
      id: 6,
      name: "Farmer 6",
      price: 100000000,
    },
    {
      id: 7,
      name: "Farmer 7",
      price: 1000000000,
    },
    {
      id: 8,
      name: "Farmer 8",
      price: 10000000000,
    },
    {
      id: 9,
      name: "Farmer 9",
      price: 100000000000,
    },
    {
      id: 10,
      name: "Farmer 10",
      price: 1000000000000,
    }
  ];

  public static getFarmer(id: number): FarmerDto | null {
    return this.farmerList.find(x => x.id === id) ?? null;
  }

}
