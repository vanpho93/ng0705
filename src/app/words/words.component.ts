import { Component } from '@angular/core';

@Component({
  selector: 'app-words',
  template: `
    <h4>Words Component</h4>
    <div class="word form-group" style="width: 250px">
      <input placeholder="English" class="form-control" [(ngModel)]="txtEn" />
      <br />
      <input placeholder="Vietnamese" class="form-control" [(ngModel)]="txtVn" />
      <br />
      <div class="btn-container">
          <button class="btn btn-success" (click)="addWord();">
              Add word
          </button>
          <button class="btn btn-danger">
              Cancel
          </button>
      </div>
    </div>
    <select class="form-control" style="width: 250px" [(ngModel)]="filterMode">
      <option value="SHOW_ALL">SHOW ALL</option>
      <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
      <option value="SHOW_FORGOT">SHOW FORGOT</option>
    </select>
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
  txtVn = '';
  txtEn = '';
  filterMode = 'SHOW_ALL';
  words: Word[] = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: false },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: true },
  ];

  addWord() {
    const word: Word = {
      _id: Date.now() + '',
      en: this.txtEn,
      vn: this.txtVn,
      isMemorized: false
    };
    this.words.unshift(word);
    this.txtEn = '';
    this.txtVn = '';
  }

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
