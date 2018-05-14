import { Injectable } from '@angular/core';
import { NavActions } from './nav.actions';
import { MatDialog } from '@angular/material';
import { LoginModalComponent } from './nav-login/login-modal/login-modal.component';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user/user.service';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { catchError } from 'rxjs/operators/catchError';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NavEffects {

  @Effect() showLoginModal$: Observable<Action> = this.actions$.pipe(
    ofType(NavActions.SHOW_LOGIN_MODAL),
    map(() => {
      this.dialog.open(LoginModalComponent, {
        width: '600px'
      }).afterClosed();

      return {type: 'UNKNOWN'};
    }));

  @Effect() hideAllModals$: Observable<Action> = this.actions$.pipe(
    ofType(NavActions.HIDE_ALL_MODALS),
    map(() => {
      this.dialog.closeAll();

      return {type: 'UNKNOWN'};
    }));

  @Effect() logout$ = this.actions$.pipe(
    ofType(NavActions.LOGOUT),
    mergeMap(() =>
      this.userService.logout().pipe(
        mergeMap(() => of(this.actions.logoutOk())),
        catchError((error) => of(this.actions.logoutFail(error)))
      )
    ));

  constructor(private actions$: Actions,
              private userService: UserService,
              private actions: NavActions,
              public dialog: MatDialog) {
  }
}
