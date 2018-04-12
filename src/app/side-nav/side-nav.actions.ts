import {Injectable} from '@angular/core';

@Injectable()
export class SideNavActions {

  static SHOW = 'side-nav/SHOW';
  static HIDE = 'side-nav/HIDE';

  show = () => ({type: SideNavActions.SHOW});

  hide = () => ({type: SideNavActions.HIDE});
}
