import { Component, OnInit } from '@angular/core';
import {Star} from "../../../../model/star";
import {Planet} from "../../../../model/planet";
import {Orbit} from "../../../../model/orbit";

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.scss']
})
export class SolarSystemComponent implements OnInit {
  public sun: Star = new Star('Soleil', 1.9891 * Math.pow(10, 30), 696342 / 149597870.7, 'yellow');
  public mercury: Planet = new Planet('Mercure', 3.3011 * Math.pow(10, 23), 2439.7 / 149597870.7, '#8d888e', this.sun);
  public venus: Planet = new Planet('Vénus', 4.8685 * Math.pow(10, 24), 6051.8 / 149597870.7, '#cec9c3', this.sun);
  public earth: Planet = new Planet('Terre', 5.9736 * Math.pow(10, 24), 6371.008 / 149597870.7, '#536ad8', this.sun);
  public mars: Planet = new Planet('Mars', 641.85 * Math.pow(10, 21), 3389.5 / 149597870.7, '#ddb97f', this.sun);
  public jupiter: Planet = new Planet('Jupiter', 1.8986 * Math.pow(10, 27), 69911 / 149597870.7, '#f4a473', this.sun);
  public saturn: Planet = new Planet('Saturne', 5.9736 * Math.pow(10, 24), 58232 / 149597870.7, '#d2ae74', this.sun);
  public uranus: Planet = new Planet('Uranus', 8.6810 * Math.pow(10, 25), 25460.5 / 149597870.7, '#84a1b3', this.sun);
  public neptune: Planet = new Planet('Neptune', 102.43 * Math.pow(10, 24), 24622 / 149597870.7, '#71b8ff', this.sun);

  public orbits: Orbit[] = [
    new Orbit(0.38709893, 0.3788265, 0.46669835, 0.30749951, this.mercury), // Mercury Orbit
    new Orbit(0.723332, 0.7233153, 0.72523128, 0.71843270, this.venus), // Venus Orbit
    new Orbit(1.0000001124, 0.99986049, 1.0167103335, 0.9832898912, this.earth), // Earth Orbit
    new Orbit(1.52366231, 1.51700011, 1.66599116, 1.38133346, this.mars), // Mars Orbit
    new Orbit(5.20336301, 5.19726669, 5.46, 4.95, this.jupiter), // Jupiter Orbit
    new Orbit(9.53667594, 9.52268354, 10.05350840, 9.02063224, this.saturn), // Saturn Orbit
    new Orbit(19.189165, 19.16772577, 20.096, 18.282, this.uranus), // Uranus Orbit
    new Orbit(30.10366151, 30.10255191, 30.44125206, 29.76607095, this.neptune), // Neptune Orbit
  ];

  public realRatio = false;

  constructor() { }

  ngOnInit() {
  }

  changeRealRatio(e: Event) {
    this.realRatio = !this.realRatio;
  }
}
