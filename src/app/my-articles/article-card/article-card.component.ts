import {Component, Input, OnInit} from '@angular/core';
import {MyArticle} from '../my-articles.state';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: MyArticle;

  constructor() {
  }

  ngOnInit() {
  }

}
