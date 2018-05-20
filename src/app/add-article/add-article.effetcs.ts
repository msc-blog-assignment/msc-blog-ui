import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {ArticlesService} from '../articles/articles.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError} from 'rxjs/operators/catchError';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {withLatestFrom} from 'rxjs/operators/withLatestFrom';
import {select, Store} from '@ngrx/store';
import {AddArticleActions} from './add-article.actions';
import {ModuleState} from './module.state';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AddArticleEffects {

  @Effect() addArticle$ = this.actions$.pipe(
    ofType(AddArticleActions.ADD),
    withLatestFrom(this.store$),
    select(([action, storeState]) => storeState),
    mergeMap((store) =>
      this.articlesService.createArticle(store.user.user.userId, store.addArticle.addArticleForm).pipe(
        mergeMap((response) => {
          this.toastr.success('Article added', 'Success');
          return of(this.addArticleActions.addSuccess(response.data.createArticle))
        }),
        catchError(() => {
          this.toastr.error('Creating article failed, please try again', 'Error');
          return of(this.addArticleActions.addFail())
        })
      )
    ));

  constructor(private actions$: Actions,
              private store$: Store<ModuleState>,
              private toastr: ToastrService,
              private addArticleActions: AddArticleActions,
              private articlesService: ArticlesService) {
  }

}
