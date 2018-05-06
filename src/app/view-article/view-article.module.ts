import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ViewArticleComponent} from './view-article.component';
import {ArticleRendererComponent} from './article-renderer/article-renderer.component';
import {ViewArticleActions} from './view-article.actions';
import {StoreModule} from '@ngrx/store';
import {reducer} from './view-article.reducer';
import {ViewArticleEffects} from './view-article.effects';
import {EffectsModule} from '@ngrx/effects';
import {MatCardModule} from '@angular/material';
import {MarkdownModule} from 'ngx-markdown';

const routes: Routes = [
  {
    path: '',
    component: ViewArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild(routes),
    StoreModule.forFeature('viewArticle', reducer),
    EffectsModule.forFeature([ViewArticleEffects])
  ],
  declarations: [
    ViewArticleComponent,
    ArticleRendererComponent
  ],
  providers: [
    ViewArticleActions,
    ViewArticleEffects
  ]
})
export class ViewArticleModule {
}
