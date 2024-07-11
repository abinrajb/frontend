import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    apiUrl = '/api';

    constructor(private http: HttpClient) { }

    // Login method
    login(loginPayload: any): Observable<any> {
        return this.http.post<any>('/log', loginPayload);
    }

    Signup(signupPayLoad: any): Observable<any> {
        return this.http.post<any>('/sign', signupPayLoad)
    }

}


