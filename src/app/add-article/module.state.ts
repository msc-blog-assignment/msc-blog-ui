import {AppState} from '../root.reducer';
import {AddArticleState} from './add-article.state';

export interface ModuleState extends AppState {
  addArticle: AddArticleState
}
