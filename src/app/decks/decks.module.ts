import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecksComponent } from './decks.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: DecksComponent },
    ]),
    CommonModule
  ],
  declarations: [DecksComponent]
})
export class DecksModule { }
