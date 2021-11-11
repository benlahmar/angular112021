import { Component, Input, OnInit } from '@angular/core';
import { Option } from '../model/Option';
import { Question } from '../model/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  recp:any;
  @Input()
  qst:Question;

  @Input()
  mode:string;

  response:Option;

  constructor() {
    console.log("********"+this.mode);
    console.log("execution constructor de question");
   }

  ngOnInit(): void {

    console.log("========="+this.mode);
    console.log("execution init de question");
  }
  cpt=0;
  ff(vv:Option)
  {
    this.recp=vv;
    if(vv.selected)
      this.cpt++;
      else
      this.cpt--;
    
      if(this.cpt>0)
      this.qst.answered=true;
      else
      this.qst.answered=false;
    console.log(this.qst);
    console.log("==*****==="+this.mode);

  }
  isanswered()
  {
    if(this.mode=='submit' && !this.isCorrect())
    return 'Not-Answered';

    if(this.mode=='review' && this.qst.answered==false)
    return 'Not-Answered';
    else
    if(this.mode=='review')
    return 'Answered';
    else
    return 'question';
  }


  isCorrect()
  {
     let res= this.qst.options.every(o => o.isAnswer==o.selected);
     this.qst.isCorrect=res;
     this.response= this.qst.options.filter(o=> o.isAnswer)[0];
     return res;
  }
}
