import { Component } from '@angular/core';

@Component({
  selector: 'app-words',
  template: `
    <h4>Words Component</h4>
    <div class="word" *ngFor="let wordInfo of words">
      <div class="word-container">
        <h3 class="text-success">{{ wordInfo.en }}</h3>
        <h3 class="text-danger">{{ wordInfo.isMemorized ? '******' : wordInfo.vn }}</h3>
      </div>
      <div class="btn-container">
        <button class="btn btn-success" *ngIf="wordInfo.isMemorized">
          Forgot
        </button>
        <button class="btn btn-danger" *ngIf="!wordInfo.isMemorized">
          Memorized
        </button>
        <button class="btn btn-warning">
          Remove
        </button>
      </div>
    </div>
  `
})

export class WordsComponent {
  words: Word[] = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: false },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: true },
  ];
}

interface Word {
  _id: string;
  en: string;
  vn: string;
  isMemorized: boolean;
}
