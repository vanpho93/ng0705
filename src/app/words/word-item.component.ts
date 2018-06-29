import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Word } from './types';

@Component({
    selector: 'app-word-item',
    template: `
        <div class="word">
            <div class="word-container">
              <h3 class="text-success">{{ wordInfo.en }}</h3>
              <h3 class="text-danger">{{ wordInfo.isMemorized ? '******' : wordInfo.vn }}</h3>
            </div>
            <div class="btn-container">
              <button class="btn btn-success" *ngIf="wordInfo.isMemorized" (click)="onToggle.emit(wordInfo._id);">
                Forgot
              </button>
              <button class="btn btn-danger" *ngIf="!wordInfo.isMemorized" (click)="onToggle.emit(wordInfo._id);">
                Memorized
              </button>
              <button class="btn btn-warning" (click)="onRemove.emit(wordInfo._id);">
                Remove
              </button>
            </div>
        </div>
    `
})

export class WordItemComponent {
    @Input() wordInfo: Word;
    @Output() onRemove = new EventEmitter();
    @Output() onToggle = new EventEmitter();
}
