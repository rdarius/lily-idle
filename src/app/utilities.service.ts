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

    return seconds + ' sec';
  }
}
