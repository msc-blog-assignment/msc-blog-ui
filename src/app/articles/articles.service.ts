import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import { Article } from './article.model';
import { AddArticleForm } from '../add-article/add-article.state';
import { ApolloQueryResult } from 'apollo-client';

const query = gql`
  query {
    articles {
      id,
      userId
    }
  }
`;

const myArticlesQuery = gql`
  query($userId: String!) {
    myArticles(id: $userId) {
      id
      name
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

export interface MyArticlesResponse {
  data: ResponseData;
}

export interface ResponseData {
  myArticles: Article[];
}

@Injectable()
export class ArticlesService {

  constructor(private apollo: Apollo) {
  }

  getArticles(): Observable<any> {
    return this.apollo.query({query});
  }

  getMyArticles(userId: string): Observable<ApolloQueryResult<MyArticlesResponse>> {
    return this.apollo.query<MyArticlesResponse>({query: myArticlesQuery, variables: {userId}});
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
