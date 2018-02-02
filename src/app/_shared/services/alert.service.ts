import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import Alert from '../../_models/alert.model';

@Injectable()
export class AlertService {

  private _alertSubject: Subject<Alert> = new Subject<Alert>();

  alert: Observable<Alert> = this._alertSubject.asObservable();

  // la gent q necessita saber sobre alert sha de subscriure al subject
  // algunes persones posen $ al final del nom de un observable, nosaltres passem
  // el subject es una revista i el observable son les msubscripcions

  error(message, title = 'Error:') {
    const newAlert = new alert ();
    this._alertSubject.next(newAlert);
  }

  info(message, title = 'Attention') {
    const newAlert = new Alert ();
    this._alertSubject.next(newAlert);
  }

}
