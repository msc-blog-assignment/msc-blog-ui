import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../root.reducer';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  myArticleCount$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.myArticleCount$ = store.select('user', 'user', 'totalArticles', 'count');
  }

  ngOnInit() {
  }

}
