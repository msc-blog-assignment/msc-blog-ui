import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ModuleState } from '../add-article/module.state';
import { MyArticlesActions } from './my-articles.actions';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css']
})
export class MyArticlesComponent implements OnInit {

  constructor(private store: Store<ModuleState>, private actions: MyArticlesActions) { }

  ngOnInit() {
    this.store.dispatch(this.actions.fetch());
  }

}
