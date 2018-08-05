import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LegendComponent } from './legend/legend.component';


@NgModule({
  declarations: [
    AppComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
