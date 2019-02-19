import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {
  articleForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', Validators.required],
      date: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.articleForm.invalid){
      return;
    }
    this.success = true;
  }
  ngOnInit() {

  }
}
