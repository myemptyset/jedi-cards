import { Component } from '@angular/core';
import AboutProject from '../_models/about-project.model';
import Author from '../_models/author.model';
import SocialLinks from '../_models/social-links.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {
  // title = 'my app';
  aboutProject: AboutProject = new AboutProject(
    'Jedi Card Api',
    'The project from the Angular',
    'I am the description'
  );

  // social1: SocialLinks = new SocialLinks(
  //   'Twitter',
  //   'twitter.com/emptyset'
  // );

  // social2: SocialLinks = new SocialLinks(
  //   'LinkedIn',
  //   'linkedin.com/emptyset'
  // );

  // test: Array<SocialLinks> = [this.social1, this.social2];

  author: Author = new Author(
    'Anna',
    'Monros',
    'It is me',
    // this.test
    [
      new SocialLinks('Twitter', 'https://twitter.com/emptyset'),
      new SocialLinks('LinkedIn', 'https://linkedin.com/emptyset')
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


