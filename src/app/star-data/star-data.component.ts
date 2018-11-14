import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
import { PlanetInfo } from '../planet-info';

@Component({
  selector: 'app-star-data',
  templateUrl: './star-data.component.html',
  styleUrls: ['./star-data.component.css']
})
export class StarDataComponent implements OnInit {

  public answer_service:AnswersService;
  public essai:PlanetInfo;
  public id: number;
  public current:PlanetInfo;

  constructor(param_answer_service:AnswersService) {
    this.answer_service = param_answer_service;
    this.essai = param_answer_service.test;
    this.current = param_answer_service.getPlanet();
  }

  ngOnInit() {
  }

}
