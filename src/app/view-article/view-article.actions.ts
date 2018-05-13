import {Injectable} from '@angular/core';
import {ViewArticle} from './view-article.state';

@Injectable()
export class ViewArticleActions {

  static FETCH = 'view-article/FETCH';
  static FETCH_OK = 'view-article/FETCH_OK';
  static FETCH_FAIL = 'view-article/FETCH_FAIL';

  static ADD_COMMENT = 'view-article/ADD_COMMENT';
  static ADD_COMMENT_OK = 'view-article/ADD_COMMENT_OK';
  static ADD_COMMENT_FAIL = 'view-article/ADD_COMMENT_FAIL';

  static UPDATE_COMMENT = 'view-article/UPDATE_COMMENT';

  fetch(id) {
    return {type: ViewArticleActions.FETCH, payload: id};
  }

  fetchOk(article: ViewArticle) {
    return {type: ViewArticleActions.FETCH_OK, payload: article};
  }

  fetchFail(error) {
    return {type: ViewArticleActions.FETCH_FAIL, error};
  }

  addComment() {
    return {type: ViewArticleActions.ADD_COMMENT};
  }

  addCommentOk() {
    return {type: ViewArticleActions.ADD_COMMENT_OK};
  }

  addCommentFail(error) {
    return {type: ViewArticleActions.ADD_COMMENT_FAIL, error};
  }

  updateComment(comment: string) {
    return {type: ViewArticleActions.UPDATE_COMMENT, payload: comment};
  }
}
