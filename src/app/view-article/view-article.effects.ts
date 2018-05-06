import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError} from 'rxjs/operators/catchError';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {map} from 'rxjs/operators/map';
import {ArticlesService} from '../articles/articles.service';
import {ViewArticleActions} from './view-article.actions';
import {IAction} from '../root.action';

@Injectable()
export class ViewArticleEffects {

  @Effect() fetchArticle$ = this.actions$.pipe(
    ofType<IAction>(ViewArticleActions.FETCH),
    mergeMap(({payload}) =>
      this.articlesService.getArticle(payload).pipe(
        map((article) => this.actions.fetchOk(article.data.article)),
        catchError((err) => of(this.actions.fetchFail(err)))
      )
    ));

  constructor(private actions$: Actions,
              private actions: ViewArticleActions,
              private articlesService: ArticlesService) {
  }

}
