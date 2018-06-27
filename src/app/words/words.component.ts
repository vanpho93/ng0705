import { Component, ViewChild } from '@angular/core';
import { Word } from './types';
import { WordFilterComponent } from './word-filter.component';

@Component({
  selector: 'app-words',
  template: `
      <h4>Words Component</h4>
      <app-word-form [shouldShowForm]="shouldShowForm"></app-word-form>
      <app-word-filter></app-word-filter>
      <app-word-item *ngFor="let word of getFilteredWords()" [wordInfo]="word">
      </app-word-item>
  `
})

export class WordsComponent {
  @ViewChild(WordFilterComponent) wordFilterComponent: WordFilterComponent;
  shouldShowForm = false;
  words: Word[] = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: false },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: true },
  ];

  getFilteredWords(): Word[] {
    return this.words.filter(w => {
      if (this.wordFilterComponent.filterMode === 'SHOW_ALL') return true;
      if (this.wordFilterComponent.filterMode === 'SHOW_MEMORIZED') return w.isMemorized;
      return !w.isMemorized;
    });
  }
}
