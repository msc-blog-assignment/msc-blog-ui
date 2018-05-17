import {of} from 'rxjs/observable/of';
import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError} from 'rxjs/operators/catchError';
import {mergeMap} from 'rxjs/operators/mergeMap';
import {map} from 'rxjs/operators/map';
import {ArticlesService} from '../articles/articles.service';
import {ViewArticleActions} from './view-article.actions';
import {IAction} from '../root.action';
import {withLatestFrom} from 'rxjs/operators/withLatestFrom';
import {select, Store} from '@ngrx/store';
import {ModuleState} from './module.state';
import {CommentsService} from './comments.service';

@Injectable()
export class ViewArticleEffects {

  @Effect() fetchArticle$ = this.actions$.pipe(
    ofType<IAction>(ViewArticleActions.FETCH),
    mergeMap(({payload}) =>
      this.articlesService.getArticle(payload).pipe(
        map((article) => this.actions.fetchOk(article.data.article)),
        catchError((err) => of(this.actions.fetchFail(err)))
      )
    ));

  @Effect() comment$ = this.actions$.pipe(
    ofType<IAction>(ViewArticleActions.ADD_COMMENT),
    withLatestFrom(this.store$),
    select(([action, storeState]) => ({
      userId: storeState.user.user.userId,
      articleId: storeState.viewArticle.article.id,
      comment: storeState.viewArticle.addCommentForm.comment
    })),
    mergeMap(({userId, articleId, comment}) =>
      this.commentService.comment(userId, articleId, comment).pipe(
        map((article) => this.actions.addCommentOk()),
        catchError((err) => of(this.actions.fetchFail(err)))
      )
    ));

  constructor(private store$: Store<ModuleState>,
              private actions$: Actions,
              private actions: ViewArticleActions,
              private articlesService: ArticlesService,
              private commentService: CommentsService) {
  }

}
