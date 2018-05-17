import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {createUploadLink} from 'apollo-upload-client'
import {LoadingComponent} from './loading/loading.component';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import {UserState} from '../user/user.state';
import {ApolloLink} from 'apollo-link';

const authLink = setContext((_, {headers}) => {
  const user: UserState = JSON.parse(localStorage.getItem('user'));
  return {
    headers: {
      ...headers,
      authorization: user.user && user.user.id ? user.user.id : ''
    }
  }
});

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  exports: [
    RouterModule,
    LoadingComponent
  ],
  declarations: [
    LoadingComponent
  ],
  providers: []
})
export class CoreModule {

  constructor(apollo: Apollo,
              httpLink: HttpLink) {

    const link = ApolloLink.from([
      createUploadLink({uri: '/graphql'}),
      httpLink.create({uri: '/graphql'}),
      authLink
    ]);

    apollo.create({
      link,
      cache: new InMemoryCache({}),
      defaultOptions: {
        query: {
          fetchPolicy: 'network-only'
        }
      }
    });
  }
}
