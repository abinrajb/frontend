import { HttpClient } from '@angular/common/http';
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

  signupObj: any = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    phonenumber: '',
    address: '',
    newPassword: '',
    confirmPassword: ''
  }

  SignupValue() {
    if (!this.signupObj.username || !this.signupObj.firstname || !this.signupObj.lastname ||
        !this.signupObj.email || !this.signupObj.country || !this.signupObj.phonenumber ||
        !this.signupObj.address || !this.signupObj.newPassword || !this.signupObj.confirmPassword) {
      this.errorMessage = 'Please fill all required fields.';
      return;
    }

    if (this.signupObj.newPassword !== this.signupObj.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.sharedService.Signup(this.signupObj).subscribe({
      next: (response: any) => {
        console.log('Signup successful', response);
      },
      error: (err) => {
        console.error('Signup failed', err);
        this.errorMessage = err.message || 'Signup failed';
      }
    });
  }
}
