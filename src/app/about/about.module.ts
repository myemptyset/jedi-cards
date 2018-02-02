import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: AboutComponent },
      // per al root de about carrega el x
    ]),
    SharedModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
