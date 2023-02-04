import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  convertToTime(num: number) {
    if (num < 0) num = 0;
    num = Math.round(num / 1000);
    const days = Math.floor(num / 60 / 60 / 24);
    num -= days * 60 * 60 * 24;
    const hours = Math.floor(num / 60 / 60);
    num -= hours * 60 * 60;
    const minutes = Math.floor(num / 60);
    num -= minutes * 60;
    const seconds = num;

    if (days) {
      return days + ' ' + (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds);
    }

    if (hours) {
      return (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds);
    }

    if (minutes) {
      return (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds);
    }

    return '00:' + (seconds > 9 ? seconds : '0' + seconds);
  }

  formatNumber(num: number): string {
    if (num < 1e3) return num.toString();
    if (num < 1e6) return Math.round(num)/1e3 + 'k';
    if (num < 1e9) return Math.floor(num/1e3)/1e3 + 'M';
    if (num < 1e12) return Math.floor(num/1e6)/1e3 + 'B';
    if (num < 1e15) return Math.floor(num/1e9)/1e3 + 'T';
    if (num < 1e18) return Math.floor(num/1e12)/1e3 + 'aa';
    if (num < 1e21) return Math.floor(num/1e15)/1e3 + 'ab';
    if (num < 1e24) return Math.floor(num/1e18)/1e3 + 'ac';
    return '0';
  }
}
