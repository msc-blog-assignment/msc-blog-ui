import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {ModuleState} from '../module.state';
import {MyArticle} from '../my-articles.state';

@Component({
  selector: 'app-my-articles-list',
  templateUrl: './my-articles-list.component.html',
  styleUrls: ['./my-articles-list.component.css']
})
export class MyArticlesListComponent {

  articles$: Observable<MyArticle[]>;

  constructor(private store: Store<ModuleState>) {
    this.articles$ = store.select('myArticles', 'articles');
  }

}
