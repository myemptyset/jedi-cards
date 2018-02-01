import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../../_models/user.model';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class ApiService {

  private readonly _apiUrl = '/api/';
  private readonly loginUrl = '/login';
  // podriem posar la url a environment segons si estem a debug o produccio

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _auth: AuthService
    // per declarar una instancia de un service es posa amb barra baixa davant
  ) { }

  signin(user: User): Promise<any> {
    return this._http.post(this._apiUrl + 'auth/signin', user).toPromise();
  }

  login(email: string, password: string): Promise<any> {
    return this._http.post(
      this._apiUrl + 'auth/login',
      { email: email, password: password })
      .toPromise();
  }
  // es pot escriure email, password

  getDecks(): Promise<any> {
    return this._http.get(this._apiUrl + 'decks')
    .toPromise()
    .catch(e => {
      if (e.status === 401) {
        this._auth.logout();
        this._router.navigateByUrl(this.loginUrl);
      }
    });
  }

  deleteDeck(id: string): Promise<any> {
    return this._http.delete(this._apiUrl + 'decks/' + id)
    .toPromise()
    .catch(e => {
      if (e.status === 401) {
        this._auth.logout();
        this._router.navigateByUrl(this.loginUrl);
      }
    });
  }

}
