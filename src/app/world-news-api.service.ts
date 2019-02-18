import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldNewsApiService {

  constructor(private http: HttpClient) {
  }

  getWorldNews(channel) {
    return this.http.get<any>(`https://newsapi.org/v1/articles?source=${channel}&apiKey=554109c975e14549b32eb8b2f41fe8f8`)
      .pipe(
        map((response: any) => {
          console.log('response', response);
          // const data = response.json();
          return response.articles;
        })
      );
  }

  getMyArticles(articles: any[]) {
    console.log(articles);
    return this.http.get<any>('news');
  }

  getMyArticle(id: any[]) {
    console.log(id);
    return this.http.get<any>('news/:id');
  }

  updateMyArticle(id: any[]) {
    console.log(id);
    return this.http.put<any>('news/edit/:id', id);
  }

  deleteMyArticle(id: any) {
    console.log(id);
    return this.http.delete<any>('news/delete/:id', id);
  }

  addMyArticle(article: any) {
    console.log(article);
    return this.http.post<any>('news/create', article);
  }
}
