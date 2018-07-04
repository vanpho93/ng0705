import { Component } from '@angular/core';
import { Http } from '@angular/http';

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

    constructor(private http: Http) {}

    getWeather() {
        if (this.txtCityName.length < 2) {
            return alert('Please enter a valid name');
        }
        this.loading = true;
        this.cityName = null;
        this.temp = null;
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        this.http.get(url + this.txtCityName)
        .toPromise()
        .then(res => res.json())
        .then(resJson => {
            this.loading = false;
            this.cityName = this.txtCityName;
            this.temp = resJson.main.temp;
            this.txtCityName = '';
        });
    }

    get message(): string {
        if (this.loading) return 'Loading...';
        if (this.cityName) return `${this.cityName} is now ${this.temp}oC`;
        return 'Enter your city name';
    }
}

// http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=
