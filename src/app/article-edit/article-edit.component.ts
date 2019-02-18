import {Component, OnInit} from '@angular/core';
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
  delete(id:string){
    console.log('delete');
  }

  update(id:string) {
    console.log('update');
  }

}
