import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from './types';

@Component({
  selector: 'app-words',
  template: `
      <h4>Words Component</h4>
      <app-word-form></app-word-form>
      <app-word-filter></app-word-filter>
      <app-word-item
        *ngFor="let word of getFilteredWords()"
        [wordInfo]="word"
      >
      </app-word-item>
  `
})

export class WordsComponent {
  filterMode: string;
  words: Word[];

  constructor(private store: Store<any>) {
    this.store.select('words').subscribe(newWords => this.words = newWords);
    this.store.select('filterMode').subscribe(f => this.filterMode = f);
  }

  getFilteredWords(): Word[] {
    return this.words.filter(w => {
      if (this.filterMode === 'SHOW_ALL') return true;
      if (this.filterMode === 'SHOW_MEMORIZED') return w.isMemorized;
      return !w.isMemorized;
    });
  }
}
