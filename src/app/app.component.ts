import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './root.reducer';
import {Observable} from 'rxjs/Observable';
import {SideNavActions} from './side-nav/side-nav.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSideNav$: Observable<boolean>;

  constructor(private store: Store<AppState>, private sideNavActions: SideNavActions) {
    this.showSideNav$ = store.select('sideNav', 'show');
  }

  hideSideNav() {
    this.store.dispatch(this.sideNavActions.hide());
  }
}
