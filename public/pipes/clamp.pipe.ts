import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'clamp' })

export class ClampPipe implements PipeTransform {
  transform(value: number, low: number, high: number): number {
    return value < low ? low : value > high ? high : value;
  }
}