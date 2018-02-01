import { Component, OnInit } from '@angular/core';
import Deck from '../_models/deck.model';
import { ApiService } from '../_shared/_services/api.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.less']
})
export class DecksComponent implements OnInit {

  decks: Deck[] = [];
  isLoading = true;

  constructor(
    private _api: ApiService
  ) {}

  ngOnInit() {
    this._api
    .getDecks() // aixo es una promise
    .then(response => { // then (la funcio q fara quan mhagi contestat)
      // el server mha respost
      console.log(response);
      this.isLoading = false;
      this.decks = response;
    })
    .catch(error => {
      console.log(error);
    });
  }

  onDeleteDeck(id: string) {
    this._api.deleteDeck(id)
    .then(() => {
      const i = this.decks.findIndex(d => d.id === id);
      // find a seques retorna el deck
      this.decks.splice(i, 1);
      // esborra 1 element en aquell i
    });
// necessitem el then per esborrar al moment
  }

}
