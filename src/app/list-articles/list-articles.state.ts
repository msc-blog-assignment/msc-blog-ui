export const listArticlesState: ListArticlesState = {
  isFetching: false,
  articles: []
};

export interface ListArticlesState {
  isFetching: boolean;
  articles: Article[];
}

export interface Article {
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
