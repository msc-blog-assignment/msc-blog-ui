import {NavState, navState} from './nav.state';
import {NavActions} from './nav.actions';
import {UserSettingsActions} from '../user-settings/user-settings.actions';

export function navReducer(state: NavState = navState, action): NavState {
  switch (action.type) {
    case NavActions.SHOW_LOGIN_MODAL:
      return {...state, showLoginModal: true};
    case NavActions.HIDE_LOGIN_MODAL:
      return {...state, showLoginModal: false};
    case NavActions.USER_AVATAR_FAILED_TO_LOAD:
      return {...state, avatarFailedToLoad: true};
    case UserSettingsActions.UPLOAD_AVATAR_OK:
      return {...state, avatarFailedToLoad: false};
    default:
      return state;
  }
}
