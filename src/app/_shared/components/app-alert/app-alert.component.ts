import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.less']
})
export class AppAlertComponent implements OnInit {

  constructor(
    private _alert: AlertService
  ) { }

  ngOnInit() {
    this._alert.alert.subscribe(a => {
      
    })
  }

}
