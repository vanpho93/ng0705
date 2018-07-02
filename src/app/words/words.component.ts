import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from './types';
import { WordFilterComponent } from './word-filter.component';

@Component({
  selector: 'app-words',
  template: `
      <h4>Words Component</h4>
      <app-word-form
        [shouldShowForm]="shouldShowForm"
        (onToggleForm)="onToggleForm();"
        (onAddWord)="onAddWord($event);"
      ></app-word-form>
      <app-word-filter></app-word-filter>
      <app-word-item
        *ngFor="let word of getFilteredWords()"
        [wordInfo]="word"
        (onRemove)="onRemove($event)"
        (onToggle)="onToggle($event)"
      >
      </app-word-item>
  `
})

export class WordsComponent {
  filterMode: string;
  shouldShowForm: boolean;
  words: Word[];

  constructor(private store: Store<any>) {
    this.store.select('words').subscribe(newWords => this.words = newWords);
    this.store.select('shouldShowForm').subscribe(s => this.shouldShowForm = s);
    this.store.select('filterMode').subscribe(f => this.filterMode = f);
  }

  onToggleForm() { this.shouldShowForm = !this.shouldShowForm; }

  getFilteredWords(): Word[] {
    return this.words.filter(w => {
      if (this.filterMode === 'SHOW_ALL') return true;
      if (this.filterMode === 'SHOW_MEMORIZED') return w.isMemorized;
      return !w.isMemorized;
    });
  }

  onRemove(_id: string) {
    const index = this.words.findIndex(w => w._id === _id);
    this.words.splice(index, 1);
  }

  onToggle(_id: string) {
    const word = this.words.find(w => w._id === _id);
    word.isMemorized = !word.isMemorized;
  }

  onAddWord(word: Word) {
    this.words.unshift(word);
    this.shouldShowForm = false;
  }
}
