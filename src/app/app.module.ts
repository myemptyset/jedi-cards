import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { routesAnna } from './routes';
import { ApiService } from './_shared/_services/api.service';
import { HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from './login/login.component';
// import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // SigninComponent
    // NotFoundComponent,
    // AboutComponent ANNA Ja no ens calen
  ],
  imports: [
    RouterModule.forRoot(routesAnna),
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
