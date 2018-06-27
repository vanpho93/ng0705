import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-word-filter',
    template: `
        <select class="form-control" style="width: 250px" [value]="filterMode">
            <option value="SHOW_ALL">SHOW ALL</option>
            <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
            <option value="SHOW_FORGOT">SHOW FORGOT</option>
        </select>
    `
})

export class WordFilterComponent {
    @Input() filterMode: string;
}
