import { Component, inject } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  private sharedService = inject(SharedService);

  errorMessage: string = '';
  map1 = new Map<string, string>();

  signupObj: any = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phoneNo: '',
    address: '',
    password: ''
  };

  signupObjForApiCall: any = {
    ConfirmPassword: '',
  };

  private isValidName(name: string): boolean {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return emailRegex.test(email);
  }

  private isValidPhoneNumber(phoneNumber: number): boolean {
    return phoneNumber.toString().length === 10;
  }

  SignupValue() {
    this.map1.clear();
    this.errorMessage = '';

    if (!this.isValidName(this.signupObj.firstName)) {
      this.map1.set('firstNameErrorMessage', "Firstname should only contain alphabets.");
      return;
    }
    if (!this.isValidName(this.signupObj.lastName)) {
      this.map1.set('LastNameErrorMessage', 'Lastname should only contain alphabets.');
      return;
    }
    if (!this.isValidEmail(this.signupObj.email)) {
      this.map1.set('emailErrorMessage', 'Please enter a valid email.');
      return;
    }
    if (!this.isValidPhoneNumber(this.signupObj.phoneNo)) {
      this.map1.set('phoneNoerrorMessage', 'Enter a valid phone number.'); 
      return;
    }
    if (this.signupObj.password !== this.signupObjForApiCall.ConfirmPassword) {
      this.map1.set('passwordErrorMessage', "New password and confirm password doesn't match");
      return;
    }

    this.sharedService.Signup(this.signupObj).subscribe({
      next: (response: any) => {
        console.log('Signup successful', response);
      },
      error: (err) => {
        console.error('Signup failed', err);
        // this.errorMessage = err.message || 'Signup failed';
      }
    });
  }
}


