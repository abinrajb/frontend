import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent {
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
 
  onLogin(){
    // this.http.post("link",this.loginObj).subscribe((res:any)=>{
      
    // })

  }

}
