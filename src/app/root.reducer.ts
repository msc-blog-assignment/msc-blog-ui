import {navReducer as nav} from './nav/nav.reducer';
import {userReducer as user} from './user/user.reducer';
import {NavState} from './nav/nav.state';
import {UserState} from './user/user.state';

export interface AppState {
  nav: NavState,
  user: UserState
}

export function getRootReducer() {
  return {
    nav,
    user
  }
}
