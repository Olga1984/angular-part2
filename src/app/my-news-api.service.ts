import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News} from "./news";

@Injectable({
  providedIn: 'root'
})
export class MyNewsApiService {
  constructor(private http: HttpClient) {
  }
  getNews(): Observable<News[]> {
    return this.http
      .get<News[]>("api/news")
  }
  getArticle(id: any): Observable<News[]> {
    return this.http
      .get<News[]>(`api/news/${id}`)
  }
  addArticle(article: News): Observable<News>{
    return this.http
      .post<News>("api/news", article)
  }
  deleteNews(id: any): Observable<{}>{
    const url = `api/news/${id}`;
    return this.http
      .delete(url)
  }
  updateArticle(article: News): Observable<News> {
    return this.http
      .put<News>(`api/news/${article._id}`, article)
  }
}
