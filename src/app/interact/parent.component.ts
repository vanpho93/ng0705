import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h4>Parent component</h4>
        <app-child [wordInfo]="word"></app-child>
    `
})

export class ParentComponent {
    word = { en: 'Six', vn: 'sau' };
}
