import {AppState} from '../root.reducer';
import {MyArticlesState} from './my-articles.state';

export interface ModuleState extends AppState {
  myArticles: MyArticlesState
}
