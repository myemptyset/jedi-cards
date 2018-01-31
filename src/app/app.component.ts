import { Component } from '@angular/core';
import AboutProject from './_models/about-project.model';
import Author from './_models/author.model';
import SocialLinks from './_models/social-links.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  // title = 'my app';
  aboutProject: AboutProject = new AboutProject(
    'Jedi Card Api',
    'The project from the Angular',
    'I am the description'
  );

  // social: SocialLinks = new SocialLinks(
  //   'Twitter',
  //   'twitter.com/emptyset'
  // );

  // test: Array<SocialLinks> = this.social;

  author: Author = new Author(
    'Anna',
    'Monros',
    'It is me',
    [
      new SocialLinks('Twitter', 'twitter.com/emptyset'),
      new SocialLinks('Twitter', 'twitter.com/emptyset')
    ]
  );

  getFullAuthorName() {
    return this.author.name + ' ' + this.author.lastname;
  }

  // aboutProject: any = {
  //   title: "Jedi cards"
  // } ho podem fer així, sense crear el model però no fa autocompletar

  // onButtonClicked() {
  //   this.title = "you've clicked the button";
  // }
}
