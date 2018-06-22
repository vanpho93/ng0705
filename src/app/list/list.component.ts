import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <h4>List Component</h4>
    <p>{{ txtEmail }}</p>
    <input
        class="form-control"
        placeholder="Enter your email"
        [(ngModel)]="txtEmail"
    />
  `
})

export class ListComponent {
    txtEmail = '';
}
