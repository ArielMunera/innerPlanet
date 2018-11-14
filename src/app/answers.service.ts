import { Injectable } from '@angular/core';
import { PlanetInfo } from './planet-info';
import { PlanetImg, createFromPlanetInfo } from './planet-img';

@Injectable({
  providedIn: 'root'
})

export class AnswersService {

  public reponses: string[];
  public test: PlanetInfo;
  public planetApi: PlanetInfo[];

  private current:PlanetInfo;

  constructor() {
    this.reset();
  }

  reset(){
    this.current = null;
    this.reponses = [];
    this.test = {
      pl_name: "no_name",

      pl_masse: 0,
      pl_pnum: 0,
      st_dist: 0,
      pl_orbper: 0,
      pl_eqt: 0,

      pl_rade: 0,
      pl_orbsmax: 0,
      st_age: 0,
      st_mass: 0
    };
    this.planetApi = [];
  }

  getPlanetImg():PlanetImg{
    return createFromPlanetInfo(this.getPlanet());
  }

  getPlanet(): PlanetInfo {

    if( this.current !== null ){
      return this.current;
    }

    let param_api = this.planetApi;
    let finalPlanet: PlanetInfo[] = [];
    let oldFinalPlanet: PlanetInfo[] = [];
    const reponse = this.reponses;

    /******************** QUESTION 1 ********************/
    for (let i = 0; i < param_api.length; i++) {
      if (param_api[i].pl_masse == null) {
        param_api[i].pl_masse = (0.5 + (Math.random() * (9600 - 0.5)));
      }
    }
    if (reponse[0] == "OCEAN") {
      for (let i = 0; i < param_api.length; i++) {
        let currentPlanet: PlanetInfo = param_api[i];
        if (currentPlanet.pl_masse > 10.00) {
          finalPlanet.push(currentPlanet);
        }
      }
    }
    else if (reponse[0] == "MOUNTAIN") {
      for (let i = 0; i < param_api.length; i++) {
        let currentPlanet: PlanetInfo = param_api[i];
        if (currentPlanet.pl_masse <= 10) {
          finalPlanet.push(currentPlanet);
        }
      }
    }

    if (finalPlanet.length == 0) {
      finalPlanet = param_api;
    }

    /******************** QUESTION 2 ********************/
    oldFinalPlanet = finalPlanet;
    finalPlanet = [];
    for (let i = 0; i < oldFinalPlanet.length; i++) {
      if (oldFinalPlanet[i].pl_pnum == null) {
        oldFinalPlanet[i].pl_pnum = (1 + (Math.random() * (8 - 1)));
      }
    }
    if (reponse[1] == "SOCIABLE") {
      for (let i = 0; i < oldFinalPlanet.length; i++) {
        let currentPlanet: PlanetInfo = oldFinalPlanet[i];
        if (currentPlanet.pl_pnum > 1) {
          finalPlanet.push(currentPlanet);
        }
      }
    }
    else if (reponse[1] == "LONER") {
      for (let i = 0; i < oldFinalPlanet.length; i++) {
        let currentPlanet: PlanetInfo = oldFinalPlanet[i];
        if (currentPlanet.pl_pnum == 1) {
          finalPlanet.push(currentPlanet);
        }
      }
    }

    if (finalPlanet.length == 0) {
      finalPlanet = oldFinalPlanet;
    }

    /******************** QUESTION 3 ********************/
    oldFinalPlanet = finalPlanet;
    finalPlanet = [];
    for (let i = 0; i < oldFinalPlanet.length; i++) {
      if (oldFinalPlanet[i].st_dist == null) {
        oldFinalPlanet[i].st_dist = (1.29 + (Math.random() * (8500 - 1.29)));
      }
    }
    if (reponse[2] == "TRIP") {
      for (let i = 0; i < oldFinalPlanet.length; i++) {
        let currentPlanet: PlanetInfo = oldFinalPlanet[i];
        if (currentPlanet.st_dist > 622.30) {
          finalPlanet.push(currentPlanet);
        }
      }
    }
    else if (reponse[2] == "COUCH POTATOES") {
      for (let i = 0; i < oldFinalPlanet.length; i++) {
        let currentPlanet: PlanetInfo = oldFinalPlanet[i];
        if (currentPlanet.st_dist <= 622.30) {
          finalPlanet.push(currentPlanet);
        }
      }
    }

    if (finalPlanet.length == 0) {
      finalPlanet = oldFinalPlanet;
    }

    /******************** QUESTION 4 ********************/
    oldFinalPlanet = finalPlanet;
    finalPlanet = [];
    for (let i = 0; i < oldFinalPlanet.length; i++) {
      if (oldFinalPlanet[i].pl_orbper == null) {
        oldFinalPlanet[i].pl_orbper = (0.1 + (Math.random() * (10000 - 0.1)));
      }
    }
    if (reponse[3] == "SPORTY") {
      for (let i = 0; i < oldFinalPlanet.length; i++) {
        let currentPlanet: PlanetInfo = oldFinalPlanet[i];
        if (currentPlanet.pl_orbper < 12) {
          finalPlanet.push(currentPlanet);
        }
      }
    }
    else if (reponse[3] == "LAZY") {
      for (let i = 0; i < oldFinalPlanet.length; i++) {
        let currentPlanet: PlanetInfo = oldFinalPlanet[i];
        if (currentPlanet.pl_orbper >= 12) {
          finalPlanet.push(currentPlanet);
        }
      }
    }

    if (finalPlanet.length == 0) {
      finalPlanet = oldFinalPlanet;
    }

    /******************** QUESTION 5 ********************/
    oldFinalPlanet = finalPlanet;
    finalPlanet = [];
    for (let i = 0; i < oldFinalPlanet.length; i++) {
      if (oldFinalPlanet[i].pl_eqt == null) {
        oldFinalPlanet[i].pl_eqt = (50 + (Math.random() * (4100 - 50)));
      }
    }
    if (reponse[4] == "ICE") {
      for (let i = 0; i < oldFinalPlanet.length; i++) {
        let currentPlanet: PlanetInfo = oldFinalPlanet[i];
        if (currentPlanet.pl_eqt <= 273.15) {
          finalPlanet.push(currentPlanet);
        }
      }
    }
    else if (reponse[4] == "FIRE") {
      for (let i = 0; i < oldFinalPlanet.length; i++) {
        let currentPlanet: PlanetInfo = oldFinalPlanet[i];
        if (currentPlanet.pl_eqt > 273.15) {
          finalPlanet.push(currentPlanet);
        }
      }
    }

    if (finalPlanet.length == 0) {
      finalPlanet = oldFinalPlanet;
    }

    let rand: number = 0;
    if (finalPlanet.length > 1) {
      rand = Math.floor(Math.random() * finalPlanet.length);
    }

    if (oldFinalPlanet[rand].pl_rade == null) {
      oldFinalPlanet[rand].pl_rade = (1 + (Math.random() * (77 - 1)));
    }
    if (oldFinalPlanet[rand].pl_orbsmax == null) {
      oldFinalPlanet[rand].pl_orbsmax = (0.01 + (Math.random() * (2500 - 0.01)));
    }
    if (oldFinalPlanet[rand].st_age == null) {
      oldFinalPlanet[rand].st_age = (0.001 + (Math.random() * (12.5 - 0.001)));
    }
    if (oldFinalPlanet[rand].st_mass == null) {
      oldFinalPlanet[rand].st_mass = (0.02 + (Math.random() * (23.5 - 0.02)));
    }

    finalPlanet[rand].pl_masse = parseFloat((finalPlanet[rand].pl_masse).toFixed(2));
    finalPlanet[rand].pl_eqt = parseFloat((finalPlanet[rand].pl_eqt - 273.15).toFixed(2));
    finalPlanet[rand].pl_rade = parseFloat((finalPlanet[rand].pl_rade * 6371).toFixed(2));
    finalPlanet[rand].st_dist = finalPlanet[rand].st_dist * 3.26;
    finalPlanet[rand].pl_orbper = parseFloat(finalPlanet[rand].pl_orbper.toFixed(2));

    this.current = finalPlanet[rand];
    return this.current;
  }
}
