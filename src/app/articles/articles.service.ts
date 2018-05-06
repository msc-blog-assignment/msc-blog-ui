import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';
import {Article} from './article.model';
import {AddArticleForm} from '../add-article/add-article.state';
import {ViewArticle} from '../view-article/view-article.state';
import {ApolloQueryResult} from 'apollo-client';

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

export interface MyArticlesResponse {
  myArticles: Article[]
}

interface FetchArticleResponse {
  article: ViewArticle
}

export interface CreateArticleResponse {
  data: {
    createArticle: Article
  }
}

@Injectable()
export class ArticlesService {

  constructor(private apollo: Apollo) {
  }

  getArticles(): Observable<any> {
    return this.apollo.query({query});
  }

  getMyArticles(userId: string) {
    return this.apollo.query<MyArticlesResponse>({query: myArticlesQuery, variables: {userId}});
  }

  getArticle(id: string) {
    return this.apollo.query<FetchArticleResponse>({query: fetchArticleById, variables: {id}});
  }

  createArticle(userId: string, form: AddArticleForm): Observable<CreateArticleResponse> {
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
