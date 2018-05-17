import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './user-settings.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserSettingsEffects } from './user-settings.effects';
import { UserSettingsActions } from './user-settings.actions';

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
    StoreModule.forFeature('userSettings', reducer),
    EffectsModule.forFeature([UserSettingsEffects])
  ],
  declarations: [
    UserSettingsComponent
  ],
  providers: [
    UserSettingsActions,
    UserSettingsEffects
  ]
})
export class UserSettingsModule {}
