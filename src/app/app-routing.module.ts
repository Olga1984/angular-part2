import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleEditComponent} from './article-edit/article-edit.component';
import {ArticleComponent} from './article/article.component';
import {ArticleCreateComponent} from './article-create/article-create.component';

const routes: Routes = [
 // {path: 'news', component: ArticleListComponent},
  {path: 'news/:id', component: ArticleEditComponent},
  {path: 'news/edit/:id', component: ArticleEditComponent},
  {path: 'news/create', component: ArticleCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
