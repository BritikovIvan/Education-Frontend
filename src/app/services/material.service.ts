import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Material } from '../models/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private materialsUrl = 'api/materials';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this.materialsUrl, );
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
