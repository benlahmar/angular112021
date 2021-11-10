import { Component, Input, OnInit } from '@angular/core';
import { QuizConfig } from '../model/quiz_config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  @Input()
  data:QuizConfig;
  constructor() { }

  ngOnInit(): void {
  }

}
