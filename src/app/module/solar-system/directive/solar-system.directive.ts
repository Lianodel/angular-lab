import {AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {Orbit} from "../../../model/orbit";
import {Star} from "../../../model/star";
import {Planet} from "../../../model/planet";
import {Moon} from "../../../model/moon";

@Directive({
  selector: '[solarSystem]'
})
export class SolarSystemDirective implements AfterViewInit{

  @Input() private star: Star;
  @Input() private orbits: Orbit[];
  @Input() private set realRatio(v: boolean) {
    this._realRatio = v;
    this.redraw();
  }

  private sunElement: any;
  private multiplicator = 10;
  private _realRatio: boolean;

  constructor(
    private svg: ElementRef,
    private _renderer: Renderer2
  ) {
  }

  ngAfterViewInit() {
    const xViewBox: number = this.svg.nativeElement.parentElement.clientWidth;
    const yViewBox: number = this.svg.nativeElement.parentElement.clientHeight;
    this.svg.nativeElement.setAttribute('viewBox', '0 0 ' + xViewBox + ' ' + yViewBox);
  }

  private drawSun(): void {
    if (this.star) {
      this.sunElement = this.drawCircle('50%', '50%', this.getRadius(this.star), this.star.color);

      this._renderer.appendChild(this.svg.nativeElement.firstChild, this.sunElement);
      setTimeout( () => {
        this.drawOrbits();
      }, 300);
    }
  }

  private drawOrbits(): void {
    if (this.orbits && this.orbits.length) {
      this.orbits.forEach( (orbit: Orbit, index: number) => {
        const orbitElement = this._renderer.createElement('ellipse', 'svg');
        const rx: number = (this._realRatio)?this.getRxOrbit(orbit):100 + (100 * index);
        const ry: number = (this._realRatio)?this.getRyOrbit(orbit):100 + (100 * index);

        orbitElement.setAttribute('cx', this.getOrbitPosition(orbit));
        orbitElement.setAttribute('cy', '50%');
        orbitElement.setAttribute('rx', rx);
        orbitElement.setAttribute('ry', ry);
        orbitElement.setAttribute('fill', 'transparent');
        orbitElement.setAttribute('stroke', 'grey');
        orbitElement.setAttribute('stroke-width', 1);

        this._renderer.appendChild(this.svg.nativeElement.firstChild, orbitElement);

        setTimeout( () => {
          if (orbit.body) {
            this.drawPlanet(orbit.body, orbitElement);
          }
        }, 300);
      });
    }
  }

  private getOrbitPosition(orbit: Orbit): number | string {
    return this.sunElement.cx.animVal.value;
  }

  private getRxOrbit(orbit: Orbit): number {
    return orbit.demiGrandAxe * 2 * this.multiplicator;
  }

  private getRyOrbit(orbit: Orbit): number {
    return orbit.demiPetitAxe * 2 * this.multiplicator;
  }

  private getRadius(body: any): number{
    return (this._realRatio)?body.radius * this.multiplicator:(body instanceof Star)?50:((body instanceof Planet)?30:((body instanceof Moon)?15:0));
  }

  private drawPlanet(planet: Planet | Moon, orbitElement: any) {
    const xPosition = orbitElement.cx.animVal.value - (orbitElement.rx.animVal.value);
    const planetElement = this.drawCircle(xPosition, '50%', this.getRadius(planet), planet.color);
    this._renderer.appendChild(this.svg.nativeElement.firstChild, planetElement);
  }

  private drawCircle(cx: number | string, cy: number | string, r: number | string, fill: string, stroke?: string, strokeWidth?: number): any {
    const elmt = this._renderer.createElement('circle', 'svg');
    elmt.setAttribute('cx', cx);
    elmt.setAttribute('cy', cy);
    elmt.setAttribute('r', r);
    elmt.setAttribute('fill', fill);
    if (stroke) {
      elmt.setAttribute('stroke', stroke);
      if (strokeWidth) {
        elmt.setAttribute('stroke-width', strokeWidth);
      }
    }

    return elmt;
  }

  private redraw() {
    this._renderer.removeChild(this.svg.nativeElement, this.svg.nativeElement.firstChild);
    this._renderer.appendChild(this.svg.nativeElement, this._renderer.createElement('g', 'svg'));
    setTimeout( () => {
      this.drawSun();
    }, 100);
  }
}
