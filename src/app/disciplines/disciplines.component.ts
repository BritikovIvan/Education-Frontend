import { Component, OnInit } from '@angular/core';

import { Discipline } from '../model/discipline';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { DisciplineService } from '../services/discipline.service';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.css']
})
export class DisciplinesComponent implements OnInit {

  // token!: string;

  // user!: User | undefined;

  disciplines!: Discipline[];

  constructor(private disciplineService: DisciplineService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getDisciplines();
    // this.getUserDetails();
  }

  getDisciplines(): void {
    this.disciplineService.getDisciplines()
      .subscribe(disciplines => this.disciplines = disciplines);
  }

  // getUserDetails(): void {
  //   this.user = this.authService.getUser();
  // }

  add(name: string, abbreviation: string, description: string): void {
    name = name.trim();
    abbreviation = abbreviation.trim();
    description = description.trim();
    if (!name) { return; }
    if (!abbreviation) { return; }
    this.disciplineService.addDiscipline({
      name,
      abbreviation,
      description
    } as Discipline).subscribe(discipline => {this.disciplines.push(discipline); });
  }

}
