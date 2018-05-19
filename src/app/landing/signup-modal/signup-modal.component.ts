import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../root.reducer';
import {LandingActions} from '../landing.actions';
import {Observable} from 'rxjs/Observable';
import {LandingState} from '../landing.state';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent {

  landing$: Observable<LandingState>;

  constructor(private store: Store<AppState>, private actions: LandingActions) {
    this.landing$ = this.store.select('landing');
  }

  closeModal() {
    this.store.dispatch(this.actions.hideSignupModal());
  }

  signup() {
    this.store.dispatch(this.actions.signup());
  }

  updateUsername(username) {
    this.store.dispatch(this.actions.updateSignupUsername(username));
  }

  updateEmail(email) {
    this.store.dispatch(this.actions.updateSignupEmail(email));
  }

  updatePassword(password) {
    this.store.dispatch(this.actions.updateSignupPassword(password));
  }

  updatePasswordRetype(password) {
    this.store.dispatch(this.actions.updateSignupPasswordRetype(password));
  }

}
