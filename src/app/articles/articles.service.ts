import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';
import {Article} from './article.model';
import {AddArticleForm} from '../add-article/add-article.state';

const query = gql`
  query {
    articles {
      id,
      userId
    }
  }
`;

const createArticle = gql`
  mutation($userId: String! $name: String!, $content: String!) {
    createArticle(userId: $userId name: $name content: $content) {
      id,
      name
    }
  }
`;

@Injectable()
export class ArticlesService {

  constructor(private apollo: Apollo) {
  }

  getArticles() {
    return this.apollo.query({query});
  }

  createArticle(userId: string, form: AddArticleForm): Observable<Article> {
    return this.apollo.mutate({
      mutation: createArticle,
      variables: {
        userId,
        name: form.name,
        content: form.content
      }
    });
  }

}
