import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherComponent } from './components/weather/weather.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FteamComponent } from './components/fteam/fteam.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    QuizComponent,
    FteamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
