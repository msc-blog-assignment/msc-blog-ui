import {landingState, LandingState} from './landing.state';
import {IAction} from '../root.action';
import {LandingActions} from './landing.actions';

export function reducer(state: LandingState = landingState, action: IAction): LandingState {
  switch (action.type) {
    case LandingActions.SHOW_SIGNUP_MODAL:
      return {...state, showSignupModal: true};
    case LandingActions.HIDE_SIGNUP_MODAL:
      return {...state, showSignupModal: false};
    case LandingActions.UPDATE_SIGNUP_USERNAME:
      return {...state, signupForm: {...state.signupForm, username: action.payload}};
    case LandingActions.UPDATE_SIGNUP_EMAIL:
      return {...state, signupForm: {...state.signupForm, email: action.payload}};
    case LandingActions.UPDATE_SIGNUP_PASSWORD:
      return {...state, signupForm: {...state.signupForm, password: action.payload}};
    case LandingActions.UPDATE_SIGNUP_PASSWORD_RETYPE:
      return {...state, signupForm: {...state.signupForm, passwordRetype: action.payload}};
    default:
      return state;
  }
}
