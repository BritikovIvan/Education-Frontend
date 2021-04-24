import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Discipline } from '../models/discipline';
import { DisciplineService } from '../services/discipline.service';


@Component({
  selector: 'app-discipline-detail',
  templateUrl: './discipline-detail.component.html',
  styleUrls: ['./discipline-detail.component.css']
})
export class DisciplineDetailComponent implements OnInit {

  discipline!: Discipline;

  constructor(private route: ActivatedRoute,
    private disciplineService: DisciplineService,
    private location: Location) { }

  ngOnInit(): void {
    this.getDiscipline();
  }

  getDiscipline(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || -1);
    if (id !== -1) {
      this.disciplineService.getDiscipline(id)
        .subscribe(discipline => this.discipline = discipline);
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.disciplineService.updateDiscipline(this.discipline)
      .subscribe(() => this.goBack());
  }

}
