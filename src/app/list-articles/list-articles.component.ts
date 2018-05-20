import {Component, OnInit} from '@angular/core';
import {ListArticlesActions} from './list-articles.actions';
import {AppState} from '../root.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  isFetching: Observable<boolean>;

  constructor(private store: Store<AppState>, private actions: ListArticlesActions) {
    this.isFetching = store.select('listArticles', 'isFetching');
  }

  ngOnInit() {
    this.store.dispatch(this.actions.fetch());
  }

}
