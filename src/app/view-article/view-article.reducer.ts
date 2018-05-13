import {viewArticleState, ViewArticleState} from './view-article.state';
import {ViewArticleActions} from './view-article.actions';
import {IAction} from '../root.action';

export function reducer(state: ViewArticleState = viewArticleState, action: IAction): ViewArticleState {
  switch (action.type) {
    case ViewArticleActions.FETCH:
      return {...state, isFetching: true};
    case ViewArticleActions.FETCH_OK:
      return {...state, isFetching: false, article: action.payload};
    case ViewArticleActions.FETCH_FAIL:
      return {...state, isFetching: false};
    case ViewArticleActions.ADD_COMMENT:
      return {...state, isAddingComment: true};
    case ViewArticleActions.ADD_COMMENT_OK:
      return {...state, isAddingComment: false};
    case ViewArticleActions.ADD_COMMENT_FAIL:
      return {...state, isAddingComment: false};
    case ViewArticleActions.UPDATE_COMMENT:
      return {...state, addCommentForm: {...state.addCommentForm, comment: action.payload}};
    default:
      return state;
  }
}
