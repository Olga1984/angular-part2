import { Component, OnInit } from '@angular/core';
import { News} from '../news';
import { MyNewsApiService} from '../my-news-api.service';


@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss'],
  providers: [MyNewsApiService]
})
export class ArticleCreateComponent implements OnInit {
  news: News[];
  editArticle: any;
  constructor(private newsService: MyNewsApiService) { }

  ngOnInit() {
    this.getNews();
  }
  getNews() :void {
    this.newsService.getNews().subscribe(news => (this.news = news));
  }
  add(title:string): void {
    this.editArticle = undefined;
    title = title.trim();
    if(!title){
      return;
    }
    const newArticle: News = {title} as News;
    this.newsService.addArticle(newArticle).subscribe(article => this.news.push(article));
  }
  // delete(article: News): void {
  //   this.news = this.news.filter(h=>h !== article);
  //   this.newsService.deleteNews(article._id).subscribe();
  // }
  edit(article){
    this.editArticle = article;
  }
  // update(){
  //   if(this.editArticle) {
  //     this.newsService.updateArticle(this.editArticle).subscribe(article => {
  //       const ix = article ? this.news.findIndex(h=>h._id === article._id) : -1;
  //       if(ix > -1){
  //         this.news[ix] = article;
  //       }
  //     });
  //     this.editArticle = undefined;
  //   }
  // }

}
