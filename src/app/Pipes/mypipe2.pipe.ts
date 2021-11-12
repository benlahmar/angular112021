import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../model/Question';

@Pipe({
  name: 'mypipe2'
})
export class Mypipe2Pipe implements PipeTransform {

  transform(value: Question[], ...args: unknown[]): Question[] {
   let res= value.filter(q=> !q.answered)
    return res;
  }

}
