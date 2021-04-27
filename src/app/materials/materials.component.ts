import { Component, OnInit } from '@angular/core';

import { Material } from '../model/material';
import { Discipline } from '../model/discipline';
import { MaterialService } from '../services/material.service';
import { DisciplineService } from '../services/discipline.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  disciplineId!: number;

  materials!: Material[];

  disciplines!: Discipline[];

  constructor(private materialService: MaterialService, private disciplineService: DisciplineService) { }

  ngOnInit(): void {
    this.getMaterials();
    this.getDisciplines();
  }

  getMaterials(): void {
    this.materialService.getMaterials()
      .subscribe(materials => this.materials = materials);
  }

  add(name: string, type: string, reviewer: string, description: string): void {
    name = name.trim();
    type = type.trim();
    reviewer = reviewer.trim();
    description = description.trim();
    if (!name) { return; }
    if (!type) { return; }
    this.materialService.addMaterial({
      name: name,
      type: type,
      discipline: { id: this.disciplineId },
      reviewer: reviewer,
      description: description
    } as Material).subscribe(material => {this.materials.push(material); });
  }

  getDisciplines():void {
    this.disciplineService.getDisciplines()
      .subscribe(disciplines => this.disciplines = disciplines);
  }

}
