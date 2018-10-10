import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherComponent } from './components/weather/weather.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FteamComponent } from './components/fteam/fteam.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    QuizComponent,
    FteamComponent,
    WeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
