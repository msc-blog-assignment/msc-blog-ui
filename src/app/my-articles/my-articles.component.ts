import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModuleState} from './module.state';
import {MyArticlesActions} from './my-articles.actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  isFetchingArticles$: Observable<boolean>;

  constructor(private store: Store<ModuleState>, private actions: MyArticlesActions) {
    this.isFetchingArticles$ = store.select('myArticles', 'isFetchingArticles');
  }

  ngOnInit() {
    this.store.dispatch(this.actions.fetch());
  }

}
