import {Planet} from "./planet";
import {Moon} from "./moon";

export class Orbit {
  public demiGrandAxe: number;
  public demiPetitAxe: number;
  public apoapseDistance: number;
  public periapseDistance: number;
  public body: Planet | Moon;

  constructor(dga: number, dpa: number, ad: number, pd: number, body?: Planet | Moon) {
    this.demiGrandAxe = dga;
    this.demiPetitAxe = dpa;
    this.apoapseDistance = ad;
    this.periapseDistance = pd;
    if(body) {
      this.body = body;
    }
  }
}
