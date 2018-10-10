import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable } from 'rxjs';
import {takeWhile, map} from 'rxjs/operators';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {
  cities: string[];
  componentActive = true;
  returnedData$: Observable<any>;
  constructor(private service: WeatherService) {
    this.cities = environment.cityIds;
  }

  ngOnInit() {
    this.returnedData$ = this.service.getData(this.cities).pipe(
      takeWhile(() => this.componentActive),
      map(resp => resp)
    );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

}
