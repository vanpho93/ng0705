import { Component } from '@angular/core';

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
  `
})

export class WeatherComponent {
    txtCityName = '';
    cityName: string = null;
    temp: number = null;
    loading = false;

    getWeather() {
        if (this.txtCityName.length < 2) {
            return alert('Please enter a valid name');
        }
        this.loading = true;
        this.cityName = null;
        this.temp = null;
        setTimeout(() => {
            this.loading = false;
            this.cityName = this.txtCityName;
            this.temp = 30;
            this.txtCityName = '';
        }, 500);
    }

    get message(): string {
        if (this.loading) return 'Loading...';
        if (this.cityName) return `${this.cityName} is now ${this.temp}oC`;
        return 'Enter your city name';
    }
}
