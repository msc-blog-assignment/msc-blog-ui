import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError } from 'rxjs/operators/catchError';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { map } from 'rxjs/operators/map';
import { ArticlesService } from '../articles/articles.service';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { select, Store } from '@ngrx/store';
import { ModuleState } from '../add-article/module.state';
import { MyArticlesActions } from './my-articles.actions';

@Injectable()
export class MyArticlesEffects {

  @Effect() fetchMyArticles = this.actions$.pipe(
    ofType(MyArticlesActions.FETCH),
    withLatestFrom(this.store$),
    select(([action, storeState]) => storeState),
    mergeMap((store) =>
      this.articlesService.getMyArticles(store.user.user.userId).pipe(
        map(({data: {myArticles}}) => this.actions.fetchSuccess(myArticles)),
        catchError((error) => of(this.actions.fetchFail(error)))
      )
    ));

  constructor(private store$: Store<ModuleState>,
              private actions$: Actions,
              private actions: MyArticlesActions,
              private articlesService: ArticlesService) {
  }

}
