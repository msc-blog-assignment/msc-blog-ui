import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListArticlesComponent} from './list-articles.component';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {reducer} from './list-articles.reducer';
import {ListArticlesActions} from './list-articles.actions';
import {ListArticlesEffects} from './list-articles.effects';
import {EffectsModule} from '@ngrx/effects';
import {ArticlesService} from '../articles/articles.service';
import {ArticleCardComponent} from './article-card/article-card.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CoreModule} from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: ListArticlesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('listArticles', reducer),
    EffectsModule.forFeature([ListArticlesEffects])
  ],
  declarations: [ListArticlesComponent, ArticleCardComponent, ArticleListComponent],
  providers: [
    ListArticlesActions,
    ListArticlesEffects,
    ArticlesService
  ]
})
export class ListArticlesModule {
}
