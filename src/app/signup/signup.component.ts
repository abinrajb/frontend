import { Component, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    private router = inject(Router);
    private sharedService = inject(SharedService);
    isResponseSent: boolean = true;
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
    signupConfirmPassword: string = "";

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

    private displayErrorMessage(key: string, value: string): void {
        this.map1.set(key, value);
        this.isResponseSent = false;
    }

    public signupValue(): void {
        this.map1.clear();
        this.errorMessage = '';
        this.isResponseSent = true;

        if (!this.signupObj.userName) {
            this.displayErrorMessage('UserNameErrorMessage', 'Please enter a valid username.');
        }
        if (!this.signupObj.password) {
            this.displayErrorMessage('newPasswordErrorMessage', 'Please enter a valid password.');
        }
        if (!this.isValidName(this.signupObj.firstName)) {
            this.displayErrorMessage('firstNameErrorMessage', 'Firstname should only contain alphabets.');
        }
        if (!this.isValidName(this.signupObj.lastName)) {
            this.displayErrorMessage('LastNameErrorMessage', 'Lastname should only contain alphabets.');
        }
        if (!this.signupObj.address) {
            this.displayErrorMessage('addressErrorMessage', 'Please enter a valid address.');
        }
        if (!this.isValidEmail(this.signupObj.email)) {
            this.displayErrorMessage('emailErrorMessage', 'Please enter a valid email.');
        }
        if (!this.isValidPhoneNumber(this.signupObj.phoneNo)) {
            this.displayErrorMessage('phoneNoerrorMessage', 'Enter a valid phone number.');
        }
        if (this.signupObj.password !== this.signupConfirmPassword) {
            this.displayErrorMessage('ConfirmPasswordErrorMessage', "New password and confirm password doesn't match.");
        }

        if (this.isResponseSent) {
            this.sharedService.Signup(this.signupObj).subscribe({
                next: (response: any) => {
                    console.log('Signup successful', response);
                },
                error: (err) => {
                    console.error('Signup failed', err);
                    this.router.navigate(['/error']);
                }
            });
        }
    }
}


