import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeadmin'
})
export class PipeadminPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
