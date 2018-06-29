import { Component } from '@angular/core';
import { Word } from './types';

@Component({
    selector: 'app-parent',
    template: `
        <h4>Parent component</h4>
        <h1>
            Value = {{ value }}
        </h1>
        <app-child
            (onIncrease)="onIncrease();"
            (onDecrease)="onDecrease();"
            (onReset)="onReset();"
            (onChange)="onChange($event);"
        ></app-child>
    `
})

export class ParentComponent {
    value = 1;

    onIncrease() { this.value++; }
    onDecrease() { this.value--; }
    onReset() { this.value = 1; }
    onChange(isIncrease: boolean) {
        isIncrease ? this.value++ : this.value--;
    }
}
