import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticlesComponent } from './list-articles.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './list-articles.reducer';

const routes: Routes = [
  {
    path: '',
    component: ListArticlesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('listArticles', reducer),
  ],
  declarations: [ListArticlesComponent]
})
export class ListArticlesModule {}
