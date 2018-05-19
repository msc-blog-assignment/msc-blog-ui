import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './landing.component';
import {SignupButtonComponent} from './signup-button/signup-button.component';
import {SignupModalComponent} from './signup-modal/signup-modal.component';
import {LandingActions} from './landing.actions';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {LandingEffects} from './landing.effects';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    LandingComponent,
    SignupButtonComponent,
    SignupModalComponent
  ],
  providers: [
    LandingActions,
    LandingEffects
  ],
  entryComponents: [
    SignupModalComponent
  ]
})
export class LandingModule {
}
