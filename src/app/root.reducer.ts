import {reducer as landing} from './landing/landing.reducer';
import {navReducer as nav} from './nav/nav.reducer';
import {userReducer as user} from './user/user.reducer';
import {reducer as sideNav} from './side-nav/side-nav.reducer';
import {LandingState} from './landing/landing.state';
import {NavState} from './nav/nav.state';
import {UserState} from './user/user.state';
import {ListArticlesState} from './list-articles/list-articles.state';
import {SideNavState} from './side-nav/side-nav.state';

export interface AppState {
  landing: LandingState,
  nav: NavState,
  user: UserState,
  listArticles: ListArticlesState,
  sideNav: SideNavState
}

export function getRootReducer() {
  return {
    landing,
    nav,
    user,
    sideNav
  }
}
