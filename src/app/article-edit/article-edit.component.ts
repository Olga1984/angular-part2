import {Component, Input, OnInit} from '@angular/core';
import {News, myArticles } from '../news';
import { ActivatedRoute ,Params} from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  @Input() index: number = 0;
  articles: News[] = myArticles.filter(i=>i !== this.index);
  id: string;
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    //console.log(this.isnews);
    this.route.params.subscribe((params: Params)=>{
      this.id = params['id'];
    })

  }
  delete(article: News): void {
    console.log('delete');
    this.articles = this.articles.filter(h=>h !== article);
    // this.newsService.deleteNews(article._id).subscribe();
  }

  update(index) {
    console.log(index);
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
