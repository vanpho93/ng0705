import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h4>Child component</h4>
        <button class="btn btn-success" (click)="onChange.emit(true);">
            increase
        </button>
        <button class="btn btn-danger" (click)="onChange.emit(false);">
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
    @Output() onChange = new EventEmitter();
}
