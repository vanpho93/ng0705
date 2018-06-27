import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <h4>Child component</h4>
        <p>{{ wordInfo.en }}</p>
        <p>{{ wordInfo.vn }}</p>
    `
})

export class ChildComponent {
    @Input() wordInfo;
}
