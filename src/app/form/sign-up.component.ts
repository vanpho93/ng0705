import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    template: `
    <form style="margin-top: 10px;" [formGroup]="formSignUp" (ngSubmit)="signUp();">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" placeholder="Enter email" formControlName="email">
        </div>
        <i *ngIf="shouldShowEmailError">
            *{{ emailErrorMessage }}
        </i>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Password" formControlName="password">
        </div>
        <i *ngIf="shouldShowPasswordError">
            *Password khong hop le
        </i>
        <div class="form-group">
          <label for="exampleInputPassword1">Re-enter Password</label>
          <input type="password" class="form-control" placeholder="Password" formControlName="repassword">
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="formSignUp.invalid">
            Sign Up
        </button>
    </form>
    <pre>{{ formSignUp.errors | json }}</pre>
    `,
    styles: [`
        i { color: red; display: block; margin-bottom: 10px; }
        input.ng-invalid.ng-touched { border-color: red; }
    `]
})

export class SignUpComponent {
    formSignUp = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email, gmail]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)]),
        repassword: new FormControl('')
    }, passwordsMustEqual);

    signUp() {
        alert(JSON.stringify(this.formSignUp.value));
    }

    get shouldShowEmailError(): boolean {
        const emailControl = this.formSignUp.get('email');
        return emailControl.invalid && emailControl.touched;
    }

    get emailErrorMessage(): string {
        const { errors } = this.formSignUp.get('email');
        if (!errors) return null;
        if (errors.required) return 'Email is required.';
        if (errors.email) return 'Email is invalid.';
        if (errors.gmail) return 'Email must be gmail.';
        return 'Email is invalid.';
    }

    get shouldShowPasswordError(): boolean {
        const passwordControl = this.formSignUp.get('password');
        return passwordControl.invalid && passwordControl.touched;
    }
}

function gmail(control: FormControl): ValidationErrors | null {
    const value: string = control.value;
    if (value.endsWith('@gmail.com')) return null;
    return { gmail: true };
}

function passwordsMustEqual(form: FormGroup): ValidationErrors | null {
    const passwordControl = form.get('password');
    const rePasswordControl = form.get('repassword');
    if (passwordControl.value === rePasswordControl.value) return null;
    return { passwordsMustEqual: true };
}

// function myEmail(provider: string) {
//     return function (control: FormControl): ValidationErrors | null {
//         const value: string = control.value;
//         if (value.endsWith(`@${provider}.com`)) return null;
//         return { myEmail: true };
//     };
// }
