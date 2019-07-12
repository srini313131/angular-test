import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
userName: string="aaum";
password: string="Aaum@123";
isLoggedIn: boolean;
  constructor() { }
loginAuthentication(uName,pwd){
if(uName==this.userName && pwd==this.password){
   this.isLoggedIn=true;
  return true;
}
else{
  this.isLoggedIn=false;
  return false;
}
}

}
