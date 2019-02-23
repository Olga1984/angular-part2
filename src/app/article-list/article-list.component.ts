import {Component, OnInit } from '@angular/core';
import { WorldNewsApiService } from '../world-news-api.service';
import { News, myArticles } from '../news';
import { MyNewsApiService } from '../my-news-api.service';
import { Router } from '@angular/router';
import { EventEmitterService } from '../event-emitter.service';

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
  extended = false;

  articlesCount = 4;

  myArticles: News[] = myArticles.slice(0, this.articlesCount); // and see onGetMyNews

  sourceChanel: string;
  searchWord: string;

  constructor(private apiService: WorldNewsApiService, private myNewsApi: MyNewsApiService, private mainTitleService: EventEmitterService, private router: Router) {}

  ngOnInit() {
    if (!this.isMynews) {
    this.onGetWorldNews(this.chanels[0]);
    }
  }
  searchFilter(word: string) {
    this.searchWord = word;
  }
  reRouteToCreatePage(url) {
    this.mainTitleService.updatedTitleValue.emit('create');
    this.router.navigate([url]);
  }

  onGetWorldNews(chanel: string) {
    this.mainTitleService.updatedTitleValue.emit(chanel);

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
    this.mainTitleService.updatedTitleValue.emit('my chanel');
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
    if (this.isMynews) {
      this.onGetMyNews();
      console.log('This is my news');
    }else {
      this.mainTitleService.updatedTitleValue.emit(this.sourceChanel);
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
