import {Injectable} from '@angular/core';
import {Article} from '../articles/article.model';

@Injectable()
export class AddArticleActions {

  static ADD = 'add-article/ADD';
  static ADD_SUCCESS = 'add-article/ADD_SUCCESS';
  static ADD_FAIL = 'add-article/ADD_FAIL';

  static UPDATE_NAME = 'add-article/UPDATE_NAME';
  static UPDATE_CONTENT = 'add-article/UPDATE_CONTENT';

  add = () => ({type: AddArticleActions.ADD});

  addSuccess = (article: Article) => ({type: AddArticleActions.ADD_SUCCESS, payload: article});

  addFail = () => ({type: AddArticleActions.ADD_FAIL});

  updateName = (name: string) => ({type: AddArticleActions.UPDATE_NAME, payload: name});

  updateContent = (content: string) => ({type: AddArticleActions.UPDATE_CONTENT, payload: content});
}
