import { Component } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <h4>Word component</h4>
        <h1 class="{{ className }}">
            Value = {{ value }}
        </h1>
        <button class="btn btn-success" (click)="increase();">
            increase
        </button>
        <button class="btn btn-danger" (click)="decrease();">
            decrease
        </button>
        <button class="btn btn-warning" (click)="reset();">
            reset
        </button>
        <!-- <img [src]="imageSrc" /> -->
        <br>
        <button class="btn btn-primary" [disabled]="value % 2 === 1">
            Stop
        </button>
    `
})

export class WordComponent {
    value = 1;
    imageSrc = 'https://www.google.com/logos/doodles/2018/world-cup-2018-day-9-5987135852118016-5692201761767424-ssw.png';
    increase() { this.value++; }
    decrease() { this.value--; }
    reset() { this.value = 1; }
    get className() {
        return this.value % 2 === 0 ? 'text-primary' : 'text-danger';
    }
}
