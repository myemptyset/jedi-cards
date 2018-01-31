import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent {

  readonly minLenghtPassword = 6;

  email: string;
  password = '';

  isPasswordCorrect = false;

  onSend() {
    console.log(this.email, this.password);
  }

  onCheckPassword() {

    console.log(this.password);

    this.isPasswordCorrect = this.password.length >= this.minLenghtPassword;

  }

}
