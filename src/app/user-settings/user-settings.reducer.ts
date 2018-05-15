import { userSettingsState, UserSettingsState } from './user-settings.state';
import { IAction } from '../root.action';
import { UserSettingsActions } from './user-settings.actions';

export function reducer(state: UserSettingsState = userSettingsState, action: IAction): UserSettingsState {
  switch (action.type) {
    case UserSettingsActions.UPLOAD_AVATAR:
      return {...state, isUploadingAvatar: true};
    case UserSettingsActions.UPLOAD_AVATAR_OK:
      return {...state, isUploadingAvatar: false};
    case UserSettingsActions.UPLOAD_AVATAR_FAIL:
      return {...state, isUploadingAvatar: false};
    default:
      return state;
  }
}
