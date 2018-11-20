import { Component, OnInit } from '@angular/core';
import { QUESTIONS, Question } from '../questionnary';
import { PlanetInfo } from '../planet-info';
import { Router } from '@angular/router';
import { AnswersService } from '../answers.service';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questions: Question[];
  public selectedReponse: Question;
  public planet: PlanetInfo[];
  private router: Router;

  public reponses: string[] = [];
  private message: string = 'loading please wait';

  public answer_service: AnswersService;

  constructor(param_planet_service: NasaService, param_router: Router, param_answer_service: AnswersService) {
    this.router = param_router;
    this.questions = [];
    this.planet = [];
    this.answer_service = param_answer_service;

    param_planet_service.getInnerPlanet().subscribe(
      (param_planet: PlanetInfo[]) => {
        this.planet = param_planet;
        this.answer_service.planetApi = this.planet;
      }
    )
  }

  ngOnInit() {
    this.questions = this.getQuestions();
    this.selectedReponse = this.questions[0];
  }

  getQuestions(): Question[] {
    return QUESTIONS;
  }

  onSelect(reponse: string, quest: Question): void {
    if (quest.id > 0) {
      this.answer_service.reponses.push(reponse);
    }

    if (this.answer_service.reponses.length >= 5) {
      this.router.navigate(["/planet"]);
    }

    this.selectedReponse = this.questions[quest.id + 1];
  }

  onSelectReturn(reponse: Question): void {
    this.answer_service.reponses.pop();
    this.selectedReponse = this.questions[reponse.id - 1];
  }
}
