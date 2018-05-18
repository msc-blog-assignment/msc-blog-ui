import {Component} from '@angular/core';
import {NavActions} from '../nav.actions';
import {AppState} from '../../root.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {User} from '../../user/user.state';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent {

  user: Observable<User>;
  avatarFailedToLoad: Observable<boolean>;

  constructor(private store: Store<AppState>, private actions: NavActions) {
    this.user = store.select('user', 'user');
    this.avatarFailedToLoad = store.select('nav', 'avatarFailedToLoad');
  }

  logout() {
    this.store.dispatch(this.actions.logout());
  }

  imageErrorDetected() {
    this.store.dispatch(this.actions.userAvatarFailedToLoad());
  }

}
