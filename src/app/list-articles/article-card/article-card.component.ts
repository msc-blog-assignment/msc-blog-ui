import {Component, Input} from '@angular/core';
import {Article} from '../list-articles.state';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {

  @Input() article: Article;

  constructor() {
  }

}
