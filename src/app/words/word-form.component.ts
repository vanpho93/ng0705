import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-word-form',
    template: `
     <button class="btn btn-primary" *ngIf="!shouldShowForm" style="margin-bottom: 10px">
        +
      </button>
      <div class="word form-group" style="width: 250px" *ngIf="shouldShowForm">
        <input placeholder="English" class="form-control" [(ngModel)]="txtEn" />
        <br />
        <input placeholder="Vietnamese" class="form-control" [(ngModel)]="txtVn" />
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
    `
})

export class WordFormComponent {
    @Input() shouldShowForm: boolean;
    txtVn = '';
    txtEn = '';
}
