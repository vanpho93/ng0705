import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

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
    filterMode: string;

    constructor(private store: Store<any>) {
      this.store.select('filterMode').subscribe(f => this.filterMode = f);
    }
}
