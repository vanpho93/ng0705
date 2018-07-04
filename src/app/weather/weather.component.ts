import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  template: `
      <div style="margin-top: 20px; text-align: center;">
            <h4>{{ message }}</h4>
            <br>
            <input
                class="form-control"
                placeholder="Enter your city name"
                [(ngModel)]="txtCityName"
                (keyUp.enter)="getWeather();"
            />
            <br />
            <button class="btn btn-success form-control" (click)="getWeather();">
                Get Weather
            </button>
      </div>
  `,
  providers: [WeatherService]
})

export class WeatherComponent {
    txtCityName = '';
    cityName: string = null;
    temp: number = null;
    loading = false;

    constructor(private weatherService: WeatherService) {}

    async getWeather() {
        if (this.txtCityName.length < 2) {
            return alert('Please enter a valid name');
        }
        this.loading = true;
        this.cityName = null;
        this.temp = null;
        try {
            this.temp = await this.weatherService.getTemp(this.txtCityName);
            this.loading = false;
            this.cityName = this.txtCityName;
            this.txtCityName = '';
        } catch (error) {
            alert('Cannot find city ' + this.txtCityName);
            this.loading = false;
            this.cityName = null;
            this.temp = null;
            this.txtCityName = '';
        }
    }

    get message(): string {
        if (this.loading) return 'Loading...';
        if (this.cityName) return `${this.cityName} is now ${this.temp}oC`;
        return 'Enter your city name';
    }
}

// http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=
