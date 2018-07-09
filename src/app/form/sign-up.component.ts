import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    template: `
    <form style="margin-top: 10px;" [formGroup]="formSignUp" (ngSubmit)="signUp();">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" placeholder="Enter email" formControlName="email">
        </div>
        <i class="text-danger" style="margin-bottom: 10px; display: block;" *ngIf="formSignUp.get('email').invalid">
            Email khong hop le
        </i>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Password" formControlName="password">
        </div>
        <i class="text-danger" style="margin-bottom: 10px; display: block;" *ngIf="formSignUp.get('password').invalid">
            Password khong hop le
        </i>
        <button type="submit" class="btn btn-primary" [disabled]="formSignUp.invalid">
            Sign Up
        </button>
    </form>
    `
})

export class SignUpComponent {
    formSignUp = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    signUp() {
        alert(JSON.stringify(this.formSignUp.value));
    }
}
