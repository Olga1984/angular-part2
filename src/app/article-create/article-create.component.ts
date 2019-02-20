import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {

  fullArticle: string;
  submitted = false;
  success = false;

  title: FormControl = new FormControl('', [Validators.required]);
  description: FormControl = new FormControl('', [Validators.required]);
  content: FormControl = new FormControl('', [Validators.required]);
  image: FormControl = new FormControl('', [Validators.required]);
  date: FormControl = new FormControl('', [Validators.required]);
  url: FormControl = new FormControl('', [Validators.required]);

  articleForm: FormGroup = new FormGroup({
    title: this.title,
    description: this.description,
    content: this.content,
    image: this.image,
    date: this.date,
    url: this.url
  });

   constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    this.submitted = true;
    if (this.articleForm.invalid) {
      return;
    }
    this.success = true;
  }

  buildForm() {
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
     this.buildForm();
     this.title.setValue('My awesome article');
     this.description.setValue('My awesome article');
     this.content.setValue('My awesome article');
     this.image.setValue('My awesome article');
     this.date.setValue('My awesome article');

     this.articleForm.valueChanges.subscribe((data) => {
      this.fullArticle = `${data.title}${data.description}${data.content}${data.image}${data.date}${data.url}`;
      console.log(this.fullArticle, 'this.fullArticle');
    });
  }
}
