import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
 
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  isValid: boolean;
login(event){
  event.preventDefault();
  let target=event.target;
  let userName= target.querySelector('#username').value;
  let password= target.querySelector('#password').value;
  let isLoggedIn=this.loginService.loginAuthentication(userName,password);
  
  if(isLoggedIn){
    this.isValid= isLoggedIn;

    this.router.navigate(['/admin'])
    }
  else{
    this.isValid= !isLoggedIn;

  }
}
}
