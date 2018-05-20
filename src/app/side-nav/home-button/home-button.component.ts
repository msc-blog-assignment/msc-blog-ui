import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../root.reducer';
import {SideNavActions} from '../side-nav.actions';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.css']
})
export class HomeButtonComponent {

  constructor(private store: Store<AppState>, private actions: SideNavActions) {
  }

  hideSideNav() {
    this.store.dispatch(this.actions.hide());
  }
}
