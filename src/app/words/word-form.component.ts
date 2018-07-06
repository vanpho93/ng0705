import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from './types';
import { WordService } from '../services/word.service';

@Component({
    selector: 'app-word-form',
    template: `
        <button
            class="btn btn-primary"
            *ngIf="!shouldShowForm"
            style="margin-bottom: 10px"
            (click)="toggleForm();"
        >
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
            <button class="btn btn-danger" (click)="toggleForm();">
                Cancel
            </button>
        </div>
      </div>
    `
})

export class WordFormComponent {
    shouldShowForm: boolean;
    txtVn = '';
    txtEn = '';
    constructor(private store: Store<any>, private wordService: WordService) {
        this.store.select('shouldShowForm').subscribe(s => this.shouldShowForm = s);
    }
    addWord() {
        this.wordService.addWord(this.txtEn, this.txtVn);
        this.txtEn = '';
        this.txtVn = '';
    }

    toggleForm() {
        this.store.dispatch({ type: 'TOGGLE_FORM' });
    }
}
