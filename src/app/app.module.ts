import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { routesAnna } from './routes';


@NgModule({
  declarations: [
    AppComponent
    // NotFoundComponent,
    // AboutComponent ANNA Ja no ens calen
  ],
  imports: [
    RouterModule.forRoot(routesAnna),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
