import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number, rating: number): number {

    if (typeof value !== 'number') return;
    return rating*10;
  }

}
