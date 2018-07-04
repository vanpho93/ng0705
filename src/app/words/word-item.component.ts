import { Component, Input } from '@angular/core';
import { Word } from './types';
import { Store } from '@ngrx/store';

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
  constructor(private store: Store<any>) {}

  remove() {
    this.store.dispatch({ type: 'REMOVE_WORD', _id: this.wordInfo._id });
  }

  toggle() {
    this.store.dispatch({ type: 'TOGGLE_WORD', _id: this.wordInfo._id });
  }
}
