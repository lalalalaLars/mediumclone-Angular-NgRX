import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interface';
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  // Get user from response object
  getUser(respose: AuthResponseInterface): CurrentUserInterface {
    return respose.user;
  }

  // Send register request and return observable of CurrentUserInterface
  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'; // Set url to register endpoint
    return this.http
      .post<AuthResponseInterface>(url, data) // Send POST request to url with data as body
      .pipe(map(this.getUser)); // Map response to CurrentUserInterface using getUser function
  }

  // Send login request and return observable of CurrentUserInterface
  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'; // Set url to login endpoint
    return this.http
      .post<AuthResponseInterface>(url, data) // Send POST request to url with data as body
      .pipe(map(this.getUser)); // Map response to CurrentUserInterface using getUser function
  }

  // Get current user and return observable of CurrentUserInterface
  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user'; // Set url to current user endpoint
    return this.http.get(url).pipe(map(this.getUser)); // Send GET request to url and map response to CurrentUserInterface using getUser function
  }
}
