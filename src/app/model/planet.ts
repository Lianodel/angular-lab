import {AstronomicalBody} from "./astronomical-body";
import {Star} from "./star";

export class Planet extends AstronomicalBody {
  protected star: Star;

  constructor(name: string, mass: number, radius: number, color: string, star: Star) {
    super(name, mass, radius, color);
    this.star = star;
  }
}
