import { Component, OnInit } from '@angular/core';
import { PlanetImg, createFromPlanetInfo } from '../planet-img';
import { AnswersService } from '../answers.service';
import { PlanetInfo } from '../planet-info';
import { NasaService } from '../nasa.service';

@Component({
    selector: 'app-planet-view',
    templateUrl: './planet-view.component.html',
    styleUrls: ['./planet-view.component.css']
})
export class PlanetViewComponent implements OnInit {

    // tslint:disable-next-line:max-line-length
    //public planetImg: PlanetImg[] = ;

    public answer_service: AnswersService;
    public innerPlanet: PlanetInfo;
    public id: number;
    public current: PlanetInfo;
    public img:PlanetImg;

    constructor(param_planet_service: NasaService, param_answer_service: AnswersService) {
        
        this.answer_service = param_answer_service;
        this.img = this.answer_service.getPlanetImg();
        this.current = this.answer_service.getPlanet();
        // param_planet_service.getInnerPlanet().subscribe(
        //     (param_planet: PlanetInfo[]) => {
        //         this.planet = param_planet;
        //         this.innerPlanet = param_answer_service.test;
        //     }
        // );
    }



    ngOnInit() {
    }

}
