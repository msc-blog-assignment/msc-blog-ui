import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { User } from './user.state';

const loginQuery = gql`
  mutation($username: String! $password: String!) {
    login(username: $username, password: $password) {
      id
      ttl
      created
      userId
      totalArticles {
        count
      }
    }
  }
`;

const logoutQuery = gql`
  mutation {
    logout {
      ok
    }
  }
`;

export interface LoginResponse {
  data: {
    login: User
  }
}

@Injectable()
export class UserService {

  constructor(private apollo: Apollo) {
  }

  login({username, password}: { username: string, password: string }): Observable<LoginResponse> {
    return this.apollo.mutate({
      mutation: loginQuery,
      variables: {username, password}
    });
  }

  logout(): Observable<any> {
    return this.apollo.mutate({mutation: logoutQuery});
  }

}
