import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-parent',
    template: `
        <h4>Parent component</h4>
        <h1>
            Value = {{ value }}
            <app-child></app-child>
        </h1>
    `
})

export class ParentComponent {
    value: number;

    constructor(private store: Store<any>) {
        this.store.select('value').subscribe(newValue => this.value = newValue);
    }
}
