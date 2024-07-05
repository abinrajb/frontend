import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
      signupValue(
        SignupUserName:string,
        SignupFirstName:string,
        signupLastName:string,
        SignupEmail:string,
        signupCountry:string,
        signupPhnNo:string,
        SignupNewPassword:string,
        SignupCnfrmPassword:string){
          console.log({
            'username':SignupUserName,
            'firstname':SignupFirstName,
            'lastname':signupLastName,
            'email':SignupEmail,
            'country':signupCountry,
            'phone number':signupPhnNo,
            'new password':SignupNewPassword,
            'confirm password':SignupCnfrmPassword
          })
      }
}
