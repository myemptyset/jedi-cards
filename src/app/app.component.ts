import { Component, OnInit } from '@angular/core';
import AboutProject from './_models/about-project.model';
import Author from './_models/author.model';
import SocialLinks from './_models/social-links.model';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './_shared/_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  private readonly loginUrl = '/login';
  private readonly signinUrl = '/signin';
  private readonly decksUrl = '/decks';

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) {}

  ngOnInit() {
    this._router.events
      .subscribe( event => {
        if (event instanceof NavigationStart) {
          const { url } = event;
          const isLogged = this._auth.isLogged();
          // es el mateix q const url = event.url
          if (url === this.loginUrl || url === this.signinUrl) {
            if (isLogged) {
              this._router.navigateByUrl(this.decksUrl);
            }
          } else if (!isLogged) {
            this._router.navigateByUrl(this.loginUrl);
          }
        }
      });
    }
}


// event => {
//   if (event instanceof NavigationStart) {
//     const { url } = event;
//     const isLogged = this._auth.isLogged();
//     // es el mateix q const url = event.url
//     if (url === this.loginUrl || url === this.signinUrl) {
//       if (isLogged) {
//         this._router.navigateByUrl(this.decksUrl);
//       }
//     } else if (!isLogged) {
//       this._router.navigateByUrl(this.loginUrl);
//     }
// això és el callback de subscribe