import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeoption'
})
export class PipeoptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
// {{data | pipename: 1 2 5   }}
}
