export const myArticlesState: MyArticlesState = {
  isFetchingArticles: false,
  articles: []
};

export interface MyArticlesState {
  isFetchingArticles: boolean;
  articles: MyArticle[]
}

export interface MyArticle {
  id: string;
  name: string;
  createdAt: string;
  user: {
    username: string
    avatar: {
      avatar: string;
    }
  }
}
