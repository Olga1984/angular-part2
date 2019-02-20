import {Component, OnInit } from '@angular/core';
import { WorldNewsApiService } from '../world-news-api.service';
import { News, myArticles } from '../news';
import { MyNewsApiService } from '../my-news-api.service';
import { Router } from '@angular/router';
import { MainTitleValueService } from '../main-title-value.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {

  chanels: string[] = [
    'cnn',
    'bbc-news',
    'daily-mail',
    'business-insider',
    'mtv-news',
    'hacker-news',
    'the-guardian-uk',
    'google-news',
    'Bad Request!'];

  articles: News[];
  isMynews = false;
  articlesCount = 4;
  myArticles: News[] = myArticles.slice(0, this.articlesCount); // and see onGetMyNews
  sourceChanel: string;
  newsapifilerrender = false;
  myapifilerrender = false;
  isCreatePage = false;

  constructor(private apiService: WorldNewsApiService, private myNewsApi: MyNewsApiService, private mainTitleService: MainTitleValueService, private router: Router) {}

  ngOnInit() {
    if (!this.isMynews) {
    this.onGetWorldNews(this.chanels[0]);
    }
  }
  reRouteToCreatePage(url) {
    this.isCreatePage = true;
    this.mainTitleService.isCreatePage.emit(this.isCreatePage);
    this.router.navigate([url]);
  }

  onGetWorldNews(chanel: string) {
    this.mainTitleService.updatedTitleValue.emit(chanel);

    this.newsapifilerrender = true;
    this.myapifilerrender = false;
    if (this.sourceChanel === chanel) {
      this.apiService.getWorldNews(chanel).subscribe(
        (articles: News[]) => {
          this.articles = articles.slice(0, this.articlesCount);
        },
        (error) => console.log(error)
      );
    } else {
      this.sourceChanel = chanel;

      this.apiService.getWorldNews(chanel).subscribe(
        (articles: News[]) => {
          this.articlesCount = 4;
          this.articles = articles.slice(0, this.articlesCount);
        },
        (error) => console.log(error)
      );
    }
  }
  onGetMyNews() {
    // this.myNewsApi.getNews().subscribe(
    //   (articles: News[]) => {
    //     this.articles = articles.slice(0, this.articlesCount);
    //   },
    //   (error) => console.log(error)
    // );
  this.myArticles = myArticles.slice(0, this.articlesCount);
}

  onFilterChange(eve: any) {
    this.isMynews = !this.isMynews;
    this.mainTitleService.isMyNewsAvailable.emit(this.isMynews);
    if (this.isMynews) {
      this.onGetMyNews();
      console.log('This is my news');
    }
  }

  addArticles() {
    this.articlesCount += 4;
    if (!this.isMynews) {
      this.onGetWorldNews(this.sourceChanel);
    } else {
      this.onGetMyNews();
    }
  }
}
