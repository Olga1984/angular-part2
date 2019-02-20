import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class MyNewsApiService {
  constructor(private http: HttpClient) {
  }
  getNews(): Observable<News[]> {
    return this.http
      .get<News[]>("api/news");
  }
  getArticle(id: any): Observable<News[]> {
    return this.http
      .get<News[]>(`api/news/${id}`);
  }
  addArticle(article: News): Observable<News>{
    return this.http
      .post<News>("api/news", article);
  }
  deleteArticle(id: any): Observable<{}>{
    const url = `api/news/${id}`;
    return this.http
      .delete(url);
  }
  updateArticle(id: any, article: News): Observable<News> {
    return this.http
      .put<News>(`api/news/${id}`, article)
  }
  // getMyArticles(articles: any[]) {
  //   console.log(articles);
  //   return this.http.get<any>('news');
  // }
  //
  // getMyArticle(id: any[]) {
  //   console.log(id);
  //   return this.http.get<any>('news/:id');
  // }
  //
  // updateMyArticle(id: any[]) {
  //   console.log(id);
  //   return this.http.put<any>('news/edit/:id', id);
  // }
  //
  // deleteMyArticle(id: any) {
  //   console.log(id);
  //   return this.http.delete<any>('news/delete/:id', id);
  // }
  //
  // addMyArticle(article: any) {
  //   console.log(article);
  //   return this.http.post<any>('news/create', article);
  // }
}
