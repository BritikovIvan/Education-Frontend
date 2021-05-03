import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
  })
export class UserService {
  
    private usersUrl = 'http://localhost:8080/api';
  
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    constructor(private http: HttpClient) { }

    getProfessors(): Observable<User[]> {
        const url = `${this.usersUrl}/professors`;
        return this.http.get<User[]>(url);
    }

    getTeachers(): Observable<User[]> {
      const url = `${this.usersUrl}/teachers`;
      return this.http.get<User[]>(url);
    }
}