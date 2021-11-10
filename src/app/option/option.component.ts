import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Option } from '../model/Option';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input()
  opt:Option;

  @Output()
  outevent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  send(x)
  {
    this.outevent.emit(x);
    console.log(x);
  }
}
