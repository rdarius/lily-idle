import {FarmerDto} from "./farmer.dto";

export default class Farmers {

  private static farmerList: FarmerDto[] = [
    {
      id: 1,
      name: "Farmer 1",
      price: 1000,
      image: '/assets/Lily.png',
    },
    {
      id: 2,
      name: "Farmer 2",
      price: 10000,
      image: '/assets/Tulip.png',
    },
    {
      id: 3,
      name: "Farmer 3",
      price: 100000,
      image: '/assets/Rose.png',
    },
    {
      id: 4,
      name: "Farmer 4",
      price: 1000000,
      image: '/assets/Jasmine.png',
    },
    {
      id: 5,
      name: "Farmer 5",
      price: 10000000,
      image: '/assets/Lotus.png',
    },
    {
      id: 6,
      name: "Farmer 6",
      price: 100000000,
      image: '/assets/Sunflower.png',
    },
    {
      id: 7,
      name: "Farmer 7",
      price: 1000000000,
      image: '/assets/Narcissus.png',
    },
    {
      id: 8,
      name: "Farmer 8",
      price: 10000000000,
      image: '/assets/Flax.png',
    }
  ];

  public static getFarmer(id: number): FarmerDto | null {
    return this.farmerList.find(x => x.id === id) ?? null;
  }

}
