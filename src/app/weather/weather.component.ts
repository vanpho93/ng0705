import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  template: `
      <div style="margin-top: 20px; text-align: center;">
            <h4>Enter your city name</h4>
            <br>
            <input
                class="form-control"
                placeholder="Enter your city name"
                (keyUp.enter)="getWeather();"
            />
            <br />
            <button class="btn btn-success form-control" (click)="getWeather();">
                Get Weather
            </button>
      </div>
  `
})

export class WeatherComponent {
    txtCityName = '';
    getWeather() {}
}
