import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h4>Child component</h4>
        <button class="btn btn-success" (click)="onIncrease.emit();">
            increase
        </button>
        <button class="btn btn-danger" (click)="onDecrease.emit();">
            decrease
        </button>
        <button class="btn btn-warning" (click)="onReset.emit();">
            reset
        </button>
    `
})

export class ChildComponent {
    @Output() onIncrease = new EventEmitter();
    @Output() onDecrease = new EventEmitter();
    @Output() onReset = new EventEmitter();
}
