import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent implements OnInit{
  loginValue(username: string, password: string) {
   this.loginObj.username=username;
   this.loginObj.password=password;
   console.log(this.loginObj);
  }
  http= inject(HttpClient);
 
  loginObj:any = {
    "username":"",
    "password":""
  }
 
  // onLogin(){
  //   // this.http.post("link",this.loginObj).subscribe((res:any)=>{
      
  //   // })

  // }
  validitysignup=true
  loginForm!: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameForm: ['', Validators.required],
      passwordForm: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.validitysignup=true;
    } else {
      this.validitysignup=false;
    }
  }


}
