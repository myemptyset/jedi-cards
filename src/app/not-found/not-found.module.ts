import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '404', pathMatch: 'full' },
      { path: ':numError', component: NotFoundComponent }
      // per al root de not found carrega el 404
    ]),
    CommonModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }
