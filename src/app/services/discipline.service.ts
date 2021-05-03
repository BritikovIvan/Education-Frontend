import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Discipline } from '../model/discipline';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {

  private disciplinesUrl = 'http://localhost:8080/api/disciplines';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private authService: AuthService) { }

  getDisciplines(): Observable<Discipline[]> {
    this.httpOptions.headers.set('token', `${this.authService.getToken}`);
    return this.http.get<Discipline[]>(this.disciplinesUrl, this.httpOptions);
  }

  getDiscipline(id: number): Observable<Discipline> {
    this.httpOptions.headers.set('token', `${this.authService.getToken}`);
    const url = `${this.disciplinesUrl}/${id}`;
    return this.http.get<Discipline>(url, this.httpOptions);
  }

  addDiscipline(discipline: Discipline): Observable<Discipline> {
    this.httpOptions.headers.set('token', `${this.authService.getToken}`);
    return this.http.post<Discipline>(this.disciplinesUrl, discipline, this.httpOptions);
  }

  updateDiscipline(discipline: Discipline): Observable<any> {
    this.httpOptions.headers.set('token', `${this.authService.getToken}`);
    const url = `${this.disciplinesUrl}/${discipline.id}`; 
    return this.http.patch(url, discipline, this.httpOptions);
  }
}
