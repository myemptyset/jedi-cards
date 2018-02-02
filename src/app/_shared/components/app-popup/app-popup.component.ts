import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './app-popup.component.html',
  styleUrls: ['./app-popup.component.less']
})
export class AppPopupComponent {

  isOpen = false;

  @Input() popupTitle: string;
  // referenciat al html de decks amb []
  // podriem passar per l input la funcionalitat de esborrar la deck pero no mola, millor avisar a decks i q decks esborri

	@Input() buttonTitles: string[] = ['Cancelar', 'Aceptar'];

	@Output() accept = new EventEmitter<any>();

  openPopup() {
    console.log('hulaaaaa');
    this.isOpen = true;
  }

  closePopup() {
    this.isOpen = false;
  }

  onAccept() {
    this.accept.emit();
    // $event serà hello
    this.closePopup();
  }

}
