import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  email:FormControl;
  txt :FormControl;
 option={}
  ab=[{'id':1,'age':30},{'id':2,'age':18},{'id':3,'age':20}];
  score:string;
  formg:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   this.score = sessionStorage.getItem("score");

   this.email=new FormControl('example@domain.com', Validators.email);
  this.txt = new FormControl('', Validators.required);
  this.email.disable();
  this.formg=new FormGroup({
    id:new FormControl('',Validators.required),
    name:new FormControl(),
    answered:new FormControl()
  });
   
  this.fb.group({
    aa:new FormControl('', [Validators.required, Validators.min(8)]),
    bb:this.fb.control(''),
    cc:this.fb.control('', Validators.minLength(4))
  })
  }

  send()
  {
    this.option= this.formg.value ;
    //post(option)
  }
}
