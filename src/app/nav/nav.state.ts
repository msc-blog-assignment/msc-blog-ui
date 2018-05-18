export const navState: NavState = {
  showLoginModal: false,
  showSignupModal: false,
  avatarFailedToLoad: false
};

export interface NavState {
  showLoginModal: boolean;
  showSignupModal: boolean;
  avatarFailedToLoad: boolean;
}
