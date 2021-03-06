import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyArticlesComponent} from './my-articles.component';
import {MyArticlesEffects} from './my-articles.effects';
import {reducer} from './my-articles.reducer';
import {EffectsModule} from '@ngrx/effects';
import {MyArticlesActions} from './my-articles.actions';
import {ArticlesService} from '../articles/articles.service';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {MyArticlesListComponent} from './my-articles-list/my-articles-list.component';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {ArticleCardComponent} from './article-card/article-card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CoreModule} from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: MyArticlesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('myArticles', reducer),
    EffectsModule.forFeature([MyArticlesEffects])
  ],
  declarations: [
    MyArticlesComponent,
    MyArticlesListComponent,
    ArticleCardComponent
  ],
  providers: [
    MyArticlesActions,
    MyArticlesEffects,
    ArticlesService
  ]
})
export class MyArticlesModule {
}
