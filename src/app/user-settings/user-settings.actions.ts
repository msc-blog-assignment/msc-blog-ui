import { Injectable } from '@angular/core';

@Injectable()
export class UserSettingsActions {

  static UPLOAD_AVATAR = 'user-settings/UPLOAD_AVATAR';
  static UPLOAD_AVATAR_OK = 'user-settings/UPLOAD_AVATAR_OK';
  static UPLOAD_AVATAR_FAIL = 'user-settings/UPLOAD_AVATAR_FAIL';

  uploadAvatar() {
    return {type: UserSettingsActions.UPLOAD_AVATAR};
  }

  uploadAvatarOk() {
    return {type: UserSettingsActions.UPLOAD_AVATAR_OK};
  }

  uploadAvatarFail() {
    return {type: UserSettingsActions.UPLOAD_AVATAR_FAIL};
  }
}
