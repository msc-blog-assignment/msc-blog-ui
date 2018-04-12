import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Article} from '../../articles/article.model';
import {ModuleState} from '../module.state';

@Component({
  selector: 'app-my-articles-list',
  templateUrl: './my-articles-list.component.html',
  styleUrls: ['./my-articles-list.component.css']
})
export class MyArticlesListComponent {

  articles$: Observable<Article[]>;

  constructor(private store: Store<ModuleState>) {
    this.articles$ = store.select('myArticles', 'articles');
  }

}
