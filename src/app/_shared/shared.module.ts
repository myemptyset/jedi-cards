import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPopupComponent } from './components/app-popup/app-popup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    AppPopupComponent
  ],
  exports: [
    FormsModule,
    CommonModule,
    AppPopupComponent
  ]
})
export class SharedModule { }
