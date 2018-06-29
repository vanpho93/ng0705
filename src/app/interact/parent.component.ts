import { Component } from '@angular/core';
import { Word } from './types';

@Component({
    selector: 'app-parent',
    template: `
        <h4>Parent component</h4>
        <h1>
            Value = {{ value }}
        </h1>
        <app-child></app-child>
    `
})

export class ParentComponent {
    value = 1;
}
