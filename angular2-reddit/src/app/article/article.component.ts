
import {
  Component,
  OnInit,
  Input,//Input musi być zainportowany z angularcore
  HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
//Ważne ! mówimy angularowi jaka rzecz/zmienna/obiekt ma być przekazana
//jako parametr do komponentu (w tym wypadku eksportujemy obeikty skostruowane
//z klasy Article)
  @Input() article: Article;


  constructor() {
  }
//ta funkcja voteUp zapobiega przeładowywaniu się strony
//po click
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
