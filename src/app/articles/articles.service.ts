import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';
import {Article} from './article.model';
import {AddArticleForm} from '../add-article/add-article.state';
import {ViewArticle} from '../view-article/view-article.state';
import {ApolloQueryResult} from 'apollo-client';
import {FetchResult} from 'apollo-link';

const query = gql`
  query {
    articles {
      id,
      userId
    }
  }
`;

const fetchArticleById = gql`
  query($id: String!) {
    article(id: $id) {
      id
      name
      content
      createdAt
      user {
        username,
        totalArticles {
          count
        },
        articles {
          name
        }
      }
      comments {
        id
        comment
        userId
        user {
          id
          username
        }
        responses {
          id
          response
          user {
            id
            username
          }
        }
      }
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
      name,
      user {
        totalArticles {
          count
        }
      }
    }
  }
`;

@Injectable()
export class ArticlesService {
  constructor(private apollo: Apollo) {
  }

  getArticles(): Observable<FetchResult<Article[]>> {
    return this.apollo.query<Article[]>({query});
  }

  getMyArticles(userId: string): Observable<FetchResult<Article[]>> {
    return this.apollo.query<Article[]>({query: myArticlesQuery, variables: {userId}});
  }

  getArticle(id: string): Observable<FetchResult<ViewArticle>> {
    return this.apollo.query<ViewArticle>({query: fetchArticleById, variables: {id}});
  }

  createArticle(userId: string, form: AddArticleForm): Observable<FetchResult<Article>> {
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
