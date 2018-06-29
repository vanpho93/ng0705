import { Component } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h4>Child component</h4>
        <button class="btn btn-success">
            increase
        </button>
        <button class="btn btn-danger">
            decrease
        </button>
        <button class="btn btn-warning">
            reset
        </button>
    `
})

export class ChildComponent {}
