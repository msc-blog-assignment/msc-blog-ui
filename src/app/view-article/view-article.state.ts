export const viewArticleState: ViewArticleState = {
  isFetching: false,
  article: null,
  isAddingComment: false,
  addCommentForm: null
};

export interface ViewArticleState {
  isFetching: boolean;
  article: ViewArticle,
  isAddingComment: boolean,
  addCommentForm: {
    comment: string;
  }
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
    },
    avatar: {
      avatar: string;
    }
  },
  comments: Comment[]
}

export interface Comment {
  comment: string;
  user: {
    id: string;
    username: string;
    avatar: {
      avatar: string;
    }
  }
}
