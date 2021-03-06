import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AuthResponse } from '../model/authResponse';
import { User, UserRole } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[] = [
    {id: 2, fullName: 'John', email: 'some@gmail.com', password: '1111', role: 'Professor' as UserRole},
    {id: 5, fullName: 'Jane', email: 'some1@gmail.com', password: '2222', role: 'Teacher' as UserRole}
  ]

  private authUrl = 'http://localhost:8080/api/login';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private user?: User;

  private token?: string;

  login(email: string, password: string): Observable<AuthResponse> {
    // return this.http.post<AuthResponse>(this.authUrl, {
    //   email: email,
    //   password: password
    // }, this.httpOptions)
    //   .pipe(tap(response => {
    //     this.user = response.user;
    //     this.token = response.token;
    //   }));
    const user = this.users.find(u => u.email === email && u.password === password);
    const authResponse = {
      token: "sometoken",
      user: user
    } as unknown as AuthResponse;
    return of(authResponse).pipe(tap(response => {
          this.user = response.user;
          this.token = response.token;
        }));;
  }

  logout(): void { 
    this.user = undefined;
    this.token = undefined;
  }

  constructor(private http: HttpClient) { }

  getUser(): User | undefined {
    return this.user;
  }

  getToken(): string | undefined {
    return this.token;
  }
}
