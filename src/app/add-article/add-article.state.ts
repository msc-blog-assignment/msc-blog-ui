export const addArticleState: AddArticleState = {
  isAddingArticle: false,
  addArticleForm: {
    name: '',
    content: ''
  }
};

export interface AddArticleState {
  isAddingArticle: boolean;
  addArticleForm: AddArticleForm;
}

export interface AddArticleForm {
  name: string;
  content: string;
}
