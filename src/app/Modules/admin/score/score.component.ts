import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  ab=[{'id':1,'age':30},{'id':2,'age':18},{'id':3,'age':20}];
  score:string;
  constructor() { }

  ngOnInit(): void {
   this.score = sessionStorage.getItem("score");
  }

}
