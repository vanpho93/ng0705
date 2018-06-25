import { Component } from '@angular/core';

@Component({
  selector: 'app-words',
  template: `
    <h4>Words Component</h4>
    <div class="word form-group" style="width: 250px">
      <input placeholder="English" class="form-control"/>
      <br />
      <input placeholder="Vietnamese" class="form-control"/>
      <br />
      <div class="btn-container">
          <button class="btn btn-success">
              Add word
          </button>
          <button class="btn btn-danger">
              Cancel
          </button>
      </div>
    </div>
    <div class="word" *ngFor="let wordInfo of words">
      <div class="word-container">
        <h3 class="text-success">{{ wordInfo.en }}</h3>
        <h3 class="text-danger">{{ wordInfo.isMemorized ? '******' : wordInfo.vn }}</h3>
      </div>
      <div class="btn-container">
        <button class="btn btn-success" *ngIf="wordInfo.isMemorized" (click)="toggleWord(wordInfo._id)">
          Forgot
        </button>
        <button class="btn btn-danger" *ngIf="!wordInfo.isMemorized" (click)="toggleWord(wordInfo._id)">
          Memorized
        </button>
        <button class="btn btn-warning" (click)="removeWord(wordInfo._id);">
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

  removeWord(_id: string) {
    const index = this.words.findIndex(w => w._id === _id);
    this.words.splice(index, 1);
  }

  toggleWord(_id: string) {
    const word = this.words.find(w => w._id === _id);
    word.isMemorized = !word.isMemorized;
  }
}

interface Word {
  _id: string;
  en: string;
  vn: string;
  isMemorized: boolean;
}
