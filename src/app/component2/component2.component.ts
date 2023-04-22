import { Component, OnInit } from '@angular/core';
//import services step 1
import { Datashare2Service } from '../service/datashare2.service';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
public recivedData:any='';


  constructor(private cmp2recived:Datashare2Service) {  // its a 2nd step
this.cmp2recived.DATASHARE2.subscribe(res=>{
this.recivedData=res;
console.log(res);
});


  }  

  ngOnInit(): void {
  }

}
