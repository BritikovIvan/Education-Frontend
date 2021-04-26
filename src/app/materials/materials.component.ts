import { Component, OnInit } from '@angular/core';

import { Material } from '../models/material';
import { MaterialService } from '../services/material.service';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials!: Material[];

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.getMaterials();
  }

  getMaterials(): void {
    this.materialService.getMaterials()
      .subscribe(materials => this.materials = materials);
  }

  add(name: string, type: string, discipline: string, reviewer: string, description: string): void {
    name = name.trim();
    type = type.trim();
    discipline = discipline.trim();
    reviewer = reviewer.trim();
    description = description.trim();
    if (!name) { return; }
    if (!type) { return; }
    this.materialService.addMaterial({
      name: name,
      type: type,
      discipline: discipline,
      reviewer: reviewer,
      description: description
    } as Material).subscribe(material => {this.materials.push(material); });
  }

}
