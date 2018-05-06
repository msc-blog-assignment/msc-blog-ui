import {Injectable} from '@angular/core';
import {ViewArticle} from './view-article.state';

@Injectable()
export class ViewArticleActions {

  static FETCH = 'view-article/FETCH';
  static FETCH_OK = 'view-article/FETCH_OK';
  static FETCH_FAIL = 'view-article/FETCH_FAIL';

  fetch(id) {
    return {type: ViewArticleActions.FETCH, payload: id};
  }

  fetchOk(article: ViewArticle) {
    return {type: ViewArticleActions.FETCH_OK, payload: article};
  }

  fetchFail(error) {
    return {type: ViewArticleActions.FETCH_FAIL, error};
  }
}
