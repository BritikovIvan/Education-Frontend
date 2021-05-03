import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Discipline } from '../model/discipline';
import { DisciplineService } from '../services/discipline.service';
import { UserService } from '../services/user.service';
import { User } from '../model/user';


@Component({
  selector: 'app-discipline-detail',
  templateUrl: './discipline-detail.component.html',
  styleUrls: ['./discipline-detail.component.css']
})
export class DisciplineDetailComponent implements OnInit {

  discipline!: Discipline;

  authorId!: number;

  authors!: User[];

  constructor(private route: ActivatedRoute,
    private disciplineService: DisciplineService,
    private location: Location,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getDiscipline();
    this.getProfessors();
  }

  getDiscipline(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.disciplineService.getDiscipline(id)
      .subscribe(discipline => this.discipline = discipline);
  }

  getProfessors(): void {
    this.userService.getProfessors()
    .subscribe(authors => this.authors = authors);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const discipline = this.discipline;
    discipline.author = {id: this.authorId} as User;
    this.disciplineService.updateDiscipline(this.discipline)
      .subscribe(() => this.goBack());
  }

}
