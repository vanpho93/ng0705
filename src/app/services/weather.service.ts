import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class WeatherService {
    constructor(private http: Http) {}

    async getTemp(cityName: string): Promise<number> {
        const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
        const res = await this.http.get(url + cityName).toPromise();
        const resJson = await res.json();
        return resJson.main.temp;
    }
}
