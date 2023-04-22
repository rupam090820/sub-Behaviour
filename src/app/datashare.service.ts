import { Injectable } from '@angular/core';
// import subject and behavioursubject
import { Subject , BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  //using subject
  public SUBJECT = new Subject();
}
