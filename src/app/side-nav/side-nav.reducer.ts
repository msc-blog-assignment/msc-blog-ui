import {sideNavState, SideNavState} from './side-nav.state';
import {SideNavActions} from './side-nav.actions';

export function reducer(state: SideNavState = sideNavState, action): SideNavState {
  switch (action.type) {
    case SideNavActions.SHOW:
      return {...state, show: true};
    case SideNavActions.HIDE:
      return {...state, show: false};
    default:
      return state;
  }
}
