import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private planetService: Http;

  constructor(param_http_service: Http) {
    this.planetService = param_http_service;
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /*public getInnerPlanet(param_:xxx, param_:xxx): Observable<Array<string>> {
    let url: string = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?";
    url += "table=exoplanets";


    /*const obs1:Observable<Response> = this.service.get(url);

    return obs1.pipe(
      map(
        (data: Response): any[] => {
          let raw: any[] = data.json();
          let planet:any = {};
          let i:number = raw.length;

          if (i > 1) {
            let rad = this.getRandomInt(i-1);
          } else {
            let rad = 0;
          }
          return raw[i];
        }
      )
    );
  }*/

  /*let i:number = data.length;
  let rad:number = 0;
  if (i > 1) {
    rad = this.getRandomInt(i-1);
  } else {
    rad = 0;
  }*/

  public getInnerPlanet():Observable<any[]>{

    let url: string = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?";
    url += "table=exoplanets";
    /*On sélectionne la masse de la planète (en masse terrestre),
    la distance entre le soleil et l'étoile du système (en parsec),
    le temps d'orbite (en jours),
    le nombre de planètes dans le système
    et la température de la planète (en Kelvin)*/
    url += "&select=pl_masse,st_dist,pl_orbper,pl_pnum,pl_eqt";
    url += ",pl_name,pl_rade,pl_orbsmax,st_age,st_mass";
    url += "&format=json";

    const treatment = (param_response:Response):any[] => {
      let data:any[] = param_response.json();
      return data as any[];
    }

    const obs1:Observable<Response> = this.planetService.get(url);

    const obs2 = map(treatment);

    return obs1.pipe(obs2);
  }
}
