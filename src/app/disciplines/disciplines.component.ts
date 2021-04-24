import { Component, OnInit } from '@angular/core';

import { Discipline } from '../models/discipline';
import { DisciplineService } from '../services/discipline.service';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.css']
})
export class DisciplinesComponent implements OnInit {

  disciplines!: Discipline[];

  constructor(private disciplineService: DisciplineService) { }

  ngOnInit(): void {
    this.getDisciplines();
  }

  getDisciplines(): void {
    this.disciplineService.getDisciplines()
      .subscribe(disciplines => this.disciplines = disciplines);
  }

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
