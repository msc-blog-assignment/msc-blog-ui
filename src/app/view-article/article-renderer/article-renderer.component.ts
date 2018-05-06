import {Component, Input, OnInit} from '@angular/core';
import {ViewArticle, ViewArticleState} from '../view-article.state';

@Component({
  selector: 'app-article-renderer',
  templateUrl: './article-renderer.component.html',
  styleUrls: ['./article-renderer.component.css']
})
export class ArticleRendererComponent implements OnInit {

  @Input() article: ViewArticle;

  constructor() {
  }

  ngOnInit() {
  }

}
