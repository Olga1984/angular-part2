import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { WorldNewsApiService } from '../world-news-api.service';
import { News, myArticles } from '../news';

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
  myArticles: News[] = myArticles.slice(0, this.articlesCount);
  sourceChanel: string;
  // newsapifilerrender: boolean = false;
  // myapifilerrender: boolean = false;

  constructor(private apiService: WorldNewsApiService) {}

  ngOnInit() {
    if (!this.isMynews) {
    this.onGetWorldNews(this.chanels[0]);
    }
  }

  selectAttribute(data: string): void {
    this.name.emit(data);
  }
  isMyNewsAvailable(data: boolean): void {
    this.isMynewsavailable.emit(data);
  }
  onGetWorldNews(chanel: string) {
    // this.newsapifilerrender = true;
    // this.myapifilerrender = false;
    if (this.sourceChanel === chanel) {
      this.apiService.getWorldNews(chanel).subscribe(
        (articles: any) => {
          this.articles = articles.slice(0, this.articlesCount);
        },
        (error) => console.log(error)
      );
    } else {
      this.sourceChanel = chanel;
      this.selectAttribute(chanel);
      this.apiService.getWorldNews(chanel).subscribe(
        (articles: any) => {
          this.articlesCount = 4;
          this.articles = articles.slice(0, this.articlesCount);
        },
        (error) => console.log(error)
      );
    }
  }
  onGetMyNews() {
  this.myArticles = myArticles.slice(0, this.articlesCount);
  console.log(this.myArticles);
}

  onFilterChange(eve: any) {
    this.isMynews = !this.isMynews;
    this.isMyNewsAvailable(this.isMynews);
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
