import {LandingComponent} from './landing/landing.component';
import { IsLoggedInGuard } from './router/is-logged-in.guard';

export const routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'articles',
    loadChildren: 'app/list-articles/list-articles.module#ListArticlesModule',
    canActivate: [IsLoggedInGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
