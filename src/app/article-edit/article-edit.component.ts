import {Component, Input, OnInit} from '@angular/core';
import {News, myArticles } from '../news';
import { ActivatedRoute ,Params} from '@angular/router';
import { MyNewsApiService } from '../my-news-api.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {
  articleId: object;
  constructor(private route: ActivatedRoute, private data: MyNewsApiService) {
    this.route.params.subscribe((params: Params)=>{
      this.articleId = params['id'];
    })
  }


  ngOnInit() {
  this.data.getArticle(this.articleId).subscribe(data => this.articleId = data)
  }
  delete(article: News): void {
    console.log('delete');
  }

  update(index) {
    console.log('update');
  }

}
