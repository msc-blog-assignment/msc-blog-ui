import {ListArticlesState, listArticlesState} from './list-articles.state';
import {ListArticlesActions} from './list-articles.actions';
import {IAction} from '../root.action';

export function reducer(state: ListArticlesState = listArticlesState, action: IAction): ListArticlesState {
  switch (action.type) {
    case ListArticlesActions.FETCH:
      return {...state, isFetching: true};
    case ListArticlesActions.FETCH_SUCCESS:
      return {...state, isFetching: false, articles: action.payload};
    case ListArticlesActions.FETCH_FAIL:
      return {...state, isFetching: false};
    default:
      return state;
  }
}
