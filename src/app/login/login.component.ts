import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms/src/directives/validators';
import { ApiService } from '../_shared/_services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent {

  readonly minLenghtPassword = 6;

  email: string;
  password = '';
  isLoading = false;
  isPasswordCorrect = false;

  constructor(
    private _api: ApiService
  ) {}

  // onSend() {
  //   console.log(this.email, this.password);
  // }

  onSend() {
    this.isLoading = true;
    this._api
        .login(this.email, this.password) // aixo es una promise
        .then(response => { // then (la funcio q fara quan mhagi contestat)
          // el server mha respost
          this.isLoading = false;
          console.log(response);
        })
        .catch(error => {
          this.isLoading = false;
          console.log(error);
        });
  }

  onCheckPassword() {

    console.log(this.password);

    this.isPasswordCorrect = this.password.length >= this.minLenghtPassword;

  }

}
