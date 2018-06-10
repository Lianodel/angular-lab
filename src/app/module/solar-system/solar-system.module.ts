import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarSystemComponent } from './component/solar-system/solar-system.component';
import { SunComponent } from './component/sun/sun.component';
import { EarthComponent } from './component/earth/earth.component';
import { MercuryComponent } from './component/mercury/mercury.component';
import { UranusComponent } from './component/uranus/uranus.component';
import { VenusComponent } from './component/venus/venus.component';
import { MarsComponent } from './component/mars/mars.component';
import { JupiterComponent } from './component/jupiter/jupiter.component';
import { SaturnComponent } from './component/saturn/saturn.component';
import { NeptuneComponent } from './component/neptune/neptune.component';
import {SolarSystemRoutingModule} from "./solar-system-routing.module";
import {SolarSystemDirective} from "./directive/solar-system.directive";
import {MatCheckboxModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    SolarSystemRoutingModule,
    MatCheckboxModule
  ],
  declarations: [
    SolarSystemComponent,
    SunComponent,
    EarthComponent,
    MercuryComponent,
    UranusComponent,
    VenusComponent,
    MarsComponent,
    JupiterComponent,
    SaturnComponent,
    NeptuneComponent,
    SolarSystemDirective
  ],
  exports: [
    SolarSystemComponent
  ]
})
export class SolarSystemModule { }
