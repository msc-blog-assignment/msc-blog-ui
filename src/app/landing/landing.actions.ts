import {Injectable} from '@angular/core';

@Injectable()
export class LandingActions {

  static SIGNUP = 'landing/SIGNUP';
  static SIGNUP_OK = 'landing/SIGNUP_OK';
  static SIGNUP_FAIL = 'landing/SIGNUP_FAIL';

  static SHOW_SIGNUP_MODAL = 'landing/SHOW_SIGNUP_MODAL';
  static HIDE_SIGNUP_MODAL = 'landing/HIDE_SIGNUP_MODAL';

  static UPDATE_SIGNUP_USERNAME = 'landing/UPDATE_SIGNUP_USERNAME';
  static UPDATE_SIGNUP_EMAIL = 'landing/UPDATE_SIGNUP_EMAIL';
  static UPDATE_SIGNUP_PASSWORD = 'landing/UPDATE_SIGNUP_PASSWORD';
  static UPDATE_SIGNUP_PASSWORD_RETYPE = 'landing/UPDATE_SIGNUP_PASSWORD_RETYPE';

  signup = () => ({type: LandingActions.SIGNUP});

  signupOk = () => ({type: LandingActions.SIGNUP_OK});

  signupFail = (error) => ({type: LandingActions.SIGNUP_FAIL, error});

  showSignupModal = () => ({type: LandingActions.SHOW_SIGNUP_MODAL});

  hideSignupModal = () => ({type: LandingActions.HIDE_SIGNUP_MODAL});

  updateSignupUsername = (username) => ({type: LandingActions.UPDATE_SIGNUP_USERNAME, payload: username});

  updateSignupEmail = (email) => ({type: LandingActions.UPDATE_SIGNUP_EMAIL, payload: email});

  updateSignupPassword = (password) => ({type: LandingActions.UPDATE_SIGNUP_PASSWORD, payload: password});

  updateSignupPasswordRetype = (password) => ({type: LandingActions.UPDATE_SIGNUP_PASSWORD_RETYPE, payload: password});
}
