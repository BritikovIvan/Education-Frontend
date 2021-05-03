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
    return this.http.get<Discipline[]>(this.disciplinesUrl);
  }

  getDiscipline(id: number): Observable<Discipline> {
    const url = `${this.disciplinesUrl}/${id}`;
    return this.http.get<Discipline>(url);
  }

  addDiscipline(discipline: Discipline): Observable<Discipline> {
    return this.http.post<Discipline>(this.disciplinesUrl, discipline, this.httpOptions);
  }

  updateDiscipline(discipline: Discipline): Observable<any> {
    const url = `${this.disciplinesUrl}/${discipline.id}`; 
    return this.http.patch(url, discipline, this.httpOptions);
  }
}
