import {Component} from '@angular/core';
import {LandingActions} from '../landing.actions';
import {AppState} from '../../root.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.css']
})
export class SignupButtonComponent {

  constructor(private store: Store<AppState>, private actions: LandingActions) {
  }

  showSignupModal() {
    this.store.dispatch(this.actions.showSignupModal());
  }
}
