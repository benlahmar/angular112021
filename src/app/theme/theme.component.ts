import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
 themes = [{
  "slug": "aspnet",
  "title": "AspNet",
  "logo": "assets/images/aspnet.jpg",
  "description": "description"
},
  {
  "slug": "typescript",
  "title": "TypeScript",
  "logo": "assets/images/typescript.png",
  "description": "description"
}, {
  "slug": "ecma",
  "title": "ECMAScript 6",
  "logo": "assets/images/js.png",
  "description": "description"
}, {
  "slug": "ng2",
  "title": "Angular 2",
  "logo": "assets/images/angular.png",
  "description": "description"
}, {
  "slug": "react",
  "title": "React",
  "logo": "assets/images/react.png",
  "description": "description"
}];
abc:string;
  constructor(private route:ActivatedRoute) { 
    this.abc="aaa";
    console.log("constructor");
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(x=> this.abc=x.q);
    
  }

}
