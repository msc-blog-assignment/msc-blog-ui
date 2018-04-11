import { Article } from '../articles/article.model';

export const myArticlesState: MyArticlesState = {
  isFetchingArticles: false,
  articles: []
};

export interface MyArticlesState {
  isFetchingArticles: boolean;
  articles: Article[]
}
