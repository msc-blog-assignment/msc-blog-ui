import { ListArticlesState, listArticlesState } from './list-articles.state';
import { ListArticlesActions } from './list-articles.actions';

export function reducer(state: ListArticlesState = listArticlesState, action): ListArticlesState {
  switch (action.type) {
    case ListArticlesActions.FETCH:
      return {...state, isFetching: true};
    case ListArticlesActions.FETCH_SUCCESS:
      return {...state, isFetching: false};
    case ListArticlesActions.FETCH_FAIL:
      return {...state, isFetching: false};
    default:
      return state;
  }
}
