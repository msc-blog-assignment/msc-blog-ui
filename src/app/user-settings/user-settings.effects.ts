import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ViewArticleActions} from '../view-article/view-article.actions';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {of} from 'rxjs/observable/of';
import {IAction} from '../root.action';
import {UserSettingsService} from './user-settings.service';
import {select, Store} from '@ngrx/store';
import {AppState} from '../root.reducer';
import {withLatestFrom} from 'rxjs/operators/withLatestFrom';
import {UserSettingsActions} from './user-settings.actions';

@Injectable()
export class UserSettingsEffects {

  @Effect() uploadAvatar$ = this.actions$.pipe(
    ofType<IAction>(UserSettingsActions.UPLOAD_AVATAR),
    withLatestFrom(this.store$),
    select(([action, storeState]) => ({
      userId: storeState.user.user.userId,
      file: action.payload
    })),
    mergeMap(({userId, file}) => this.service.uploadAvatar(userId, file).pipe(
      map((avatar) => this.actions.uploadAvatarOk()),
      catchError((err) => of(this.actions.uploadAvatarFail(err)))
      )
    ));

  constructor(private store$: Store<AppState>,
              private actions$: Actions,
              private actions: UserSettingsActions,
              private service: UserSettingsService) {
  }

}
