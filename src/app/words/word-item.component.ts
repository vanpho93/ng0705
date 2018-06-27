import { Component } from '@angular/core';

@Component({
    selector: 'app-word-item',
    template: `
        <div class="word">
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

export class WordItemComponent {
    wordInfo = { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true };
}
