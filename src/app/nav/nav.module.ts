import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './nav.component';
import {NavActions} from './nav.actions';
import {NavLoginComponent} from './nav-login/nav-login.component';
import {LoginModalComponent} from './nav-login/login-modal/login-modal.component';
import {NavEffects} from './nav.effects';
import {FormsModule} from '@angular/forms';
import {UserModule} from '../user/user.module';
import {CoreModule} from '../core/core.module';
import {
  MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { SideNavComponent } from './side-nav/side-nav.component';
import { UserOptionsComponent } from './user-options/user-options.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    UserModule
  ],
  declarations: [
    NavComponent,
    NavLoginComponent,
    LoginModalComponent,
    SideNavComponent,
    UserOptionsComponent
  ],
  exports: [
    NavComponent
  ],
  providers: [
    NavActions,
    NavEffects
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class NavModule {
}
