import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BasicComponent} from "./module/basic/component/basic/basic.component";

const routes: Routes = [
  {
    path: '',
    component: BasicComponent
  },{
    path: 'basic',
    component: BasicComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
