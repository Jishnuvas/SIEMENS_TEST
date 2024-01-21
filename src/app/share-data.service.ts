import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  constructor() { }
  userData = new BehaviorSubject<any>([]);
  buttons = new BehaviorSubject<any>([{name:"Registration",isSelected:true,route:'register'},{name:"User Details",isSelected:false,route:'user-details'}])


  getUserData(){
    return this.userData.asObservable();
  }
  setUserData(data:any){
    this.userData.next(data);
  }
  getButtonStatus(){
    return this.buttons.asObservable();
  }
  getButtonStatusValue(){
    return this.buttons.getValue();
  }
  setButtonStatus(data:any){
    this.buttons.next(data);
  }

  tabButtonStatusChange(btn:any){
    const status:any = [...this.getButtonStatusValue()];
    status.forEach((btnEle:any)=>{
      if(btnEle.name === btn.name){
        btnEle.isSelected = true
      }else{
        btnEle.isSelected = false;
      }
    })
    this.setButtonStatus(status);
  }
}
