import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Action, select, Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../user/user.service';
import {LandingActions} from './landing.actions';
import {SignupModalComponent} from './signup-modal/signup-modal.component';
import {withLatestFrom} from 'rxjs/operators/withLatestFrom';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {catchError} from 'rxjs/operators/catchError';
import {concat} from 'rxjs/observable/concat';
import {of} from 'rxjs/observable/of';
import {AppState} from '../root.reducer';

@Injectable()
export class LandingEffects {

  @Effect() showSignupModal$: Observable<Action> = this.actions$.pipe(
    ofType(LandingActions.SHOW_SIGNUP_MODAL),
    map(() => {
      this.dialog.open(SignupModalComponent, {
        width: '600px'
      }).afterClosed();

      return {type: 'UNKNOWN'};
    }));

  @Effect() hideAllModals$: Observable<Action> = this.actions$.pipe(
    ofType(LandingActions.HIDE_SIGNUP_MODAL),
    map(() => {
      this.dialog.closeAll();

      return {type: 'UNKNOWN'};
    }));

  @Effect() signup$ = this.actions$.pipe(
    ofType(LandingActions.SIGNUP),
    withLatestFrom(this.store$),
    select(([action, storeState]) => storeState.landing.signupForm),
    mergeMap((signupForm) =>
      this.userService.signup(signupForm).pipe(
        mergeMap(() => concat(
          of(this.actions.signupOk()),
          of(this.actions.hideSignupModal())
        )),
        catchError((error) => of(this.actions.signupFail(error)))
      )
    ),
    catchError((error) => of(this.actions.signupFail(error)))
  );

  constructor(private actions$: Actions,
              private store$: Store<AppState>,
              private userService: UserService,
              private actions: LandingActions,
              public dialog: MatDialog) {
  }
}
