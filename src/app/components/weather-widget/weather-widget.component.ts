import { Component, OnInit, Input } from '@angular/core';

interface WeatherResponseData {
  temp: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})

export class WeatherWidgetComponent implements OnInit {
  @Input()
  input: WeatherResponseData;
  @Input()
  city: string;
  constructor() { }

  ngOnInit() {
  }

}
