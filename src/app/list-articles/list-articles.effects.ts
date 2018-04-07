import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError} from 'rxjs/operators/catchError';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {map} from 'rxjs/operators/map';
import {ListArticlesActions} from './list-articles.actions';
import {ArticlesService} from '../articles/articles.service';

@Injectable()
export class ListArticlesEffects {

  @Effect() fetchArticles = this.actions$.pipe(
    ofType(ListArticlesActions.FETCH),
    mergeMap(() =>
      this.articlesService.getArticles().pipe(
        map(() => this.actions.fetchSuccess()),
        catchError((err) => of(this.actions.fetchFail(err)))
      )
    ));

  constructor(private actions$: Actions,
              private actions: ListArticlesActions,
              private articlesService: ArticlesService) {
  }

}
