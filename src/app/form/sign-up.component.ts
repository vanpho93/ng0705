import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    template: `
    <form style="margin-top: 10px;" [formGroup]="formSignUp" (ngSubmit)="signUp();">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" placeholder="Enter email" formControlName="email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Password" formControlName="password">
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
    <pre>{{ formSignUp.value | json }}</pre>
    `
})

export class SignUpComponent {
    formSignUp = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
    });

    signUp() {
        alert(JSON.stringify(this.formSignUp.value));
    }
}
