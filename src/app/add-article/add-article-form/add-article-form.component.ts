import {Component, Input} from '@angular/core';
import {AddArticleActions} from '../add-article.actions';
import {Store} from '@ngrx/store';
import {ModuleState} from '../module.state';
import {AddArticleForm} from '../add-article.state';

@Component({
  selector: 'app-add-article-form',
  templateUrl: './add-article-form.component.html',
  styleUrls: ['./add-article-form.component.css']
})
export class AddArticleFormComponent {

  @Input() addArticleForm: AddArticleForm;

  constructor(private store: Store<ModuleState>, private actions: AddArticleActions) {
  }

  updateName(name: string) {
    this.store.dispatch(this.actions.updateName(name));
  }

  updateContent(content: string) {
    this.store.dispatch(this.actions.updateContent(content));
  }

  addArticle() {
    this.store.dispatch(this.actions.add());
  }
}
