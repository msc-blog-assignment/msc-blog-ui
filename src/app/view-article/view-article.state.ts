export const viewArticleState: ViewArticleState = {
  isFetching: false,
  article: null
};

export interface ViewArticleState {
  isFetching: boolean;
  article: ViewArticle
}

export interface ViewArticle {
  id: string;
  name: string;
  content: string;
  createdAt: string;
  user: {
    username: string;
    totalArticles: {
      count: number;
    },
    articles: {
      name: string;
    }
  }
}
