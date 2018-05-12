import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModuleState} from '../module.state';
import {ViewArticleActions} from '../view-article.actions';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {

  @Input() comment: string;

  constructor(private store: Store<ModuleState>, private actions: ViewArticleActions) {
  }

  updateComment(comment: string) {
    this.store.dispatch(this.actions.updateComment(comment));
  }

  addComment() {
    this.store.dispatch(this.actions.addComment());
  }

}
