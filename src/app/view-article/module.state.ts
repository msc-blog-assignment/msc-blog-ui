import {AppState} from '../root.reducer';
import {ViewArticleState} from './view-article.state';

export interface ModuleState extends AppState {
  viewArticle: ViewArticleState
}
