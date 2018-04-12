import {AppState} from '../root.reducer';
import {Article} from '../articles/article.model';

export interface ModuleState extends AppState {
  myArticles: {
    articles: Article[]
  }
}
