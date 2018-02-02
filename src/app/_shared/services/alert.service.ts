import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlertService {

  private _alertSubject: Subject<Object> = new Subject<Object>();

  alert: Observable = this._alertSubject.asObservable();

  // la gent q necessita saber sobre alert sha de subscriure al subject
  // algunes persones posen $ al final del nom de un observable, nosaltres passem
  // el subject es una revista i el observable son les msubscripcions

  error() {
    const newAlert = {}
    this._alertSubject.next(newAlert);
  }

  info() {
    const newAlert = {}
    this._alertSubject.next(newAlert);
  }
  

}
