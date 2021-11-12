import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {
data={'id':1, 'name':'moi'}
  constructor() { }

  somme(a:number, b:number)
  {
    return a+b;
  }

  multiple(a:number, b:number)
  {
    return a+b;
  }
}
