import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  validitysignup=true 
      signupForm: FormGroup;

      constructor(private fb: FormBuilder) {
        this.signupForm = this.fb.group({
          username: ['', Validators.required],
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          email: ['', Validators.required],
          country: ['', Validators.required],
          phonenumber: ['', Validators.required],
          newPassword: ['', Validators.required],
          confirmPassword: ['', Validators.required]
        },{ 
          validators: this.passwordMatchValidator 
        });
      }

      SignupValue(SignupUserName:string,
        SignupFirstName:string,
        signupLastName:string,
        SignupEmail:string,
        signupCountry:string,
        signupPhnNo:string,
        SignupNewPassword:string,
        SignupCnfrmPassword:string) {
          this.loginObj.usernameObj=SignupUserName;
          this.loginObj.firstnameObj=SignupFirstName;
          this.loginObj.lastnameObj= signupLastName;
          this.loginObj.emailObj=SignupEmail;
          this.loginObj.countryObj=signupCountry;
          this.loginObj.phoneObj=signupPhnNo;
          this.loginObj.newpasswordObj=SignupNewPassword;
          this.loginObj.confirmpasswordObj=SignupCnfrmPassword;
        console.log(this.loginObj);
       }
       http= inject(HttpClient);
      
       loginObj:any = {
        "usernameObj":"",
        "firstnameObj":"",
        "lastnameObj":"",
        "emailObj":"",
        "countryObj":"",
        "phoneObj":"",
        "newpasswordObj":"",
        "confirmpasswordObj":""
       }

      passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
        const newPassword = control.get('newPassword')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;
        return newPassword === confirmPassword ? null : { passwordMismatch: true };
      }
    
      onSubmit() {
        if (this.signupForm.valid) {
            this.validitysignup=true;
        }
        else{
          this.validitysignup=false;
        }
      }

}
