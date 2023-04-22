import { Injectable } from '@angular/core';
//step1 import subject 
import { Subject , BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class Datashare2Service {

  constructor() { }
  public DATASHARE2 = new Subject();
}
