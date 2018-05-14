import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../root.reducer';
import { Observable } from 'rxjs/Observable';
import { SideNavActions } from '../side-nav.actions';
import { User } from '../../user/user.state';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent {

  user$: Observable<User>;

  constructor(private store: Store<AppState>, private actions: SideNavActions) {
    this.user$ = store.select('user', 'user');
  }

  hideSideNav() {
    this.store.dispatch(this.actions.hide());
  }

}
