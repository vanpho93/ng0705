import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <h4>Parent component</h4>
        <app-child></app-child>
    `
})

export class ParentComponent {}
