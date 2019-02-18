import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { FilterComponent } from './filter/filter.component';
import { MyNewsCheckboxComponent } from './my-news-checkbox/my-news-checkbox.component';
import { AddArticleButtonComponent } from './add-article-button/add-article-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { NewsfilterPipe } from './newsfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ArticleListComponent,
    ArticleComponent,
    ArticleEditComponent,
    FilterComponent,
    MyNewsCheckboxComponent,
    AddArticleButtonComponent,
    ArticleCreateComponent,
    NewsfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
