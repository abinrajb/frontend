import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  apiUrl = '/api';
  constructor(private http: HttpClient) {}

  // Login method
  login(loginPayload: any): Observable<any> {
    return this.http.post<any>(`/api`, loginPayload);
  }

  Signup(signupPayLoad: any): Observable<any> {
    return this.http.post<any>(`/sign`,signupPayLoad)
  }

}


// export class DataService {
//   apiUrl = '/api';
//   public loginMessage: string = '';
//   constructor(private http: HttpClient) {}
//   loginForm(post: Post): Observable<Post> {
//     return this.http.post<Post>('/api/login', post);
//   }
//   signupForm(post: Posts): Observable<string> {
//     return this.http.post('/api/signup', post, { responseType: 'text' });
//   }
// }

