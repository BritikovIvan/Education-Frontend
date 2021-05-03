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
    if (this.authService.getUser()?.role === UserRole.PROFESSOR) {
      return this.getProfessorMaterials();
    }
    if (this.authService.getUser()?.role === UserRole.TEACHER) {
      return this.getTeacherMaterials();
    }
    return new Observable();
  }

  getTeacherMaterials(): Observable<Material[]> {
    this.httpOptions.headers.set('token', `${this.authService.getToken}`);
    const url = `${this.materialsUrl}/teacher?teacherId=${this.authService.getUser()?.id}`;
    return this.http.get<Material[]>(url, this.httpOptions);
  }

  getProfessorMaterials(): Observable<Material[]> {
    this.httpOptions.headers.set('token', `${this.authService.getToken}`);
    const url = `${this.materialsUrl}/professor?professorId=${this.authService.getUser()?.id}`;
    return this.http.get<Material[]>(url, this.httpOptions);
  }

  getMaterial(id: number): Observable<Material> {
    this.httpOptions.headers.set('token', `${this.authService.getToken}`);
    const url = `${this.materialsUrl}/${id}`;
    return this.http.get<Material>(url, this.httpOptions);
  }

  addMaterial(material: Material): Observable<Material> {
    this.httpOptions.headers.set('token', `${this.authService.getToken}`);
    return this.http.post<Material>(this.materialsUrl, material, this.httpOptions);
  }

  updateMaterial(material: Material): Observable<Material> {
    if (this.authService.getUser()?.role === UserRole.PROFESSOR) {
      return this.updateProfessorMaterial(material);
    }
    if (this.authService.getUser()?.role === UserRole.TEACHER) {
      return this.updateTeacherMaterial(material);
    }
    return new Observable();
  }

  updateProfessorMaterial(material: Material): Observable<Material> {
    this.httpOptions.headers.set('token', `${this.authService.getToken}`);
    const url = `${this.materialsUrl}/${material.id}/professor`;
    return this.http.patch<Material>(url, material, this.httpOptions);
  }

  updateTeacherMaterial(material: Material): Observable<Material> {
    this.httpOptions.headers.set('token', `${this.authService.getToken}`);
    const url = `${this.materialsUrl}/${material.id}/teacher`;
    return this.http.patch<Material>(url, material, this.httpOptions);
  }
}
