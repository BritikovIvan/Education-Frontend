import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Material, ReviewStatus } from '../model/material';
import { MaterialService } from '../services/material.service';
import { User, UserRole } from '../model/user';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.css']
})
export class MaterialDetailComponent implements OnInit {

  material!: Material;

  reviewStatuses = ReviewStatus;

  status!: ReviewStatus;

  user!: User | undefined;

  userRoles = UserRole;

  constructor(private route: ActivatedRoute,
    private materialService: MaterialService,
    private location: Location,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getMaterial();
    this.getUser();
  }

  getMaterial(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.materialService.getMaterial(id)
      .subscribe(material => this.material = material);
  }

  getUser(): void {
    this.user = this.authService.getUser();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.materialService.updateMaterial(this.material)
      .subscribe(() => this.goBack());
  }

}

