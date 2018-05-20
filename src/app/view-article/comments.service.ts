import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';
import {Apollo} from 'apollo-angular';
import {Article} from '../articles/article.model';
import {FetchResult} from 'apollo-link';

const commentQuery = gql`
  mutation comment ($userId: String! $articleId: String! $comment: String!) {
    comment(userId: $userId articleId: $articleId comment: $comment) {
      id
      createdAt
      comment
      user {
        username
        avatar {
          avatar
        }
      }
    }
  }
`;

@Injectable()
export class CommentsService {

  constructor(private apollo: Apollo) {
  }

  comment(userId: string, articleId: string, comment: string): Observable<FetchResult<Article>> {
    return this.apollo.mutate<Article>({
      mutation: commentQuery,
      variables: {
        userId, articleId, comment
      }
    });
  }

}
