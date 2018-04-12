import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {routes} from './routes';
import {NavModule} from './nav/nav.module';
import {IsLoggedInGuard} from './router/is-logged-in.guard';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {MatSidenavModule} from '@angular/material';
import {localStorageSync} from 'ngrx-store-localstorage';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {AppState, getRootReducer} from './root.reducer';
import {storeLogger} from 'ngrx-store-logger';
import {EffectsModule} from '@ngrx/effects';
import {NavEpics} from './nav/nav.epics';
import {UserEpics} from './user/user.epics';
import {LandingModule} from './landing/landing.module';
import {SideNavModule} from './side-nav/side-nav.module';

export function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger()(reducer);
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['user'], rehydrate: true})(reducer);
}

export const metaReducers = [logger, localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule.withServerTransition({appId: 'blog'}),
    BrowserAnimationsModule,
    BrowserTransferStateModule,
    StoreModule.forRoot(getRootReducer(), {metaReducers}),
    EffectsModule.forRoot([NavEpics, UserEpics]),
    MatSidenavModule,
    CoreModule,
    SharedModule,

    // Feature Modules
    NavModule,
    LandingModule,
    SideNavModule
  ],
  exports: [
    CoreModule
  ],
  providers: [
    IsLoggedInGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
