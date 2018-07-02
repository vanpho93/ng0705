import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-child',
    template: `
        <h4>Child component</h4>
        <button class="btn btn-success" (click)="increase();">
            increase
        </button>
        <button class="btn btn-danger" (click)="decrease(false);">
            decrease
        </button>
        <button class="btn btn-warning" (click)="reset();">
            reset
        </button>
    `
})

export class ChildComponent {
    constructor(private store: Store<any>) { }

    increase() {
        this.store.dispatch({ type: 'INCREASE' });
    }

    decrease() {
        this.store.dispatch({ type: 'DECREASE' });
    }

    reset() {
        this.store.dispatch({ type: 'RESET' });
    }
}
