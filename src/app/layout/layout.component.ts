import {Component, OnInit, OnChanges} from '@angular/core';
import {MainTitleValueService} from '../main-title-value.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnChanges {
  public mainTitle: string;
  public isMyNews: boolean;
  public isCreatePage: boolean;

  constructor(private mainTitleService: MainTitleValueService) { }

  ngOnInit() {
    this.mainTitleService.updatedTitleValue.subscribe((newsApiTitle: string) => {
        this.mainTitle = newsApiTitle;
    });
    this.mainTitleService.isMyNewsAvailable.subscribe((isMyNews: boolean) => {
      this.isMyNews = isMyNews;
    });
    this.mainTitleService.isCreatePage.subscribe((isCreatePage: boolean) => {
      this.isCreatePage = isCreatePage;
    });
  }
  ngOnChanges() {
  }
}
