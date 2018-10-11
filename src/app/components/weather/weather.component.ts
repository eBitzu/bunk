import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  cities: string[];
  componentActive = true;
  returnedData$: Observable<any>;
  constructor(private service: WeatherService) {
    this.cities = environment.cityIds;
    this.returnedData$ = this.service.getData(this.cities);
  }
}
