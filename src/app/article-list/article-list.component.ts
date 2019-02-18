import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { WorldNewsApiService } from '../world-news-api.service';
import { News, myArticles } from '../news';
import { MyNewsApiService } from '../my-news-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {
  @Output() name: EventEmitter<any> = new EventEmitter();
  @Output() isMynewsavailable: EventEmitter<any> = new EventEmitter();

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
  myArticles: News[] = myArticles.slice(0, this.articlesCount); //and see onGetMyNews
  sourceChanel: string;
  newsapifilerrender: boolean = false;
  myapifilerrender: boolean = false;

  constructor(private apiService: WorldNewsApiService, private myNewsApi: MyNewsApiService, private router: Router) {}

  ngOnInit() {
    if (!this.isMynews) {
    this.onGetWorldNews(this.chanels[0]);
    }
  }
  reRoute(url) {
    this.router.navigate([url])
  }
  selectAttribute(data: string): void {
    this.name.emit(data);
  }
  isMyNewsAvailable(data: boolean): void {
    this.isMynewsavailable.emit(data);
  }
  onGetWorldNews(chanel: string) {
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
      this.selectAttribute(chanel);
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
    this.isMyNewsAvailable(this.isMynews);
    if(this.isMynews) {
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
