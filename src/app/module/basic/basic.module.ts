import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './component/basic/basic.component';
import {MaterialModule} from "../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [BasicComponent],
  exports: [BasicComponent]
})
export class BasicModule { }
