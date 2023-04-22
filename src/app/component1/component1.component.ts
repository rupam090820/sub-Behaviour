import { Component, OnInit } from '@angular/core';
//import services 1st step
import { Datashare2Service } from '../service/datashare2.service';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
 

  constructor(private cmp1send: Datashare2Service) { } // dependency inject here 2nd step
  ngOnInit(): void {
  }
    //when click button then execute this function
    sendData(n1: any,n2:any) {  // its a last step 
      // let value1 = n1.value;
      let data = {'NAME':n1.value,'NUMBER':n2.value}
      // this.cmp1send.DATASHARE2.next(value1)  // for this line we send data
     this.cmp1send.DATASHARE2.next(data);
    }

}
