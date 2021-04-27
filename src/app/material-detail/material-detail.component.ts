import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Material } from '../model/material';
import { MaterialService } from '../services/material.service';


@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.css']
})
export class MaterialDetailComponent implements OnInit {

  material!: Material;

  constructor(private route: ActivatedRoute,
    private materialService: MaterialService,
    private location: Location) { }

  ngOnInit(): void {
    this.getMaterial();
  }

  getMaterial(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.materialService.getMaterial(id)
      .subscribe(material => this.material = material);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.materialService.updateMaterial(this.material)
      .subscribe(() => this.goBack());
  }

}

