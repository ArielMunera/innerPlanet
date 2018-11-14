import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';
import { PlanetInfo } from '../planet-info';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-exo-data',
  templateUrl: './exo-data.component.html',
  styleUrls: ['./exo-data.component.css']
})
export class ExoDataComponent implements OnInit {

  public current:PlanetInfo;
  private answer_service: AnswersService;


  constructor(param_answer_service:AnswersService) {

    this.answer_service = param_answer_service;
    this.current = this.answer_service.getPlanet();
    // param_planet_service.getInnerPlanet().subscribe(
    //   (param_planet:PlanetInfo[]) => {
    //     this.planet = param_planet;
    //   }
    // );
  }

  ngOnInit() {
  }

}
