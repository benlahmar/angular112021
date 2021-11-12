import { Pipe, PipeTransform } from '@angular/core';
import { Option } from '../model/Option';
import { Question } from '../model/Question';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: Question, ...args: boolean[]): string {
    let  q:Option
    console.log('#######');
    console.log(value.options);
    
      q= value.options.filter(x=> (x.isAnswer==true))[0]
       return q.name;
  
  }

}
