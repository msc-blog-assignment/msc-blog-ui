import {Component} from '@angular/core';
import {UserSettingsActions} from '../user-settings.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../root.reducer';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.css']
})
export class AvatarCardComponent {

  constructor(private store: Store<AppState>, private actions: UserSettingsActions) {
  }

  upload(file) {
    console.log(file);
    this.store.dispatch(this.actions.uploadAvatar(file));
  }

}
