import {Injectable} from '@angular/core';

@Injectable()
export class AddArticleActions {

  static ADD = 'add-article/ADD';
  static ADD_SUCCESS = 'add-article/ADD_SUCCESS';
  static ADD_FAIL = 'add-article/ADD_FAIL';

  static UPDATE_NAME = 'add-article/UPDATE_NAME';
  static UPDATE_CONTENT = 'add-article/UPDATE_CONTENT';

  add = () => ({type: AddArticleActions.ADD});

  addSuccess = () => ({type: AddArticleActions.ADD_SUCCESS});

  addFail = () => ({type: AddArticleActions.ADD_FAIL});

  updateName = (name: string) => ({type: AddArticleActions.UPDATE_NAME, payload: name});

  updateContent = (content: string) => ({type: AddArticleActions.UPDATE_CONTENT, payload: content});
}
