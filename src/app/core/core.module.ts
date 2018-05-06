import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { UserState } from '../user/user.state';

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

    apollo.create({
      link: authLink.concat(httpLink.create({uri: '/graphql'})),
      cache: new InMemoryCache({}),
      defaultOptions: {
        query: {
          fetchPolicy: 'network-only'
        }
      }
    });
  }
}
