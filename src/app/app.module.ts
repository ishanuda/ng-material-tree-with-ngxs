import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from './store';
import { LeftPanelModule } from 'src/app/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule,
    LeftPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
