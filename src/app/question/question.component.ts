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
  constructor() { }
  ngOnInit(): void {
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

  }
  isanswered()
  {
    
    if(this.mode=='review' && this.qst.answered==false)
    return 'Not-Answered';
    else
    if(this.mode=='review')
    return 'Answered';
    else
    return 'question';
    
  
  }
}
