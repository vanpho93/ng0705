import { Component } from '@angular/core';
import { Word } from './types';

@Component({
  selector: 'app-words',
  template: `
    <h4>Words Component</h4>
    <app-word-form [shouldShowForm]="shouldShowForm"></app-word-form>
    <select class="form-control" style="width: 250px" [(ngModel)]="filterMode">
      <option value="SHOW_ALL">SHOW ALL</option>
      <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
      <option value="SHOW_FORGOT">SHOW FORGOT</option>
    </select>
    <app-word-item *ngFor="let word of getFilteredWords()" [wordInfo]="word">
    </app-word-item>
  `
})

export class WordsComponent {
  filterMode = 'SHOW_ALL';
  words: Word[] = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: false },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: true },
  ];

  getFilteredWords(): Word[] {
    return this.words.filter(w => {
      if (this.filterMode === 'SHOW_ALL') return true;
      if (this.filterMode === 'SHOW_MEMORIZED') return w.isMemorized;
      return !w.isMemorized;
    });
  }
}
