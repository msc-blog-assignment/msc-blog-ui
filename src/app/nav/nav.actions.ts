import {Injectable} from '@angular/core';

@Injectable()
export class NavActions {

  static HIDE_ALL_MODALS = 'nav/HIDE_ALL_MODALS';

  static SHOW_LOGIN_MODAL = 'nav/SHOW_LOGIN_MODAL';
  static HIDE_LOGIN_MODAL = 'nav/HIDE_LOGIN_MODAL';

  static LOGOUT = 'nav/LOGOUT';
  static LOGOUT_OK = 'nav/LOGOUT_OK';
  static LOGOUT_FAIL = 'nav/LOGOUT_FAIL';

  static USER_AVATAR_FAILED_TO_LOAD = 'nav/USER_AVATAR_FAILED_TO_LOAD';

  hideAllModals() {
    return {type: NavActions.HIDE_ALL_MODALS};
  }

  showLoginModal() {
    return {type: NavActions.SHOW_LOGIN_MODAL};
  }

  hideLoginModal() {
    return {type: NavActions.HIDE_LOGIN_MODAL};
  }

  logout() {
    return {type: NavActions.LOGOUT};
  }

  logoutOk() {
    return {type: NavActions.LOGOUT_OK};
  }

  logoutFail(error) {
    return {type: NavActions.LOGOUT_FAIL, error};
  }

  userAvatarFailedToLoad() {
    return {type: NavActions.USER_AVATAR_FAILED_TO_LOAD};
  }
}
