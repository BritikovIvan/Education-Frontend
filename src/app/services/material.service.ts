import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Material } from '../model/material';
import { User, UserRole } from '../model/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private materialsUrl = 'http://localhost:8080/api/materials';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private authService: AuthService) { }

  // getMaterials(): Observable<Material[]> {
  //   const url = `${this.materialsUrl}?userId=${this.authService.getUser()?.id}`;
  //   return this.http.get<Material[]>(url);
  // }

  getMaterials(): Observable<Material[]> {
    if (this.authService.getUser()?.role === UserRole.Professor) {
      return this.getProfessorMaterials();
    }
    if (this.authService.getUser()?.role === UserRole.Teacher) {
      return this.getTeacherMaterials();
    }
    return new Observable();
  }

  getTeacherMaterials(): Observable<Material[]> {
    const url = `${this.materialsUrl}/teacher?teacherId=${this.authService.getUser()?.id}`;
    return this.http.get<Material[]>(url);
  }

  getProfessorMaterials(): Observable<Material[]> {
    const url = `${this.materialsUrl}/professor?professorId=${this.authService.getUser()?.id}`;
    return this.http.get<Material[]>(url);
  }

  getMaterial(id: number): Observable<Material> {
    const url = `${this.materialsUrl}/${id}`;
    return this.http.get<Material>(url);
  }

  addMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(this.materialsUrl, material, this.httpOptions);
  }

  updateMaterial(material: Material): Observable<any> {
    return this.http.put(this.materialsUrl, material, this.httpOptions);
  }
}
