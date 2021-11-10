import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  data?:String;

  @Input()
  data2:number;

  @Output()
  notif= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  send(x:any)
  {
    this.notif.emit('hi');
  }
}
