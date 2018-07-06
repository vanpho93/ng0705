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

    async removeWord(_id: string) {
        const url = 'http://localhost:3000/word/' + _id;
        const res = await this.http.delete(url).toPromise();
        const resJson = await res.json();
        if (!resJson.success) return alert(resJson.message);
        this.store.dispatch({ type: 'REMOVE_WORD', _id });

        // this.http.put(url, { isMemorized: false }).toPromise();
    }

    async addWord(en: string, vn: string) {
        const url = 'http://localhost:3000/word';
        const res = await this.http.post(url, { en, vn }).toPromise();
        const resJson = await res.json();
        if (!resJson.success) return alert(resJson.message);
        this.store.dispatch({ type: 'ADD_WORD', word: resJson.word });
    }

    async toggleWord(_id: string, isMemorized: boolean) {
        const url = 'http://localhost:3000/word/' + _id;
        const res = await this.http.put(url, { isMemorized }).toPromise();
        const resJson = await res.json();
        if (!resJson.success) return alert(resJson.message);
        this.store.dispatch({ type: 'TOGGLE_WORD', _id });
    }
}
