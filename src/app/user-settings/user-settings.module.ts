import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserSettingsComponent} from './user-settings.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {reducer} from './user-settings.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserSettingsEffects} from './user-settings.effects';
import {UserSettingsActions} from './user-settings.actions';
import {AvatarCardComponent} from './avatar-card/avatar-card.component';
import {MatCardModule} from '@angular/material';
import {UserSettingsService} from './user-settings.service';

const routes: Routes = [
  {
    path: '',
    component: UserSettingsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    StoreModule.forFeature('userSettings', reducer),
    EffectsModule.forFeature([UserSettingsEffects])
  ],
  declarations: [
    UserSettingsComponent,
    AvatarCardComponent
  ],
  providers: [
    UserSettingsActions,
    UserSettingsEffects,
    UserSettingsService
  ]
})
export class UserSettingsModule {
}
