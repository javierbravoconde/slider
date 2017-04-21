import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SwiperModule } from '../../node_modules/angular2-useful-swiper'; //or for angular-cli the path will be ../../node_modules/angular2-useful-swiper


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
