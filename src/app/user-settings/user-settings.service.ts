import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs/Observable';
import {FetchResult} from 'apollo-link';
import {Avatar} from '../user/user.state';

const uploadAvatar = gql`
  mutation($userId: String! $file: Upload! $size: Int!) {
    uploadAvatar(userId: $userId file: $file size: $size) {
      userId,
      avatar
    }
  }
`;

@Injectable()
export class UserSettingsService {

  constructor(private apollo: Apollo) {
  }

  uploadAvatar(userId, file): Observable<FetchResult<Avatar>> {
    return this.apollo.mutate({
      mutation: uploadAvatar,
      variables: {userId, file, size: file.size}
    });
  }

}
