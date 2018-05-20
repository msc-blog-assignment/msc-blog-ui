import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Article} from '../list-articles.state';
import {Store} from '@ngrx/store';
import {AppState} from '../../root.reducer';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {

  articles$: Observable<Article[]>;

  constructor(private store: Store<AppState>) {
    this.articles$ = store.select('listArticles', 'articles');
  }

}
