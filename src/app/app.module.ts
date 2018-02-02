import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { routesAnna } from './routes';
import { ApiService } from './_shared/_services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_shared/_services/auth.service';
import { CookieService } from 'ng2-cookies';
import { AppPopupComponent } from './_shared/components/app-popup/app-popup.component';
import { SharedModule } from './_shared/shared.module';
// import { LoginComponent } from './login/login.component';
// import { SigninComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    AppComponent
    // LoginComponent,
    // SigninComponent
    // NotFoundComponent,
    // AboutComponent ANNA Ja no ens calen
  ],
  imports: [
    RouterModule.forRoot(routesAnna),
    HttpClientModule,
    BrowserModule,
    SharedModule
  ],
  providers: [
    ApiService,
    AuthService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
