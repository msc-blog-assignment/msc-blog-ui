import { UserState, userState } from './user.state';
import { UserActions } from './user.actions';
import { NavActions } from '../nav/nav.actions';
import { AddArticleActions } from '../add-article/add-article.actions';

export function userReducer(state: UserState = userState, action): UserState {
  switch (action.type) {
    case NavActions.SHOW_LOGIN_MODAL:
      return {...state, isLoggingIn: false};
    case UserActions.LOGIN:
      return {...state, isLoggingIn: true};
    case UserActions.LOGIN_SUCCESS:
      return {...state, isLoggingIn: false, isLoggedIn: true, user: action.user};
    case UserActions.LOGIN_FAIL:
      return {...state, isLoggingIn: false};
    case UserActions.UPDATE_LOGIN_USERNAME:
      return {...state, loginForm: {...state.loginForm, username: action.username}};
    case UserActions.UPDATE_LOGIN_PASSWORD:
      return {...state, loginForm: {...state.loginForm, password: action.password}};
    case AddArticleActions.ADD_SUCCESS:
      return {...state, user: {...state.user, totalArticles: {count: action.payload.user.totalArticles.count}}};
    case NavActions.LOGOUT_OK:
      return {...state, isLoggedIn: false, user: null};
    default:
      return state;
  }
}
