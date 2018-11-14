import { Component } from '@angular/core';
import { PlanetInfo } from './planet-info';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string
  public planet:PlanetInfo[];
  
constructor(param_planet_service:NasaService){
    this.title = 'Inner Planet';
    this.planet = [];

    param_planet_service.getInnerPlanet().subscribe(
      (param_planet:PlanetInfo[]) => {
        this.planet = param_planet;
      }
    )
  }
}
