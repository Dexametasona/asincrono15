import { CompAsinc15Module } from './comp-asinc15/comp-asinc15.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompAsinc15Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
