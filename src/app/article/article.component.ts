import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {News} from '../news';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() articles: News[];
  @Input() isnews: boolean;

  constructor() { }

  ngOnInit() {
    // console.log(this.isnews);
  }

  delete(article: News): void {
    console.log('delete');
    this.articles = this.articles.filter(h => h !== article);
    // this.newsService.deleteNews(article._id).subscribe();
  }

  update(index) {
   index = index - 1;
    console.log('update');
    const ix = this.articles ? this.articles.findIndex(h=>h._id === this.articles[index]._id) : -1;
    if (ix > -1) {
      this.articles[ix] = {
        _id: '1',
        author: 'News',
        title: 'News',
        description: 'News',
        url: 'News',
        urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png',
        publishedAt: '2019-02-12T02:06:04Z'
      };
    }
  }
}
