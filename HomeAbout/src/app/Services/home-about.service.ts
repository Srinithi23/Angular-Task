import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeAboutService {
  public sendMessage=new BehaviorSubject('');
  
}




