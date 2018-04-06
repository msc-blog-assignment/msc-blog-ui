import { navReducer as nav } from './nav/nav.reducer';
import { userReducer as user } from './user/user.reducer';
import { NavState } from './nav/nav.state';
import { UserState } from './user/user.state';
import { ListArticlesState as listArticles } from './list-articles/list-articles.state';

export interface AppState {
  nav: NavState,
  user: UserState,
  listArticles: ListArticlesState
}

export function getRootReducer() {
  return {
    nav,
    user,
    listArticles
  }
}
