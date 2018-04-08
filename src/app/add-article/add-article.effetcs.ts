import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError} from 'rxjs/operators/catchError';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {withLatestFrom} from 'rxjs/operators/withLatestFrom';
import {select, Store} from '@ngrx/store';
import {AddArticleActions} from './add-article.actions';
import {ModuleState} from './module.state';

@Injectable()
export class AddArticleEffects {

  @Effect() addArticle$ = this.actions$.pipe(
    ofType(AddArticleActions.ADD),
    withLatestFrom(this.store$),
    select(([action, storeState]) => storeState),
    mergeMap((store) =>
      this.articlesService.createArticle(store.user.user.userId, store.addArticle.addArticleForm).pipe(
        mergeMap(() => of(this.addArticleActions.addSuccess())),
        catchError(() => of(this.addArticleActions.addFail()))
      )
    ));

  constructor(private actions$: Actions,
              private store$: Store<ModuleState>,
              private addArticleActions: AddArticleActions,
              private articlesService: ArticlesService) {
  }

}
