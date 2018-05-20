import {Injectable} from '@angular/core';
import {Article} from './list-articles.state';

@Injectable()
export class ListArticlesActions {

  static FETCH = 'list-articles/FETCH';
  static FETCH_SUCCESS = 'list-articles/FETCH_SUCCESS';
  static FETCH_FAIL = 'list-articles/FETCH_FAIL';

  fetch = () => ({type: ListArticlesActions.FETCH});

  fetchSuccess = (articles: Article[]) => ({type: ListArticlesActions.FETCH_SUCCESS, payload: articles});

  fetchFail = (err) => ({type: ListArticlesActions.FETCH_FAIL, payload: err});
}
