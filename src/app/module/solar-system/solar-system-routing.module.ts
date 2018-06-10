import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SolarSystemComponent} from "./component/solar-system/solar-system.component";

const routes: Routes = [
  {
    path: '',
    component: SolarSystemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolarSystemRoutingModule { }
