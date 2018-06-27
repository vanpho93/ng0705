import { Component } from '@angular/core';
import { Word } from './types';

@Component({
    selector: 'app-parent',
    template: `
        <h4>Parent component</h4>
        <app-child *ngFor="let x of words" [wordInfo]="x"></app-child>
    `
})

export class ParentComponent {
    words: Word[] = [
        { en: 'Six', vn: 'sau' },
        { en: 'Five', vn: 'nam' },
        { en: 'Four', vn: 'bon' },
    ];
}
