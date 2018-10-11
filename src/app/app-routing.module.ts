import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FteamComponent } from './components/fteam/fteam.component';
const appRoutes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  },
  {
    path: 'fteam',
    component: FteamComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
  )],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
