import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { catchError } from 'rxjs/operators';
import { News} from "./news";
//import { HttpErrorHandler, HandleError } from '../http-rror-handler.service'

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
  addArticle(article: News): Observable<News>{
    return this.http
      .post<News>("api/news", article)
  }
  deleteNews(id: number): Observable<{}>{
    const url = `api/news/${id}`;
    return this.http
      .delete(url)
  }
  updateArticle(article: News): Observable<News> {
    return this.http
      .put<News>(`api/news/${article._id}`, article)
  }
}
