import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyArticlesComponent } from './my-articles.component';
import { MyArticlesEffects } from './my-articles.effects';
import { reducer } from './my-articles.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MyArticlesActions } from './my-articles.actions';
import { ArticlesService } from '../articles/articles.service';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  {
    path: '',
    component: MyArticlesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('myArticles', reducer),
    EffectsModule.forFeature([MyArticlesEffects])
  ],
  declarations: [
    MyArticlesComponent
  ],
  providers: [
    MyArticlesActions,
    MyArticlesEffects,
    ArticlesService
  ]
})
export class MyArticlesModule {}
