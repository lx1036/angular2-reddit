import { Component } from '@angular/core';
import {Article} from "../article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  articles: Article[];

  public constructor() {
    this.articles= [
      new Article('Angular2', 'http://angular.io', 10),
      new Article('Angular3', 'http://angular.io', 11),
      new Article('Angular4', 'http://angular.io', 12),
    ];
  }
  
  public addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    
    return false;
  }
  
  public sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
