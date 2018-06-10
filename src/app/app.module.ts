import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from './/app-routing.module';
import {MainComponent} from './component/main/main.component';
import {MaterialModule} from "./module/material/material.module";
import {MenuComponent} from './component/menu/menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BasicModule} from "./module/basic/basic.module";
import {SolarSystemModule} from "./module/solar-system/solar-system.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    BasicModule,
    SolarSystemModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
