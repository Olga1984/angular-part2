import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { MyNewsApiService } from '../my-news-api.service';
import {EventEmitterService} from '../event-emitter.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  articleId: any;
  article: object = {
    _id: '1',
    author: 'BBC News',
    title: 'Aeal reached to avert new US shutdown',
    description: 'The tentative agreement on border security breaks a longstanding stalemate in Congress.',
    content: 'The tentative agreement on border security breaks a longstanding stalemate in Congress.',
    url: 'http://www.bbc.co.uk/news/world-us-canada-47207411',
    urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png',
    publishedAt: '2019-02-12T02:06:04Z'
  };
  extended: boolean = true;
  constructor(private route: ActivatedRoute, private data: MyNewsApiService, private mainTitleService: EventEmitterService, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.articleId = params.id;
    });
  }

  ngOnInit() {
  // this.data.getArticle(this.article-container).subscribe(data => this.articleId = data);
  }
  reRoute(url: string, IsEditPage: boolean) {
    if(IsEditPage){
      this.mainTitleService.updatedTitleValue.emit('edit');
    }
    this.router.navigate([url]);
  }
  delete(id: string) {
    console.log('delete');
   // this.data.deleteArticle(id).subscribe(data => id = data);
  }

  // update(id: string, editedArticle: News) {
  //   console.log('update');
  //  // this.data.updateArticle(id, editedArticle).subscribe(data => id = data);
  // }

}
