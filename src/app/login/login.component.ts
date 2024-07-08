import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  private sharedService = inject(SharedService);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.sharedService.login({ username, password }).subscribe({
        next: (response: any) => {
          console.log('Login successful', response);
          
          // Handle successful login
        },
        error: (err) => {
          console.error('Login failed', err);
          this.errorMessage = err.message || 'Invalid username or password';
        }
      });
    }
  }
}

