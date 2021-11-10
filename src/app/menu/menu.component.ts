import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  ind=0;
  items  = [{"id":1,"titre":"Accueil", "link":"xx.org"},
  {"id":20,"titre":"Contact", "link":"xx.com"},
  {"id":30,"titre":"About", "link":"google.com"}];

  constructor() { }

  ff(x)
  {
    console.log(this.items.length);
    for(let i =0;i<this.items.length;i++)
    {
      if( this.items[i].id == x)
      this.items[i].id++;
    }

  }

}
