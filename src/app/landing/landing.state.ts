export const landingState: LandingState = {
  showSignupModal: false,
  isSigningUp: false,
  signupForm: {
    username: '',
    email: '',
    password: '',
    passwordRetype: ''
  }
};

export interface LandingState {
  showSignupModal: boolean;
  isSigningUp: boolean;
  signupForm: {
    username: string;
    email: string;
    password: string;
    passwordRetype: string;
  }
}
