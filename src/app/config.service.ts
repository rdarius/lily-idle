import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private hats = [
    '',
    'assets/hat.png',
  ];
  private glasses = [
    '',
    'assets/glasses.png',
  ];
  private hoodies = [
    '',
    'assets/hoodie.png',
  ];
  private pants = [
    '',
    'assets/shorts.png',
  ];
  private shoes = [
    '',
    'assets/shoes.png',
  ];
  constructor() { }

  public getHats(): string[] {
    return this.hats;
  }

  public getHatByIndex(index: number): string {
    return this.hats[index] ?? '';
  }

  public getGlasses(): string[] {
    return this.glasses;
  }

  public getGlassesByIndex(index: number): string {
    return this.glasses[index] ?? '';
  }

  public getHoodies(): string[] {
    return this.hoodies;
  }

  public getHoodieByIndex(index: number): string {
    return this.hoodies[index] ?? '';
  }

  public getPants(): string[] {
    return this.pants;
  }

  public getPantsByIndex(index: number): string {
    return this.pants[index] ?? '';
  }

  public getShoes(): string[] {
    return this.shoes;
  }

  public getShoesByIndex(index: number): string {
    return this.shoes[index] ?? '';
  }
}
