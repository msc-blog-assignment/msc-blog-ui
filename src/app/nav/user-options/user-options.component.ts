import { Component } from '@angular/core';
import { NavActions } from '../nav.actions';
import { AppState } from '../../root.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent {

  constructor(private store: Store<AppState>, private actions: NavActions) { }

  logout() {
    this.store.dispatch(this.actions.logout());
  }

}
