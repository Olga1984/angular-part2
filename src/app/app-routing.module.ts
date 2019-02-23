import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent} from './article-edit/article-edit.component';
import { ArticleFormCreateEditComponent } from './article-form-create-edit/article-form-create-edit.component';

const routes: Routes = [
  {path: 'news', component: ArticleListComponent},
  {path: 'news/:id', component: ArticleEditComponent},
  {path: 'news/edit/:id', component: ArticleFormCreateEditComponent},
  {path: 'create', component: ArticleFormCreateEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
