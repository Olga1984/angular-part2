import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleContainerComponent } from './article-container/article-container.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleFormCreateEditComponent } from './article-form-create-edit/article-form-create-edit.component';
import { NewsfilterPipe } from './components/newsfilter.pipe';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ArticleListComponent,
    ArticleContainerComponent,
    ArticleEditComponent,
    ArticleFormCreateEditComponent,
    NewsfilterPipe,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
