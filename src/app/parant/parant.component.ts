import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parant',
  templateUrl: './parant.component.html',
  styleUrls: ['./parant.component.css']
})
export class ParantComponent implements OnInit {

  att="Hello world";
  constructor() { }

  ngOnInit(): void {
  }
  recept(x:any)
  {
    console.log(x);
  }

}
