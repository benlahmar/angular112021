import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appTab]'
})
export class TabDirective implements OnInit{

  @Input('line')
  row:number;

  @Input()
  col:number;

  @Input()
  tt?:any[];
  ex:any;
  constructor(private ref:ElementRef, private render:Renderer2) {
    
   }

  ngOnInit(): void {
    this.render.addClass(this.ref.nativeElement,"alert-primary");
    let dim=this.tt.length;
     this.ex= this.tt.pop();
    

    
    let tab=this.render.createElement("table");
    for(let i=0;i<this.row;i++)
    {
      let tr=this.render.createElement("tr");
      for(let j=0;j<this.col;j++)
      {
        let td=this.render.createElement("td");
      let txt= this.render.createText("element"+i);
      this.render.appendChild(td,txt);
      this.render.appendChild(tr,td);
      }
      this.render.appendChild(tab,tr);
    }
    this.render.setAttribute(tab,"bgcolor","gold");
    this.render.setAttribute(tab,"border","solid 1px");
    this.render.setAttribute(tab,"width","40%");
    this.render.appendChild(this.ref.nativeElement,tab);
    console.log(this.ex);
  }

  @HostListener('mouseenter',['$event']) 
  ff(event:Event)
  {
      this.render.setStyle(this.ref.nativeElement,"border","solid 10px");
      console.log('event mouseenter');
  }

  @HostListener('mouseleave',['$event']) 
  gg(event:Event)
  {
      this.render.setStyle(this.ref.nativeElement,"border","0px");
      console.log('event mouseenter');
  }
}
