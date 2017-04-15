import { Component } from '@angular/core';
//importujemy klasę Article z modułu article.module
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//definiujemy articles: bierzemy  Article mówimy że jest
//składana z tablicy złożonej z Article[], w konstruktorze który
//podaje parametry.
//Tworzymy zdaje się modele Article
export class AppComponent {
  articles: Article[];

addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b:Article) => b.votes - a.votes)
  }

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io',5),
      new Article('Angular 1', 'http://angular1.io',2),
    ];
  }
}
