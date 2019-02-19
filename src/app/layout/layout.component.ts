import {Component, OnInit, OnChanges} from '@angular/core';
import {MaintitlevalueService} from '../maintitlevalue.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnChanges {
  public mainTitle: string;
  public isMyNews: boolean;

  constructor(private mainTitleService: MaintitlevalueService) { }

  ngOnInit() {
    this.mainTitleService.updatedTitleValue.subscribe((newsApiTitle: string) => {
        this.mainTitle = newsApiTitle;
    });
    this.mainTitleService.isMyNewsAvailable.subscribe((isMyNews: boolean) => {
      this.isMyNews = isMyNews;
      console.log(this.isMyNews, 'this.isMyNews');
    });
  }
  ngOnChanges() {
  }
}
