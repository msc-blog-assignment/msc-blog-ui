import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {User} from './user.state';
import {FetchResult} from 'apollo-link';

const signupQuery = gql`
  mutation ($username: String!, $email: String! $password: String!) {
    signup(username: $username email: $email password: $password) {
      id
      username
    }
  }
`;

const loginQuery = gql`
  mutation($username: String! $password: String!) {
    login(username: $username password: $password) {
      id
      ttl
      created
      userId
      me {
        username
      }
      totalArticles {
        count
      }
      avatar {
        avatar
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

@Injectable()
export class UserService {

  constructor(private apollo: Apollo) {
  }

  signup({username, email, password}: { username: string, email: string, password: string }): Observable<FetchResult<User>> {
    return this.apollo.mutate({
      mutation: signupQuery,
      variables: {username, email, password}
    });
  }

  login({username, password}: { username: string, password: string }): Observable<FetchResult<User>> {
    return this.apollo.mutate({
      mutation: loginQuery,
      variables: {username, password}
    });
  }

  logout(): Observable<any> {
    return this.apollo.mutate({mutation: logoutQuery});
  }

}
