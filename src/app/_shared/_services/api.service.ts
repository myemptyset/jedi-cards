import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../../_models/user.model';


@Injectable()
export class ApiService {

  private readonly _apiUrl = '/api/';
  // podriem posar la url a environment segons si estem a debug o produccio

  constructor(
    private _http: HttpClient
    // per declarar una instancia de un service es posa amb barra baixa davant
  ) { }

  signin(user: User): Promise<any> {
    return this._http.post(this._apiUrl + "auth/signin", user).toPromise();
  }

}
