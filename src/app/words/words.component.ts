import { Component } from '@angular/core';

@Component({
  selector: 'app-words',
  template: `
    <h4>Words Component</h4>
      <button class="btn btn-primary" (click)="showForm();" *ngIf="!shouldShowForm" style="margin-bottom: 10px">
        +
      </button>
      <div class="word form-group" style="width: 250px" *ngIf="shouldShowForm">
        <input placeholder="English" class="form-control" [(ngModel)]="txtEn" />
        <br />
        <input placeholder="Vietnamese" class="form-control" [(ngModel)]="txtVn" />
        <br />
        <div class="btn-container">
            <button class="btn btn-success" (click)="addWord();">
                Add word
            </button>
            <button class="btn btn-danger" (click)="cancelForm();">
                Cancel
            </button>
        </div>
      </div>
    <select class="form-control" style="width: 250px" [(ngModel)]="filterMode">
      <option value="SHOW_ALL">SHOW ALL</option>
      <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
      <option value="SHOW_FORGOT">SHOW FORGOT</option>
    </select>
    <div class="word" *ngFor="let wordInfo of getFilteredWords()">
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
  shouldShowForm = false;
  words: Word[] = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: false },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: true },
  ];

  showForm() { this.shouldShowForm = true; }

  cancelForm() {
    this.shouldShowForm = false;
    this.txtEn = '';
    this.txtVn = '';
  }

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
    this.shouldShowForm = !this.shouldShowForm;
  }

  removeWord(_id: string) {
    const index = this.words.findIndex(w => w._id === _id);
    this.words.splice(index, 1);
  }

  toggleWord(_id: string) {
    const word = this.words.find(w => w._id === _id);
    word.isMemorized = !word.isMemorized;
  }

  getFilteredWords(): Word[] {
    return this.words.filter(w => {
      if (this.filterMode === 'SHOW_ALL') return true;
      if (this.filterMode === 'SHOW_MEMORIZED') return w.isMemorized;
      return !w.isMemorized;
    });
  }
}

interface Word {
  _id: string;
  en: string;
  vn: string;
  isMemorized: boolean;
}
