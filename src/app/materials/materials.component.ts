import { Component, OnInit } from '@angular/core';

import { Material, MaterialType } from '../model/material';
import { User, UserRole } from '../model/user';
import { Discipline } from '../model/discipline';
import { MaterialService } from '../services/material.service';
import { DisciplineService } from '../services/discipline.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  disciplineId!: number;

  materials!: Material[];

  type!: MaterialType;

  materialTypes = MaterialType;

  disciplines!: Discipline[];

  user?: User | undefined;

  userRole = UserRole;

  constructor(private materialService: MaterialService, private disciplineService: DisciplineService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getMaterials();
    this.getDisciplines();
  }

  getMaterials(): void {
    this.materialService.getMaterials()
      .subscribe(materials => this.materials = materials);
  }

  add(name: string, reviewer: string, description: string): void {
    name = name.trim();
    reviewer = reviewer.trim();
    description = description.trim();
    if (!name) { return; }
    if (!this.type) { return; }
    this.materialService.addMaterial({
      name: name,
      type: this.type,
      academicDiscipline: { id: this.disciplineId } as Discipline,
      reviewer: {} as User,
      description: description
    } as Material).subscribe(material => {this.materials.push(material); });
  }

  getDisciplines():void {
    this.disciplineService.getDisciplines()
      .subscribe(disciplines => this.disciplines = disciplines);
  }

  getUser(): void {
    this.user = this.authService.getUser();
  }

}
