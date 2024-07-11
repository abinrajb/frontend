import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    errorMessage: string = '';
    loginObj: any = {
        userName: '',
        password: ''
    };
    private sharedService: SharedService;
    constructor(sharedService: SharedService) {
        this.sharedService = sharedService;
    }

    onSubmit() {
        if (!this.loginObj.userName || !this.loginObj.password) {
            this.errorMessage = 'Please fill all required fields.';
            return;
        }

        this.sharedService.login(this.loginObj).subscribe({
            next: (response: any) => {
                console.log('Login successful', response);
                // Handle successful login
            },
            error: (err) => {
                console.error('Login failed', err);
                this.errorMessage = err.message || 'Invalid userName or password';
            }
        });
    }
}
