import { Component } from '@angular/core';
import User from '../_models/user.model';
import { ApiService } from '../_shared/_services/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})

export class SigninComponent {

  user: User = new User( );
  passwordRepeat = '';

  constructor(
    private _api: ApiService
  ) {}

  onSend() {
    // console.log(this.user.password);
    this._api
        .signin(this.user) //aixo es una promise
        .then(response => { //then (la funcio q fara quan mhagi contestat)
          // el server mha respost
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
  }

  arePasswordsEqual() {
    return this.user.password === this.passwordRepeat;
  }
}
