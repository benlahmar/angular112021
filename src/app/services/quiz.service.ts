import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../model/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  getquiz()
  {
    return this.http.get<Quiz>('https://raw.githubusercontent.com/benlahmar/Angular8/master/src/app/model/csharp.json');
  }
}
