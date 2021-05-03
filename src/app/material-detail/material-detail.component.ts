import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Material, MaterialType, ReviewStatus } from '../model/material';
import { MaterialService } from '../services/material.service';
import { User, UserRole } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Discipline } from '../model/discipline';
import { UserService } from '../services/user.service';
import { DisciplineService } from '../services/discipline.service';


@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.css']
})
export class MaterialDetailComponent implements OnInit {

  material!: Material;

  reviewStatuses = ReviewStatus;

  status!: ReviewStatus;

  user: User | undefined;

  userRoles = UserRole;

  disciplineId!: number;

  type!: MaterialType;

  materialTypes = MaterialType;

  disciplines!: Discipline[];

  reviewerId: number = 0;

  reviewers!: User[];

  authorId!: number;

  authors!: User[];

  constructor(private route: ActivatedRoute,
    private materialService: MaterialService,
    private location: Location,
    private authService: AuthService,
    private userService: UserService,
    private disciplineService: DisciplineService) { }

  ngOnInit(): void {
    this.getMaterial();
    this.getDisciplines();
    this.getUser();
    this.getReviewers();
    this.getAuthors();
  }

  getMaterial(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.materialService.getMaterial(id)
      .subscribe(material => this.material = material);
  }

  getReviewers(): void {
    this.userService.getProfessors()
      .subscribe(reviewers => this.reviewers = reviewers);
  }

  getAuthors(): void {
    this.userService.getTeachers()
        .subscribe(authors => this.authors = authors);
  }

  getDisciplines():void {
    this.disciplineService.getDisciplines()
      .subscribe(disciplines => this.disciplines = disciplines);
  }

  getUser(): void {
    this.user = this.authService.getUser();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const material = this.material;
    if (this.user?.role === UserRole.TEACHER) {
      material.type = this.type;
      material.academicDiscipline = {id: this.disciplineId } as Discipline;
      material.author = { id: this.authorId } as User;
      material.reviewer = { id: this.reviewerId } as User;
    }
    material.reviewStatus = this.status;
    this.materialService.updateMaterial(material)
      .subscribe(() => this.goBack());
  }

}

