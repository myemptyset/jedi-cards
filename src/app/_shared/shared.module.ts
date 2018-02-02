import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPopupComponent } from './components/app-popup/app-popup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AppPopupComponent,
    CommonModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    CommonModule,
    AppPopupComponent
  ]
})
export class SharedModule { }
