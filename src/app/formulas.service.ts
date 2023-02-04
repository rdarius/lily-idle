import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  constructor() { }

  getPrice(basePrice: number, growthRate: number, currentLevel: number): number {
    return Math.floor(basePrice * Math.pow(growthRate, currentLevel));
  }
}
