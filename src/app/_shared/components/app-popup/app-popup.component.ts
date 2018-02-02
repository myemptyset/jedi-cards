import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './app-popup.component.html',
  styleUrls: ['./app-popup.component.less']
})
export class AppPopupComponent {

  isOpen = false;

  openPopup() {
    this.isOpen = true;
  }

}
