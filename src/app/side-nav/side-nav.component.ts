import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../root.reducer';
import {SideNavActions} from './side-nav.actions';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private store: Store<AppState>, private actions: SideNavActions) {
  }

  ngOnInit() {
  }

  hideSideNav() {
    this.store.dispatch(this.actions.hide());
  }

}
