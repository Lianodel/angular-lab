import {AstronomicalBody} from "./astronomical-body";

export class Star extends AstronomicalBody {

  constructor(name: string, mass: number, radius: number, color: string) {
    super(name, mass, radius, color)
  }
}
