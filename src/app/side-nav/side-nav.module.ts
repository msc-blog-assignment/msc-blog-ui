import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideNavComponent} from './side-nav.component';
import {MatButtonModule, MatChipsModule, MatIconModule, MatListModule, MatOptionModule} from '@angular/material';
import {SideNavActions} from './side-nav.actions';
import {MyArticlesComponent} from './my-articles/my-articles.component';
import {RouterModule} from '@angular/router';
import { HomeButtonComponent } from './home-button/home-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  declarations: [SideNavComponent, MyArticlesComponent, HomeButtonComponent],
  exports: [SideNavComponent],
  providers: [SideNavActions]
})
export class SideNavModule {
}
