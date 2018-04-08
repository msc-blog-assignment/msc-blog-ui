import {addArticleState, AddArticleState} from './add-article.state';
import {AddArticleActions} from './add-article.actions';

export function reducer(state: AddArticleState = addArticleState, action): AddArticleState {
  switch (action.type) {
    case AddArticleActions.ADD:
      return {...state, isAddingArticle: true};
    case AddArticleActions.ADD_SUCCESS:
      return {...state, isAddingArticle: false};
    case AddArticleActions.ADD_FAIL:
      return {...state, isAddingArticle: false};
    case AddArticleActions.UPDATE_NAME:
      return {...state, addArticleForm: {...state.addArticleForm, name: action.payload}};
    case AddArticleActions.UPDATE_CONTENT:
      return {...state, addArticleForm: {...state.addArticleForm, content: action.payload}};
    default:
      return state;
  }
}
