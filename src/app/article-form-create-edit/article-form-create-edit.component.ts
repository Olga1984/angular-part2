import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EventEmitterService} from '../event-emitter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-form-create-edit.component.html',
  styleUrls: ['./article-form-create-edit.component.scss']
})
export class ArticleFormCreateEditComponent implements OnInit {
  today: Date;
  pageName: string;

  urlSource: string = 'https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png';
  imageSource: string = '';
  fileSource: string = 'file://news_bigger.png';


  fullArticle: string;
  submitted = false;
  success = false;

  title: FormControl = new FormControl('', [Validators.required]);
  description: FormControl = new FormControl('', []);
  content: FormControl = new FormControl('', [Validators.required]);
  image: FormControl = new FormControl('', []);
  date: FormControl = new FormControl('', []);
  url: FormControl = new FormControl('', []);

  articleForm: FormGroup = new FormGroup({
    title: this.title,
    description: this.description,
    content: this.content,
    image: this.image,
    date: this.date,
    url: this.url
  });

   constructor(private formBuilder: FormBuilder, private eventEmitterService: EventEmitterService, private router: Router) {}

  getCurrentDate() {
    this.today = new Date();
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    } else {
      return null;
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.articleForm.invalid) {
      return;
    }
    this.success = true;
  }
  setImgSource(isUrl: boolean) {
     if(isUrl){
       this.imageSource = this.urlSource;
     }else {
       this.imageSource = this.fileSource;
     }

  }

  reRouteToMainPage(url: string) {
    this.router.navigate([url]);
  }

  buildForm() {
    this.getCurrentDate();
    this.articleForm = this.formBuilder.group({
      title: this.title,
      description: this.description,
      content: this.content,
      image: this.image,
      date: this.date,
      url: this.url
    });
  }

  ngOnInit() {
    this.eventEmitterService.updatedTitleValue.subscribe((title: string) => {
      this.pageName = title;
    });
    this.buildForm();
    this.title.setValue('My awesome title');
    this.description.setValue('My awesomedescription');
    this.content.setValue('My awesome content');
    this.image.setValue('url');

     this.articleForm.valueChanges.subscribe((data) => {
      this.fullArticle = `${data.title}${data.description}${data.content}${data.image}${data.date}${data.url}`;
      console.log(this.fullArticle, 'this.fullArticle');
    });
  }
}
