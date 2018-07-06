import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';

@Injectable()

export class WordService {
    constructor(private http: Http, private store: Store<any>) {}

    async getWords() {
        const url = 'http://localhost:3000/word';
        const res = await this.http.get(url).toPromise();
        const resJson = await res.json();
        const words = resJson.words;
        this.store.dispatch({ type: 'SET_WORDS', words });
    }
}
