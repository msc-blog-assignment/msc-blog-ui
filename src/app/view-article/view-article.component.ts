import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModuleState} from './module.state';
import {ViewArticleState} from './view-article.state';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {ViewArticleActions} from './view-article.actions';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  viewArticleState$: Observable<ViewArticleState>;

  constructor(private store: Store<ModuleState>, private router: ActivatedRoute, private actions: ViewArticleActions) {
    this.viewArticleState$ = store.select('viewArticle');
  }

  ngOnInit() {
    this.router.params.subscribe((params) => this.fetchArticle(params.id));
  }

  fetchArticle(id) {
    this.store.dispatch(this.actions.fetch(id));
  }

}
