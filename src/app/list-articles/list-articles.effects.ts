import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError } from 'rxjs/operators/catchError';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { ListArticlesActions } from './list-articles.actions';

@Injectable()
export class ListArticlesEffects {

  @Effect() fetchArticles = this.actions$.pipe(
    ofType(ListArticlesActions.FETCH),
    mergeMap((loginForm) =>
      this.userService.login(loginForm).pipe(
        mergeMap((user: User) => concat(
          of(this.userActions.loginSuccess(user)),
          of(this.navActions.hideAllModals())
        )),
        catchError(() => of(this.userActions.loginFail()))
      )
    ));

  constructor(private actions$: Actions,
              private actions: ListArticlesActions) {
  }

}
