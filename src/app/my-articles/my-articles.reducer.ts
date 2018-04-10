import { MyArticlesState, myArticlesState } from './my-articles.state';
import { MyArticlesActions } from './my-articles.actions';

export function reducer(state: MyArticlesState = myArticlesState, action): MyArticlesState {
  switch (action.type) {
    case MyArticlesActions.FETCH:
      return {...state, isFetchingArticles: true};
    case MyArticlesActions.FETCH_SUCCESS:
      return {...state, isFetchingArticles: false, articles: action.payload};
    case MyArticlesActions.FETCH_FAIL:
      return {...state, isFetchingArticles: false};
    default:
      return state;
  }
}
