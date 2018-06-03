import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
