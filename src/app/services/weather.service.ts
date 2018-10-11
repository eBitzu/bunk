import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { serializer } from '../utils/app.utils';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getData(cityArray: string[]) {
    const url = environment.weatherUrl;
    const config = {
      id: [...cityArray],
      units: 'metric',
      appid: environment.weatherApi,
    };
    return this.http.get(`${url}/group?${serializer(config)}`);
  }
}
