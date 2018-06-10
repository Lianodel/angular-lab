import {AstronomicalBody} from "./astronomical-body";
import {Planet} from "./planet";

export class Moon extends AstronomicalBody {
  protected planet: Planet;

  constructor(name: string, mass: number, radius: number, color: string, planet: Planet) {
    super(name, mass, radius, color);
    this.planet = planet;
  }
}
