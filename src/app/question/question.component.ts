import { Component, Input, OnInit } from '@angular/core';
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
  constructor() { }
  ngOnInit(): void {
  }
  ff(vv:any)
  {
    this.recp=vv;
  }
}
