import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <h4>List Component</h4>
    <button class="btn btn-success" *ngIf="!shouldShowInput">
      Add email
    </button>
    <input
      *ngIf="shouldShowInput"
      class="form-control"
      placeholder="Enter your email"
      [(ngModel)]="txtEmail"
      (keyUp.enter)="addEmail();"
    />
    <div>
      <p *ngFor="let x of emails">{{x}}</p>
    </div>
  `
})

export class ListComponent {
  shouldShowInput = false;
  txtEmail = '';
  emails = [
    'teo@gmail.com',
    'ti@gmail.com',
    'tun@gmail.com',
    'tuan@gmail.com',
  ];

  addEmail() {
    this.emails.push(this.txtEmail);
    this.txtEmail = '';
  }
}
