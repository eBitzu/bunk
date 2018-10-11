import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FteamComponent } from './components/fteam/fteam.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FootballPitchComponent } from './components/football-pitch/football-pitch.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    QuizComponent,
    FteamComponent,
    WeatherWidgetComponent,
    QuizQuestionComponent,
    FootballPitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
