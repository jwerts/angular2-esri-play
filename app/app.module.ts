import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { MapService } from './map.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    MapComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    MapService
  ]
})
export class AppModule {
  constructor() {

  }
}
