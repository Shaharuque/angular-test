import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'Exponential of : ' + value + ' is Exponential: ' + Math.pow(Number(value), 2);
  }

}
