import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ModuleState} from './module.state';
import {Observable} from 'rxjs/Observable';
import {AddArticleForm} from './add-article.state';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  addArticleForm$: Observable<AddArticleForm>;

  constructor(private store: Store<ModuleState>) {
    this.addArticleForm$ = store.select('addArticle', 'addArticleForm');
  }

  ngOnInit() {
  }

}
