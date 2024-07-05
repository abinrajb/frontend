import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  const loginemail='';
  
  loginValue(email:string,password:string){
    console.log({email,password})
  }
}
