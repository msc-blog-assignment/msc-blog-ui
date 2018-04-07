import {Injectable} from '@angular/core';

@Injectable()
export class ListArticlesActions {

  static FETCH = 'list-articles/FETCH';
  static FETCH_SUCCESS = 'list-articles/FETCH_SUCCESS';
  static FETCH_FAIL = 'list-articles/FETCH_FAIL';

  fetch = () => ({type: ListArticlesActions.FETCH});

  fetchSuccess = () => ({type: ListArticlesActions.FETCH_SUCCESS});

  fetchFail = (err) => ({type: ListArticlesActions.FETCH_FAIL, payload: err});
}
