import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Observable} from 'rxjs/Observable';
import {Apollo} from 'apollo-angular';
import {Article} from '../articles/article.model';

const commentQuery = gql`
  mutation comment ($userId: String! $articleId: String! $comment: String!) {
    comment(userId: $userId articleId: $articleId comment: $comment) {
      id
    }
  }
`;

export interface CommentResponse {
  data: {
    createArticle: Article
  }
}

@Injectable()
export class CommentsService {

  constructor(private apollo: Apollo) {
  }

  createArticle(userId: string, articleId: string, comment: string): Observable<CommentResponse> {
    return this.apollo.mutate({
      mutation: commentQuery,
      variables: {
        userId, articleId, comment
      }
    });
  }

}
