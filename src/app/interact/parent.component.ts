import { Component } from '@angular/core';
import { Word } from './types';

@Component({
    selector: 'app-parent',
    template: `
        <h4>Parent component</h4>
        <app-child [wordInfo]="word"></app-child>
    `
})

export class ParentComponent {
    word: Word = { en: 'Six', vn: 'sau' };
}
