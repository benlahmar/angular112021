import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyserviceService } from '../Services/myservice.service';
import { UsersService } from '../Services/users.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { stat } from 'fs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  
})
export class UserComponent implements OnInit {

  res:number;
  users:any;
  status: number;
  constructor(private uservice:UsersService) { }

  ngOnInit(): void {
   
   // let x= of(1,5,4,44);
   //x.pipe(map((a) => a * a)).subscribe(z=> console.log(z))


    let res = this.uservice.getusers();
    console.log("promise")
    console.log(res.toPromise());
    console.log("observable")
    console.log(res);


    res.toPromise().then( data =>
      {this.users=data.body; console.log(data)}, ex=> console.log(ex));

      res.subscribe( x => console.log(x.body.email));
      
  }

  sup(id:number)
  {
    let r= this.uservice.deleteuser(id);
    console.log(r.toPromise());
  }
}
