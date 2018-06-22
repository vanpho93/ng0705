import { Component } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <h4>Word component</h4>
        <p>Value = {{ value }}</p>
        <button class="btn btn-success" (click)="increase();">
            increase
        </button>
        <button class="btn btn-danger" (click)="decrease();">
            decrease
        </button>
        <button class="btn btn-warning" (click)="reset();">
            reset
        </button>
    `
})

export class WordComponent {
    value = 1;

    increase() { this.value++; }
    decrease() { this.value--; }
    reset() { this.value = 1; }
}
