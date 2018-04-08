import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddArticleComponent} from './add-article.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AddArticleEffects} from './add-article.effetcs';
import {reducer} from './add-article.reducer';
import {AddArticleActions} from './add-article.actions';
import {ArticlesService} from '../articles/articles.service';
import {RouterModule, Routes} from '@angular/router';
import {AddArticleFormComponent} from './add-article-form/add-article-form.component';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: AddArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('addArticle', reducer),
    EffectsModule.forFeature([AddArticleEffects])
  ],
  declarations: [
    AddArticleComponent,
    AddArticleFormComponent
  ],
  providers: [
    AddArticleActions,
    AddArticleEffects,
    ArticlesService
  ]
})
export class AddArticleModule {
}
