import { Component, Input } from '@angular/core';
import { Word } from './types';
import { Store } from '@ngrx/store';
import { WordService } from '../services/word.service';

@Component({
    selector: 'app-word-item',
    template: `
        <div class="word">
            <div class="word-container">
              <h3 class="text-success">{{ wordInfo.en }}</h3>
              <h3 class="text-danger">{{ wordInfo.isMemorized ? '******' : wordInfo.vn }}</h3>
            </div>
            <div class="btn-container">
              <button class="btn btn-success" *ngIf="wordInfo.isMemorized" (click)="toggle();">
                Forgot
              </button>
              <button class="btn btn-danger" *ngIf="!wordInfo.isMemorized" (click)="toggle();">
                Memorized
              </button>
              <button class="btn btn-warning" (click)="remove();">
                Remove
              </button>
            </div>
        </div>
    `
})

export class WordItemComponent {
  @Input() wordInfo: Word;
  constructor(private store: Store<any>, private wordService: WordService) {}

  remove() {
    this.wordService.removeWord(this.wordInfo._id);
  }

  toggle() {
    this.wordService.toggleWord(this.wordInfo._id, !this.wordInfo.isMemorized);
  }
}
