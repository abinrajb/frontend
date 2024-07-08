import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  private sharedService = inject(SharedService);
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      phonenumber: ['', Validators.required],
      address: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { 
      validators: this.passwordMatchValidator 
    });
  }

  signupObj: any = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    phoneno: '',
    address:'',
    Password: ''
  }

  SignupValue(SignupUserName: string, SignupFirstName: string, signupLastName: string,
    SignupEmail: string, signupCountry: string, signupPhnNo: string,
    SignupNewPassword: string, signupAddress: string) {
    this.signupObj.username = SignupUserName;
    this.signupObj.firstname = SignupFirstName;
    this.signupObj.lastname = signupLastName;
    this.signupObj.email = SignupEmail;
    this.signupObj.country = signupCountry;
    this.signupObj.phoneno = signupPhnNo;
    this.signupObj.address = signupAddress;
    this.signupObj.Password = SignupNewPassword;

    console.log(this.signupObj);
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.sharedService.Signup(this.signupObj).subscribe({
        next: (response: any) => {
          console.log('Signup successful', response);
        },
        error: (err) => {
          console.error('Signup failed', err);
          this.errorMessage = err.message || 'Signup failed';
        }
      });
    } else {
      this.errorMessage = 'Please fill all required fields correctly.';
    }
  }
}
