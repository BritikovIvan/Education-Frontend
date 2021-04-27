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

  private authUrl = 'api/login';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private user?: User;

  private token?: string;

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.authUrl, {
      email: email,
      password: password
    }, this.httpOptions)
      .pipe(tap(response => {
        this.user = response.user;
        this.token = response.token;
      }));
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
