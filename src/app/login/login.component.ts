import { Component, inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    private router = inject(Router);
    map1 = new Map<string, string>();
    isResponseSent: boolean = true;
    
    loginObj: any = {
        userName: '',
        password: ''
    };
    private sharedService: SharedService;
    constructor(sharedService: SharedService) {
        this.sharedService = sharedService;
    }
    private displayErrorMessage(key: string, value: string): void {
        this.map1.set(key, value);
        this.isResponseSent = false;
    }
    // public togglePasswordVisibility(): void {
    //     this.isPasswordVisible = !this.isPasswordVisible;
    //     this.passwordFieldType = this.isPasswordVisible ? 'text' : 'password';
    // }
    onSubmit() {
        if (!this.loginObj.userName) {
            this.displayErrorMessage('UserNameErrorMessage', 'Please enter a valid username.');
            return;
        }
        if (!this.loginObj.password) {
            this.displayErrorMessage('PasswordErrorMessage', 'Please enter a valid password.');
        }

        this.sharedService.login(this.loginObj).subscribe({
            next: (response: any) => {
                console.log('Login successful', response);
                // Handle successful login
            },
            error: (err) => {
                console.error('Login failed', err);
                // this.errorMessage = err.message || 'Invalid userName or password';
                if (err.message) {
                    this.displayErrorMessage('ErrorMessage', "The user doesn't exist");
                    this.router.navigate(['/login']);
                }
            }
        });
    }
}
