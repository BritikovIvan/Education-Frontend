import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
export class UserService {
  
    private usersUrl = 'http://localhost:8080/api';
  
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    constructor(private http: HttpClient, private authService: AuthService) { }

    getProfessors(): Observable<User[]> {
      this.httpOptions.headers.set('token', `${this.authService.getToken}`);
        const url = `${this.usersUrl}/professors`;
        return this.http.get<User[]>(url, this.httpOptions);
    }

    getTeachers(): Observable<User[]> {
      this.httpOptions.headers.set('token', `${this.authService.getToken}`);
      const url = `${this.usersUrl}/teachers`;
      return this.http.get<User[]>(url, this.httpOptions);
    }
}