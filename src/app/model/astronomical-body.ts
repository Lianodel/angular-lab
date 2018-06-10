export class AstronomicalBody {
  public name: string;
  public mass: number;
  public radius: number;
  public color: string;

  constructor(name: string, mass: number, radius: number, color: string) {
    this.name = name;
    this.mass = mass;
    this.radius = radius;
    this.color = color;
  }
}
