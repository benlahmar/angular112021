import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getusers()
  {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users',{observe: "response"});
  }

  getuser(id:number)
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
  }
  deleteuser(id:number)
  {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id);
  }
}
