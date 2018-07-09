import { Component } from '@angular/core';

@Component({
    selector: 'app-sign-up',
    template: `
    <form style="margin-top: 10px;">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
    `
})

export class SignUpComponent {}
