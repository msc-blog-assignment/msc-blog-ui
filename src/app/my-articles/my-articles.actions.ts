import { Injectable } from '@angular/core';
import { Article } from '../articles/article.model';

@Injectable()
export class MyArticlesActions {

  static FETCH = 'my-articles/FETCH';
  static FETCH_SUCCESS = 'my-articles/FETCH_SUCCESS';
  static FETCH_FAIL = 'my-articles/FETCH_FAIL';

  fetch = () => ({type: MyArticlesActions.FETCH});

  fetchSuccess = (articles: any) => ({type: MyArticlesActions.FETCH_SUCCESS, payload: articles});

  fetchFail = (error) => ({type: MyArticlesActions.FETCH_FAIL, error});
}
