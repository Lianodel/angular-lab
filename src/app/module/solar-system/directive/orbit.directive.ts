import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appOrbit]'
})
export class OrbitDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.cx = '50%';
    el.nativeElement.cy = '50%';
    el.nativeElement.rx = '100';
    el.nativeElement.ry = '50';
  }

}
