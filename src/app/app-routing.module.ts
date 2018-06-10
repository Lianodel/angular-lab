import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BasicComponent} from "./module/basic/component/basic/basic.component";
import {SolarSystemComponent} from "./module/solar-system/component/solar-system/solar-system.component";
import {SolarSystemModule} from "./module/solar-system/solar-system.module";

const routes: Routes = [
  {
    path: '',
    component: BasicComponent
  },{
    path: 'basic',
    component: BasicComponent
  },{
    path: 'solar-system',
    loadChildren: () => SolarSystemModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
